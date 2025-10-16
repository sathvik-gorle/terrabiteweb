# Content Update Guide

Quick reference for regularly updating Terrabite website metrics and content.

---

## Monthly Updates

### 1. Update Metrics Bar

**File:** `/src/sections/MetricsBar.tsx`

**Update the `today` variable:**
```typescript
const today = "Nov 15, 2025"; // Update to current date
```

**Update metric values as projects complete:**
```typescript
const metrics = [
  {
    label: "Concrete Placed",
    value: "31,000", // ← Update with cumulative total
    unit: "lb",
    // ...
  },
  {
    label: "Biochar Load",
    value: "33", // ← Update if mix design changes
    unit: "% of cement mass",
    // ...
  },
  {
    label: "Estimated CO₂ Locked",
    value: "1.53", // ← Recalculate using methodology
    unit: "tCO₂e",
    // ...
  },
  {
    label: "Food Waste Diverted (dry)",
    value: "4,093", // ← Update with actual lab yield
    unit: "lb",
    tooltip: "Update when lab yield known", // ← Remove note when confirmed
    // ...
  },
  {
    label: "28-Day Strength (Target)",
    value: "4,000", // ← Update with actual test results
    unit: "psi (ASTM C39)",
    tooltip: "Testing in progress", // ← Update when complete
    // ...
  },
  {
    label: "Thermal Benefit*",
    value: "~15", // ← Update with lab-measured data
    unit: "% better insulation",
    tooltip: "In-house thermal conductivity testing underway", // ← Update status
    // ...
  },
];
```

### 2. Update Case Studies

**File:** `/src/sections/MiniCases.tsx`

**Add new projects or update existing:**
```typescript
const cases = [
  {
    project: "Project Name",
    location: "City, State",
    volume: "Volume in lb or yd³",
    biocharPercent: "XX%",
    co2Locked: "X.XX tCO₂e",
    result: "One-sentence outcome describing performance, testing status, or learning.",
    date: "Month Year",
  },
  // Add more projects as they complete
];
```

**Guidelines:**
- Keep to 3 most impactful projects (or expand grid if needed)
- Use consistent units (lb for pilot scale, yd³ for larger projects)
- Be specific about outcomes ("28-day strength: 4,200 psi" not "performed well")
- Include timeline/status for projected projects

---

## Quarterly Updates

### 3. Refresh PDF Documentation

**Directory:** `/public/resources/`

**PDFs to update:**

1. **numbers-methodology.pdf**
   - Add new lab results
   - Update pyrolysis yield with measured data
   - Revise carbon content if batch analysis shows variance
   - Update formulas if methodology improves

2. **terrabite-numbers-page.pdf**
   - Refresh cost assumptions
   - Update pricing based on market feedback
   - Add new financial scenarios

3. **quantified-value-proposition.pdf**
   - Update carbon credit market prices
   - Revise savings calculations
   - Add new case study ROI data

4. **carbon-credits-verification.pdf**
   - Update MRV process status
   - Add verifier engagement progress
   - Include registry feedback

5. **concrete-production.pdf**
   - Add new ASTM test results
   - Include thermal conductivity data when available
   - Update mix design optimizations

6. **expanded-pitch-deck.pdf**
   - Refresh traction slide with new metrics
   - Update team/advisors
   - Revise financial projections

**After updating PDFs:**
```typescript
// Update lastModified dates in ResourcesLibrary.tsx
{
  title: "Numbers & Methodology",
  filename: "numbers-methodology.pdf",
  lastModified: "Jan 15, 2026", // ← Update this
  // ...
}
```

### 4. Update Mix Options Table

**File:** `/src/sections/PerformanceCompliance.tsx`

**Change status badges as testing completes:**
```typescript
const mixOptions = [
  {
    replacement: "20%",
    targetPSI: "3,500",
    application: "Non-structural, thermal upgrade",
    status: "Available", // ← Change from "Testing" when validated
  },
];
```

### 5. Update MRV Process Status

**File:** `/src/sections/CarbonCredits.tsx`

**Advance status badges as milestones are reached:**
```typescript
const mrvSteps = [
  {
    number: 1,
    title: "MRV Plan Development",
    status: "Completed", // ← Update from "In Progress"
    // ...
  },
  {
    number: 2,
    title: "Third-Party Verifier Engagement",
    status: "In Progress", // ← Update from "Planning"
    // ...
  },
];
```

---

## As-Needed Updates

### 6. Add New FAQs

**File:** `/src/sections/Faqs.tsx`

**Add common questions from inquiries:**
```typescript
const faqs = [
  {
    question: "New question you're getting frequently?",
    answer: "Clear, technical answer with specific details and links to resources.",
  },
  // Add after existing FAQs
];
```

