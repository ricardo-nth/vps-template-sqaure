# Pages Agent Guide

> **Purpose**: Specific guidance for AI agents working on page creation and routing in the healthcare template.

## 📄 Page Organization

### Folder Layout

**Page Organization**:
```
src/pages/
├── index.astro        # Homepage (/)
├── about.astro        # About (/about)
└── services/          # Services section (/services/*)
    ├── index.astro    # Services listing (/services)
    └── [slug].astro   # Dynamic service pages (/services/plumbing)
```

## 📝 Page Creation Pattern

### Basic Page Structure

**Template for new pages:**
```astro
---
import SiteLayout from '@layouts/SiteLayout.astro';

const metadata = {
  title: 'Page Title - Site Name',
  description: 'Page description for SEO',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Page Title',
    description: 'Page description'
  }
};
---

<SiteLayout metadata={metadata}>
  <!-- Page content goes here -->
  <section class="bg-background py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-foreground mb-6">
        Page Title
      </h1>
      <p class="text-muted-foreground text-lg">
        Page description and content
      </p>
    </div>
  </section>
</SiteLayout>
```

### SEO & Schema Patterns

**Page Metadata Pattern:**
```astro
---
import SiteLayout from '@layouts/SiteLayout.astro';

const metadata = {
  title: 'Page Title - Site Name',
  description: 'Page description for SEO (150-160 characters optimal)',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Page Title',
    description: 'Page description',
    url: 'https://yoursite.com/page-url',
    mainEntity: {
      '@type': 'Service',
      name: 'Service Name',
      description: 'Service description'
    }
  }
};
---

<SiteLayout metadata={metadata}>
  <!-- Page content -->
</SiteLayout>
```

**Schema Best Practices**:
- Keep base schemas minimal (Organization, WebSite only)
- Add page-specific schemas via `metadata.schema`
- Use proper `@type` for content (WebPage, Service, FAQPage, etc.)
- Include all required properties per schema.org spec
- Ensure schema URLs match actual page URLs

### Dynamic Pages

**Dynamic Route Pattern:**
```astro
---
// src/pages/services/[slug].astro
import SiteLayout from '@layouts/SiteLayout.astro';

// This would typically come from a CMS or data source
const serviceData = {
  'plumbing': {
    title: 'Professional Plumbing Services',
    description: 'Expert plumbing solutions for your home and business',
    content: 'Detailed service content...'
  },
  'electrical': {
    title: 'Licensed Electrical Services',
    description: 'Safe and reliable electrical solutions',
    content: 'Detailed service content...'
  }
};

const { slug } = Astro.params;
const service = serviceData[slug];

if (!service) {
  return Astro.redirect('/404');
}

const metadata = {
  title: `${service.title} - Site Name`,
  description: service.description,
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description
  }
};
---

<SiteLayout metadata={metadata}>
  <section class="bg-background py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-foreground mb-6">
        {service.title}
      </h1>
      <p class="text-muted-foreground text-lg mb-8">
        {service.description}
      </p>
      <div class="prose max-w-none">
        {service.content}
      </div>
    </div>
  </section>
</SiteLayout>
```

### Naming Conventions

**Files & Routing**:
- Pages: `lowercase.astro` (e.g., `index.astro`, `about.astro`)
- Folders: `lowercase` (e.g., `services/`, `contact/`)
- Dynamic routes: `[param].astro` (e.g., `[slug].astro`)
- Nested routes: `folder/[param]/index.astro`

### Page Types & Examples

**Homepage (`src/pages/index.astro`)**:
- Title: "Site Name" (not "Home - Site Name")
- Focus on main value proposition
- Include key services/products
- Strong call-to-action elements

**About Page (`src/pages/about.astro`)**:
- Title: "About - Site Name"
- Company story and values
- Team information
- Contact details

**Service Pages (`src/pages/services/index.astro` & subpages)**:
- Title: "Services - Site Name" for listing page
- Individual service pages: "Service Name - Site Name"
- Detailed service descriptions
- Service-specific schemas

### SEO Considerations

**Title Optimization**:
- Homepage: `<site_name>`
- Top-level pages: `<page_title> - <site_name>`
- Service pages: `<service_title> - <site_name>`
- Blog posts: `<post_title> | <site_name>`

**Meta Description Guidelines**:
- 150-160 characters optimal length
- Include primary keyword
- Write for humans, not search engines
- Unique for each page

**Content Structure**:
- H1: Main page title (one per page)
- H2: Major sections
- H3: Subsections
- Logical heading hierarchy

### Performance for Pages

**Above-the-fold Optimization**:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '@assets/hero.jpg';
---

<!-- Critical content first -->
<section class="bg-background">
  <h1>Critical heading</h1>
  <Image 
    src={heroImage}
    alt="Description"
    loading="eager"
    fetchpriority="high"
    widths={[400, 800, 1200, 1600]}
    sizes="100vw"
  />
</section>

<!-- Non-critical content -->
<section class="bg-muted">
  <!-- Secondary content -->
</section>
```

### Content Guidelines

**Healthcare Template Specific**:
- Maintain professional, trustworthy tone
- Include relevant healthcare schemas
- Ensure medical accuracy in content
- Use appropriate terminology
- Include accessibility considerations

**Accessibility**:
- Proper heading structure
- Alt text for all images
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## 🎨 Icon Usage in Pages

### Page-Level Icon Patterns

**Page Headers with Icons**:
```astro
---
import Icon from '@components/Icon.astro';
import SiteLayout from '@layouts/SiteLayout.astro';

const metadata = {
  title: 'Emergency Services - Healthcare Template',
  description: '24/7 emergency medical services',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Emergency Services'
  }
};
---

