# Analytics Implementation Guide

This document provides comprehensive information about the custom event tracking system implemented for the portfolio website using Plausible Analytics.

## Overview

The analytics system tracks user interactions, scroll behavior, time spent on sections, and engagement metrics to provide insights into how users interact with the portfolio.

## Features Implemented

### ✅ Click Tracking
- **Navigation**: All navigation menu items (desktop and mobile)
- **Project Cards**: Click tracking for all project/case study cards
- **Social Links**: LinkedIn, email, Behance, Twitter, Dribbble clicks
- **Contact Actions**: Email copy, phone number interactions
- **Theme Toggle**: Dark/light mode switches
- **External Links**: Resume downloads, external website visits
- **Mobile Menu**: Open/close interactions

### ✅ Scroll Depth Tracking
- **Milestone Tracking**: 25%, 50%, 75%, 90%, 100% scroll depth
- **Section-based**: Tracks scroll depth per section (About, Experience, Work, etc.)
- **Performance Optimized**: Uses requestAnimationFrame for smooth performance

### ✅ Time-on-Section Tracking
- **Section Entry/Exit**: Tracks when users enter and leave sections
- **Duration Calculation**: Measures time spent in each section
- **Intersection Observer**: Efficiently tracks section visibility

### ✅ User Journey Tracking
- **Navigation Patterns**: How users move through the portfolio
- **Project Interactions**: Which projects are viewed and in what order
- **Case Study Flow**: Navigation within case studies

### ✅ Engagement Events
- **Page Load/Unload**: Track session start and end
- **Resume Downloads**: Monitor CV download engagement
- **Social Media Clicks**: Track social platform engagement
- **Contact Interactions**: Email clicks, copying, etc.

## File Structure

```
utils/
├── analytics.ts           # Main analytics utility
└── analytics-debug.tsx    # Debug component for testing

docs/
└── ANALYTICS.md          # This documentation

components/
├── Navbar.tsx            # Navigation tracking
├── Hero.tsx              # Hero section tracking
├── Work.tsx              # Project card tracking
├── Contact.tsx           # Contact section tracking
└── CaseStudy.tsx         # Case study navigation tracking
```

## Analytics Events

### Navigation Events
- **Navigation Click**: `analytics.trackNavigation(section, source)`
  - Tracks: section name, source (desktop/mobile), page URL

### Project Interactions
- **Project Card Click**: `analytics.trackProjectClick(projectId, title, position)`
  - Tracks: project ID, title, card position, source page

### Social & Contact
- **Social Link Click**: `analytics.trackSocialClick(platform, location)`
  - Tracks: platform (linkedin/email/behance/twitter/dribbble), location
- **Contact Action**: `analytics.trackContactAction(action, value)`
  - Tracks: action type, value, page section

### Engagement
- **Theme Toggle**: `analytics.trackThemeToggle(theme)`
  - Tracks: new theme, page URL
- **Resume Download**: `analytics.trackResumeDownload()`
  - Tracks: source page, timestamp
- **Mobile Menu**: `analytics.trackMobileMenu(action, method)`
  - Tracks: open/close action, trigger method

### Case Study Navigation
- **Case Study Navigation**: `analytics.trackCaseStudyNavigation(action, from, to)`
  - Tracks: navigation action, from/to project, page URL

### Scroll & Time
- **Scroll Depth**: `analytics.trackScrollDepth(depth, section)`
  - Tracks: depth percentage, section, page URL
- **Time on Section**: `analytics.trackTimeOnSection(section, duration)`
  - Tracks: section name, duration in seconds

## Usage Examples

### Basic Tracking
```typescript
import { analytics } from '../utils/analytics';

// Track a custom event
analytics.track('Custom Event', {
  customProperty: 'value',
  anotherProperty: 123
});
```

### Track Navigation
```typescript
// Track navigation to a section
analytics.trackNavigation('experience', 'desktop-nav');
```

### Track Project Interaction
```typescript
// Track project card click
analytics.trackProjectClick(1, 'Heart Rate App', 0);
```

