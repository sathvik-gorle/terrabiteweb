# 🚀 Next Steps

Your Terrabite website has been completely refactored into a credible, audit-friendly materials startup site. Here's what you need to do before launch.

---

## ✅ What's Been Completed

### Core Website
- ✅ Professional Hero with dual CTAs
- ✅ 6-metric cards with tooltips and methodology links
- ✅ How It Works (3-step process)
- ✅ Performance & Compliance specs with mix options table
- ✅ Carbon Credits section with 4-step MRV process
- ✅ 3 case study tiles
- ✅ Resources Library (7 PDFs listed)
- ✅ Comprehensive contact/RFQ form
- ✅ Full Methodology page with formulas and worked examples
- ✅ Professional Footer with LLC info
- ✅ Updated Navbar with all new sections
- ✅ Ecosystem partners with captions

### SEO & Technical
- ✅ Comprehensive SEO metadata (title, description, keywords)
- ✅ OpenGraph and Twitter cards
- ✅ Schema.org structured data (Organization + Product)
- ✅ robots.txt and sitemap.xml
- ✅ No linter errors

### Documentation
- ✅ DEPLOYMENT_CHECKLIST.md
- ✅ REFACTOR_SUMMARY.md
- ✅ CONTENT_UPDATE_GUIDE.md
- ✅ PDF_CONTENT_TEMPLATES.md
- ✅ README.md
- ✅ This file (NEXT_STEPS.md)

---

## 🎯 Before Launch (Critical)

### 1. Generate PDF Documentation

**Priority:** HIGH  
**Time:** 4-8 hours

Create these 7 PDFs and place in `/public/resources/`:

1. ✳️ **numbers-methodology.pdf** - Formulas, assumptions, calculations
2. ✳️ **step-4-calculating-tam.pdf** - Market analysis
3. ✳️ **terrabite-numbers-page.pdf** - Financial model
4. ✳️ **quantified-value-proposition.pdf** - Value breakdown
5. ✳️ **carbon-credits-verification.pdf** - MRV process
6. ✳️ **concrete-production.pdf** - Technical primer
7. ✳️ **expanded-pitch-deck.pdf** - 10-slide deck

**See:** `PDF_CONTENT_TEMPLATES.md` for detailed templates

**Quick Start:**
- Use Google Docs/Slides for drafts
- Export as PDF (< 5MB each)
- Add terrabitenc.com footer to each page
- Optimize images before exporting

### 2. Create Social Media Images

**Priority:** HIGH  
**Time:** 1-2 hours

Create and place in `/public/`:

1. ✳️ **og-image.jpg** (1200×630px)
   - OpenGraph image for Facebook, LinkedIn
   - Show: Logo + key metric (1.53 tCO₂e locked) + tagline
   
2. ✳️ **twitter-image.jpg** (1200×630px)
   - Twitter card image
   - Similar design to og-image

**Tools:**
- Canva (easy templates)
- Figma (professional design)
- Adobe Photoshop

### 3. Update Contact Information

**Priority:** HIGH  
**Time:** 5 minutes

Verify/update in these files:

1. `/src/sections/ContactRFQ.tsx`
   - Phone number (currently: 919-555-1234)
   - Email addresses

2. `/src/sections/Footer.tsx`
   - Phone number
   - Email addresses
   - Physical address

3. `/src/app/layout.tsx`
   - Structured data phone number

**Files to edit:**
```bash
# Search for placeholder info
grep -r "919-555-1234" src/
grep -r "info@terrabitenc.com" src/
```

### 4. Set Up Form Backend

**Priority:** HIGH  
**Time:** 30 minutes

Quote form in `ContactRFQ.tsx` needs a backend. Choose one:

**Option A: Formspree (Easiest)**
```typescript
// In ContactRFQ.tsx, update handleSubmit:
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms**
```typescript
<form name="contact" netlify>
```

**Option C: Custom API**
- Build `/api/contact` route
- Send email via SendGrid/Mailgun
- Store in database

**Test:** Submit a test quote and verify you receive it.

---

## 📦 Launch Checklist

### Week Before Launch

- [ ] Generate all 7 PDFs ✳️
- [ ] Create og-image.jpg and twitter-image.jpg ✳️
- [ ] Update phone/email in 3 files ✳️
- [ ] Set up form backend ✳️
- [ ] Test form submission end-to-end
- [ ] Review all content for typos
- [ ] Test on mobile (iPhone, Android)
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Verify all links work
- [ ] Run Lighthouse audit (aim for 90+ score)

### Launch Day

- [ ] Deploy to production (Vercel recommended)
- [ ] Configure domain: terrabitenc.com
- [ ] Enable SSL/HTTPS
- [ ] Set up 301 redirect: terrabite.com → terrabitenc.com
- [ ] Verify site loads at https://terrabitenc.com
- [ ] Submit sitemap to Google Search Console
- [ ] Test form submission on live site
- [ ] Announce on social media / email list

### Week After Launch

- [ ] Monitor Google Search Console for indexing
- [ ] Check form submissions daily
- [ ] Fix any reported bugs
- [ ] Gather user feedback
- [ ] Set up Google Analytics (optional but recommended)

---

## 🚢 Quick Deploy to Vercel

### Prerequisites
```bash
npm install -g vercel
```

### Deploy Steps

```bash
# 1. Build locally to test
npm run build
npm start
# Visit http://localhost:3000 and verify everything works

