# Partner Brands Smooth Auto-Sliding Carousel (Button-Free)

Upgrade **Our partner brands** to a clean, button-free auto-sliding carousel powered by an animated slide track and refined clickable progress dots.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed they are **not comfortable with Prev and Next buttons** and selected **smooth auto-sliding with clickable progress dots**. Prev/Next arrow buttons will be completely omitted for a clean, minimalist layout.

- **Button-Free Design**: Zero arrow buttons. The layout remains clean, balanced, and uncluttered.
- **Motion & Sliding**: Uses a continuous horizontal slide track (`transform: translateX(-${active * 100}%)`) with smooth CSS transition curves (`cubic-bezier(0.25, 1, 0.5, 1)`).
- **Control Mechanism**: High-visibility clickable gold progress dots beneath the logos, allowing instant page selection.
- **Auto-Play**: Automatic progression every 4.5 seconds with graceful pause on hover/touch.
- **Preserved Components**: The premier hotel clients static grid and all other site sections remain completely untouched.

---

### 1. Root Cause & Architecture Upgrade

1. **Why the previous version failed to work**:
   - The original component replaced the DOM elements in place (`groups[active]`) rather than sliding a track. When images swapped, it felt like a glitch rather than a carousel.
   - Mouse hover or focus events would freeze the timer indefinitely.
2. **Upgraded Implementation**:
   - Render all brand groups side-by-side in an `overflow: hidden` sliding track.
   - Smoothly animate the track's horizontal offset based on the active index.
   - Reliable auto-play timer that cycles through all partner groups (0 to N-1) smoothly.
   - Refined clickable progress indicator dots with gold active expansion and subtle hover feedback.

---

### 2. User Experience & Visual Design

- **Slide Track**:
  - Viewport container with `width: 100%; overflow: hidden; position: relative`.
  - Internal track with `display: flex; transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)`.
  - Each slide is `flex: 0 0 100%` and houses 6 partner brand cards in a balanced responsive row.
- **Clickable Progress Dots**:
  - Centered below the carousel with comfortable tap targets (accessible and easy to click).
  - Inactive dots: subtle translucent gold rings/dots (`rgba(226, 170, 53, 0.35)`).
  - Active dot: expands into a luminous gold pill (`rgba(226, 170, 53, 1)` with subtle glow).
- **Hover & Touch**:
  - Pauses auto-sliding when the user hovers over a logo to inspect it, resuming automatically when the cursor leaves.

---

### 3. File Changes

- `app/partner-carousel.tsx`:
  - Implement full-track sliding layout for the partner variant (`transform: translateX(-${active * 100}%)`).
  - Auto-play effect with interval and pause-on-hover.
  - Interactive pagination dots without any prev/next buttons.
  - Keep the `variant === "clients"` static premier hotel grid intact.
- `app/globals.css`:
  - Add styles for `.partner-slider-viewport`, `.partner-slider-track`, `.partner-slide`, and updated `.partner-carousel-controls`.
  - Ensure zero collision with existing classes.
