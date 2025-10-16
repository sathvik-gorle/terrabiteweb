# Terrabite Website

**Biochar concrete from food waste. Locking CO₂ in every pour.**

This is the official website for Terrabite Materials, LLC—a materials startup developing carbon-negative concrete using biochar derived from food waste.

---

## 🌱 About Terrabite

Terrabite transforms organic waste into high-performance concrete that:
- **Locks CO₂** in every pour (1.53 tCO₂e from 31,000 lb concrete placed)
- **Diverts food waste** from landfills (4,093 lb dry waste to date)
- **Meets industry standards** (4,000 psi target, ASTM C39)
- **Generates carbon credits** through third-party verification

**Current Status:** Pilot phase with active case studies in Durham, NC and Triangle Area.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/terrabiteweb.git
cd terrabiteweb

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or deploy to Vercel
vercel --prod
```

---

## 📁 Project Structure

```
terrabiteweb/
├── public/                    # Static assets
│   ├── assets/                # Images, icons
│   ├── resources/             # PDF documentation (to be added)
│   ├── robots.txt             # SEO crawl rules
│   └── sitemap.xml            # Site structure for search engines
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── credits/           # Credits page
│   │   ├── methodology/       # Methodology page
│   │   ├── layout.tsx         # Root layout with SEO metadata
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── MetricCard.tsx     ✨ NEW
│   │   ├── Key.tsx
│   │   ├── Pointer.tsx
│   │   └── Tags.tsx
│   └── sections/              # Page sections
│       ├── Hero.tsx           # Hero with CTAs
│       ├── MetricsBar.tsx     ✨ 6 metric cards
│       ├── HowItWorks.tsx     ✨ 3-step process
│       ├── PerformanceCompliance.tsx ✨ Technical specs & table
│       ├── CarbonCredits.tsx  ✨ MRV process
│       ├── MiniCases.tsx      ✨ Case studies
│       ├── LogoTicker.tsx     # Ecosystem partners
│       ├── ResourcesLibrary.tsx ✨ PDF downloads
│       ├── Faqs.tsx           # Frequently asked questions
│       ├── ContactRFQ.tsx     ✨ Quote request form
│       ├── Navbar.tsx         # Navigation
│       └── Footer.tsx         # Footer with LLC info
├── DEPLOYMENT_CHECKLIST.md    # Pre-launch checklist
├── REFACTOR_SUMMARY.md        # What changed in refactor
├── CONTENT_UPDATE_GUIDE.md    # How to update metrics/content
└── README.md                  # This file
```

**Legend:**
- ✨ = New component/section in October 2025 refactor
- Updated sections: Hero, Navbar, LogoTicker, Footer

---

## 📊 Key Features

### 1. Data-Driven Metrics
- 6 real-time metrics with date stamps
- Hover tooltips explaining methodology
- Links to detailed calculation PDFs

### 2. Technical Documentation
- Complete methodology page with formulas
- 7 downloadable PDFs covering technical, business, and carbon markets
- Transparent boundaries and assumptions

### 3. Professional Compliance
- ASTM standards referenced
- Mix design table with 4 biochar replacement options
- Ongoing testing status clearly communicated

### 4. Carbon Credit Tracking
- 4-step MRV process with status badges
- Verification pathway to Verra/Gold Standard
- Dual value proposition (emissions + revenue)

### 5. SEO-Optimized
- Comprehensive metadata (title, description, keywords)
- OpenGraph and Twitter cards
- Schema.org structured data (Organization, Product)
- Sitemap and robots.txt

### 6. Conversion-Focused
- Comprehensive RFQ form (9 fields)
- 24-hour response SLA
- Clear CTAs throughout

---

## 🧪 Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel (recommended)

---

## 📝 Content Management

### Regular Updates

**Monthly:**
- Update metrics in `MetricsBar.tsx`
- Refresh date stamps ("as of [date]")
- Add new FAQs from inquiries

**Quarterly:**
- Update all 7 PDFs in `/public/resources/`
- Refresh case studies in `MiniCases.tsx`
- Advance MRV status in `CarbonCredits.tsx`
- Update lastModified dates in `ResourcesLibrary.tsx`

**See:** `CONTENT_UPDATE_GUIDE.md` for detailed instructions.

### Adding New PDFs

1. Create/update PDF with consistent branding
2. Optimize for web (< 5MB)
3. Place in `/public/resources/`
4. Add entry to `ResourcesLibrary.tsx`:

```typescript
{
  title: "Your PDF Title",
  filename: "your-pdf-filename.pdf",
  summary: "One-line description",
  lastModified: "Month Day, Year",
  category: "Technical|Business|Carbon Markets|Overview",
}
```

5. Add to `/public/sitemap.xml`

---

## 🧮 Methodology

All CO₂e calculations use this formula:

```
biochar_mass = concrete_mass × cement_fraction × biochar_replacement
carbon_mass = biochar_mass × carbon_fraction
tCO₂e_locked = (carbon_mass × 44/12) ÷ 2204.62
```

**Current assumptions:**
- Cement fraction: 12% (0.12)
- Biochar replacement: 33% (0.33)
- Carbon fraction: 75% (0.75)
- Pyrolysis yield: 30% (0.30) *to be updated with lab data*

**Full details:** https://terrabitenc.com/methodology

---

## 🔒 SEO & Analytics

### Search Console Setup

1. Add property: `https://terrabitenc.com`
2. Verify via meta tag (add to `layout.tsx`)
3. Submit sitemap: `https://terrabitenc.com/sitemap.xml`
4. Monitor indexing and fix errors

