# Icon System Guidelines

> **Purpose**: Comprehensive guide for the healthcare template's icon system, covering component usage, Tabler icons, and custom SVG paths.

## 📋 Overview

The healthcare template uses a sophisticated icon system based on the `astro-icon` package with Tabler icons, combined with a custom `Icon` component for consistent usage across all components, pages, and layouts.

### System Architecture

```
Icon Component (src/components/Icon.astro)
    ↓
astro-icon package
    ↓
Tabler Icons Library (Primary)
    ↓
Custom SVG Files (Secondary)
```

## 🎯 Core Principles

### When to Use Each Icon Type

**✅ Use Tabler Icons (via Icon component) for:**
- Navigation elements (menu, close, chevron, arrows)
- Action buttons (save, edit, delete, add, submit)
- Status indicators (success, warning, error, info, loading)
- Contact information (phone, email, address, website)
- Social media icons (Facebook, Twitter, LinkedIn, Instagram)
- Common UI elements (search, settings, user, calendar)

**✅ Use Custom SVG Paths for:**
- Client-specific logos and branding
- Icons that don't exist in Tabler library (verify first!)
- Complex bespoke icons for unique features
- Custom decorative elements for specific design requirements
- Industry-specific icons not covered by Tabler

**❌ Avoid for:**
- Complex data visualizations (use charting libraries)
- Animated icons (use CSS animations instead)
- Large hero graphics (use Image component with proper optimization)
- Icons with changing content (use dynamic content instead)

## 🚀 Quick Start

### Basic Icon Usage

```astro
---
import Icon from '@components/Icon.astro';
---

<!-- Simple icon -->
<Icon name="tabler:heart" />

<!-- Sized icon -->
<Icon name="tabler:phone" size="1.5rem" />

<!-- Styled icon -->
<Icon name="tabler:mail" class="text-primary hover:text-primary/80" />

<!-- Accessible icon -->
<Icon 
  name="tabler:phone" 
  title="Call us"
  aria-label="Call us at 555-1234"
/>
```

### Common Healthcare Icons

```astro
<!-- Medical specialties -->
<Icon name="tabler:stethoscope" class="h-6 w-6 text-primary" />
<Icon name="tabler:heartbeat" class="h-6 w-6 text-primary" />
<Icon name="tabler:brain" class="h-6 w-6 text-primary" />
<Icon name="tabler:bone" class="h-6 w-6 text-primary" />

<!-- Emergency and urgent care -->
<Icon name="tabler:ambulance" class="h-8 w-8 text-red-600" />
<Icon name="tabler:first-aid-kit" class="h-6 w-6 text-red-600" />
<Icon name="tabler:alert-triangle" class="h-5 w-5 text-yellow-600" />

<!-- Contact and communication -->
<Icon name="tabler:phone" class="h-6 w-6 text-primary" />
<Icon name="tabler:mail" class="h-6 w-6 text-primary" />
<Icon name="tabler:video" class="h-6 w-6 text-primary" />
<Icon name="tabler:messages" class="h-6 w-6 text-primary" />

<!-- Location and facility -->
<Icon name="tabler:map-pin" class="h-6 w-6 text-primary" />
<Icon name="tabler:building-hospital" class="h-8 w-8 text-primary" />
<Icon name="tabler:car" class="h-6 w-6 text-muted-foreground" />
```

## 🔍 Tabler Icon Library

### Finding Icons

