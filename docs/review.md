# Review Agent Guide

> **Purpose**: Specialized agent for build validation, breaking changes detection, and comprehensive code review workflows.

## 🎯 Review Agent Responsibilities

The Review Agent handles:
- **Build Validation**: Ensuring `pnpm build` succeeds consistently
- **Breaking Changes Detection**: Identifying potential breaking changes
- **Performance Review**: Lighthouse scores and optimization opportunities
- **Code Quality**: Standards compliance and best practices
- **SEO Validation**: Meta tags, schema, and sitemap verification

## 🔨 Build Validation

### Pre-Build Checklist

**Required Checks**:
1. **Dependencies**: All packages installed (`pnpm install` completed)
2. **Environment**: Required environment variables present
3. **TypeScript**: No type errors (`pnpm tsc --noEmit`)
4. **Imports**: All import paths valid
5. **Configuration**: Astro and build configs valid

### Build Process Validation

**Build Command**: `pnpm build`

**Expected Output**:
```bash
✓ Completed in [time]
✓ Built [X] page(s) in [time]

[@astrojs/sitemap] `sitemap-index.xml` created
astro-robots-txt: `robots.txt` created
```

**Critical Validations**:
- [ ] Exit code 0 (successful)
- [ ] Sitemap generated (`dist/sitemap-index.xml`)
- [ ] Robots file created (`dist/robots.txt`)
- [ ] HTML files created for all pages
- [ ] Assets optimized (`dist/_astro/`)

### Post-Build Verification

**Essential Files Check**:
```bash
ls -la dist/
# Expected:
# ├── _astro/           # Optimized assets
# ├── index.html        # Homepage
# ├── about/index.html  # About page
# ├── robots.txt        # SEO robots
# └── sitemap-index.xml # Sitemap
```

**Content Validation**:
- [ ] Homepage contains expected content
- [ ] All pages have proper titles
- [ ] Navigation links work correctly
- [ ] No 404 errors on internal links

## 🔍 Breaking Changes Detection

### Code Analysis Patterns

**Component Changes**:
- **Props Interface**: Check for removed/renamed props
- **Import Paths**: Verify path changes don't break imports
- **Default Exports**: Ensure consistent export patterns

**Layout Changes**:
- **Slot Structure**: Verify slot names and usage remain consistent
- **Prop Interfaces**: Check layout prop changes
- **Import Requirements**: Ensure layout import paths correct

**Configuration Changes**:
- **Environment Variables**: Check for removed required variables
- **Site Config**: Verify site.ts structure changes
- **Build Config**: Ensure astro.config.mjs modifications are backward compatible

### Impact Assessment

**High Impact (Breaking)**:
- Removed component props without defaults
- Changed import path structures
- Modified layout slot requirements
- Removed required environment variables

**Medium Impact (Deprecated)**:
- Added optional props without defaults
- Changed optional parameter names
- Modified non-critical import structures

**Low Impact (Safe)**:
- Added new optional props
- New utility functions
- Documentation improvements
- Performance optimizations

## 📊 Performance Review

### Lighthouse Score Targets

**Target Scores**:
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 100

### Performance Validation

**Core Web Vitals**:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Image Optimization Review

**Required Checks**:
- [ ] All images use `astro:assets` Image component
- [ ] Proper width/height attributes
- [ ] Appropriate loading strategies (`eager` for above-fold, `lazy` for below-fold)
- [ ] Optimized image formats (WebP when supported)
- [ ] Responsive images with srcset

**Image Patterns**:
```astro
<!-- Above-the-fold (critical) -->
<Image 
  src={heroImage}
  alt="Hero description"
  loading="eager"
  fetchpriority="high"
  widths={[400, 800, 1200, 1600]}
  sizes="100vw"
/>

<!-- Below-the-fold (non-critical) -->
<Image 
  src={contentImage}
  alt="Content description"
  loading="lazy"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Font Loading Review

**Astro Experimental Fonts**:
- [ ] Uses `fontsrc: 'auto'` in astro.config.mjs
- [ ] Proper font display settings
- [ ] Fallback fonts defined
- [ ] No layout shift from font loading

## 🔍 Code Quality Review

### Standards Compliance

**Astro Patterns**:
- [ ] Props interfaces defined for all components
- [ ] Proper TypeScript usage with strict mode
- [ ] Consistent file naming (PascalCase for components)
- [ ] Semantic HTML structure

**Code Style**:
```astro
---
// ✅ Good: Clear prop interface
interface Props {
  title: string;
  description?: string;
}