### Analytics (Optional)

Add Google Analytics 4:
```typescript
// In layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## 📋 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Configure production domain: `terrabitenc.com`
4. Deploy:

```bash
vercel --prod
```

### Environment Variables

Create `.env.local` (not committed):
```
NEXT_PUBLIC_SITE_URL=https://terrabitenc.com
FORM_ENDPOINT=your-form-backend-url
GA_MEASUREMENT_ID=your-google-analytics-id
```

### Pre-Deployment Checklist

**See:** `DEPLOYMENT_CHECKLIST.md` for complete list.

**Critical:**
- [ ] All 7 PDFs uploaded to `/public/resources/`
- [ ] OpenGraph image created (`og-image.jpg`, 1200×630px)
- [ ] Twitter image created (`twitter-image.jpg`, 1200×630px)
- [ ] Phone and email verified in Contact/Footer
- [ ] Form submission backend configured
- [ ] Google Search Console verified

---

## 🧪 Testing

### Local Testing

```bash
# Lint check
npm run lint

# Build test
npm run build
npm start

# Check for console errors
# Test all navigation links
# Verify form submission
# Test on mobile viewport
```

### Responsive Testing

Test on:
- Mobile (375px, 414px)
- Tablet (768px, 1024px)
- Desktop (1280px, 1440px, 1920px)

### Browser Testing

Verify on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Android

---

## 📄 Documentation

- **DEPLOYMENT_CHECKLIST.md** - Pre-launch tasks
- **REFACTOR_SUMMARY.md** - What changed in October 2025 refactor
- **CONTENT_UPDATE_GUIDE.md** - How to update metrics and content regularly
- **/public/resources/README.md** - Guide for adding PDFs

---

## 🤝 Contributing

This is a private repository for Terrabite Materials, LLC.

### Making Changes

1. Create feature branch
2. Make changes
3. Test locally
4. Submit for review
5. Deploy to production

### Code Style

- TypeScript strict mode
- Tailwind CSS for styling
- Framer Motion for animations
- ESLint rules enforced

---

## 📞 Contact

**Terrabite Materials, LLC**
- **Website:** https://terrabitenc.com
- **Email:** info@terrabitenc.com
- **Quotes:** quotes@terrabitenc.com
- **Phone:** (919) 555-1234
- **Location:** Triangle Area, North Carolina

---

## 📜 License

© 2025 Terrabite Materials, LLC. All rights reserved.

---

## 🙏 Credits

**Developed by:** Sathvik Gorle  
**Technology:** Next.js, TypeScript, Tailwind CSS, Framer Motion  
**Launch Date:** October 2025  

For credits details, visit: https://terrabitenc.com/credits

---

## 📊 Current Metrics (as of Oct 16, 2025)

- **Concrete Placed:** 31,000 lb
- **Biochar Load:** 33% of cement mass
- **CO₂ Locked:** 1.53 tCO₂e
- **Food Waste Diverted:** 4,093 lb (dry)
- **Target Strength:** 4,000 psi (ASTM C39)
- **Thermal Benefit:** ~15% better insulation (literature-based)

**Full methodology:** https://terrabitenc.com/methodology

---

**Last Updated:** October 16, 2025  
**Version:** 2.0 (Post-refactor)

