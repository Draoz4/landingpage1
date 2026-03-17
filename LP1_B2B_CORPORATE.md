# LANDING PAGE 1: B2B CORPORATE
## Covexall — Business & Facility Decision Makers

> **READ `/DESIGN_RULES.md` BEFORE TOUCHING ANY CODE.**
> Every section below maps to a specific 21st.dev Marketing Block. Follow the inspiration → integrate → refine workflow for EACH section. Build ONE section at a time. Do NOT write raw HTML/CSS.

---

## TARGET AUDIENCE
- Facility managers, office administrators, corporate procurement teams
- Hospitality directors (hotels, resorts, conference centers)
- Gym/fitness center owners
- Property management companies
- Schools and universities
- Anyone buying hand sanitizer in bulk for a facility

## CONVERSION GOAL
Primary: **Get them to fill out a lead capture form** (request bulk pricing / schedule a demo / request free samples)
Secondary: Download the whitepaper PDF

## OUTPUT
Single standalone HTML file: `covexall-b2b-corporate.html`

---

## DESIGN DIRECTION

### Color Palette
```
--primary:        #0A2E1A     (deep forest green — authority, cleanliness)
--primary-light:  #14593A     (mid green)
--accent:         #00D4AA     (Covexall brand teal/green — matches their existing logo)
--accent-glow:    rgba(0, 212, 170, 0.15)
--surface-dark:   #0C1714     (near-black green for backgrounds)
--surface-card:   #112A1F     (card backgrounds)
--text-primary:   #F0F4F2     (off-white)
--text-secondary: #8FA99B     (muted sage)
--warning-gold:   #D4A017     (for stat highlights and badges)
--white:          #FFFFFF
```

### Typography
- Headlines: Use a bold, authoritative serif or geometric sans — something corporate but not boring. Think along the lines of `Playfair Display`, `Fraunces`, or `DM Serif Display` from Google Fonts.
- Body: `DM Sans` or similar clean sans-serif.
- The tone is: professional, data-driven, trustworthy, but not sterile.

### Aesthetic
- Dark theme with green accents (think: clean, clinical authority meets modern tech)
- Subtle gradient backgrounds — NOT flat white corporate
- Data visualizations where possible (comparison charts, stat counters)
- Trust and credibility heavy — logos, certifications, numbers
- NO stock photo aesthetic. Use nanobanana to generate images with: clean commercial interiors, modern office/facility environments, professional product photography feel, cool clinical lighting with green accent tones.

### Image Generation (Nanobanana)
Update the `conversation_id` to `"covexall"` for all images in this project.

**Style guidance for ALL Covexall B2B images:**
- Clean, modern commercial/clinical environments
- Cool-toned lighting with green accent highlights
- Editorial product photography feel
- Facilities, lobbies, healthcare-adjacent settings
- Professional and institutional — NOT consumer/lifestyle
- NO stock photo aesthetic

---

## PAGE STRUCTURE — Build Each Section In Order

---

### SECTION 1: Navigation Bar
**Search query:** `navigation menu`
**Pick:** A clean, minimal dark nav with logo left, links center/right, and a CTA button
**Content to swap in:**
- Logo: Covexall logo (use placeholder, client will provide asset). Text fallback: "COVEXALL" in brand green
- Nav links: `How It Works` | `Why Covexall` | `Industries` | `Data & Testing` | `Contact`
- CTA button (right side): **"Request Bulk Pricing"** → scrolls to lead form

---

### SECTION 2: Hero
**Search query:** `hero section dark` or `hero landing page`
**Pick:** A dark, bold hero with large headline, subtext, and dual CTA buttons. Prefer one with a background gradient or subtle visual effect — NOT a plain white hero.

**Content to swap in:**
- **Headline:** "The Last Hand Sanitizer Your Facility Will Ever Need"
- **Subheadline:** "Water-based. 4-hour continuous protection. One application. Zero alcohol. Covexall's patented microplatelet technology outperforms every alcohol-based sanitizer on the market — and we have the lab data to prove it."
- **CTA Button 1 (primary):** "Request Free Samples" → scrolls to lead form
- **CTA Button 2 (secondary/ghost):** "Download Whitepaper" → links to PDF
- **Hero image/visual:** Generate with nanobanana — a Covexall product bottle (green/white branding) in a modern office lobby or medical facility entrance, clean commercial photography style, 16:9 aspect ratio

---

### SECTION 3: Trust Bar / Client Logos
**Search query:** `clients` or `client logos`
**Pick:** A horizontal scrolling or static logo bar — clean and minimal

**Content to swap in:**
- Label above logos: **"Trusted By Healthcare, Government & Enterprise"**
- Logos/badges to display (use text placeholders with badge styling if no logo files):
  - `FDA Cleared` (with badge icon)
  - `SBA Certified` (Veteran-Owned Small Business)
  - `Service-Disabled Veteran Owned`
  - `BSL-3 Lab Tested` (Arizona State University)
  - `NDC Registered` (National Drug Codes)
  - `Made in USA`

