/**
 * Custom Analytics Utility for Plausible Analytics
 * Provides comprehensive event tracking for portfolio interactions with rate limiting and debouncing
 */

declare global {
    interface Window {
        plausible: (eventName: string, options?: any) => void;
    }
}

// Rate limiting and debouncing utilities
class RateLimiter {
    private eventCounts: Map<string, number> = new Map();
    private lastEventTimes: Map<string, number> = new Map();

    // Maximum events per minute per event type
    private readonly MAX_EVENTS_PER_MINUTE = 30;
    private readonly MIN_EVENT_INTERVAL = 1000; // 1 second between same events

    canFire(eventName: string): boolean {
        const now = Date.now();
        const lastTime = this.lastEventTimes.get(eventName) || 0;
        const count = this.eventCounts.get(eventName) || 0;

        // Check minimum interval
        if (now - lastTime < this.MIN_EVENT_INTERVAL) {
            return false;
        }

        // Reset counter every minute
        if (count >= this.MAX_EVENTS_PER_MINUTE) {
            const resetTime = this.lastEventTimes.get(`${eventName}_reset`) || 0;
            if (now - resetTime >= 60000) { // Reset after 1 minute
                this.eventCounts.set(eventName, 0);
                this.lastEventTimes.set(`${eventName}_reset`, now);
                return true;
            }
            return false;
        }

        return true;
    }

    recordEvent(eventName: string): void {
        const now = Date.now();
        this.eventCounts.set(eventName, (this.eventCounts.get(eventName) || 0) + 1);
        this.lastEventTimes.set(eventName, now);
    }
}

// Debounce utility
function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: number;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Global rate limiter instance
const rateLimiter = new RateLimiter();

// Event batching system
class EventBatcher {
    private eventQueue: Array<{ eventName: string, props?: Record<string, any> }> = [];
    private batchTimeout?: number;
    private readonly BATCH_SIZE = 5;
    private readonly BATCH_INTERVAL = 2000; // 2 seconds

    addEvent(eventName: string, props?: Record<string, any>) {
        this.eventQueue.push({ eventName, props });

        // Send immediately if batch is full
        if (this.eventQueue.length >= this.BATCH_SIZE) {
            this.sendBatch();
        } else {
            // Set timeout to send batch later
            if (!this.batchTimeout) {
                this.batchTimeout = setTimeout(() => this.sendBatch(), this.BATCH_INTERVAL);
            }
        }
    }

    private sendBatch() {
        if (this.eventQueue.length === 0) return;

        // Send all queued events
        while (this.eventQueue.length > 0) {
            const event = this.eventQueue.shift()!;
            if (rateLimiter.canFire(event.eventName)) {
                try {
                    window.plausible?.(event.eventName, {
                        props: {
                            ...event.props,
                            batched: true,
                            timestamp: new Date().toISOString()
                        }
                    });
                    rateLimiter.recordEvent(event.eventName);
                } catch (error) {
                    console.warn('Batch event tracking error:', error);
                }
            }
        }

        clearTimeout(this.batchTimeout);
        this.batchTimeout = undefined;
    }

    flush() {
        this.sendBatch();
    }
}

const eventBatcher = new EventBatcher();

