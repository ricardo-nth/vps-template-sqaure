# Config Agent Guide

> **Purpose**: Specific guidance for AI agents working on configuration and site settings in the healthcare template.

## ⚙️ Configuration Overview

### Main Configuration Files

**Core Config Files**:
- `src/config/site.ts` - Global site configuration and schemas
- `astro.config.mjs` - Astro framework configuration
- `package.json` - Dependencies and scripts
- `.env` - Environment variables (gitignored)
- `.env.example` - Environment variable template

## 🔧 Site Configuration

### Global Site Config (`src/config/site.ts`)

**Structure**:
```typescript
// src/config/site.ts
export const siteConfig = {
  name: 'Healthcare Template',
  description: 'Professional healthcare service template',
  url: import.meta.env.SITE_URL || 'http://localhost:4321',
  organization: {
    name: 'Your Organization',
    description: 'Organization description',
    // ... other organization details
  }
};

export function getBaseSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.organization.name,
      description: siteConfig.organization.description,
      url: siteConfig.url
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url
    }
  ];
}
```

**Configuration Properties**:
- `name` - Site name used in titles and metadata
- `description` - Site description for SEO
- `url` - Site base URL (from environment or default)
- `organization` - Organization details for schema.org
- Colors, branding, and other site-wide settings

### Updating Site Configuration

**Common Configuration Updates**:

1. **Site Identity**:
   ```typescript
   // Update in src/config/site.ts
   export const siteConfig = {
     name: 'Your Clinic Name',
     description: 'Your clinic description',
     organization: {
       name: 'Your Organization Name',
       description: 'What your organization does',
       address: {
         streetAddress: '123 Main St',
         addressLocality: 'City',
         addressRegion: 'State',
         postalCode: '12345',
         addressCountry: 'US'
       },
       phone: '+1-555-123-4567',
       email: 'info@yourclinic.com'
     }
   };
   ```

2. **Social Media Links**:
   ```typescript
   organization: {
     // ... other properties
     sameAs: [
       'https://facebook.com/yourclinic',
       'https://twitter.com/yourclinic',
       'https://linkedin.com/company/yourclinic'
     ]
   }
   ```

## 🌍 Environment Variables

### Current Environment Variables

**Required Variables**:
```bash
SITE_URL=https://yourdomain.com  # Used for sitemap, canonical URLs, schema
```

**Optional Variables** (for future use):
```bash
# Analytics
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX

# Contact forms
PUBLIC_FORMS_ENDPOINT=https://formspree.io/f/your-form-id

# Maps
PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-api-key
```

### Adding New Environment Variables

**Step 1: Update .env.example**
```bash
# Add new variable to .env.example
SITE_URL=https://yourdomain.com
NEW_API_KEY=your-api-key-here
```

**Step 2: Update .env** (gitignored)
```bash
# Add actual value to .env
SITE_URL=https://yourdomain.com
NEW_API_KEY=actual-secret-key-value
```

**Step 3: Use in Code**
```typescript
// In src/config/site.ts
const apiEndpoint = import.meta.env.NEW_API_KEY || 'fallback-value';

// In components/pages
const siteUrl = import.meta.env.SITE_URL;
```

### Environment Variable Types

**Public Variables** (client-side):
- Use `PUBLIC_*` prefix
- Accessible in browser
- Good for: Analytics IDs, API keys for public data

**Private Variables** (server-side only):
- No prefix (e.g., `API_SECRET_KEY`)
- Only available during build
- Good for: Database connections, private API keys

## 📊 SEO Configuration

### Sitemap Configuration

**Auto-generated sitemap** includes:
- All pages in `src/pages/`
- Dynamic pages (with proper params)
- Proper lastmod dates
- Correct priority values

**Manual sitemap exclusions** (if needed):
```typescript
// In astro.config.mjs
export default defineConfig({
  site: process.env.SITE_URL,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => {
        // Exclude certain pages
        if (page.includes('/admin') || page.includes('/draft')) {
          return false;
        }
        return true;
      }
    })
  ]
});
```

### Meta Tags Configuration

**Default meta tags** (in TechnicalLayout):
```astro
<!-- Automatically included -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="canonical" href={canonical} />

<!-- Page-specific overrides via metadata -->
<title>{metadata.title}</title>
<meta name="description" content={metadata.description} />
```

## 🎨 Branding Configuration

### Color System Configuration

**Update brand colors** in `src/styles/global.css`:
```css
:root {
  /* BRAND COLORS - Customize these for your client */
  --primary: oklch(0.45 0.18 310);         /* Main brand color */
  --primary-foreground: oklch(1.00 0 0);   /* Text on primary */
  --ring: oklch(0.45 0.18 310);            /* Focus ring */
  
  /* Navigation colors */
  --nav-primary-bg: oklch(0.92 0.04 310);
  --nav-primary-text: oklch(0.35 0.12 310);
  --nav-secondary-bg: oklch(0.45 0.18 310);
  --nav-secondary-text: oklch(1.00 0 0);
  
  /* Additional brand colors */
  --accent: oklch(0.70 0.15 310);
  --secondary: oklch(0.85 0.08 310);
}
```