<SiteLayout metadata={metadata}>
  <section class="bg-background py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page header with icon -->
      <div class="flex items-center gap-4 mb-8">
        <Icon name="tabler:ambulance" class="h-10 w-10 text-primary" />
        <div>
          <h1 class="text-4xl font-bold text-foreground">Emergency Services</h1>
          <p class="text-lg text-muted-foreground">24/7 medical emergency care</p>
        </div>
      </div>
    </div>
  </section>
</SiteLayout>
```

**Service Page Icons**:
```astro
<!-- Service listing with icons -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-card rounded-lg p-6">
    <Icon name="tabler:stethoscope" class="h-8 w-8 text-primary mb-4" />
    <h3 class="text-xl font-semibold text-card-foreground mb-2">General Care</h3>
    <p class="text-muted-foreground">Comprehensive health services</p>
  </div>
  
  <div class="bg-card rounded-lg p-6">
    <Icon name="tabler:heartbeat" class="h-8 w-8 text-primary mb-4" />
    <h3 class="text-xl font-semibold text-card-foreground mb-2">Cardiology</h3>
    <p class="text-muted-foreground">Heart and cardiovascular care</p>
  </div>
</div>
```

**Call-to-Action Buttons with Icons**:
```astro
<!-- CTA buttons using icons -->
<div class="flex flex-col sm:flex-row gap-4">
  <a href="/contact" class="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg">
    <Icon name="tabler:phone" class="h-5 w-5" />
    Call Now
  </a>
  
  <a href="/appointment" class="flex items-center justify-center gap-2 bg-background border border-border text-foreground hover:bg-muted px-6 py-3 rounded-lg">
    <Icon name="tabler:calendar" class="h-5 w-5" />
    Book Appointment
  </a>
</div>
```

**Contact Information Sections**:
```astro
<!-- Contact info with consistent iconography -->
<div class="bg-secondary rounded-lg p-6">
  <h2 class="text-2xl font-semibold text-secondary-foreground mb-6">Contact Information</h2>
  
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <Icon name="tabler:map-pin" class="h-6 w-6 text-secondary-foreground shrink-0" />
      <span class="text-secondary-foreground">123 Healthcare Avenue, Medical City, MC 12345</span>
    </div>
    
    <div class="flex items-center gap-3">
      <Icon name="tabler:phone" class="h-6 w-6 text-secondary-foreground shrink-0" />
      <span class="text-secondary-foreground">Emergency: (555) 911-HELP</span>
    </div>
    
    <div class="flex items-center gap-3">
      <Icon name="tabler:clock" class="h-6 w-6 text-secondary-foreground shrink-0" />
      <span class="text-secondary-foreground">24/7 Emergency Services</span>
    </div>
  </div>
</div>
```

### Page Icon Migration Patterns

**From Inline SVG to Icon Component**:

**Old Pattern** (❌ Avoid):
```astro
<a href="/services">
  View Services
  <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
</a>
```

**New Pattern** (✅ Use):
```astro
<a href="/services" class="flex items-center gap-2">
  View Services
  <Icon name="tabler:arrow-right" class="h-5 w-5" />
</a>
```

### Icon Size Guidelines for Pages

**Page-Specific Icon Sizing**:
```astro
<!-- Hero section icons -->
<section class="bg-background py-16">
  <div class="text-center">
    <Icon name="tabler:shield-check" class="h-16 w-16 text-primary mx-auto mb-6" />
    <h1 class="text-4xl font-bold text-foreground">Trusted Healthcare</h1>
  </div>
</section>

<!-- Section header icons -->
<section class="bg-background py-12">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center gap-3 mb-8">
      <Icon name="tabler:medical-cross" class="h-8 w-8 text-primary" />
      <h2 class="text-3xl font-bold text-foreground">Our Specialties</h2>
    </div>
  </div>
</section>

<!-- Feature card icons -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-card rounded-lg p-6 text-center">
    <Icon name="tabler:users" class="h-10 w-10 text-primary mx-auto mb-4" />
    <h3 class="text-lg font-semibold">Expert Team</h3>
  </div>
</div>

<!-- Button and action icons -->
<button class="flex items-center gap-2">
  <Icon name="tabler:download" class="h-5 w-5" />
  Download Brochure
</button>
```

### Page Icon Accessibility

**Ensure all page icons are accessible**:
```astro
<!-- Decorative icons in content -->
<p class="flex items-center gap-2">
  <Icon name="tabler:check" class="h-5 w-5 text-green-600" aria-hidden="true" />
  Insurance accepted
</p>

<!-- Functional icons with proper labels -->
<a href="/emergency" class="flex items-center gap-3">
  <Icon name="tabler:phone" class="h-6 w-6 text-red-600" />
  <span>24/7 Emergency Line</span>
</a>

<!-- Icon-only buttons -->
<button aria-label="Close modal">
  <Icon name="tabler:x" class="h-6 w-6" />
</button>
```

### Social Sharing Icons

**For pages with social sharing features**:
```astro
<div class="flex items-center gap-4">
  <span class="text-sm text-muted-foreground">Share:</span>
  <a href="#" aria-label="Share on Facebook" class="text-muted-foreground hover:text-primary">
    <Icon name="tabler:brand-facebook" class="h-5 w-5" />
  </a>
  <a href="#" aria-label="Share on Twitter" class="text-muted-foreground hover:text-primary">
    <Icon name="tabler:brand-twitter" class="h-5 w-5" />
  </a>
  <a href="#" aria-label="Share on LinkedIn" class="text-muted-foreground hover:text-primary">
    <Icon name="tabler:brand-linkedin" class="h-5 w-5" />
  </a>
</div>
```

---

**Pages Agent Version**: 1.0  
**Last Updated**: 2025-11-22