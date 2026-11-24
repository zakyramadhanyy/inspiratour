# DESIGN.md — INSPIRATOUR

> Brand-Preserved Visual System  
> Direction: Modern Travel Editorial × Premium Adventure × Playful Minimalism

---

## 01. DESIGN IDENTITY

### Product Identity

Inspiratour is a modern travel platform designed to help people discover destinations, explore travel experiences, and find journeys that match their interests.

The visual experience should communicate:

- Professional and trustworthy.
- Playful and adventurous.
- Inspiring and visually engaging.
- Premium but approachable.
- Clear and easy to navigate.

### Core Visual Direction

Combine three visual characteristics:

**01 — Outdoor Editorial**
- Nature-inspired photography.
- Strong editorial typography.
- Minimal interface decoration.
- Natural visual atmosphere.
- Spacious presentation.

**02 — Premium Travel**
- Refined typography hierarchy.
- Elegant visual compositions.
- Warm and inviting atmosphere.
- Sophisticated image treatment.
- Carefully controlled visual details.

**03 — Modern Adventure**
- Contemporary interface elements.
- Rounded components.
- Immersive photography.
- Playful interactive details.
- Smooth and natural motion.

### Brand Personality

| Attribute | Direction |
|---|---|
| Professional | High |
| Playful | Medium |
| Adventurous | High |
| Premium | Medium–High |
| Minimal | High |
| Friendly | High |

### Important Brand Rule

Inspiratour's existing brand identity must remain recognizable.

Do not redesign the brand identity just to match the visual references.

The existing brand is the foundation. The references are only used to improve visual quality, presentation, and interaction.

---

## 02. BRAND COLOR SYSTEM

### Existing Brand Preservation

Before implementing any visual changes, inspect the existing Inspiratour website and codebase.

Identify:
- Existing primary brand color.
- Existing secondary brand color.
- Existing accent color.
- Existing background colors.
- Existing typography colors.
- Existing gradients, if any.
- Logo colors and brand assets.

Use the existing brand colors as the source of truth.

Do not introduce an unrelated color palette.

### Semantic Color Tokens

Map existing brand colors into the following semantic roles:

| Token | Usage |
|---|---|
| Primary | Main brand identity and primary actions |
| Primary Hover | Hover and active states |
| Secondary | Supporting brand elements |
| Accent | Highlights and important visual emphasis |
| Background | Main page background |
| Surface | Cards, panels, and containers |
| Surface Muted | Secondary content surfaces |
| Text Primary | Main headlines and body text |
| Text Secondary | Descriptions and supporting information |
| Border | Dividers and subtle boundaries |
| Overlay | Image overlays and text readability |

### Color Application Rules

- Preserve the original brand primary color.
- Use the accent color selectively.
- Keep backgrounds neutral when appropriate.
- Use subtle tonal variations from existing brand colors.
- Maintain sufficient contrast between text and surfaces.
- Avoid excessive gradients and decorative colors.
- Do not use color as the only indicator of information.

### Photography Color Direction

Photography should feel natural, vibrant, and cinematic.

Preferred visual characteristics:
- Natural lighting.
- Rich environmental colors.
- Authentic travel moments.
- Beautiful landscape composition.
- Realistic color grading.
- Balanced highlights and shadows.

Avoid artificial saturation and excessive filters.

---

## 03. TYPOGRAPHY

### Font Strategy

Use ONE primary font family.

Priority:
1. Existing font used by Inspiratour.
2. Existing brand typography defined in the project.
3. If no font is established, select a modern sans-serif family that matches the brand personality.

Do not introduce multiple unrelated font families.

### Typography Characteristics

- Modern.
- Clean.
- Professional.
- Friendly.
- Editorial.
- Highly readable.

### Typography Hierarchy

| Element | Visual Treatment |
|---|---|
| Hero Heading | Large, expressive, confident |
| Section Heading | Clear and editorial |
| Card Heading | Medium and readable |
| Body Text | Regular and comfortable |
| Caption | Small and subtle |
| Navigation | Compact and clean |
| Labels | Small with controlled emphasis |

### Font Weight