# 2. Login to Vercel
vercel login

# 3. Deploy to production
vercel --prod

# 4. Configure custom domain
# In Vercel dashboard:
# - Go to Settings > Domains
# - Add: terrabitenc.com
# - Follow DNS instructions
```

**Alternative:** Connect GitHub repo in Vercel dashboard for automatic deployments.

---

## 🧪 Testing Checklist

Before marking launch as complete:

### Navigation
- [ ] All navbar links work (Home, Approach, Resources, Methodology, FAQs)
- [ ] Footer links work
- [ ] Hero CTAs ("Get pilot quote", "See methodology")
- [ ] Resource PDF download links (will work after PDFs added)

### Forms
- [ ] Quote form accepts input
- [ ] Form validation works (required fields)
- [ ] Success message displays
- [ ] Email notification received

### Responsive Design
- [ ] Mobile: Metrics stack vertically
- [ ] Mobile: Nav menu opens/closes
- [ ] Tablet: 2-column layouts work
- [ ] Desktop: Full 3-column layouts
- [ ] No horizontal scroll at any width

### SEO
- [ ] Page title shows in browser tab
- [ ] Meta description present (view page source)
- [ ] OpenGraph tags present (test with https://www.opengraph.xyz/)
- [ ] Twitter card preview works
- [ ] Sitemap.xml accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt

---

## 💡 Pro Tips

### 1. Start with Minimum Viable PDFs
Don't wait for perfect PDFs. Create simplified versions:
- Use Google Docs templates
- Include key formulas and assumptions
- Add "Version 1.0 - To be updated quarterly" note
- Launch with these, refine over time

### 2. Gradual Content Refinement
- Launch with current data (31,000 lb, 1.53 tCO₂e)
- Update metrics monthly as projects complete
- Add new case studies as they finish
- Iterate based on user feedback

### 3. Monitor Form Submissions
- Set up email notifications for new quotes
- Respond within 24 hours (as promised on site)
- Track conversion rate (visitors → quote requests)
- Ask submitters how they found you

### 4. Leverage Analytics
Even without Google Analytics, you can:
- Check Vercel Analytics (built-in)
- Monitor Google Search Console for search queries
- Track email inquiries to see what people ask

---

## 📚 Reference Documents

After launch, refer to these for maintenance:

1. **CONTENT_UPDATE_GUIDE.md** - Monthly/quarterly update tasks
2. **DEPLOYMENT_CHECKLIST.md** - Full pre-launch checklist
3. **REFACTOR_SUMMARY.md** - What changed and why
4. **PDF_CONTENT_TEMPLATES.md** - How to create PDFs

---

## 🆘 Troubleshooting

### "Build fails locally"
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### "Form doesn't submit"
- Check browser console for errors
- Verify form action/backend is configured
- Test with simple HTML form first

### "PDFs not downloading"
- Verify files are in `/public/resources/`
- Check filename matches ResourcesLibrary.tsx
- Clear browser cache

### "Site not indexing in Google"
- Submit sitemap in Search Console
- Check robots.txt isn't blocking
- Request indexing manually
- Wait 1-2 weeks for crawl

---

## 🎉 You're Almost There!

**Current Status:** Website fully built, needs PDFs + images + final testing

**Estimated Time to Launch:**
- With quick PDFs: 8-12 hours
- With polished PDFs: 2-3 days

**Priority Tasks (in order):**
1. Create basic versions of 7 PDFs (4-6 hours)
2. Create og-image and twitter-image (1 hour)
3. Update contact info (5 minutes)
4. Set up form backend (30 minutes)
5. Test everything (2 hours)
6. Deploy to Vercel (30 minutes)
7. Submit to Google Search Console (15 minutes)

---

## 📞 Need Help?

**For website questions:**
- Developer: Sathvik Gorle
- Docs: See REFACTOR_SUMMARY.md

**For PDF creation:**
- See: PDF_CONTENT_TEMPLATES.md
- Tools: Google Docs, Canva, Figma

**For deployment:**
- See: DEPLOYMENT_CHECKLIST.md
- Vercel Docs: https://vercel.com/docs

---

**Ready to launch?** Start with the 4 critical tasks above (PDFs, images, contact info, form backend), then deploy! 🚀

**Last Updated:** October 16, 2025