---

### SECTION 4: Problem / Solution — The Alcohol Problem
**Search query:** `comparison` or `features`
**Pick:** A comparison or split-layout block. Ideally a before/after or two-column comparison component.

**Content to swap in:**

**Left column — "The Problem with Alcohol Sanitizers":**
- Evaporate in under 60 seconds — zero residual protection
- Dry and crack skin, creating entry points for pathogens
- Highly flammable — requires special storage and fire code compliance in facilities
- Bacteria are developing tolerance to alcohol-based formulations (cite: Pidot et al., 2018 — hospital E. faecium isolates show decreased alcohol sensitivity)
- Require constant reapplication throughout the day
- Painful on cuts, scrapes, and wounds

**Right column — "The Covexall Advantage":**
- Single application protects for up to 4 continuous hours
- Water-based formula moisturizes skin — no drying, no cracking
- Non-flammable — no fire code restrictions, place dispensers anywhere
- Patented copper-infused microplatelet technology physically destroys pathogens
- Kills 99.9% of bacteria and viruses including C. diff spores, MRSA, SARS-CoV-2
- Hypoallergenic, painless application, safe if accidentally ingested

---

### SECTION 5: How It Works — The Science (Simplified)
**Search query:** `features` or `feature grid`
**Pick:** A 3-column feature card grid with icons

**Content to swap in — 3 cards:**

**Card 1 — "Magnesium Hydroxide Microplatelets"**
- Icon: Shield or molecular structure
- Text: "Nano-scale flat discs (200nm × 100nm × 10nm) with massive surface area. They make direct physical contact with pathogens and mechanically destroy biofilm membranes on contact."

**Card 2 — "Copper Infusion"**
- Icon: Atom or copper symbol
- Text: "Copper ions release on contact — punching holes in bacterial cell membranes, disrupting viral coats, and destroying DNA/RNA inside. Antimicrobial properties proven since ancient times, now engineered at the nano level."

**Card 3 — "Benzalkonium Chloride (BZK)"**
- Icon: Droplet or chemical bond
- Text: "FDA-recommended active ingredient with persistent antibacterial efficacy. Clinical studies show 3.75–4.16 log₁₀ reductions at 1, 2, and 3 hours after a single application."

**Below the cards, add a single line:**
> "Three technologies working in unison. One application. Four hours of continuous, proven protection."

---

### SECTION 6: Data & Testing Results
**Search query:** `texts` or `features`
**Pick:** A stats/metrics block — ideally with large numbers, counters, or a data-rich layout

**Content to swap in — Key stats to display prominently:**

| Stat | Value | Context |
|------|-------|---------|
| Kill Rate | **99.9%** | Against all tested bacterial species at 60-second exposure |
| Protection Duration | **4+ Hours** | Confirmed in BSL-3 certified facility at Arizona State University |
| Log₁₀ Reduction (1hr) | **4.12** | vs. 0.70 for 63% ethanol comparator (P < .001) |
| Log₁₀ Reduction (4hr) | **3.75** | vs. 0.32 for 63% ethanol comparator (P < .001) |
| Bacterial Species Killed | **11 of 11** | Complete kill at 60 seconds — including C. diff spores |
| C. diff Spore Kill | **Complete** | Both 30-second and 60-second exposures — "particularly remarkable" per lab report |

**Footnote text:** "Testing conducted by Microconsult, Inc. (Kill Rate Studies, September 2020) and Arizona State University Biodesign Institute BSL-3 facility (SARS-CoV-2 Duration Study, Dr. Jeffrey Langland, February 2021)."

---

### SECTION 7: Industry Use Cases
**Search query:** `features` or `feature cards`
**Pick:** A grid of 4–6 cards with icons and short descriptions

**Content to swap in:**

| Industry | Headline | Description |
|----------|----------|-------------|
| Healthcare | "Hospitals & Clinics" | "Protect staff and patients from C. diff, MRSA, and HAIs. Non-flammable formula eliminates fire code restrictions on dispenser placement." |
| Hospitality | "Hotels & Resorts" | "Elevate guest confidence with 4-hour protection at check-in, spa, dining, and fitness areas. Premium product, premium experience." |
| Corporate | "Offices & Coworking" | "Reduce sick days and shared-surface transmission. One dispenser pump protects employees through the entire morning or afternoon." |
| Fitness | "Gyms & Studios" | "Members touch dozens of shared surfaces per session. One application before their workout protects them the entire time." |
| Education | "Schools & Universities" | "Non-toxic, alcohol-free, safe if ingested — ideal for K-12 environments. Eliminates the drying and burning students hate." |
| Government | "Federal & Military" | "SBA-certified, veteran-owned, service-disabled veteran classified. Eligible for government procurement and set-aside contracts." |

---

### SECTION 8: Bulk Packaging & Delivery
**Search query:** `features` or `texts`
**Pick:** A clean feature list or text block

