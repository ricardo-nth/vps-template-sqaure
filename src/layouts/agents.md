# Layouts Agent Guide

> **Purpose**: Specific guidance for AI agents working on layout system and template management in the healthcare template.

## 🏗️ Two-Tier Layout System

### Architecture Flow

**Layout System Hierarchy**:
```
Page (index.astro)
    ↓ uses
SiteLayout.astro (Presentation Layer)
    ↓ wraps
TechnicalLayout.astro (Technical Layer)
    ↓ outputs
HTML with SEO, Meta Tags, Schema.org
```

### Layout Responsibilities

**TechnicalLayout.astro** (Base/Inner):
- **Handles**: SEO meta tags, Schema.org, fonts, global CSS
- **Slots**: `seo`, `schema`, default (content)
- **NEVER modify for styling** - only for infrastructure changes
- **Always loaded first** - base technical foundation

**SiteLayout.astro** (Presentation/Outer):
- **Handles**: Header, Footer, page structure, UI components
- **Props**: `metadata` (title, description, schema), layout options
- **MODIFY for style branches** - this is where UI changes happen
- **Wraps TechnicalLayout** - adds presentation layer

## 🔧 Layout Modification Guidelines

### When to Modify TechnicalLayout

**Acceptable Changes**:
- Font loading and optimization
- Global CSS imports
- SEO infrastructure updates
- Schema.org base configuration
- Performance optimizations

**Never Change For**:
- Visual styling
- Header/Footer appearance
- Page layout
- Color scheme updates
- Component modifications

### When to Modify SiteLayout

**Acceptable Changes**:
- Header/Footer design and content
- Navigation structure
- Page wrapper styling
- Color scheme updates
- UI component integration
- Layout spacing and typography

**Never Change For**:
- SEO meta tags (handled by TechnicalLayout)
- Base HTML structure
- Schema.org configuration
- Font loading

## 📐 Layout Templates

### Standard Page Layout

```astro
---
// src/pages/example.astro
import SiteLayout from '@layouts/SiteLayout.astro';

const metadata = {
  title: 'Example Page - Site Name',
  description: 'Page description for SEO',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Example Page',
    description: 'Page description'
  }
};
---

<SiteLayout metadata={metadata}>
  <!-- Page content starts here -->
  <section class="bg-background py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Content -->
    </div>
  </section>
</SiteLayout>
```

### Custom Layout Options

**Layout with custom spacing**:
```astro
---
const metadata = {
  title: 'Custom Page - Site Name',
  description: 'Page description',
  layout: {
    padding: 'large', // small, medium, large
    background: 'primary', // background, primary, secondary, muted
  }
};
---

<SiteLayout metadata={metadata}>
  <!-- Custom layout content -->
</SiteLayout>
```

### Layout Props Interface

**Metadata Structure**:
```typescript
interface LayoutMetadata {
  title: string;
  description: string;
  schema?: object;
  layout?: {
    padding?: 'small' | 'medium' | 'large';
    background?: 'background' | 'primary' | 'secondary' | 'muted';
  };
}
```

## 🎨 Layout Styling Patterns

### Section Styling

**Standard Section**:
```astro
<section class="bg-background">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Section content -->
  </div>
</section>
```

**Full-width Section**:
```astro
<section class="bg-secondary py-16">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Full-width content -->
  </div>
</section>
```

**Narrow Content**:
```astro
<section class="bg-background">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Narrow content -->
  </div>
</section>
```

### Responsive Layout Patterns

**Mobile-first approach**:
```astro
<section class="bg-background py-6 sm:py-8 md:py-12 lg:py-16">
  <div class="px-4 sm:px-6 lg:px-8">
    <!-- Responsive content -->
  </div>
</section>
```

**Grid layouts**:
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  <!-- Grid items -->
</div>
```

## 🔄 Layout Workflow

### Adding New Layout Sections

1. **Plan the section**: Determine if it should be background, primary, secondary, or muted
2. **Choose container**: `max-w-6xl` for standard, `max-w-4xl` for narrow, full-width for special cases
3. **Add responsive spacing**: Use `py-6 sm:py-8 md:py-12 lg:py-16`
4. **Follow color token system**: Use design tokens, not raw colors
5. **Test across breakpoints**: Ensure responsive design works

### Layout Testing Checklist

- [ ] Mobile: Layout functions on small screens
- [ ] Tablet: Proper spacing and typography scaling
- [ ] Desktop: Full layout with proper max-widths
- [ ] Accessibility: Proper heading hierarchy maintained
- [ ] SEO: All sections have proper semantic HTML
- [ ] Performance: No layout shift during load

## 🛠️ Layout Components

### Common Layout Components

**Container Wrapper**:
```astro
---
interface Props {
  background?: 'background' | 'primary' | 'secondary' | 'muted';
  padding?: 'small' | 'medium' | 'large';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const { 
  background = 'background',
  padding = 'medium', 
  maxWidth = 'lg' 
} = Astro.props;

const paddingClasses = {
  small: 'py-6 sm:py-8',
  medium: 'py-8 sm:py-12 md:py-16',
  large: 'py-12 sm:py-16 md:py-20 lg:py-24'
};

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  full: 'max-w-full'
};
---