| Weight | Usage |
|---|---|
| 400 Regular | Body, descriptions, large numbers |
| 500 Medium | Navigation and supporting text |
| 600 Semibold | Section headings and card titles |
| 700 Bold | Important headlines only |

### Special Typography Rules

- Large numerical displays must use Regular 400.
- Avoid excessive bold typography.
- Use tight line-height for large headings.
- Use comfortable line-height for paragraphs.
- Establish hierarchy through size, weight, and spacing.
- Avoid unnecessary uppercase text.
- Use editorial typography without sacrificing readability.

### Suggested Type Scale

| Element | Desktop |
|---|---:|
| Hero | 64–88px |
| Section Heading | 36–48px |
| Card Heading | 22–28px |
| Body | 15–17px |
| Caption | 12–14px |
| Navigation | 13–15px |

Scale typography responsively for smaller screens.

---

## 04. COMPONENT DESIGN SYSTEM

### 4.1 Cards

Cards should feel lightweight, modern, and premium.

Visual properties:
- Border radius: 16–24px.
- Clean surfaces.
- Subtle borders.
- Minimal shadows.
- Balanced internal spacing.
- Strong image presentation.

Use different treatments when appropriate:
- Destination cards.
- Travel experience cards.
- Package cards.
- Information cards.
- Promotional cards.
- Editorial image cards.

Avoid making every card look identical.

### 4.2 Buttons

Buttons should be recognizable, approachable, and easy to interact with.

**Primary Button**
- Existing brand primary or accent color.
- High contrast.
- Rounded or pill-shaped.
- Medium typography weight.
- Comfortable padding.
- Clear action label.

**Secondary Button**
- Neutral or transparent surface.
- Subtle border.
- Clear visual distinction.

**Icon Button**
- Circular or rounded-square.
- Minimal appearance.
- Clear interaction state.

Interaction states:
- Default.
- Hover.
- Active.
- Focus.
- Disabled.
- Loading.

Use smooth transitions around 200–300ms.

### 4.3 Navigation

Navigation should be minimal and intuitive.

- Clean typography.
- Comfortable spacing.
- Clear active state.
- Consistent brand identity.
- Distinct primary action.
- Responsive mobile navigation.

Avoid excessive decoration.

### 4.4 Charts

Charts should be functional and easy to understand.

Visual direction:
- Minimal gridlines.
- Rounded bars.
- Subtle transitions.
- Clear numerical labels.
- Existing brand colors for primary data.
- Neutral colors for supporting data.

Never use charts purely as decoration.

### 4.5 Meters & Indicators

Use simple and refined indicators.

- Rounded progress tracks.
- Minimal visual noise.
- Clear progress states.
- Existing brand colors for active values.
- Neutral background for inactive values.
- Readable numerical values.

### 4.6 Badges & Tags

- Rounded pill shapes.
- Compact typography.
- Subtle backgrounds.
- Clear semantic meaning.
- Minimal decoration.

Use badges for relevant information such as travel categories, availability, and experience levels.

### 4.7 Image Treatment

Photography is a major part of the Inspiratour visual experience.

Image guidelines:
- Prioritize high-quality destination photography.
- Use natural and authentic travel imagery.
- Maintain consistent image quality.
- Use appropriate aspect ratios.
- Apply rounded corners selectively.
- Avoid unnecessary image overlays.
- Maintain text readability when overlaying images.

Images should communicate the destination and create an emotional connection.

---

## 05. SPACING & DENSITY

### Density Direction

**Medium — Spacious Editorial**

The interface should feel spacious, informative, and visually balanced.

Avoid:
- Overcrowded content.
- Excessive decorative elements.
- Too many cards competing for attention.
- Long paragraphs without visual breaks.
- Inconsistent spacing.

Prioritize:
- Clear information grouping.
- Generous whitespace.
- Strong visual hierarchy.
- Balanced photography and typography.
- Consistent component spacing.

### Spacing System

Use an 8px-based spacing scale.

| Token | Value |
|---|---:|
| XS | 8px |
| SM | 16px |
| MD | 24px |
| LG | 32px |
| XL | 48px |
| 2XL | 64px |
| 3XL | 96px |

