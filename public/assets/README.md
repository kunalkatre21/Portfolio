# Assets Directory

This is the best place to upload your static assets (images, videos, PDFs).

## Recommended Structure

Create these subfolders inside here to keep things organized:

- `public/assets/images/profile/` (For your hero image)
- `public/assets/images/projects/` (For project thumbnails and case study images)
- `public/assets/documents/` (For your CV/Resume)

## How to Reference in Code

Since this project uses Vite, files in the `public` directory are served at the root.

1. **Upload your file**: 
   Example: `public/assets/images/profile/my-photo.jpg`

2. **Update your code**:
   - In `components/Hero.tsx`:
     ```tsx
     // Change the src string
     src="assets/images/profile/my-photo.jpg" 
     ```
   
   - In `data.ts`:
     ```typescript
     export const works: WorkItem[] = [
       {
         id: 1,
         title: "Co-WIN Vaccine Flows",
         // ...
         image: "assets/images/projects/cowin-cover.jpg", // No leading slash is best for relative deployments
         // ...
       }
     ];
     ```

## Important Note on Paths
If you are deploying to GitHub Pages or a subpath, use relative paths (e.g., `assets/image.jpg` or `./assets/image.jpg`) instead of absolute paths (e.g., `/assets/image.jpg`).