<section class={`bg-${background}`}>
  <div class={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${paddingClasses[padding]}`}>
    <slot />
  </div>
</section>
```

### Header/Footer Integration

**Header Pattern** (in SiteLayout.astro):
```astro
<!-- Add to SiteLayout.astro -->
<header class="bg-nav-primary">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Navigation content -->
  </div>
</header>
```

**Footer Pattern** (in SiteLayout.astro):
```astro
<!-- Add to SiteLayout.astro -->
<footer class="bg-background border-t border-border">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Footer content -->
  </div>
</footer>
```

## 🎨 Icon Usage in Layout Patterns

### Common Layout Icon Patterns

**Header Navigation Icons**:
```astro
<!-- Mobile menu toggle -->
<button class="md:hidden relative size-9 flex justify-center items-center">
  <Icon name="tabler:menu-2" class="hs-collapse-open:hidden h-6 w-6" />
  <Icon name="tabler:x" class="hs-collapse-open:block hidden h-6 w-6" />
</button>

<!-- Navigation links with icons -->
<nav class="hidden md:flex items-center gap-6">
  <a href="/services" class="flex items-center gap-2 text-nav-primary-foreground">
    <Icon name="tabler:medical-cross" class="h-5 w-5" />
    Services
  </a>
</nav>
```

**Footer Contact Information**:
```astro
<!-- Contact info with icons -->
<div class="space-y-4">
  <div class="flex items-start gap-3 text-muted-foreground">
    <Icon name="tabler:map-pin" class="h-6 w-6 text-primary shrink-0" />
    <span>123 Healthcare Ave, Medical City</span>
  </div>
  
  <div class="flex items-center gap-3 text-muted-foreground">
    <Icon name="tabler:phone" class="h-6 w-6 text-primary shrink-0" />
    <span>24/7 Emergency: (555) 911-HELP</span>
  </div>
  
  <div class="flex items-center gap-3 text-muted-foreground">
    <Icon name="tabler:mail" class="h-6 w-6 text-primary shrink-0" />
    <span>info@healthcare.com</span>
  </div>
</div>
```

**Section Headers with Icons**:
```astro
<!-- Icon-accented section headers -->
<section class="bg-background py-12">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center gap-3 mb-8">
      <Icon name="tabler:stethoscope" class="h-8 w-8 text-primary" />
      <h2 class="text-3xl font-bold text-foreground">Our Services</h2>
    </div>
  </div>
</section>
```

**Breadcrumb Navigation**:
```astro
<!-- Breadcrumb with icons -->
<nav class="flex items-center gap-2 text-sm text-muted-foreground">
  <Icon name="tabler:home" class="h-4 w-4" />
  <span>/</span>
  <a href="/services" class="hover:text-primary">Services</a>
  <span>/</span>
  <span class="text-foreground">Emergency Care</span>
</nav>
```

### Layout Icon Accessibility

**Ensure proper accessibility in layout components**:

```astro
<!-- Good: Clear icon with context -->
<button class="flex items-center gap-2">
  <Icon name="tabler:menu" class="h-5 w-5" aria-hidden="true" />
  <span>Menu</span>
</button>

<!-- Good: Functional icon with label -->
<Icon 
  name="tabler:phone" 
  class="h-6 w-6"
  title="Call us"
  aria-label="Call us at 555-1234"
/>

<!-- Good: Decorative icon -->
<Icon name="tabler:star" class="h-5 w-5 text-yellow-400" aria-hidden="true" />
```

### Layout Icon Responsiveness

**Responsive icon sizing in layouts**:
```astro
<!-- Responsive icons -->
<div class="flex items-center gap-3">
  <Icon name="tabler:shield-check" class="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
  <div>
    <h3 class="text-lg sm:text-xl font-semibold">Secure Healthcare</h3>
    <p class="text-sm text-muted-foreground">HIPAA compliant & secure</p>
  </div>
</div>
```

### Layout Icon Integration Points

**Common places to include icons in layouts**:

1. **Header Components**:
   - Mobile menu toggles
   - Navigation links
   - Logo areas
   - Action buttons

2. **Footer Components**:
   - Contact information
   - Social media links
   - Quick links
   - Legal information

3. **Main Layout Sections**:
   - Section headers and dividers
   - Feature callouts
   - Status indicators
   - Navigation breadcrumbs

4. **Utility Areas**:
   - Search functionality
   - User account areas
   - Help/support links
   - Emergency contact information

**Layout Icon Consistency**:
Maintain consistent icon usage patterns throughout the layout system:

- Use same icon size family across similar elements
- Follow color token system for icon colors
- Ensure proper spacing between icons and text
- Test icon visibility across all screen sizes
- Validate accessibility with screen readers

## 🚨 Layout Best Practices

### DO:
- Use semantic HTML elements (`<section>`, `<article>`, `<nav>`, etc.)
- Maintain proper heading hierarchy (H1 → H2 → H3)
- Follow the color token system consistently
- Use mobile-first responsive design
- Test layout across different screen sizes
- Keep TechnicalLayout modifications minimal

### DON'T:
- Modify TechnicalLayout for visual changes
- Use raw color values instead of tokens
- Skip responsive breakpoints
- Break semantic HTML structure
- Add inline styles (use Tailwind classes)
- Ignore accessibility considerations

---

**Layouts Agent Version**: 1.0  
**Last Updated**: 2025-11-22