Larger spacing should separate major content groups. Smaller spacing should connect related elements.

---

## 06. DESIGN DIALS

### ENERGY — 2/3

Professional but adventurous.

- Expressive photography.
- Strong visual hierarchy.
- Selective accent colors.
- Playful micro-details.
- Avoid overly corporate or childish styling.

### RHYTHM — 2/3

Balanced editorial composition.

- Vary image proportions.
- Mix large and small typography.
- Use whitespace as visual pauses.
- Balance visual and informational content.
- Avoid repetitive visual patterns.

### MOTION — 2/3

Smooth, natural, and purposeful.

- Subtle entrance animations.
- Smooth scroll reveals.
- Gentle image zoom.
- Soft hover interactions.
- Natural easing.
- Small interactive feedback.

Motion should enhance the experience without distracting users.

Respect reduced-motion preferences and maintain performance.

---

## 07. RESPONSIVE DESIGN

The visual identity must remain consistent across desktop, tablet, and mobile.

### Desktop
- Spacious content presentation.
- Strong editorial typography.
- Large destination photography.
- Balanced content density.
- Refined interaction details.

### Tablet
- Adapt component proportions.
- Maintain typography hierarchy.
- Reduce unnecessary whitespace.
- Preserve image quality.

### Mobile
- Prioritize readability.
- Simplify complex component arrangements.
- Use comfortable touch targets.
- Maintain clear navigation.
- Avoid excessively small text.
- Keep photography visually engaging.

Use responsive layouts instead of simply shrinking desktop components.

---

## 08. MOTION PRINCIPLES

Motion should feel elegant and natural.

Recommended motion patterns:
- Fade-up entrance.
- Subtle staggered text reveal.
- Image scale on hover.
- Smooth opacity transitions.
- Subtle scroll-based reveal.
- Button interaction feedback.

Suggested timing:
- Micro-interaction: 150–200ms.
- Component transition: 200–300ms.
- Entrance animation: 400–700ms.

Avoid:
- Excessive parallax.
- Aggressive zoom.
- Unnecessary bouncing.
- Long blocking animations.
- Motion that interferes with navigation.

---

## 09. VISUAL REFERENCE INTERPRETATION

The supplied screenshots are visual references only.

Extract their visual characteristics:

**Reference 01**
- Outdoor editorial atmosphere.
- Natural landscape photography.
- Minimal interface.
- Strong typography.
- Subtle accent treatment.

**Reference 02**
- Premium editorial quality.
- Refined typography.
- Warm atmosphere.
- Playful visual details.
- Photography-driven presentation.

**Reference 03**
- Modern travel aesthetic.
- Immersive photography.
- Rounded components.
- Spacious interface.
- Contemporary typography.
- Smooth interactions.

### Strict Restrictions

DO NOT:
- Copy the reference layouts.
- Reproduce the original section sequence.
- Copy their content.
- Recreate their exact card arrangements.
- Copy their brand colors.
- Replace Inspiratour's logo.
- Replace Inspiratour's established brand identity.

Use the references only to guide visual quality and design language.

---

## 10. IMPLEMENTATION PRIORITIES

Before modifying the website:

1. Inspect the existing Inspiratour codebase.
2. Identify the current brand colors and HEX values.
3. Identify the existing font family.
4. Inspect logo, icons, and existing brand assets.
5. Identify existing reusable components.
6. Map the existing branding into semantic design tokens.
7. Apply the new visual direction without changing the established brand identity.

### Design Consistency

All new components must follow this document.

If an existing component already follows the brand identity and usability standards, improve it rather than replacing it unnecessarily.

Prioritize:
- Brand consistency.
- Visual quality.
- Readability.
- Accessibility.
- Responsive behavior.
- Performance.

---

# FINAL DESIGN DIRECTION

**INSPIRATOUR — Modern Travel Editorial**

A professional, playful, and inspiring travel experience.

The website should combine the visual richness of travel photography, the sophistication of editorial design, and the usability of a modern digital product.

Preserve Inspiratour's original brand identity while elevating the overall visual experience.

**Brand remains recognizable. Visual experience becomes more distinctive.**