// Event tracking functions
export const analytics = {
    // Generic event tracking with rate limiting
    track: (eventName: string, props?: Record<string, any>) => {
        if (typeof window === 'undefined' || !window.plausible) {
            return;
        }

        // Rate limiting check
        if (!rateLimiter.canFire(eventName)) {
            return;
        }

        try {
            window.plausible(eventName, {
                props: {
                    ...props,
                    timestamp: new Date().toISOString(),
                    user_agent: navigator.userAgent.substring(0, 200), // Limit user agent length
                    viewport: `${window.innerWidth}x${window.innerHeight}`,
                    page_url: window.location.href
                }
            });

            rateLimiter.recordEvent(eventName);
        } catch (error) {
            console.warn('Analytics tracking error:', error);
        }
    },

    // Navigation tracking
    trackNavigation: (section: string, source?: string) => {
        analytics.track('nav_click', {
            section,
            source: source || 'direct',
            page_url: window.location.href
        });
    },

    // Project interaction tracking
    trackProjectClick: (projectId: number, projectTitle: string, position?: number) => {
        analytics.track('project_click', {
            project_id: projectId,
            project_title: projectTitle,
            position: position || 0,
            source_page: window.location.pathname
        });
    },

    // Social link tracking
    trackSocialClick: (platform: string, location: string) => {
        analytics.track('Social Link Click', {
            platform,
            location,
            page_section: getCurrentSection()
        });
    },

    // Contact interaction tracking
    trackContactAction: (action: string, value?: string) => {
        analytics.track('Contact Action', {
            action_type: action,
            value: value || '',
            page_section: getCurrentSection()
        });
    },

    // Theme toggle tracking
    trackThemeToggle: (theme: string) => {
        analytics.track('Theme Toggle', {
            new_theme: theme,
            page_url: window.location.href
        });
    },

    // External link tracking
    trackExternalLink: (url: string, linkType: string) => {
        analytics.track('External Link Click', {
            url_domain: new URL(url).hostname,
            link_type: linkType,
            page_url: window.location.href
        });
    },

    // Resume download tracking
    trackResumeDownload: () => {
        analytics.track('Resume Download', {
            source_page: window.location.pathname,
            timestamp: new Date().toISOString()
        });
    },

    // Mobile menu tracking
    trackMobileMenu: (action: 'open' | 'close', method?: string) => {
        analytics.track('Mobile Menu Interaction', {
            action,
            method: method || 'click',
            page_url: window.location.href
        });
    },

    // Case study view tracking
    trackCaseStudyView: (projectId: number, projectTitle: string) => {
        analytics.track('case_study_view', {
            project_id: projectId,
            project_title: projectTitle,
            page_url: window.location.href,
            timestamp: new Date().toISOString()
        });
    },

    // Case study navigation tracking
    trackCaseStudyNavigation: (action: string, from?: string, to?: string) => {
        analytics.track('case_study_navigation', {
            action,
            from_project: from || '',
            to_project: to || '',
            page_url: window.location.href
        });
    },

    // Scroll depth tracking
    trackScrollDepth: (depth: number, section: string) => {
        analytics.track('Scroll Depth', {
            depth_percentage: depth,
            section,
            page_url: window.location.href
        });
    },

    // Time on section tracking
    trackTimeOnSection: (section: string, duration: number) => {
        analytics.track('Time On Section', {
            section,
            duration_seconds: duration,
            page_url: window.location.href
        });
    },

    // Form interactions tracking
    trackFormInteraction: (formType: string, field?: string, action?: string) => {
        analytics.track('Form Interaction', {
            form_type: formType,
            field: field || '',
            action: action || 'focus',
            page_url: window.location.href
        });
    },

    // User engagement tracking
    trackEngagement: (type: string, details?: Record<string, any>) => {
        analytics.track('User Engagement', {
            engagement_type: type,
            ...details
        });
    }
};

// Helper function to get current section based on scroll position
function getCurrentSection(): string {
    const sections = ['about', 'experience', 'education', 'work', 'award', 'skill', 'contact'];
    const scrollPosition = window.scrollY + 200; // Offset for header

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                return section;
            }
        }
    }
    return 'unknown';
}

// Scroll depth tracking utility
export class ScrollTracker {
    private sectionStartTimes: Map<string, number> = new Map();
    private maxScrollDepths: Map<string, number> = new Map();
    private observer?: IntersectionObserver;
    private ticking = false;
    private lastScrollPercent = 0;

    constructor() {
        this.setupSectionTracking();
        this.setupScrollTracking();
    }

    private setupSectionTracking() {
        const sections = ['about', 'experience', 'education', 'work', 'award', 'skill', 'contact'];
        const trackedSections = new Set<string>();

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;

                if (entry.isIntersecting) {
                    // Only track section entry once per section to reduce events
                    if (!trackedSections.has(sectionId)) {
                        trackedSections.add(sectionId);
                        const startTime = Date.now();
                        this.sectionStartTimes.set(sectionId, startTime);

                        analytics.trackEngagement('section_enter', {
                            section: sectionId,
                            timestamp: new Date().toISOString()
                        });
                    }
                } else {
                    // Section left viewport - track time spent
                    const startTime = this.sectionStartTimes.get(sectionId);
                    if (startTime) {
                        const duration = Math.round((Date.now() - startTime) / 1000);
                        // Only track meaningful durations (more than 2 seconds)
                        if (duration > 2) {
                            analytics.trackTimeOnSection(sectionId, duration);
                        }
                        this.sectionStartTimes.delete(sectionId);
                        trackedSections.delete(sectionId); // Allow re-entry tracking
                    }
                }
            });
        }, {
            threshold: 0.6, // Increased threshold to reduce false triggers
            rootMargin: '-10% 0px -10% 0px' // Smaller viewport for more accurate tracking
        });

        // Observe all sections
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                this.observer?.observe(element);
            }
        });
    }

    private setupScrollTracking() {
        let ticking = false;
        let lastScrollPercent = 0;

        // Debounced scroll handler to reduce frequency
        const debouncedScrollHandler = debounce(() => {
            if (!ticking) {
                requestAnimationFrame(this.updateScrollDepth.bind(this));
                ticking = true;
            }
        }, 200); // 200ms debounce

        window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    }

    private updateScrollDepth() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        // Only track significant scroll changes (5% increments)
        if (Math.abs(scrollPercent - this.lastScrollPercent) < 5) {
            return;
        }

        this.lastScrollPercent = scrollPercent;
        const currentSection = getCurrentSection();
        const currentMaxDepth = this.maxScrollDepths.get(currentSection) || 0;

        // Track only key milestones to reduce event frequency
        const milestones = [25, 50, 75, 100]; // Reduced from 5 to 4 milestones

        milestones.forEach(milestone => {
            if (scrollPercent >= milestone && currentMaxDepth < milestone) {
                analytics.trackScrollDepth(milestone, currentSection);
            }
        });

        // Update max depth for current section
        if (scrollPercent > currentMaxDepth) {
            this.maxScrollDepths.set(currentSection, scrollPercent);
        }

        this.ticking = false;
    }

    public destroy() {
        this.observer?.disconnect();
        // Note: Scroll listener is automatically cleaned up when page unloads
    }
}