### 7. Update Ecosystem Partners

**File:** `/src/sections/LogoTicker.tsx`

**Add new partners or update captions:**
```typescript
const logos = [
  { 
    name: "New Partner", 
    image: partnerLogo, 
    caption: "Relationship description" 
  },
  // ...
];
```

**Update caption language as relationships formalize:**
- "Potential supplier" → "Strategic supplier"
- "Referenced research" → "Research partner"
- "In development" → "Active collaboration"

### 8. Update Contact Information

**Files:**
- `/src/sections/ContactRFQ.tsx`
- `/src/sections/Footer.tsx`

**Update if phone, email, or address changes:**
```typescript
<a href="mailto:info@terrabitenc.com"> // ← Update email
<a href="tel:+19195551234"> // ← Update phone
<p>Triangle Area, North Carolina</p> // ← Update location
```

---

## Calculation Reference

### How to Calculate CO₂e Locked

When updating metrics, use this formula:

```
1. biochar_mass = concrete_mass × cement_fraction × biochar_replacement
2. carbon_mass = biochar_mass × carbon_fraction
3. tCO₂e_locked = (carbon_mass × 44/12) ÷ 2204.62
```

**Example:**
- New pour: 50,000 lb concrete
- Cement: 12% (0.12)
- Biochar: 33% (0.33)
- Carbon: 75% (0.75)

**Calculation:**
```
biochar_mass = 50,000 × 0.12 × 0.33 = 1,980 lb
carbon_mass = 1,980 × 0.75 = 1,485 lb
tCO₂e_locked = (1,485 × 44/12) ÷ 2204.62 = 2.47 tCO₂e
```

**Update cumulative metrics:**
- Previous: 31,000 lb concrete, 1.53 tCO₂e
- New: 81,000 lb concrete, 4.00 tCO₂e (1.53 + 2.47)

---

## SEO Updates

### 9. Update Sitemap

**File:** `/public/sitemap.xml`

**After adding new pages or resources:**
```xml
<url>
  <loc>https://terrabitenc.com/new-page</loc>
  <lastmod>2025-11-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

**After updating homepage or methodology:**
```xml
<url>
  <loc>https://terrabitenc.com/</loc>
  <lastmod>2025-11-15</lastmod> <!-- ← Update date -->
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
```

**After updating sitemap:**
1. Go to Google Search Console
2. Navigate to Sitemaps
3. Remove old sitemap
4. Add updated sitemap URL
5. Click "Submit"

### 10. Update Structured Data

**File:** `/src/app/layout.tsx`

**When metrics change significantly:**
```typescript
const structuredData = {
  // ...
  {
    "@type": "Product",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "CO₂ Sequestration",
        "value": "4.00 tCO₂e per 81,000 lb concrete" // ← Update
      },
    ]
  }
};
```

---

## Testing After Updates

### Quick Test Checklist

After making content updates, verify:

- [ ] Metrics bar displays correctly on mobile
- [ ] All dates are updated consistently
- [ ] PDF links still work (if filenames changed)
- [ ] Calculations are accurate (double-check math)
- [ ] No typos or formatting issues
- [ ] Tooltips display properly
- [ ] Forms still submit successfully

### Build & Deploy

```bash
# Test locally
npm run build
npm start

# Check for errors in console
# Test all updated pages

# Deploy to production
vercel --prod

# Or push to main branch (if auto-deploy is set up)
git add .
git commit -m "Update metrics and case studies - Nov 2025"
git push origin main
```

---

## Content Calendar Template

Use this to plan regular updates:

| Update Frequency | Tasks | Last Completed | Next Due |
|------------------|-------|----------------|----------|
| Monthly | Update metrics bar | Oct 16, 2025 | Nov 16, 2025 |
| Monthly | Check for new inquiries/FAQs | Oct 16, 2025 | Nov 16, 2025 |
| Quarterly | Refresh all PDFs | Oct 16, 2025 | Jan 16, 2026 |
| Quarterly | Update case studies | Oct 16, 2025 | Jan 16, 2026 |
| Quarterly | Review MRV status | Oct 16, 2025 | Jan 16, 2026 |
| Annually | Full content audit | Oct 16, 2025 | Oct 16, 2026 |

---

## Questions?

If you're unsure about:
- **Calculations:** See `/app/methodology/page.tsx` for formulas
- **Assumptions:** Check `/public/resources/numbers-methodology.pdf`
- **Technical details:** Reference ASTM standards or lab reports
- **Content tone:** Keep it clear, technical, verifiable—no hype

**Principle:** Every claim should be date-stamped and linkable to a source (PDF, lab report, or methodology page).

---

**Last Updated:** October 16, 2025

