# Terrabite Website Deployment Checklist

This checklist covers all steps to deploy and maintain your refactored Terrabite website as a credible materials startup.

## Pre-Deployment Tasks

### 1. Content & Resources

- [ ] **Generate PDF Documentation**
  - [ ] `numbers-methodology.pdf` - CO₂e calculation formulas and assumptions
  - [ ] `step-4-calculating-tam.pdf` - Market analysis for Triangle region
  - [ ] `terrabite-numbers-page.pdf` - Financial models and unit economics
  - [ ] `quantified-value-proposition.pdf` - Value breakdown vs. traditional concrete
  - [ ] `carbon-credits-verification.pdf` - MRV process and verification pathways
  - [ ] `concrete-production.pdf` - Technical primer on pyrolysis and mix design
  - [ ] `expanded-pitch-deck.pdf` - 10-slide investor deck
  - [ ] Place all PDFs in `/public/resources/` directory
  - [ ] Optimize PDFs for web (< 5MB per file)
  - [ ] Add watermarks/footers with terrabitenc.com branding

- [ ] **Create Social Media Images**
  - [ ] `og-image.jpg` (1200×630px) - OpenGraph image for social sharing
  - [ ] `twitter-image.jpg` (1200×630px) - Twitter card image
  - [ ] Place in `/public/` directory
  - [ ] Ensure images showcase biochar concrete, metrics, or logo

- [ ] **Update Placeholder Data**
  - [ ] Verify all metrics in `MetricsBar.tsx` are current (date: Oct 16, 2025)
  - [ ] Update phone number in `ContactRFQ.tsx` and `Footer.tsx`
  - [ ] Confirm email addresses (info@terrabitenc.com, quotes@terrabitenc.com)
  - [ ] Update timeline in case studies if needed (`MiniCases.tsx`)

### 2. Domain & Hosting Setup

- [ ] **Domain Configuration**
  - [ ] Purchase `terrabitenc.com` domain (primary)
  - [ ] Purchase `terrabite.com` domain (redirect)
  - [ ] Set up 301 redirect: terrabite.com → terrabitenc.com
  - [ ] Configure DNS records (A, AAAA, CNAME)
  - [ ] Set canonical URL in all metadata

- [ ] **Hosting Platform** (Choose one)
  - [ ] Option A: Vercel (Recommended for Next.js)
    - [ ] Connect GitHub repository
    - [ ] Configure production domain
    - [ ] Enable automatic deployments
  - [ ] Option B: Netlify
  - [ ] Option C: AWS Amplify
  - [ ] Option D: Self-hosted (VPS/Cloud)

- [ ] **SSL Certificate**
  - [ ] Enable HTTPS (automatic on Vercel/Netlify)
  - [ ] Verify certificate is active
  - [ ] Force HTTPS redirects

### 3. SEO & Analytics

- [ ] **Google Search Console**
  - [ ] Add property for terrabitenc.com
  - [ ] Verify ownership (add meta tag to `layout.tsx`)
  - [ ] Submit `sitemap.xml`
  - [ ] Request indexing for key pages
  - [ ] Monitor crawl errors

- [ ] **Google Analytics** (Optional but recommended)
  - [ ] Create GA4 property
  - [ ] Add tracking code to `layout.tsx`
  - [ ] Set up conversion goals (quote form submissions)

- [ ] **Bing Webmaster Tools**
  - [ ] Add and verify site
  - [ ] Submit sitemap

- [ ] **robots.txt & Sitemap**
  - [ ] Verify `/public/robots.txt` is accessible
  - [ ] Verify `/public/sitemap.xml` is accessible
  - [ ] Update sitemap dates if needed

### 4. Functionality Testing