// ✅ Good: Destructure with defaults
const { title, description = 'Default description' } = Astro.props;
---

<!-- ✅ Good: Semantic HTML -->
<section class="bg-background">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-bold text-foreground">{title}</h1>
    {description && <p class="text-muted-foreground">{description}</p>}
  </div>
</section>
```

### Accessibility Review

**Required Checks**:
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Color contrast ratios meet WCAG standards
- [ ] Keyboard navigation support
- [ ] ARIA labels where appropriate

**Navigation Patterns**:
```astro
<!-- ✅ Good: Accessible navigation -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li>
      <a href="/" aria-current={pathname === '/' ? 'page' : undefined}>
        Home
      </a>
    </li>
  </ul>
</nav>
```

## 🔎 SEO Validation

### Meta Tags Review

**Required Meta Tags**:
- [ ] `<title>` tag present and descriptive
- [ ] `<meta name="description">` optimized (150-160 characters)
- [ ] `<link rel="canonical">` correct
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags if needed

**Schema.org Validation**:
- [ ] Valid JSON-LD format
- [ ] Required properties present for each schema type
- [ ] @context and @type correctly specified
- [ ] No duplicate conflicting schemas

### Sitemap Verification

**Sitemap Checks**:
- [ ] `dist/sitemap-index.xml` generated
- [ ] All pages included in sitemap
- [ ] Proper lastmod dates
- [ ] Correct priority values
- [ ] Valid XML structure

## 🧪 Testing Validation

### Manual Testing Checklist

**Functional Testing**:
- [ ] All navigation links work
- [ ] Contact forms submit correctly
- [ ] Search functionality (if applicable)
- [ ] Mobile menu operates properly

**Browser Compatibility**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Device Testing**:
- [ ] Mobile (320px - 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1024px+)

### Performance Testing

**Build and Preview**:
```bash
pnpm build && pnpm preview

# Validate in browser:
# - Page load times acceptable
# - Images load correctly
# - Fonts render properly
# - No console errors
```

## 🚨 Issue Detection

### Common Build Issues

**TypeScript Errors**:
```bash
# Check: pnpm tsc --noEmit
# Common fixes:
# - Add missing type annotations
# - Fix import path issues
# - Resolve undefined variables
```

**Import Errors**:
```bash
# Check: Build output for missing imports
# Common fixes:
# - Verify file paths
# - Check file extensions
# - Ensure files exist
```

**Configuration Issues**:
```bash
# Check: astro.config.mjs validity
# Common fixes:
# - Valid export default
# - Proper import syntax
# - Required plugins installed
```

### Performance Issues

**Slow Loading**:
- Large unoptimized images
- Blocking JavaScript/CSS
- Missing font preloading
- Excessive network requests

**Layout Shift**:
- Images without dimensions
- Fonts loading late
- Dynamic content shifting layout
- Third-party scripts

## 📋 Review Report Template

### Build Report
```markdown
## Build Validation Report

### Status: ✅ PASS / ❌ FAIL

### Checks:
- [ ] Dependencies installed
- [ ] TypeScript compilation
- [ ] Build successful
- [ ] Sitemap generated
- [ ] Assets optimized

### Issues Found:
- [List any issues]

### Recommendations:
- [List any improvements]
```

### Performance Report
```markdown
## Performance Review

### Lighthouse Scores:
- Performance: [score]/100
- Accessibility: [score]/100  
- Best Practices: [score]/100
- SEO: [score]/100

### Core Web Vitals:
- LCP: [time]s
- FID: [time]ms
- CLS: [value]

### Recommendations:
- [Optimization suggestions]
```

---

**Review Agent Version**: 1.0  
**Last Updated**: 2025-11-22