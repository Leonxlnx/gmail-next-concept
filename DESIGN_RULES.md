# GMAIL PROJECT NEXT: DESIGN RULES ("Google Unbound")
**Version:** 1.0.0 | **Theme:** "Google Unbound"
**Philosophy:** Familiar DNA, Hyper-Fluid Execution.

---

## 1. CORE PHILOSOPHY
We are not building a utility; we are building an experience. The interface should feel "alive."
- **Kinetic:** Nothing simply "appears." Everything flows, slides, or expands.
- **Playful yet Premium:** Use the Google colors, but treat them as vibrant accents, not heavy blocks.
- **Depth over Flat:** Use subtle Z-axis layering (glass, shadows, 3D tilts) to break the traditional Material Design flatness.

---

## 2. COLOR PALETTE (The "Vibrant" Google)
Standard Google colors are flat. Ours are illuminated. Use gradients and "glows" sparingly to highlight key actions.

### Primary Brand Colors
- **Google Blue:** `#1A73E8` (Action / Links)
  - *Creative Twist:* Use a linear gradient for buttons: `linear-gradient(135deg, #1A73E8 0%, #4285F4 100%)`
- **Google Red:** `#EA4335` (Alerts / Important)
- **Google Yellow:** `#FBBC04` (Highlights / Stars)
- **Google Green:** `#34A853` (Success / Security)

### Surfaces & Backgrounds
- **Base White:** `#FFFFFF` (Cleanliness)
- **Surface Off-White:** `#F8F9FA` (Sections)
- **Glass Surface:** `rgba(255, 255, 255, 0.7)` with `backdrop-filter: blur(20px)`
- **Text Primary:** `#202124` (Almost Black)
- **Text Secondary:** `#5F6368` (Grey)

---

## 3. TYPOGRAPHY
Clean, geometric, readable. But we play with **Scale**.

**Font Family:** `Google Sans` (Primary) / `Inter` (Fallback).

### Hierarchy Rules
- **Display XL (Hero):** 96px / Line-height: 1.05 / Tracking: -2.5px
  - *Rule:* Use for the "Inbox, perfected" headline. Tight tracking makes it feel premium.
- **Heading L:** 64px / Line-height: 1.1 / Tracking: -1.5px
- **Body L:** 20px / Line-height: 1.6 / Regular weight
  - *Rule:* High readability. Never go below 16px for body text.
- **Micro-Labels:** 12px / Uppercase / Letter-spacing: 1px / Bold

---

## 4. LAYOUT & GRID (The "Bento" Approach)
Forget the standard 12-column bootstrap grid. We use a **Modular Bento Grid**.

- **Container Width:** Max 1440px (Fluid).
- **Gap:** 24px (Mobile) / 48px (Desktop).
- **Cards:** All content sits in "Cards" with rounded corners.
- **Corner Radius:**
  - Standard Cards: `24px` (Smooth, like iOS/Material 3)
  - Buttons: `999px` (Pill shape)
  - Inner Elements: `12px`

---

## 5. UI COMPONENTS (Reimagined)

### Buttons (The "Juice")
Don't just change color on hover. Change physics.
- **State: Default:** Blue Pill, subtle shadow `0 4px 6px rgba(26, 115, 232, 0.2)`.
- **State: Hover:** Scale up 1.05x, Shadow grows and diffuses (Glow effect).
- **State: Active:** Scale down 0.95x (Tactile feedback).

### The "Glass" Navbar
- Sticky top.
- Background: Transparent with heavy blur (`backdrop-filter: blur(16px)`).
- Border-bottom: `1px solid rgba(0,0,0,0.05)`.
- *Animation:* When scrolling down, the navbar shrinks in height.

### Feature Cards (Bento Style)
- Background: `#F1F3F4` (Light Grey) or White with Shadow.
- Hover Effect: The card lifts (`translateY(-8px)`), shadow deepens, and internal images slightly zoom (`scale(1.02)`).

---

## 6. MOTION & ANIMATION GUIDELINES (The "Krass" Factor)
This is where we differentiate from standard Google.

### Physics (Springs)
Never use `linear` easing. Everything must feel like it has mass.
- **Spring preset:** `stiffness: 100`, `damping: 20`, `mass: 1`. (Snappy but smooth).

### Scroll-Triggered Effects (Scrollytelling)
1. **Parallax:** Background elements move slower than foreground text.
2. **Reveal:** Elements do not just fade in. They:
   - *Slide Up + Fade In* (Y: 40px -> 0px).
   - *Stagger:* If there is a list, items appear one by one with 100ms delay.
3. **The "3D Tilt":** The Hero Image (Laptop/Phone) should subtly rotate based on mouse position (Gyro effect).

### Micro-Interactions
- **Cursor:** Custom cursor blend mode? (Optional, but "cool").
- **Typing Effect:** For the "Smart Compose" section, actually animate the text being typed out character by character.

---

## 7. VISUAL ASSETS (Imagery)
- **Device Mockups:** High-fidelity, clay-style or realistic titanium frames. No flat vectors.
- **Abstract Shapes:** Use Google Colors in abstract 3D floating blobs (Spline 3D style) in the background. They should slowly morph/rotate.
- **Shadows:** Multi-layered shadows for depth.
  - *CSS:* `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);`

---

## 8. IMPLEMENTATION STACK
- **Framework:** React / Next.js
- **Styling:** Tailwind CSS (for speed)
- **Animation:** Framer Motion (React) or GSAP (for heavy timeline sequencing).
- **3D Elements:** Spline or Three.js (React Three Fiber).