**Content to swap in:**
- **Headline:** "Packaging Built for Facilities at Any Scale"
- **Available formats:**
  - 1 oz airless pumps (personal/desk use)
  - 4 oz squeeze bottles (mobile staff)
  - Automatic dispenser bladders (wall-mount stations)
  - 5-gallon pails
  - 25-gallon totes
  - 50-gallon totes
  - 250-gallon totes
  - Custom packaging available
- **Production capacity:** 200,000+ gallons per day per shift, with expansion underway
- **Shipping:** Domestic and international. Non-hazmat (water-based, non-flammable) simplifies logistics.

---

### SECTION 9: Lead Capture CTA
**Search query:** `call to action` or `CTA section`
**Pick:** A bold, dark CTA section with a form or prominent button. This is the money section.

**Content to swap in:**
- **Headline:** "See Why Facilities Are Making the Switch"
- **Subtext:** "Request free samples, get bulk pricing, or schedule a 15-minute demo call with our team."
- **Form fields:**
  - Full Name
  - Company / Organization
  - Email
  - Phone (optional)
  - Facility Type (dropdown): Healthcare / Hospitality / Corporate Office / Fitness / Education / Government / Other
  - Estimated Monthly Volume (dropdown): Under 100 units / 100–500 / 500–2,000 / 2,000–10,000 / 10,000+
  - Message (optional textarea)
- **Submit button:** "Get My Free Samples"
- **Below form note:** "We'll respond within 1 business day. No spam, no nonsense."

---

### SECTION 10: FAQ
**Search query:** `accordion FAQ`
**Pick:** An accordion-style FAQ component

**Content to swap in:**

**Q: Is Covexall FDA approved?**
A: Covexall has received FDA clearance with National Drug Codes (NDC). Safety profile testing confirmed no toxicity for use in humans. Our manufacturing partners maintain full FDA compliance.

**Q: How does the 4-hour protection actually work?**
A: Unlike alcohol sanitizers that evaporate in seconds, Covexall's copper-infused magnesium hydroxide microplatelets physically bond to the skin surface and continuously destroy pathogens on contact for up to 4 hours. This has been verified in BSL-3 certified facilities at Arizona State University.

**Q: Is it safe for all skin types?**
A: Yes. Covexall is hypoallergenic, water-based, and moisturizing. It will not dry or crack skin. It is painless on cuts and wounds, and non-toxic if accidentally ingested — making it safe for use around children.

**Q: What pathogens does it kill?**
A: Independent lab testing confirmed complete kill (all organisms from >10⁵ CFU/mL) against 11 bacterial species at 60-second exposure, including Clostridium difficile (C. diff) spores, MRSA, E. coli, and SARS-CoV-2. The C. diff spore kill is particularly significant — most alcohol sanitizers cannot kill C. diff spores at all.

**Q: Is it flammable?**
A: No. Covexall is 100% water-based and non-flammable. This eliminates fire code restrictions that apply to alcohol-based sanitizers in healthcare and commercial facilities, allowing you to place dispensers wherever they're needed most.

**Q: What are the minimum order quantities?**
A: Contact us for pricing at any scale — from cases of 1 oz pumps to 250-gallon tote shipments. We work with facilities of all sizes.

**Q: Is your company veteran-owned?**
A: Yes. Impact Diversity Solutions, Inc. is SBA-certified as both a Veteran-Owned and Service-Disabled Veteran-Owned Small Business, qualifying for government set-aside contracts and veteran procurement programs.

---

### SECTION 11: Footer
**Search query:** `footer`
**Pick:** A dark, clean footer with columns

**Content to swap in:**
- **Column 1 — Brand:**
  - Covexall logo
  - "A product of Impact Diversity Solutions, Inc."
  - "5050 N. 40th, Suite 110, Phoenix, AZ 85018"
- **Column 2 — Quick Links:**
  - How It Works
  - Data & Testing
  - Industries
  - Request Samples
  - Download Whitepaper
- **Column 3 — Contact:**
  - Email: cbrown@impactdiversity.com
  - Phone: (480) 434-6050
  - LinkedIn (link placeholder)
- **Bottom bar:**
  - "© 2025 Impact Diversity Solutions, Inc. All Rights Reserved."
  - "FDA Cleared | SBA Certified | Veteran-Owned"

---

## FINAL NOTES FOR CLAUDE CODE

1. **Build one section at a time.** Do NOT attempt to generate the entire page in one pass.
2. **Follow the DESIGN_RULES.md workflow for EVERY section:** inspiration → integrate content → refine.
3. **Dark theme throughout.** This is a premium B2B page — it should feel authoritative, data-rich, and modern. NOT white corporate template energy.
4. **Mobile responsive.** Test at 375px, 768px, and 1440px.
5. **All images generated via nanobanana** with `conversation_id: "covexall"`. Set aspect ratios appropriately per section (16:9 for hero, 4:3 for cards, 1:1 for icons).
6. **The lead form is the most important element.** Make sure the CTA section is visually dominant and the form is functional.
7. **Output file:** `covexall-b2b-corporate.html` — single self-contained HTML file, no external dependencies except Google Fonts and any CDN assets.