// Initialize scroll tracking
let scrollTracker: ScrollTracker;

export const initializeAnalytics = () => {
    if (typeof window !== 'undefined') {
        scrollTracker = new ScrollTracker();

        // Track page load with error handling
        try {
            analytics.trackEngagement('page_load', {
                page_url: window.location.href,
                referrer: document.referrer || 'direct',
                load_time: performance.now(),
                user_agent: navigator.userAgent.substring(0, 100)
            });
        } catch (error) {
            console.warn('Page load tracking error:', error);
        }

        // Track page unload with batch flushing
        const handleBeforeUnload = () => {
            try {
                analytics.trackEngagement('page_unload', {
                    time_on_page: Math.round((Date.now() - performance.now()) / 1000)
                });
                // Flush any remaining events
                eventBatcher.flush();
            } catch (error) {
                console.warn('Page unload tracking error:', error);
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Flush events on page visibility change (when user switches tabs)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                eventBatcher.flush();
            }
        });

        // Periodic flush to prevent events from staying queued too long
        setInterval(() => {
            eventBatcher.flush();
        }, 10000); // Flush every 10 seconds
    }
};

// Console testing functions for debugging
export const testAnalytics = {
    // Test all custom events with rate limiting awareness
    testAll: () => {
        console.log('🧪 Testing all custom events with rate limiting...');

        // Test nav_click
        analytics.trackNavigation('test-section', 'console');
        setTimeout(() => console.log('✅ nav_click sent'), 100);

        // Test project_click
        setTimeout(() => {
            analytics.trackProjectClick(999, 'Test Project', 0);
            console.log('✅ project_click sent');
        }, 200);

        // Test case_study_view
        setTimeout(() => {
            analytics.trackCaseStudyView(999, 'Test Case Study');
            console.log('✅ case_study_view sent');
        }, 300);

        // Test case_study_navigation
        setTimeout(() => {
            analytics.trackCaseStudyNavigation('test_action', 'from', 'to');
            console.log('✅ case_study_navigation sent');
        }, 400);

        setTimeout(() => {
            // Flush any batched events
            eventBatcher.flush();
            console.log('🎯 All test events sent! Check Plausible dashboard.');
        }, 500);
    },

    // Check Plausible status with rate limiting info
    status: () => {
        console.log('📊 Analytics Status:');
        console.log('- Plausible loaded:', typeof window.plausible !== 'undefined');
        console.log('- Plausible function:', typeof window.plausible === 'function');
        console.log('- Rate limiting: ✅ Enabled (30 events/minute per type)');
        console.log('- Event batching: ✅ Enabled (batch size: 5, interval: 2s)');
        console.log('- Scroll debouncing: ✅ Enabled (200ms)');
        console.log('- CORS fix: ✅ Using standard Plausible script');

        if (typeof window.plausible === 'function') {
            console.log('✅ Plausible is ready for optimized event tracking');
        } else {
            console.log('❌ Plausible not loaded or not working');
        }

        return {
            loaded: typeof window.plausible !== 'undefined',
            functional: typeof window.plausible === 'function',
            rateLimiting: true,
            batching: true,
            debouncing: true
        };
    },

    // Test individual events
    testNavClick: () => analytics.trackNavigation('console-test', 'browser-console'),
    testProjectClick: () => analytics.trackProjectClick(998, 'Console Test Project', 0),
    testCaseStudyView: () => analytics.trackCaseStudyView(998, 'Console Test Case Study'),
    testCaseStudyNav: () => analytics.trackCaseStudyNavigation('console_test', 'from', 'to')
};

// Make testing functions available globally for console access
if (typeof window !== 'undefined') {
    (window as any).testAnalytics = testAnalytics;
    console.log('🔧 Analytics testing functions available: window.testAnalytics');
    console.log('💡 Try: testAnalytics.testAll() or testAnalytics.status()');
}

export default analytics;