# Analytics Testing Guide

This guide provides step-by-step instructions to test and verify that the custom Plausible Analytics events are working correctly.

## Quick Testing

### 1. Browser Console Testing

Open your browser's developer console (F12) and run these commands:

```javascript
// Check if analytics is working
testAnalytics.status();

// Test all custom events
testAnalytics.testAll();

// Test individual events
testAnalytics.testNavClick();
testAnalytics.testProjectClick();
testAnalytics.testCaseStudyView();
testAnalytics.testCaseStudyNav();
```

### 2. Debug Component Testing

1. The debug component should be visible in the bottom-right corner (📊 Debug button)
2. Click it to open the debug panel
3. Use the test buttons to trigger each event type:
   - `nav click` - Tests navigation tracking
   - `project click` - Tests project card clicks
   - `case study view` - Tests case study viewing
   - `case study navigation` - Tests case study navigation

### 3. Manual Testing

Navigate through your website and perform these actions:

1. **Navigation Click**: Click any menu item in the navbar
2. **Project Click**: Click any project card in the Work section
3. **Case Study View**: Click on a project to open its case study
4. **Case Study Navigation**: Navigate between case studies using the project switcher

## Expected Events

After testing, you should see these custom events in your Plausible Analytics dashboard:

### ✅ Fixed Custom Events
- **`nav_click`** - Triggered when users click navigation menu items
- **`project_click`** - Triggered when users click project cards
- **`case_study_view`** - Triggered when users open a case study
- **`case_study_navigation`** - Triggered when users navigate within case studies

### ✅ Working Custom Properties
- **`depth_percentage`** - Scroll depth tracking (was already working)

## Verification Steps

1. **Check Browser Console**: Look for success messages when running test functions
2. **Check Debug Panel**: Verify events appear in the debug component
3. **Check Plausible Dashboard**: Events should appear in the Custom Events section
4. **Check Network Tab**: Verify Plausible requests are being made

## Troubleshooting

### If Events Don't Appear:

1. **Check Plausible Loading**:
   ```javascript
   console.log(typeof window.plausible); // Should be 'function'
   ```

2. **Check Event Payload**:
   ```javascript
   // The debug component shows event details
   ```

3. **Check Network Requests**:
   - Open DevTools Network tab
   - Filter for "plausible"
   - Look for POST requests to `https://plausible.io/api/event`

### Common Issues:

1. **Plausible Script Not Loading**: Check `index.html` for the Plausible script tag
2. **Events Not Firing**: Check browser console for JavaScript errors
3. **Wrong Event Names**: Ensure events use the correct names (`case_study_view`, `project_click`, `nav_click`)

## Testing Checklist

- [ ] Browser console test functions work
- [ ] Debug component is visible and functional
- [ ] Manual navigation clicks trigger `nav_click`
- [ ] Manual project clicks trigger `project_click`
- [ ] Opening case studies triggers `case_study_view`
- [ ] Case study navigation triggers `case_study_navigation`
- [ ] Events appear in Plausible dashboard
- [ ] Custom properties (`depth_percentage`) still work

## Production Cleanup

Before deploying to production:

1. Remove the AnalyticsDebug component from `App.tsx`
2. Keep the console testing functions for future debugging
3. Monitor the Plausible dashboard for event data

---

For questions or issues, check the browser console for error messages and verify that the Plausible script is loading correctly.