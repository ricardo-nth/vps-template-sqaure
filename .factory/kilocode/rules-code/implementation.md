# Code Mode - Healthcare Template Implementation Rules

> **Purpose**: Implementation-focused rules for code mode when working on the healthcare template.

## 🎯 Code Mode Responsibility

As **Code mode**, your primary focus is on **direct implementation and coding** while following the healthcare template's established patterns and agent guidance files.

## 🏗️ Template Implementation Workflow

### Mandatory Pattern Following
When implementing any feature:

1. **Reference agent guidance files** first:
   - Components: `src/components/agents.md`
   - Pages: `src/pages/agents.md`
   - Layouts: `src/layouts/agents.md`
   - Config: `src/config/agents.md`
   - Git: `docs/git.md`
   - Review: `docs/review.md`

2. **Follow design token system** (NEVER use raw Tailwind):
   - Use `bg-primary`, `text-foreground`, `bg-card` etc.
   - Reference `src/styles/global.css` for color tokens
   - Maintain semantic naming throughout

3. **Apply healthcare-specific patterns**:
   - Professional, trustworthy tone
   - Accessibility compliance (WCAG 2.1 AA)
   - Medical accuracy in content
   - Regulatory compliance messaging

## 🧱 Implementation Guidelines

### Component Development
```astro
---
// ALWAYS follow Astro component patterns from agents.md
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Default description' } = Astro.props;
---

<!-- ALWAYS use design tokens -->
<section class="bg-background py-12">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-semibold text-foreground">{title}</h2>
    <p class="text-muted-foreground">{description}</p>
  </div>
</section>
```

### Page Development
```astro
---
// ALWAYS wrap pages in SiteLayout
import SiteLayout from '@layouts/SiteLayout.astro';

const metadata = {
  title: 'Page Title - Site Name',
  description: 'Healthcare page description for SEO',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Page Title',
    description: 'Page description'
  }
};
---

<SiteLayout metadata={metadata}>
  <!-- Page content with design tokens -->
  <section class="bg-background">
    <!-- Content follows patterns from agents.md -->
  </section>
</SiteLayout>
```

### Configuration Updates
```css
/* ALWAYS update design tokens in global.css */
:root {
  /* Brand customization via OKLCH colors */
  --primary: oklch(0.65 0.15 200);         /* Teal branding */
  --primary-foreground: oklch(1.00 0 0);
  --ring: oklch(0.65 0.15 200);
}
```

## 🚫 Prohibited Practices

### Never Use Raw Tailwind Classes
```astro
<!-- ❌ INCORRECT -->
<div class="bg-white text-gray-800 p-4">
  <button class="bg-blue-600 text-white">Button</button>
</div>

<!-- ✅ CORRECT -->
<div class="bg-card text-card-foreground p-4">
  <button class="bg-primary text-primary-foreground">Button</button>
</div>
```

### Never Ignore Healthcare Patterns
- Always maintain professional medical tone
- Always include accessibility features
- Always follow established file structures
- Always reference appropriate agent guidance

## 🧪 Quality Assurance

### Build Validation
- **Always** run `pnpm build` after changes
- **Always** test with `pnpm preview`
- **Never** commit broken builds
- **Always** validate design token usage

### Code Quality Standards
- Follow TypeScript strict mode
- Use proper prop interfaces
- Include accessibility attributes
- Optimize images with `astro:assets`
- Maintain consistent file organization

## 🛠️ Available MCP Tools

You have access to powerful MCP (Model Context Protocol) tools that enhance your capabilities:

### Chrome DevTools MCP
**Purpose**: Browser automation, screenshots, and layout validation

**When to Use**:
- Take screenshots of components, pages, or layouts
- Test browser interactions and user flows
- Validate responsive design across different screen sizes
- Debug layout issues in real browsers
- Capture visual regression comparisons

**Available Functions**:
- `take_screenshot` - Capture page or element screenshots
- `take_snapshot` - Get accessibility tree snapshots
- `navigate_page` - Navigate to URLs for testing
- `evaluate_script` - Execute JavaScript for testing
- `performance_start_trace` - Analyze page performance

### Tavily MCP
**Purpose**: Advanced web search and content extraction

**When to Use**:
- Research medical terminology and best practices
- Find current healthcare industry standards
- Extract content from external websites for reference
- Conduct comprehensive web searches for content validation
- Gather competitive analysis data

**Available Functions**:
- `tavily-search` - Real-time web search with customizable parameters
- `tavily-extract` - Extract clean content from specific URLs
- `tavily-crawl` - Structured web crawling with depth control
- `tavily-map` - Map website structure and navigation paths

**Best Practices**:
- Use Tavily for research instead of manual web browsing
- Use Chrome DevTools for layout validation and visual testing
- Always capture screenshots when validating component layouts
- Use web search for medical accuracy and compliance research

## 🔄 Delegation Triggers

When working on complex features that span multiple areas, delegate to orchestrator:

### Multi-Area Coordination Needed
- **Site-wide branding updates** → Delegate to orchestrator
- **Complete feature systems** (pages + components) → Delegate to orchestrator
- **Architecture decisions** → Delegate to orchestrator
- **Cross-cutting concerns** → Delegate to orchestrator

### Direct Implementation Appropriate
- Single component creation/modification
- Single page creation/modification
- Configuration updates within scope
- Code review and optimization

## 📋 Healthcare-Specific Requirements

### Medical Content Standards
- **Accuracy**: Ensure all medical information is factually correct
- **Professional tone**: Maintain authoritative, trustworthy language
- **Privacy**: Consider patient data handling and privacy
- **Compliance**: Include relevant healthcare regulations messaging

### Accessibility Requirements
- **WCAG 2.1 AA compliance** for all interactive elements
- **Keyboard navigation** support
- **Screen reader compatibility** with proper ARIA labels
- **Color contrast** compliance for medical readability
- **Focus management** for form elements

---

**Code Mode Rules Version**: 1.0  
**Priority**: High (mode-specific)  
**Focus**: Direct implementation with template compliance  
**Last Updated**: 2025-11-22