### Icon System Configuration

**Icon Component Setup**:
The healthcare template uses the `astro-icon` package with Tabler icons for consistent iconography. The `Icon` component is configured in `src/components/Icon.astro`.

**Key Configuration Points**:

1. **Icon Component Props**:
   ```typescript
   interface Props {
     name: string;           // Icon name (tabler:icon-name)
     size?: number | string; // Size (default: "1em")
     width?: number | string; // Width override
     height?: number | string; // Height override
     class?: string;          // CSS classes
     title?: string;          // Accessibility title
     desc?: string;           // Accessibility description
     'aria-label'?: string;   // ARIA label
     'aria-hidden'?: boolean; // Hide from screen readers
   }
   ```

2. **Tabler Icon Integration**:
   - All Tabler icons use the `tabler:` prefix
   - Icon names should match exactly with Tabler Icons library
   - Examples: `tabler:heart`, `tabler:phone`, `tabler:medical-cross`

3. **Custom Icon Support**:
   - Place custom icons in `src/icons/` directory
   - Reference without prefix: `name="custom/logo"`
   - Use for client-specific branding and unique icons

**Icon System Best Practices**:

**✅ Use for:**
- Navigation icons (menu, close, chevron)
- Action buttons (save, edit, delete, add)
- Status indicators (success, warning, error, info)
- Contact information (phone, email, location)
- Social media links (when available in Tabler)
- UI feedback icons (loading, checkmarks)

**❌ Don't use for:**
- Complex data visualizations (use custom SVG or charting library)
- Animated icons (use CSS animations instead)
- Client logos in navigation (use Image component)
- Large hero icons (use custom SVG for full control)

**Icon Color Integration**:
Icons automatically inherit the color from their parent element and can be customized using design tokens:

```css
/* Icon colors should match design system */
.icon-primary { color: var(--primary); }
.icon-secondary { color: var(--secondary); }
.icon-muted { color: var(--muted-foreground); }
.icon-accent { color: var(--accent); }
```

**Adding New Icons to the System**:

1. **Tabler Icons**: Simply use the exact name from [tabler-icons.io](https://tabler-icons.io/)
   ```astro
   <Icon name="tabler:new-icon-name" />
   ```

2. **Custom Icons**: 
   - Add SVG file to `src/icons/`
   - Use filename (without extension) as icon name
   - Ensure SVG follows accessibility guidelines
   ```astro
   <Icon name="custom/client-logo" class="h-8 w-8" />
   ```

**Icon Configuration in Site Settings**:
Update `src/config/site.ts` to include icon-specific configurations if needed:

```typescript
export const siteConfig = {
  // ... existing config
  icons: {
    defaultSize: '1em',        // Default icon size
    sizes: {
      sm: '0.875rem',          // 14px
      md: '1rem',              // 16px  
      lg: '1.25rem',           // 20px
      xl: '1.5rem',            // 24px
      '2xl': '2rem'            // 32px
    },
    colors: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground',
      accent: 'text-accent'
    }
  }
};
```

### Logo and Favicon Configuration

**Logo placement**:
- Place logo files in `public/` directory
- Update header component to use correct logo path
- Ensure responsive logo sizes

**Favicon setup**:
- Place favicon files in `public/`
- Update `public/favicon.svg` or add `favicon.ico`
- Include Apple touch icons if needed

## 🔒 Security Configuration

### Content Security Policy

**Basic CSP headers** (if needed):
```typescript
// In astro.config.mjs
export default defineConfig({
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
    }
  }
});
```

### Environment Security

**Best Practices**:
- Never commit `.env` files
- Use `.env.example` for templates
- Rotate secrets regularly
- Use different values for dev/staging/production
- Monitor access to environment variables

## 📈 Analytics Configuration

### Google Analytics Setup

**Add GA4 tracking**:
```typescript
// In TechnicalLayout.astro
---
const GA_ID = import.meta.env.PUBLIC_GA_ID;
---

<!-- Google Analytics -->
{GA_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}
    </script>
  </>
)}
```

### Performance Monitoring

**Web Vitals tracking**:
```typescript
// Add to TechnicalLayout for performance monitoring
<script>
  // Web Vitals tracking code
  import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';
  
  function sendToAnalytics(metric) {
    // Send to your analytics service
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
</script>
```

## 🚀 Deployment Configuration

### Build Configuration

**Environment-specific builds**:
```bash
# Development
SITE_URL=http://localhost:4321 pnpm build

# Staging
SITE_URL=https://staging.yoursite.com pnpm build

# Production
SITE_URL=https://yoursite.com pnpm build
```

### Performance Optimization

**Build optimization settings**:
```typescript
// In astro.config.mjs
export default defineConfig({
  // Optimize images
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  
  // Compression
  compressHTML: true,
  
  // Minification
  minify: 'esbuild',
  
  // Source maps (disable for production)
  sourcemap: process.env.NODE_ENV === 'development'
});
```

---

**Config Agent Version**: 1.0  
**Last Updated**: 2025-11-22