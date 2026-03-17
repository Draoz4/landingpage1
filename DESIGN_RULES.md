# DESIGN RULES — READ BEFORE WRITING ANY CODE

## MANDATORY: 21st.dev Marketing Blocks & UI Components

You are FORBIDDEN from writing raw HTML/CSS sections. Every page section MUST use a pre-built component from 21st.dev's library.

### 21st.dev has TWO sections. You MUST use BOTH:

**1. Marketing Blocks** — These are full, pre-designed page sections. USE THESE for every major section of the website:
- **Heroes** (73 available) — for hero/landing sections
- **Features** (36 available) — for feature grids, what's included, what we offer
- **Pricing Sections** (17 available) — for pricing cards and tiers
- **Calls to Action** (34 available) — for CTA sections and booking prompts
- **Testimonials** (15 available) — for reviews and quotes
- **Footers** (14 available) — for page footers
- **Backgrounds** (33 available) — for section backgrounds and textures
- **Comparisons** (6 available) — for before/after, with/without sections
- **Clients** (16 available) — for partner logos and trust bars
- **Announcements** (10 available) — for banners and alerts
- **Navigation Menus** (11 available) — for navbar/header
- **Scroll Areas** (24 available) — for scroll-triggered animations
- **Texts** (58 available) — for text-heavy content sections
- **Images** (26 available) — for image galleries and showcases
- **Videos** (9 available) — for video embeds and backgrounds
- **Shaders** (15 available) — for visual effects and gradients
- **Hooks** (31 available) — for interactive behaviors
- **Borders** (12 available) — for decorative borders and dividers
- **Docks** (6 available) — for floating navigation docks
- **Maps** (2 available) — for location displays

**2. UI Components** — These are individual interface elements. Use these INSIDE the Marketing Blocks:
- **Accordions** (40) — for FAQ sections
- **Buttons** (130) — for CTAs and actions
- **Cards** (79) — for content cards within grids
- **Badges** (25) — for status indicators and labels
- **Calendars** (34) — for date selection
- **Alerts** (23) — for notifications and warnings
- **Avatars** (17) — for team photos and user icons
- **AI Chats** (30) — for chat interfaces

### THE WORKFLOW — Follow this EXACT sequence for EVERY section:

**Step 1: BROWSE the Marketing Blocks library.**
Call `@21st-dev/magic:21st_magic_component_inspiration` with a search query matching the Marketing Block category. This tool RETURNS THE ACTUAL COMPONENT CODE from 21st.dev's library. It does NOT generate new code — it fetches real, pre-built, professionally designed components.

Use these EXACT search terms:

| Section You're Building | Search Query to Use |
|---|---|
| Hero / Landing | `hero` or `hero section dark` or `hero landing page` |
| Navigation | `navigation menu` |
| Feature grid / What's included | `features` or `feature grid` or `feature cards` |
| Pricing | `pricing section` or `pricing cards` or `pricing table` |
| Call to action | `call to action` or `CTA section` |
| FAQ | `accordion FAQ` |
| Testimonials / Reviews | `testimonials` or `testimonial carousel` |
| Footer | `footer` |
| Before/After comparison | `comparison` |
| Partner/Client logos | `clients` or `client logos` |
| Team section | `clients` or `features` |
| Background effects | `background` or `shader` |
| Image gallery | `images` or `image gallery` |
| Process / Timeline steps | `features` |
| Blog article grid | `cards` |
| Stats / Metrics | `texts` or `features` |
| Announcement banners | `announcements` |
| Scroll animations | `scroll areas` |

**Step 2: USE the returned component code directly.**
The `inspiration` tool returns the actual code for pre-built Marketing Block components. Take that code and integrate it into your file. Swap in the project's specific content (text, colors, images) but KEEP the component's structure, animations, and layout. Do NOT rewrite it from scratch.

**Step 3: ONLY use `21st_magic_component_builder` if no existing Marketing Block fits.**
The builder tool GENERATES NEW CODE — it does not fetch existing components. Only use it as a fallback when the inspiration search returned nothing suitable. In most cases, the existing Marketing Blocks will be better than anything the builder generates.

**Step 4: Refine with `21st_magic_component_refiner`.**
After integrating the component, call the refiner on the file to polish colors, spacing, and match the project's design system.

### CRITICAL: DO NOT DO THIS (what has been happening):

❌ Skip the `inspiration` step and go straight to `builder`
❌ Use `builder` to generate a hero from scratch (there are 73 pre-built heroes in the library)
❌ Use `builder` to generate pricing cards from scratch (there are 17 pre-built pricing sections)
❌ Use `builder` to generate feature grids from scratch (there are 36 pre-built feature blocks)
❌ Treat `builder` as the primary tool — it should be the FALLBACK, not the default

