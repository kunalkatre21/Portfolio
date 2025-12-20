/**
 * Custom Analytics Utility for Plausible Analytics
 * Provides comprehensive event tracking for portfolio interactions
 */

declare global {
    interface Window {
        plausible: (eventName: string, options?: any) => void;
    }
}

// Event tracking functions
export const analytics = {
    // Generic event tracking
    track: (eventName: string, props?: Record<string, any>) => {
        if (typeof window !== 'undefined' && window.plausible) {
            window.plausible(eventName, {
                props: {
                    ...props,
                    timestamp: new Date().toISOString(),
                    user_agent: navigator.userAgent,
                    viewport: `${window.innerWidth}x${window.innerHeight}`
                }
            });
        }
    },

    // Navigation tracking
    trackNavigation: (section: string, source?: string) => {
        analytics.track('Navigation Click', {
            section,
            source: source || 'direct',
            page_url: window.location.href
        });
    },

    // Project interaction tracking
    trackProjectClick: (projectId: number, projectTitle: string, position?: number) => {
        analytics.track('Project Card Click', {
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

    // Case study navigation tracking
    trackCaseStudyNavigation: (action: string, from?: string, to?: string) => {
        analytics.track('Case Study Navigation', {
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

    constructor() {
        this.setupSectionTracking();
        this.setupScrollTracking();
    }

    private setupSectionTracking() {
        const sections = ['about', 'experience', 'education', 'work', 'award', 'skill', 'contact'];

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;

                if (entry.isIntersecting) {
                    // Section entered viewport
                    const startTime = Date.now();
                    this.sectionStartTimes.set(sectionId, startTime);

                    analytics.trackEngagement('section_enter', {
                        section: sectionId,
                        timestamp: new Date().toISOString()
                    });
                } else {
                    // Section left viewport
                    const startTime = this.sectionStartTimes.get(sectionId);
                    if (startTime) {
                        const duration = Math.round((Date.now() - startTime) / 1000);
                        analytics.trackTimeOnSection(sectionId, duration);
                        this.sectionStartTimes.delete(sectionId);
                    }
                }
            });
        }, {
            threshold: 0.5, // Trigger when 50% of section is visible
            rootMargin: '-20% 0px -20% 0px' // Slightly reduce viewport for better UX
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

        const updateScrollDepth = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            const currentSection = getCurrentSection();
            const currentMaxDepth = this.maxScrollDepths.get(currentSection) || 0;

            // Track milestone depths (25%, 50%, 75%, 90%, 100%)
            const milestones = [25, 50, 75, 90, 100];

            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && currentMaxDepth < milestone) {
                    analytics.trackScrollDepth(milestone, currentSection);
                }
            });

            // Update max depth for current section
            if (scrollPercent > currentMaxDepth) {
                this.maxScrollDepths.set(currentSection, scrollPercent);
            }

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollDepth);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
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

        // Track page load
        analytics.trackEngagement('page_load', {
            page_url: window.location.href,
            referrer: document.referrer || 'direct',
            load_time: performance.now()
        });

        // Track page unload
        window.addEventListener('beforeunload', () => {
            analytics.trackEngagement('page_unload', {
                time_on_page: Math.round((Date.now() - performance.now()) / 1000)
            });
        });
    }
};

export default analytics;