### Track Social Click
```typescript
// Track social media click
analytics.trackSocialClick('linkedin', 'hero-section');
```

## Testing

### Using the Debug Component
1. Import the debug component:
   ```typescript
   import { AnalyticsDebug } from '../utils/analytics-debug';
   ```

2. Add it to your app temporarily:
   ```typescript
   function App() {
     return (
       <>
         {/* Your app components */}
         <AnalyticsDebug /> {/* Remove in production */}
       </>
     );
   }
   ```

3. The debug component provides:
   - Real-time event capture
   - Test buttons for all event types
   - Event history with timestamps
   - Plausible connection status

### Manual Testing
Test these interactions to verify tracking:

1. **Navigation**: Click menu items in navbar
2. **Projects**: Click project cards in Work section
3. **Social**: Click LinkedIn, email, social links
4. **Contact**: Copy email address
5. **Theme**: Toggle dark/light mode
6. **Scroll**: Scroll through different sections
7. **Case Studies**: Open and navigate case studies

## Performance Considerations

### Optimization Features
- **RequestAnimationFrame**: Scroll tracking uses RAF for smooth performance
- **Intersection Observer**: Efficient section tracking
- **Event Debouncing**: Prevents event spam
- **Conditional Loading**: Analytics only loads in browser environment

### Memory Management
- Scroll tracker automatically cleans up on page unload
- Event queue management prevents memory leaks
- Observer disconnection on component unmount

## Data Structure

### Event Properties
All events include these default properties:
```typescript
{
  timestamp: string,        // ISO timestamp
  user_agent: string,       // Browser user agent
  viewport: string,         // "width x height"
  page_url: string          // Current page URL
}
```

### Custom Properties
Each event type includes specific properties as documented in the Events section above.

## Integration with Plausible

### Setup Requirements
1. **Plausible Script**: Already included in `index.html`
2. **Custom Events**: Our utility handles custom event tracking
3. **Event Names**: Use descriptive, consistent naming

### Viewing Data
Custom events appear in Plausible Analytics under:
- **Custom Events**: Individual event tracking
- **Goals**: Convert events to goals for conversion tracking
- **Breakdowns**: Analyze events by custom properties

## Best Practices

### Event Naming
- Use descriptive, action-based names
- Keep names consistent across similar events
- Use past tense for completion events

### Property Usage
- Include relevant context (page, section, position)
- Use consistent property names
- Include user journey context

### Performance
- Avoid tracking every mouse movement
- Use intersection observers for efficient tracking
- Batch similar events when appropriate

## Troubleshooting

### Common Issues

1. **Events Not Appearing**
   - Check Plausible script is loading
   - Verify `window.plausible` exists
   - Check browser console for errors

2. **Performance Issues**
   - Reduce event frequency
   - Use passive event listeners
   - Implement event debouncing

3. **Debug Information**
   - Use AnalyticsDebug component
   - Check browser network tab for Plausible requests
   - Verify event payload structure

### Debug Commands
```typescript
// Check if Plausible is loaded
console.log(typeof window.plausible); // Should be 'function'

// Test basic tracking
analytics.track('Test Event', { test: true });

// Check current section
console.log(getCurrentSection());
```

## Future Enhancements

### Potential Additions
- **Heatmap Integration**: Track cursor positions
- **Form Analytics**: Track form field interactions
- **Video/Audio Engagement**: Track media consumption
- **Error Tracking**: Monitor JavaScript errors
- **Performance Metrics**: Track Core Web Vitals

### Conversion Goals
Consider setting up these goals in Plausible:
- Resume download completion
- Contact form submission
- Project case study completion
- Social media follow

## Maintenance

### Regular Tasks
- Monitor event volumes in Plausible
- Review and update event names if needed
- Clean up unused tracking code
- Update debug component as needed

### Code Updates
When adding new components:
1. Import analytics utility
2. Add appropriate tracking for user interactions
3. Test with debug component
4. Update documentation

---

For questions or issues with the analytics implementation, refer to this documentation or check the debug component for real-time event tracking.