### CORRECT: DO THIS INSTEAD:

✅ Call `inspiration` with searchQuery "hero" → get back a real pre-built hero component
✅ Take that component code and swap in your headline, subtext, CTA, and colors
✅ Call `refiner` to polish it
✅ Result: a premium, professionally designed section — not custom HTML

✅ Call `inspiration` with searchQuery "pricing section" → get back a real pre-built pricing layout
✅ Swap in your $6,000 / $6,500 / $7,000 tiers and content
✅ Call `refiner` to match palette
✅ Result: pricing that looks like it came from a design agency

### SUMMARY:
- `inspiration` = BROWSE the library, GET existing components (USE THIS FIRST, ALWAYS)
- `builder` = GENERATE new code from scratch (FALLBACK ONLY)
- `refiner` = POLISH an existing component in your codebase



### WHAT GOOD LOOKS LIKE:

Building a pricing section:
1. Call `21st_magic_component_inspiration` with searchQuery: `pricing section`
2. Get back the code for a pre-built pricing block from 21st.dev
3. Copy that component into your project
4. Replace the placeholder text with our $6,000 / $6,500 / $7,000 tiers
5. Call `21st_magic_component_refiner` to match our color palette
6. Done — looks like a premium design agency built it

Building a hero:
1. Call `21st_magic_component_inspiration` with searchQuery: `hero`
2. Get back several pre-built hero component options
3. Pick the dark, luxury-feeling one with gradient background
4. Copy it in, swap headline to "Healing Has a Destination", add our CTA
5. Refine colors to match palette
6. Done — animated, polished, professional

Building a feature grid:
1. Call `21st_magic_component_inspiration` with searchQuery: `features`
2. Get back pre-built feature grid layouts with icons and descriptions
3. Pick the one with the best grid layout for 9-10 items
4. Swap in our content (the 10 things we build for resorts, or the 9 all-inclusive items)
5. Refine
6. Done

## Image Generation (Nanobanana Pro)

Follow this exact workflow for generating images:

**Step 1: Set the aspect ratio for the session FIRST.**
Call `nanobanana-mcp:set_aspect_ratio` before generating any images:
- Hero images: `aspect_ratio: "16:9"`, `conversation_id: "nutricove"`
- Card/feature images: switch to `aspect_ratio: "4:3"`
- Team headshots/avatars: switch to `aspect_ratio: "1:1"`
- Mobile hero: switch to `aspect_ratio: "9:16"`

**Step 2: Generate the first image with a conversation_id.**
Call `nanobanana-mcp:gemini_generate_image`:
- `prompt`: detailed description of the image
- `conversation_id`: `"nutricove"` (same ID for ALL images across the project)
- `enable_google_search`: `true` (for real-world reference grounding)

**Step 3: All subsequent images — enable image history for visual consistency.**
Call `nanobanana-mcp:gemini_generate_image`:
- `conversation_id`: `"nutricove"` (same as step 2)
- `use_image_history`: `true` (this makes all images match the same visual style — lighting, color grading, mood)
- `prompt`: next image description

**Step 4: If an image is close but needs tweaks — EDIT, don't regenerate.**
Call `nanobanana-mcp:gemini_edit_image`:
- `image_path`: `"last"` (references the most recent image) or `"history:0"`, `"history:1"` for specific images
- `edit_prompt`: describe what to change (e.g., "make the lighting warmer", "remove the person on the right", "add palm trees")
- `conversation_id`: `"nutricove"`

**Step 5: If one image came out perfect and you want ALL future images to match its style:**
Call `nanobanana-mcp:gemini_generate_image`:
- `reference_images`: `["/path/to/the-perfect-image.png"]`
- `use_image_history`: `true`
- This ensures every subsequent image matches that specific look

**Step 6: If unsure about a prompt, chat with Gemini first.**
Call `nanobanana-mcp:gemini_chat`:
- `message`: "I need an image for [section]. The palette is [colors]. What composition would be most striking?"
- Use the response to craft a better generation prompt

**Style guidance for ALL NutriCove images:**
- Warm golden hour lighting
- Luxury wellness aesthetic, editorial photography feel
- Cinematic composition
- Natural materials, tropical settings
- Soft focus backgrounds where appropriate
- NO stock photo aesthetic — these should feel like a professional photographer shot them on location

## Screen Design Reference

Use `stitch:generate_screen_from_text` to generate desktop mockups BEFORE coding. Build to match the design.

## Build One Section at a Time

Do NOT try to build an entire page in one pass. Build each section individually following the 5-step workflow above. This ensures every section uses a proper Marketing Block from 21st.dev instead of falling back to generic code.