- [ ] **Navigation & Links**
  - [ ] Test all navbar links (Home, Approach, Resources, Methodology, FAQs)
  - [ ] Test footer links
  - [ ] Test CTA buttons (Get pilot quote, See methodology)
  - [ ] Verify anchor links work (#contact, #resources, #approach, etc.)

- [ ] **Forms**
  - [ ] Test quote form submission (`ContactRFQ.tsx`)
  - [ ] Set up form backend (choose one):
    - [ ] Option A: Formspree
    - [ ] Option B: Netlify Forms
    - [ ] Option C: SendGrid API
    - [ ] Option D: Custom backend
  - [ ] Configure email notifications for new quotes
  - [ ] Test success message display
  - [ ] Verify 24-hour SLA messaging

- [ ] **Resource Downloads**
  - [ ] Test all PDF download links
  - [ ] Verify PDFs open in new tab
  - [ ] Check PDF metadata (title, author, description)

- [ ] **Responsive Design**
  - [ ] Test on mobile (iPhone, Android)
  - [ ] Test on tablet (iPad, Android tablet)
  - [ ] Test on desktop (1920px, 1440px, 1024px)
  - [ ] Verify all text is readable
  - [ ] Check for horizontal scroll issues

### 5. Performance Optimization

- [ ] **Image Optimization**
  - [ ] Compress all images in `/public/assets/`
  - [ ] Use WebP format where possible
  - [ ] Add descriptive alt text to all images
  - [ ] Verify Next.js Image component is used

- [ ] **Core Web Vitals**
  - [ ] Run Lighthouse audit
  - [ ] Check Largest Contentful Paint (LCP < 2.5s)
  - [ ] Check First Input Delay (FID < 100ms)
  - [ ] Check Cumulative Layout Shift (CLS < 0.1)
  - [ ] Optimize any issues found

- [ ] **Caching & CDN**
  - [ ] Configure CDN (automatic on Vercel/Netlify)
  - [ ] Set cache headers for static assets
  - [ ] Enable Brotli/Gzip compression

### 6. Legal & Compliance

- [ ] **Privacy Policy** (Create page at `/privacy`)
  - [ ] Disclose data collection practices
  - [ ] Cookie usage (if applicable)
  - [ ] Contact information for privacy inquiries

- [ ] **Terms of Service** (Create page at `/terms`)
  - [ ] Usage terms
  - [ ] Liability disclaimers
  - [ ] Intellectual property rights

- [ ] **Cookie Consent** (Optional, EU visitors)
  - [ ] Implement cookie banner if needed
  - [ ] GDPR compliance check

## Post-Deployment Tasks

### Week 1

- [ ] Monitor Google Search Console for indexing
- [ ] Check form submissions are received
- [ ] Review analytics for traffic patterns
- [ ] Test all external links
- [ ] Fix any reported bugs or issues

### Month 1

- [ ] Update metrics in `MetricsBar.tsx` with latest data
- [ ] Refresh case studies if new projects complete
- [ ] Update PDF documents with new test results
- [ ] Review and respond to contact form inquiries
- [ ] Analyze conversion rates (quote form submissions)

### Ongoing Maintenance

- [ ] **Monthly**
  - [ ] Update metrics bar with latest numbers
  - [ ] Refresh "as of [date]" timestamps
  - [ ] Review and update case studies
  - [ ] Check for broken links
  - [ ] Update sitemap.xml with new content

- [ ] **Quarterly**
  - [ ] Refresh all PDF documentation
  - [ ] Update methodology with lab results
  - [ ] Review SEO performance
  - [ ] Update pitch deck
  - [ ] Backup website and data

- [ ] **Annually**
  - [ ] Audit all claims for accuracy
  - [ ] Renew domain registration
  - [ ] Review and update legal pages
  - [ ] Comprehensive content audit
  - [ ] Update footer copyright year (automatic via `{new Date().getFullYear()}`)

## Technical Deployment Commands

### Build & Test Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production version
npm run build

# Start production server locally
npm start

# Run linter
npm run lint
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Environment Variables (if needed)
Create `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://terrabitenc.com
FORM_SUBMISSION_ENDPOINT=your-form-endpoint
GA_TRACKING_ID=your-ga-id
```

## Support Contacts

- **Developer:** Sathvik Gorle
- **Email:** info@terrabitenc.com
- **Repository:** [Link to GitHub repo if applicable]

---

**Last Updated:** October 16, 2025

