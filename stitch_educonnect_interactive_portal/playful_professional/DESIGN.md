---
name: Playful Professional
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#424656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cea700'
  on-tertiary-container: '#4e3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffe083'
  tertiary-fixed-dim: '#eec200'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

This design system balances the rigorous requirements of educational administration with the spirited energy of a classroom. The brand personality is **Encouraging, Organized, and Accessible**, aiming to reduce the cognitive load for teachers while providing a safe, motivating environment for students.

The design style is **Modern Tactile**, a hybrid of high-quality Corporate Modern and soft, playful aesthetics. It prioritizes clarity and whitespace to ensure heavy data (grades, attendance) remains legible, while using vibrant accents and soft geometry to maintain a friendly, non-intimidating atmosphere. The emotional goal is to foster a sense of "organized wonder"—where every task feels manageable and every achievement feels celebrated.

## Colors

The palette is anchored by **Trustworthy Blue** (Primary) to establish authority and reliability in administrative contexts. **Teal** (Secondary) provides a calming, modern transition between the primary blue and the more energetic accents.

Energetic accents like **Sunshine Yellow**, **Soft Orange**, and **Leaf Green** are used sparingly for interactive elements, progress indicators, and celebratory feedback (e.g., badges or completed states). 

- **Primary Blue:** Used for main actions, headers, and navigation.
- **Teal:** Used for secondary actions and supportive UI elements.
- **Accents:** Reserved for "Moments of Joy"—completion states, notifications, and student-facing interactive components.
- **Neutrals:** A slate-based neutral scale ensures high legibility and a clean, professional backdrop.

## Typography

The typography strategy uses a "Dual-Tone" approach:
1. **Quicksand** is the display and heading font. Its rounded terminals and geometric shapes provide an approachable, friendly character that appeals to children and softens the administrative feel for adults.
2. **Inter** is the workhorse font for body copy, data tables, and forms. Its high x-height and exceptional legibility ensure that grading rubrics and reports are easy to read.

Maintain generous line-heights (1.5x for body) to ensure the text feels "breezy" and accessible to younger readers or tired educators.

## Layout & Spacing

The design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

A "Comfortable" spacing rhythm is applied to prevent the UI from feeling cramped. Administrative dashboards should use a tighter adherence to the 8px grid (8, 16, 24), while student-facing lesson pages should increase whitespace (32, 40, 64) to focus attention on a single task at a time.

- **Desktop:** 12 columns / 24px gutter / 32px side margins.
- **Tablet:** 8 columns / 24px gutter / 24px side margins.
- **Mobile:** 4 columns / 16px gutter / 16px side margins.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** supplemented by **Ambient Shadows**. Surfaces are designed to feel like soft physical cards.

- **Level 0 (Background):** Solid `#F8FAFC`. Used for the main canvas.
- **Level 1 (Cards/Surface):** Solid White with a subtle 1px border (`#E2E8F0`).
- **Level 2 (Interactive):** Uses a soft, diffused shadow (`Y: 4, Blur: 12, Opacity: 0.05, Color: Primary Blue`) to indicate hover states or floating action buttons.
- **Active States:** Elements may appear "pressed" by removing the shadow and applying a slightly darker inner tint, reinforcing the tactile nature of the system.

Avoid harsh black shadows; always tint shadows with the primary or neutral-blue color to maintain a clean, modern aesthetic.

## Shapes

The shape language is defined by **High Circularity**. 

- **Base Components (Buttons, Inputs):** 12px (`0.75rem`) corner radius. This provides a soft touch-point that feels safe for younger users.
- **Containers (Cards, Modals):** 24px (`1.5rem`) corner radius. These large radii help distinct content blocks stand out and feel friendly.
- **Selection Indicators:** Fully pill-shaped (`999px`) for chips, badges, and progress bars.

The consistent use of rounded corners removes "visual sharpness," aligning with the brand's goal of being approachable and non-threatening.

## Components

### Buttons & Chips
- **Primary Buttons:** High-contrast Blue with white text. Use bold Quicksand for the label. On hover, the button should lift slightly (Elevation L2).
- **Secondary Buttons:** White background with a Teal 2px border. 
- **Chips:** Pill-shaped with light background tints (e.g., Light Green for "Completed", Light Orange for "In Progress").

### Cards
- Standard cards use the 24px corner radius. In student views, cards can include a "Top Accent Bar" (5px thick) in a vibrant color to categorize subjects (e.g., Green for Science, Blue for Math).

### Form Elements
- **Inputs:** 12px rounded corners with a 2px border. The border should turn Primary Blue on focus.
- **Checkboxes/Radios:** Oversized (min 24px x 24px) to be "touch-friendly" for smaller hands and to provide clear visual feedback.

### Progress & Feedback
- **Progress Bars:** Thick (12px height), fully rounded, using a vibrant gradient or solid Primary Blue.
- **Badges:** Circular icons with subtle "wiggle" animations on achievement to provide playful, rewarding feedback.
- **Icons:** Use "Duotone" style icons with rounded ends to match the Quicksand typeface.