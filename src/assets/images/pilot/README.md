# Pilot Project Photos

## Instructions

Place your Charlotte pilot project photos in this directory.

### Recommended Specifications

- **Format**: JPG, PNG, or WebP
- **Size**: 1200x800px or larger (maintain 3:2 aspect ratio)
- **File size**: Under 500KB each (optimize for web)
- **Naming**: Use descriptive names like:
  - `concrete-pour-charlotte.jpg`
  - `biochar-preparation.jpg`
  - `mixing-process.jpg`
  - `strength-testing.jpg`
  - `finished-project.jpg`
  - `team-photo.jpg`

### How to Add Photos to the Gallery

1. **Add your images to this directory**

2. **Update the slideshow**: Open `src/sections/PilotGallery.tsx`

3. **Replace the pilotImages array** with your actual images:

```tsx
import pilot1 from "@/assets/images/pilot/concrete-pour-charlotte.jpg";
import pilot2 from "@/assets/images/pilot/biochar-preparation.jpg";
// ... import more images

const pilotImages = [
  {
    src: pilot1,
    alt: "Initial pilot concrete pour - Charlotte, NC",
    caption: "31,000 lbs of biochar concrete being poured",
  },
  {
    src: pilot2,
    alt: "Biochar material preparation",
    caption: "Food waste-derived biochar ready for mixing",
  },
  // ... add more photos
];
```

4. **Remove the `unoptimized` prop** from the Image components once you're using local images (Next.js will automatically optimize them)

### Photo Ideas

- Concrete pouring in progress
- Biochar material close-up
- Mixing equipment and process
- Team members at work
- Testing procedures
- Before/after comparisons
- Finished concrete structure
- Food waste collection
- Launch Chapel Hill accelerator team
- Supplier partnerships
- Quality control checks
- Site location in Charlotte

---

**Current Status**: Using placeholder images. Replace with actual pilot photos for production.



