# Page Creation & Routing Rules

> **Purpose**: Specialized rules for AI agents working on page creation and routing in the healthcare template.

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

---

**Pages Rules Version**: 1.0  
**Last Updated**: 2025-11-22