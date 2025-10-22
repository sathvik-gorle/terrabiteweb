# Photo Upload Guide for Pilot Gallery

## 📸 Images to Upload

Save your 8 photos to `/src/assets/images/pilot/` with these exact names:

### Photo Order:

1. **`entrepreneurship-fair-presentation.jpg`**
   - The photo of you presenting at the NCSSM Entrepreneurship Fair with the poster
   - Caption: "Entrepreneurship Fair at NCSSM - Presenting Terrabite's biochar concrete concept"
   - This photo will link to: https://entrepreneurship.ncssm.edu/home/e-ship-fair

2. **`entrepreneurship-fair-team.jpg`**
   - Team photo of 4 people with concrete samples on green tables
   - Caption: "Entrepreneurship Fair - Team showcasing biochar concrete samples"

3. **`charlotte-pilot-pour-1.jpg`**
   - First concrete pour shot at Charlotte Temple
   - Caption: "Charlotte Temple Pilot - Biochar concrete pour in progress"

4. **`charlotte-pilot-pour-2.jpg`**
   - Second concrete installation shot
   - Caption: "Charlotte Temple Pilot - 31,000 lbs biochar concrete installation"

5. **`charlotte-pilot-pour-3.jpg`**
   - Third concrete finishing shot
   - Caption: "Charlotte Temple Pilot - Concrete finishing and surface preparation"

6. **`charlotte-pilot-pour-4.jpg`**
   - Fourth completed pour shot
   - Caption: "Charlotte Temple Pilot - Completed biochar concrete placement"

7. **`launch-chapel-hill-presentation.jpg`**
   - Photo of person presenting at whiteboard
   - Caption: "Presenting at Launch Chapel Hill accelerator program"

8. **`first-batch-concrete.jpg`**
   - Container with biochar concrete mixture
   - Caption: "First Successful Batch - Biochar concrete mixture validation"

## 🔧 How to Update After Uploading

Once you've saved all 8 photos to `/src/assets/images/pilot/`, update `src/sections/PilotGallery.tsx`:

1. Add these imports at the top:
```tsx
import entrepreneurshipFairPresentation from "@/assets/images/pilot/entrepreneurship-fair-presentation.jpg";
import entrepreneurshipFairTeam from "@/assets/images/pilot/entrepreneurship-fair-team.jpg";
import charlottePour1 from "@/assets/images/pilot/charlotte-pilot-pour-1.jpg";
import charlottePour2 from "@/assets/images/pilot/charlotte-pilot-pour-2.jpg";
import charlottePour3 from "@/assets/images/pilot/charlotte-pilot-pour-3.jpg";
import charlottePour4 from "@/assets/images/pilot/charlotte-pilot-pour-4.jpg";
import launchChapelHill from "@/assets/images/pilot/launch-chapel-hill-presentation.jpg";
import firstBatch from "@/assets/images/pilot/first-batch-concrete.jpg";
```

2. Update the `pilotImages` array to use these imports:
```tsx
const pilotImages: PilotImage[] = [
  {
    src: entrepreneurshipFairPresentation,
    alt: "Entrepreneurship Fair at NCSSM",
    caption: "Entrepreneurship Fair at NCSSM - Presenting Terrabite's biochar concrete concept",
    link: "https://entrepreneurship.ncssm.edu/home/e-ship-fair",
  },
  {
    src: entrepreneurshipFairTeam,
    alt: "Entrepreneurship Fair Team",
    caption: "Entrepreneurship Fair - Team showcasing biochar concrete samples",
  },
  // ... and so on for all 8 images
];
```

3. Remove the `unoptimized` prop from the Image components (Next.js will automatically optimize local images)

## 📝 Image Specifications

- **Recommended size**: 1200x800px or larger
- **Format**: JPG, PNG, or WebP
- **Max file size**: Keep under 500KB per image for optimal performance
- **Aspect ratio**: 3:2 (landscape) works best

## ✨ Features

- First photo automatically links to the NCSSM Entrepreneurship Fair page
- Hover effect shows "View at NCSSM" button on the first photo
- All photos have descriptive captions telling your journey story
- Responsive slideshow with navigation arrows
- Thumbnail grid for quick navigation

---

**Current Status**: Using placeholder images. Replace with actual pilot photos for production deployment.

