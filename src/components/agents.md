# Components Agent Guide

> **Purpose**: Specific guidance for AI agents working on UI components in the healthcare template.

## 🎨 Style Guide & Color System

### Color Token System Overview

This template uses a **design token system** for consistent, maintainable styling across all components. Instead of using raw Tailwind utilities like `bg-blue-600`, components use semantic tokens like `bg-primary`.

**Benefits of the Color Token System:**
- **Brand Consistency**: Change colors in one place (`global.css`) and update the entire site
- **Easy Rebranding**: Customize colors for different clients without touching component code
- **Semantic Clarity**: `bg-primary` is clearer than `bg-purple-600`
- **Maintenance**: Avoid hunting through components when colors need to change

### Color Tokens Reference

**Core Design Tokens** (used in 90% of components):

| Token | Purpose | Default Value |
|-------|---------|---------------|
| `background` | Page background | White |
| `foreground` | Main text color | Dark gray |
| `card` | Card component background | White |
| `card-foreground` | Text on cards | Dark gray |
| `primary` | **Main brand color** | Deep purple (#7B2192) |
| `primary-foreground` | Text on primary background | White |
| `secondary` | Secondary sections background | Light lilac |
| `secondary-foreground` | Text on secondary background | Dark purple |
| `muted` | Subtle backgrounds | Very light gray with purple tint |
| `muted-foreground` | Muted/subtle text | Gray-purple |
| `accent` | Highlights and accents | Medium lilac |
| `accent-foreground` | Text on accent backgrounds | Dark purple |
| `border` | Borders and dividers | Light gray with purple tint |
| `input` | Input field backgrounds | Light gray with purple tint |
| `ring` | Focus ring color | Deep purple (matches primary) |

**Navigation-Specific Tokens**:

| Token | Purpose | Default Value |
|-------|---------|---------------|
| `nav-primary` | Primary navigation background | Light lilac |
| `nav-primary-foreground` | Text on primary nav | Dark purple |
| `nav-secondary` | Secondary navigation background | Deep purple |
| `nav-secondary-foreground` | Text on secondary nav | White |

**Specialized Tokens**:

| Token | Purpose | Default Value |
|-------|---------|---------------|
| `hero-overlay` | Hero section overlays | White with opacity |
| `hero-overlay-foreground` | Text on hero overlays | Dark gray |
| `destructive` | Error/destructive states | Red |
| `destructive-foreground` | Text on destructive backgrounds | White |

### How to Use Color Tokens

**✅ Correct Usage (Using Design Tokens):**
```astro
<!-- Card component -->
<div class="bg-card border border-border rounded-lg">
  <h2 class="text-card-foreground">Card Title</h2>
  <p class="text-muted-foreground">Card description</p>
</div>

<!-- Buttons -->
<button class="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Button
</button>
<button class="bg-background border border-border text-foreground">
  Secondary Button
</button>

<!-- Links -->
<a href="#" class="text-primary hover:text-primary/80">
  Link Text
</a>
```

**❌ Incorrect Usage (Raw Tailwind Colors):**
```astro
<!-- DON'T use these -->
<div class="bg-white border border-gray-200">
  <h2 class="text-gray-800">Card Title</h2>  
  <p class="text-gray-500">Card description</p>
</div>

<button class="bg-blue-600 text-white hover:bg-blue-700">
  Primary Button
</button>

<a href="#" class="text-blue-600 hover:text-blue-700">
  Link Text  
</a>
```

### Customizing Colors for Different Brands

**To rebrand for a new client:**

1. **Edit `src/styles/global.css`** - Focus on these key tokens:
   ```css
   :root {
     /* BRAND COLORS - Customize these for your client */
     --primary: oklch(0.45 0.18 310);         /* Main brand color */
     --primary-foreground: oklch(1.00 0 0);   /* Text on primary */
     --ring: oklch(0.45 0.18 310);            /* Focus ring */
     
     /* Navigation colors */
     --nav-primary-bg: oklch(0.92 0.04 310);      /* Primary nav bg */
     --nav-primary-text: oklch(0.35 0.12 310);    /* Primary nav text */
     --nav-secondary-bg: oklch(0.45 0.18 310);    /* Secondary nav bg */
     --nav-secondary-text: oklch(1.00 0 0);       /* Secondary nav text */
   }
   ```

2. **Color Selection Guide**: Use https://oklch.com to pick colors in OKLCH format
   - **Purple (default)**: `oklch(0.62 0.19 259.76)`
   - **Teal**: `oklch(0.65 0.15 200)`  
   - **Blue**: `oklch(0.55 0.20 240)`
   - **Green**: `oklch(0.60 0.18 150)`
   - **Orange**: `oklch(0.65 0.18 50)`
   - **Pink**: `oklch(0.70 0.18 340)`

3. **Keep neutral tokens unchanged** - Most other tokens (`background`, `foreground`, `muted`, etc.) work well with any brand color

## 🏗️ Component Organization

### Folder Layout

**Component Organization**:
```
src/components/
├── Header.astro       # Global header
├── Footer.astro       # Global footer
└── [feature]/         # Feature-specific components (future)
    └── ServiceCard.astro
```

### Code Style

**Astro Components**:
```astro
---
/**
 * ComponentName.astro - Brief description
 * 
 * Detailed description of component purpose and usage.
 */

// Imports
import Layout from '../layouts/SiteLayout.astro';

// Props interface
interface Props {
  title: string;
  description?: string;
}

// Destructure props with defaults
const { title, description = 'Default description' } = Astro.props;

// Logic and data fetching
const currentYear = new Date().getFullYear();
---

<!-- HTML template -->
<div class="container">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>

<style>
  /* Component-scoped styles (if needed) */
  /* Prefer Tailwind utility classes */
</style>
```

### Creating New Components

**Template for new components:**
```astro
---
interface Props {
  title: string;
  // ... other props
}

const { title } = Astro.props as Props;
---

<!-- Use semantic color tokens -->
<section class="bg-background">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 class="text-2xl font-semibold text-foreground">
      {title}
    </h2>
    <p class="text-muted-foreground">
      Descriptive text
    </p>
    
    <!-- Interactive elements -->
    <button class="bg-primary text-primary-foreground hover:bg-primary/90 
                   focus:outline-none focus:ring-2 focus:ring-ring 
                   disabled:opacity-50 rounded-lg px-4 py-2">
      Action
    </button>
  </div>
</section>
```

**Color Selection Decision Tree:**
- **Brand actions/buttons** → `bg-primary` + `text-primary-foreground`
- **Text on main pages** → `text-foreground` 
- **Secondary text** → `text-muted-foreground`
- **Cards/sections** → `bg-card` + `text-card-foreground`
- **Subtle backgrounds** → `bg-muted`
- **Borders/dividers** → `border-border`
- **Interactive elements** → Use `ring` for focus states

### Dark Mode Support

All color tokens automatically support dark mode through CSS custom properties in `global.css`. When you use these tokens, components automatically adapt to the user's theme preference.

**Component authors don't need dark mode variants** - simply use the base tokens:
```astro
<!-- ✅ Correct - no dark variants needed -->
<div class="bg-background text-foreground hover:bg-muted">
  Content
</div>

<!-- ❌ Incorrect - dark variants are redundant -->
<div class="bg-background text-foreground hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted">
  Content  
</div>
```

The `global.css` file automatically handles light/dark switching based on the HTML `class="dark"` attribute, so components stay clean and concise.

### When NOT to Use Design Tokens

- **Complex gradients** that need specific color stops
- **Images and media** content
- **External brand assets** (logos from other companies)
- **Data visualizations** where specific color codes matter

For these exceptions, use Tailwind utilities directly, but keep 95% of your component styling using the design token system.

### Import Patterns

**Path Aliases** (configured in `astro.config.mjs` and `tsconfig.json`):
```typescript
// Use aliases for cleaner imports
import Header from '@components/Header.astro';
import { siteConfig } from '@/config/site';
import logo from '@assets/logo.svg';

// Instead of:
import Header from '../../../components/Header.astro';
```

**Import Order**:
1. Astro/framework imports
2. Third-party libraries
3. Local components
4. Local utilities/config
5. Assets (images, styles)

### Performance Patterns

**Image Optimization**:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '@assets/hero.jpg';
---

<!-- Above-the-fold images -->
<Image 
  src={heroImage}
  alt="Description"
  loading="eager"
  fetchpriority="high"
  widths={[400, 800, 1200, 1600]}
  sizes="100vw"
/>

<!-- Below-the-fold images -->
<Image 
  src={otherImage}
  alt="Description"
  loading="lazy"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## 🎨 Icon System & Guidelines

### Using the Icon Component

**Preferred Method**: Use the `Icon` component for consistent iconography across the healthcare template.

```astro
---
import Icon from '@components/Icon.astro';
---

<!-- Basic usage -->
<Icon name="tabler:heart" size="1.25rem" />

<!-- With accessibility -->
<Icon 
  name="tabler:phone" 
  size="1.5rem" 
  title="Call us" 
  aria-label="Call us"
/>

<!-- Custom styling -->
<Icon 
  name="tabler:mail" 
  class="text-primary hover:text-primary/80"
  size="1.25rem"
/>
```

### When to Use Tabler Icons vs Custom SVG Paths

**✅ Use Tabler Icons (via Icon component) for:**
- Navigation icons (menu, close, chevron, etc.)
- Action icons (save, edit, delete, add, etc.)
- Status icons (success, warning, error, info, etc.)
- Social media icons (if available in Tabler library)
- UI feedback icons (loading, checkmark, etc.)
- Common interface elements

**Use Custom SVG Paths for:**
- Client-specific logos and branding
- Icons that don't exist in Tabler library (check first!)
- Complex bespoke icons for unique features
- Custom decorative elements for specific design needs

### Tabler Icon Usage Patterns

**Navigation Icons**:
```astro
<Icon name="tabler:menu-2" class="h-6 w-6" />
<Icon name="tabler:x" class="h-6 w-6" />
<Icon name="tabler:chevron-right" class="h-5 w-5" />
<Icon name="tabler:chevron-down" class="h-5 w-5" />
```

**Social & Contact Icons**:
```astro
<Icon name="tabler:phone" class="h-6 w-6 text-primary" />
<Icon name="tabler:mail" class="h-6 w-6 text-primary" />
<Icon name="tabler:map-pin" class="h-6 w-6 text-primary" />
```

**Status & Feedback Icons**:
```astro
<Icon name="tabler:check" class="h-5 w-5 text-green-600" />
<Icon name="tabler:alert-triangle" class="h-5 w-5 text-yellow-600" />
<Icon name="tabler:x" class="h-5 w-5 text-red-600" />
```

**UI Action Icons**:
```astro
<Icon name="tabler:external-link" class="h-4 w-4" />
<Icon name="tabler:arrow-right" class="h-5 w-5 group-hover:translate-x-1" />
<Icon name="tabler:search" class="h-5 w-5" />
```

### Finding & Creating Icons

**Step 1: Check Tabler Library First**
Before creating custom SVG paths, always check the [Tabler Icons library](https://tabler-icons.io/) to ensure the icon doesn't already exist:

1. Search the Tabler Icons website for your needed icon
2. If found, use the exact name with `tabler:` prefix
3. Common naming patterns:
   - `tabler:icon-name` (e.g., `tabler:heart`, `tabler:phone`)
   - Compound words use hyphens (e.g., `tabler:user-plus`, `tabler:arrow-right`)

**Step 2: Create Custom SVG Only When Necessary**
If the icon doesn't exist in Tabler:

```astro
<!-- Use Icon component for custom SVG reference -->
<Icon name="custom/logo" class="h-8 w-8" />
<!-- Or inline SVG for simple cases -->
<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
  <!-- Custom SVG path here -->
</svg>
```

### Icon Accessibility

**Always Include Proper Accessibility**:
```astro
<!-- Decorative icons -->
<Icon name="tabler:star" class="text-yellow-400" aria-hidden="true" />

<!-- Functional icons with labels -->
<Icon 
  name="tabler:phone" 
  title="Call us at 555-1234" 
  aria-label="Call us"
/>

<!-- Icons in buttons -->
<button>
  <Icon name="tabler:send" class="h-4 w-4 mr-2" />
  Send Message
</button>
```

### Icon Sizing Guidelines

**Standard Sizes**:
- **Small**: `h-4 w-4` (16px) - For text links and buttons
- **Medium**: `h-5 w-5` (20px) - For cards and inline content  
- **Large**: `h-6 w-6` (24px) - For navigation and major actions
- **Extra Large**: `h-8 w-8` (32px) - For hero sections and featured content

```astro
<!-- Button icons -->
<button class="flex items-center gap-2">
  <Icon name="tabler:arrow-right" class="h-4 w-4" />
  Get Started
</button>

<!-- Card icons -->
<div class="flex items-center gap-3">
  <Icon name="tabler:shield-check" class="h-6 w-6 text-primary" />
  <div>
    <h3 class="font-semibold">Secure</h3>
    <p class="text-sm text-muted-foreground">Your data is protected</p>
  </div>
</div>

<!-- Navigation icons -->
<Icon name="tabler:menu" class="h-6 w-6" />
```

### Color & Style Guidelines

**Consistent Color Usage**:
```astro
<!-- Primary brand colors -->
<Icon name="tabler:heart" class="text-primary" />

<!-- Status colors -->
<Icon name="tabler:check" class="text-green-600" />
<Icon name="tabler:alert-triangle" class="text-yellow-600" />
<Icon name="tabler:x" class="text-red-600" />

<!-- Muted colors -->
<Icon name="tabler:info-circle" class="text-muted-foreground" />

<!-- Interactive states -->
<Icon name="tabler:external-link" class="h-4 w-4 text-primary hover:text-primary/80" />
```

### Migration from Inline SVGs

**Old Pattern** (❌ Avoid):
```astro
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg>
```

**New Pattern** (✅ Use):
```astro
<Icon name="tabler:arrow-right" class="h-5 w-5" />
```

### Icon Integration Examples

**Service Cards**:
```astro
---
import Icon from '@components/Icon.astro';
---

<div class="bg-card rounded-lg p-6">
  <Icon name="tabler:stethoscope" class="h-8 w-8 text-primary mb-4" />
  <h3 class="text-xl font-semibold text-card-foreground mb-2">
    Medical Services
  </h3>
  <p class="text-muted-foreground">
    Comprehensive healthcare services
  </p>
</div>
```

**Contact Section**:
```astro
<div class="flex items-start gap-3 text-muted-foreground">
  <Icon name="tabler:phone" class="h-6 w-6 text-primary shrink-0" />
  <span>24/7 Emergency Line</span>
</div>
```

**Navigation Menu**:
```astro
<nav class="flex items-center gap-6">
  <a href="/services" class="flex items-center gap-2 text-foreground hover:text-primary">
    <Icon name="tabler:medical-cross" class="h-5 w-5" />
    Services
  </a>
</nav>
```

**Font Loading**:
- Use Astro experimental fonts (configured in `astro.config.mjs`)
- Fonts are automatically optimized with fallbacks
- No manual font loading required

### Naming Conventions

**Files & Variables**:
- Components: `PascalCase.astro` (e.g., `Header.astro`, `SiteLayout.astro`)
- Variables: `camelCase` (e.g., `siteConfig`, `currentYear`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `SITE_URL`)
- Functions: `camelCase` (e.g., `getBaseSchemas()`)
- Types/Interfaces: `PascalCase` (e.g., `SiteConfig`, `Props`)

---

**Component Agent Version**: 1.0  
**Last Updated**: 2025-11-22