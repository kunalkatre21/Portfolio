/**
 * Analytics Debug Component
 * Temporary component to test and verify analytics tracking
 * 
 * Usage: Add <AnalyticsDebug /> to your app temporarily for testing
 * Remove this component in production
 */

import React, { useState, useEffect } from 'react';
import { analytics } from './analytics';

export const AnalyticsDebug: React.FC = () => {
    const [events, setEvents] = useState<Array<{ name: string; props: any; timestamp: string }>>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Override the analytics.track function to capture events
        const originalTrack = analytics.track;

        analytics.track = (eventName: string, props?: Record<string, any>) => {
            // Capture the event
            const event = {
                name: eventName,
                props: props || {},
                timestamp: new Date().toLocaleTimeString()
            };

            setEvents(prev => [event, ...prev.slice(0, 19)]); // Keep last 20 events

            // Call original function
            originalTrack(eventName, props);
        };

        // Add some test events
        analytics.trackEngagement('debug_component_loaded', {
            user_agent: navigator.userAgent,
            viewport: `${window.innerWidth}x${window.innerHeight}`
        });

        return () => {
            // Restore original function
            analytics.track = originalTrack;
        };
    }, []);

    const testEvent = (eventName: string) => {
        switch (eventName) {
            case 'nav_click':
                analytics.trackNavigation('test-section', 'debug');
                break;
            case 'project_click':
                analytics.trackProjectClick(1, 'Test Project', 0);
                break;
            case 'case_study_view':
                analytics.trackCaseStudyView(1, 'Test Case Study');
                break;
            case 'case_study_navigation':
                analytics.trackCaseStudyNavigation('project_switch', 'Test Project', 'Another Project');
                break;
            case 'social-click':
                analytics.trackSocialClick('linkedin', 'debug');
                break;
            case 'contact-action':
                analytics.trackContactAction('email_click', 'test@example.com');
                break;
            case 'theme-toggle':
                analytics.trackThemeToggle('dark');
                break;
            case 'resume-download':
                analytics.trackResumeDownload();
                break;
            case 'scroll-depth':
                analytics.trackScrollDepth(75, 'test-section');
                break;
            case 'time-on-section':
                analytics.trackTimeOnSection('test-section', 30);
                break;
            default:
                analytics.track('Test Event', { eventType: eventName });
        }
    };

    const clearEvents = () => {
        setEvents([]);
    };

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-4 right-4 z-[9999] bg-red-500 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium hover:bg-red-600 transition-colors"
                title="Analytics Debug"
            >
                📊 Debug
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-[9999] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl p-4 w-80 max-h-96 overflow-hidden">
            <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white">Analytics Debug</h3>
                <div className="flex gap-2">
                    <button
                        onClick={clearEvents}
                        className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        Clear
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>

            {/* Test Buttons */}
            <div className="grid grid-cols-2 gap-1 mb-3">
                {[
                    'nav_click',
                    'project_click',
                    'case_study_view',
                    'case_study_navigation',
                    'social-click',
                    'contact-action',
                    'theme-toggle',
                    'resume-download'
                ].map((test) => (
                    <button
                        key={test}
                        onClick={() => testEvent(test)}
                        className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                        {test.replace(/_/g, ' ')}
                    </button>
                ))}
            </div>

            {/* Events List */}
            <div className="space-y-1 max-h-48 overflow-y-auto">
                {events.length === 0 ? (
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">No events captured yet</p>
                ) : (
                    events.map((event, index) => (
                        <div
                            key={index}
                            className="text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded border-l-2 border-blue-500"
                        >
                            <div className="font-medium text-gray-900 dark:text-white">{event.name}</div>
                            <div className="text-gray-600 dark:text-gray-400">{event.timestamp}</div>
                            {event.props && Object.keys(event.props).length > 0 && (
                                <details className="mt-1">
                                    <summary className="cursor-pointer text-gray-500 dark:text-gray-400">Props</summary>
                                    <pre className="text-xs text-gray-600 dark:text-gray-400 mt-1 whitespace-pre-wrap">
                                        {JSON.stringify(event.props, null, 2)}
                                    </pre>
                                </details>
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    Events captured: {events.length} | Plausible: {typeof window !== 'undefined' && window.plausible ? '✅' : '❌'}
                </p>
            </div>
        </div>
    );
};

export default AnalyticsDebug;