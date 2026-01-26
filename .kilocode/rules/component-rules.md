# Component Development Rules

> **Purpose**: Specialized rules for AI agents working on UI components in the healthcare template.

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
```

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

## 📝 Creating New Components

### Template for New Components

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

### Color Selection Decision Tree
- **Brand actions/buttons** → `bg-primary` + `text-primary-foreground`
- **Text on main pages** → `text-foreground` 
- **Secondary text** → `text-muted-foreground`
- **Cards/sections** → `bg-card` + `text-card-foreground`
- **Subtle backgrounds** → `bg-muted`
- **Borders/dividers** → `border-border`
- **Interactive elements** → Use `ring` for focus states

## 🌓 Dark Mode Support

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

## 📦 Import Patterns

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

## ⚡ Performance Patterns

### Image Optimization
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

## 📋 Naming Conventions

**Files & Variables**:
- Components: `PascalCase.astro` (e.g., `Header.astro`, `SiteLayout.astro`)
- Variables: `camelCase` (e.g., `siteConfig`, `currentYear`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `SITE_URL`)
- Functions: `camelCase` (e.g., `getBaseSchemas()`)
- Types/Interfaces: `PascalCase` (e.g., `SiteConfig`, `Props`)

---

**Component Rules Version**: 1.0  
**Healthcare Template**: 3.0  
**Last Updated**: 2025-11-22