**Primary Resource**: [Tabler Icons Website](https://tabler-icons.io/)

**Search Strategy**:
1. Use descriptive keywords (e.g., "medical", "phone", "heart")
2. Try different terminology (e.g., "ambulance" vs "medical-car")
3. Check compound words with hyphens
4. Verify exact spelling before using

**Icon Naming Convention**:
- Format: `tabler:icon-name`
- Use exact name from Tabler website
- Hyphens for compound words: `tabler:arrow-right`, `tabler:user-plus`
- No spaces or special characters

### Common Tabler Icon Categories

**Navigation & UI**:
```astro
<Icon name="tabler:menu-2" />          <!-- Mobile menu -->
<Icon name="tabler:x" />               <!-- Close/X button -->
<Icon name="tabler:chevron-right" />   <!-- Next/forward -->
<Icon name="tabler:chevron-down" />    <!-- Dropdown -->
<Icon name="tabler:search" />          <!-- Search -->
<Icon name="tabler:settings" />        <!-- Settings -->
```

**Actions & Functions**:
```astro
<Icon name="tabler:plus" />            <!-- Add/Create -->
<Icon name="tabler:edit" />            <!-- Edit/Modify -->
<Icon name="tabler:trash" />           <!-- Delete/Remove -->
<Icon name="tabler:download" />        <!-- Download -->
<Icon name="tabler:upload" />          <!-- Upload -->
<Icon name="tabler:share" />           <!-- Share -->
```

**Status & Feedback**:
```astro
<Icon name="tabler:check" />           <!-- Success/Complete -->
<Icon name="tabler:x" />               <!-- Error/Close -->
<Icon name="tabler:alert-triangle" />  <!-- Warning -->
<Icon name="tabler:info-circle" />     <!-- Information -->
<Icon name="tabler:loader" />          <!-- Loading -->
<Icon name="tabler:check-circle" />    <!-- Verified -->
```

## 🎨 Styling & Customization

### Size Guidelines

**Standard Size Scale**:
```css
/* Tailwind utility classes */
.h-3 w-3    /* 12px - Very small icons */
.h-4 w-4    /* 16px - Text links, small buttons */
.h-5 w-5    /* 20px - Standard UI icons */
.h-6 w-6    /* 24px - Navigation, major actions */
.h-8 w-8    /* 32px - Section headers, featured content */
.h-10 w-10  /* 40px - Hero sections, special features */
.h-12 w-12  /* 48px - Large feature icons */
.h-16 w-16  /* 64px - Hero graphics */
```

**Context-Specific Sizing**:
```astro
<!-- Text links and small buttons -->
<button class="flex items-center gap-2">
  <Icon name="tabler:external-link" class="h-4 w-4" />
  Read More
</button>

<!-- Navigation menu items -->
<nav class="flex items-center gap-4">
  <a href="/services" class="flex items-center gap-2">
    <Icon name="tabler:medical-cross" class="h-5 w-5" />
    Services
  </a>
</nav>

<!-- Feature cards -->
<div class="bg-card rounded-lg p-6">
  <Icon name="tabler:shield-check" class="h-8 w-8 text-primary mb-4" />
  <h3 class="text-lg font-semibold">Secure Care</h3>
</div>

<!-- Hero sections -->
<section class="py-16 text-center">
  <Icon name="tabler:stethoscope" class="h-16 w-16 text-primary mx-auto mb-6" />
  <h1 class="text-4xl font-bold">Quality Healthcare</h1>
</section>
```

### Color Guidelines

**Color Token Integration**:
```astro
<!-- Use design system colors -->
<Icon name="tabler:heart" class="text-primary" />
<Icon name="tabler:check" class="text-green-600" />
<Icon name="tabler:alert" class="text-yellow-600" />
<Icon name="tabler:x" class="text-red-600" />
<Icon name="tabler:info" class="text-muted-foreground" />

<!-- Interactive states -->
<Icon name="tabler:phone" class="text-primary hover:text-primary/80" />
<Icon name="tabler:mail" class="text-muted-foreground hover:text-primary transition-colors" />
```

**Status Color Mapping**:
```astro
<!-- Success states -->
<Icon name="tabler:check" class="text-green-600" />
<Icon name="tabler:check-circle" class="text-green-600" />
<Icon name="tabler:shield-check" class="text-green-600" />

<!-- Warning states -->
<Icon name="tabler:alert-triangle" class="text-yellow-600" />
<Icon name="tabler:alert-circle" class="text-yellow-600" />

<!-- Error states -->
<Icon name="tabler:x" class="text-red-600" />
<Icon name="tabler:alert-octagon" class="text-red-600" />
<Icon name="tabler:ban" class="text-red-600" />

<!-- Information states -->
<Icon name="tabler:info-circle" class="text-blue-600" />
<Icon name="tabler:help-circle" class="text-blue-600" />
```

## ♿ Accessibility

### Mandatory Accessibility Requirements

**Always Provide Context**:
```astro
<!-- Good: Icon with clear purpose -->
<button>
  <Icon name="tabler:menu" class="h-6 w-6" aria-hidden="true" />
  <span class="sr-only">Open navigation menu</span>
</button>

<!-- Good: Functional icon with label -->
<Icon 
  name="tabler:phone" 
  title="Call us at 555-1234"
  aria-label="Call us at 555-1234"
/>

<!-- Good: Decorative icon -->
<Icon name="tabler:star" class="text-yellow-400" aria-hidden="true" />
```

**Screen Reader Support**:
```astro
<!-- Icon-only buttons (requires aria-label) -->
<button aria-label="Close modal">
  <Icon name="tabler:x" class="h-6 w-6" />
</button>

<!-- Icons in navigation -->
<nav>
  <a href="/home" aria-label="Home page">
    <Icon name="tabler:home" class="h-5 w-5" />
  </a>
</nav>

<!-- Status indicators with context -->
<div role="status" aria-live="polite">
  <Icon name="tabler:check-circle" class="h-5 w-5 text-green-600" aria-hidden="true" />
  <span>Appointment confirmed</span>
</div>
```

### Accessibility Checklist

- [ ] **Decorative icons**: Use `aria-hidden="true"`
- [ ] **Functional icons**: Provide `aria-label` or clear text context
- [ ] **Icon-only buttons**: Always include `aria-label`
- [ ] **Status icons**: Use proper ARIA roles and live regions
- [ ] **Focus management**: Ensure icons don't interfere with keyboard navigation
- [ ] **Color contrast**: Verify icon colors meet WCAG 2.1 AA standards
- [ ] **Screen reader testing**: Test with NVDA, JAWS, or VoiceOver

## 🔄 Migration from Inline SVGs

### Common Migration Patterns

**Before (❌ Old Pattern)**:
```astro
<!-- Navigation menu icons -->
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>

<!-- Action buttons -->
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>

<!-- Contact icons -->
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
```

**After (✅ New Pattern)**:
```astro
<!-- Navigation menu icons -->
<Icon name="tabler:menu" class="h-6 w-6" />

<!-- Action buttons -->
<Icon name="tabler:arrow-right" class="h-5 w-5 ml-2" />

<!-- Contact icons -->
<Icon name="tabler:phone" class="h-6 w-6 text-primary" />
```

### Migration Priority Order

1. **Navigation elements** - High priority (frequently seen)
2. **Action buttons** - High priority (user interaction)
3. **Contact information** - Medium priority (important for healthcare)
4. **Status indicators** - Medium priority (user feedback)
5. **Decorative elements** - Low priority (aesthetic only)

## 🛠️ Custom SVG Creation

### When to Create Custom Icons

**Create custom SVG only when**:
1. ✅ Icon doesn't exist in Tabler library (verified by searching)
2. ✅ Icon is specific to client branding
3. ✅ Icon represents unique functionality
4. ✅ Icon requires specific styling that Tabler icons can't provide

**Don't create custom SVG for**:
1. ❌ Basic UI elements (use Tabler icons)
2. ❌ Standard icons that exist in Tabler
3. ❌ Complex illustrations (use Image component)
4. ❌ Animated content (use CSS animations)

### Custom SVG Workflow

**Step 1: Verify Tabler Coverage**
- Search [tabler-icons.io](https://tabler-icons.io/) thoroughly
- Try alternative spellings and terms
- Check related categories
- If found, use Tabler version

**Step 2: Create Custom SVG**
```astro
<!-- Place in src/icons/ directory -->
<!-- Example: src/icons/client-logo.svg -->
<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <!-- Custom SVG path here -->
  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
</svg>
```

**Step 3: Use Custom Icon**
```astro
<Icon name="client-logo" class="h-8 w-8" />
```

### Custom SVG Guidelines

**Accessibility Requirements**:
```svg
<svg 
  viewBox="0 0 24 24" 
  fill="currentColor" 
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Custom healthcare logo"
>
  <!-- SVG content -->
</svg>
```

**Styling Considerations**:
- Use `fill="currentColor"` to inherit parent color
- Set proper `viewBox` for scalable graphics
- Ensure sufficient contrast for medical readability
- Test at various sizes (16px to 64px minimum)

## 📁 File Organization

### Directory Structure

```
src/
├── components/
│   └── Icon.astro              # Main Icon component
├── icons/                      # Custom SVG icons
│   ├── client-logo.svg         # Client branding
│   ├── custom-medical.svg      # Unique medical icons
│   └── specialty-icon.svg      # Specialty-specific icons
└── (pages, layouts, etc.)      # Usage throughout app
```

### Naming Conventions

**Custom Icons**:
- Use descriptive, lowercase names
- No spaces (use hyphens if needed)
- Avoid generic names
- Include context if needed: `client-logo`, `medical-cross-special`

**Tabler Icons**:
- Always use `tabler:` prefix
- Exact name from Tabler website
- Examples: `tabler:heart`, `tabler:phone`, `tabler:ambulance`

## 🔧 Implementation Checklist

### Component Development
- [ ] Import Icon component: `import Icon from '@components/Icon.astro';`
- [ ] Choose appropriate icon (Tabler first, custom second)
- [ ] Set proper size using Tailwind classes
- [ ] Apply color using design tokens or semantic classes
- [ ] Include accessibility attributes (`aria-label`, `title`, `aria-hidden`)
- [ ] Test across different screen sizes
- [ ] Verify color contrast compliance

### Page Development
- [ ] Use consistent icon sizing within page sections
- [ ] Group related icons (contact info, actions, etc.)
- [ ] Maintain visual hierarchy with icon sizes
- [ ] Ensure icons support dark mode
- [ ] Test with screen readers

### Layout Development
- [ ] Standardize header/footer icon usage
- [ ] Use consistent spacing between icons and text
- [ ] Implement responsive icon behavior
- [ ] Test mobile navigation icon functionality

### Quality Assurance
- [ ] Build and preview changes: `pnpm build && pnpm preview`
- [ ] Test icon loading and rendering
- [ ] Validate accessibility with browser tools
- [ ] Check icon consistency across pages
- [ ] Verify Tabler icon names are correct
- [ ] Ensure custom icons are optimized

## 🚀 Advanced Usage

### Icon Component Props Reference

```typescript
interface IconProps {
  // Required
  name: string;                    // Icon identifier
  
  // Sizing
  size?: number | string;          // Default: "1em"
  width?: number | string;         // Override width
  height?: number | string;        // Override height
  
  // Styling
  class?: string;                  // CSS classes
  
  // Accessibility
  title?: string;                  // SVG title attribute
  desc?: string;                   // SVG description
  'aria-label'?: string;           // ARIA label
  'aria-hidden'?: boolean;         // Hide from screen readers
}
```

### Advanced Icon Patterns

**Icon States**:
```astro
---
const { isActive = false, hasNotification = false } = Astro.props;
---

<button class="relative">
  <Icon name="tabler:bell" class={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
  {hasNotification && (
    <span class="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
  )}
</button>
```

**Icon with Loading State**:
```astro
---
const { isLoading = false } = Astro.props;
---

<button disabled={isLoading} class="flex items-center gap-2">
  <Icon name={isLoading ? "tabler:loader" : "tabler:send"} class={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} />
  {isLoading ? 'Sending...' : 'Send Message'}
</button>
```

**Conditional Icons**:
```astro
<div class="flex items-center gap-2">
  <Icon name={isOnline ? "tabler:wifi" : "tabler:wifi-off"} class="h-5 w-5" />
  <span>{isOnline ? 'Connected' : 'Offline'}</span>
</div>
```

---

**Icon Guidelines Version**: 1.0  
**Healthcare Template**: 3.0  
**Last Updated**: 2025-11-22  
**Next Review**: 2026-11-22