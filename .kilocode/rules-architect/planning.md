# Architect Mode - Healthcare Template Planning Rules

> **Purpose**: Planning and architectural decision rules for architect mode working on the healthcare template.

## 🎯 Architect Mode Responsibility

As **Architect mode**, your primary focus is on **strategic planning, system design, and architectural decisions** while understanding the healthcare template's orchestration model.

## 🏗️ Architectural Principles

### Healthcare Template Architecture Understanding

The healthcare template uses a **sophisticated agent orchestration model** with:

1. **Root Orchestrator**: Coordinates all work across specialists
2. **Specialized Agents**: Domain experts in specific areas (components, pages, layouts, config, git, review)
3. **Pattern-Based Routing**: Automatic request routing based on keywords
4. **File Restrictions**: Each agent restricted to appropriate directories
5. **Quality Gates**: Built-in validation and review processes

### Agent Architecture Diagram

```
User Request
    ↓
Orchestrator Mode (Root)
    ↓
┌─────────────────────────────────────────────────────────┐
│ Specialized Agents (Domain Experts)                     │
├─────────────────────────────────────────────────────────┤
│ • Component Specialist → src/components/                │
│ • Page Specialist → src/pages/                          │
│ • Layout Specialist → src/layouts/                      │
│ • Config Specialist → src/config/, src/styles/          │
│ • Git Specialist → docs/git.md                          │
│ • Review Specialist → docs/review.md                    │
└─────────────────────────────────────────────────────────┘
    ↓
Quality Assurance & Integration
```

## 🧭 Planning Guidelines

### When to Use Orchestrator Mode
For **complex, multi-area coordination**, delegate to orchestrator:

- **Strategic planning**: "Plan architecture for adding blog feature"
- **Multi-area coordination**: "Build complete contact system"
- **Cross-cutting concerns**: "Implement new navigation system"
- **Site-wide changes**: "Update branding across all pages"
- **Architecture decisions**: "Design patient data management system"

### When Direct Implementation is Appropriate
For **focused, single-area work**:

- **Single component planning**: "Design doctor card component"
- **Single page planning**: "Plan services overview page structure"
- **Configuration planning**: "Plan color system for new brand"
- **Git workflow planning**: "Plan feature branch strategy"

## 🎨 Design System Architecture

### Design Token System
The template uses a **centralized design token system** for consistency:

```css
/* Central source of truth: src/styles/global.css */
:root {
  /* Core tokens - semantic meaning */
  --primary: oklch(0.62 0.19 259.76);      /* Main brand */
  --background: oklch(0.99 0.02 257.02);   /* Page background */
  --card: oklch(0.99 0.01 257.02);         /* Card background */
  
  /* Healthcare-specific tokens */
  --medical-primary: oklch(0.65 0.15 200); /* Medical blue */
  --trust-indicators: oklch(0.85 0.08 140); /* Trust green */
}
```

### Component Architecture Principles
- **Semantic naming**: Use `bg-card`, `text-foreground` (not raw colors)
- **Healthcare patterns**: Professional, trustworthy, accessible
- **Modularity**: Each component focused and reusable
- **Performance**: Optimized for medical websites

## 📋 Planning Workflow

### Step 1: Understand the Request Scope
Analyze whether the request requires:
- **Single area**: Direct implementation possible
- **Multiple areas**: Orchestrator coordination needed
- **Strategic planning**: Architecture mode appropriate
- **Quality assurance**: Review specialist involvement

### Step 2: Reference Agent Guidance
Before making plans, consult:
- `src/components/agents.md` - Component patterns
- `src/pages/agents.md` - Page structure patterns
- `src/layouts/agents.md` - Layout system patterns
- `AGENTS.md` - Overall orchestration guide

### Step 3: Design Integration Points
Consider how different areas work together:
- **Component + Page integration**: How components fit into pages
- **Layout + Configuration**: How branding affects layouts
- **Git + Development workflow**: How changes are managed

### Step 4: Plan for Quality Assurance
Every implementation should include:
- **Build validation**: `pnpm build` and `pnpm preview`
- **Design token compliance**: Semantic color usage
- **Accessibility review**: WCAG 2.1 AA compliance
- **Performance optimization**: Image and code optimization

## 🏥 Healthcare-Specific Architectural Considerations

### Medical Website Requirements
- **Trust indicators**: Certifications, testimonials, credentials
- **Professional appearance**: Clean, authoritative design
- **Accessibility**: Critical for medical websites
- **Privacy compliance**: Patient data handling considerations
- **Mobile-first**: Many patients use mobile devices

### Content Architecture
- **Service-based structure**: Healthcare services as primary content
- **Professional tone**: Medical accuracy and authority
- **Trust building**: Credentials, experience, patient outcomes
- **Accessibility compliance**: Required for medical websites

### Technical Architecture
- **Performance critical**: Patients expect fast loading
- **SEO optimization**: Essential for healthcare discovery
- **Security considerations**: Patient data protection
- **Scalability**: Ready for feature expansion

## 🛠️ Available MCP Tools for Planning & Research

You have access to powerful MCP tools that enhance architectural planning:

### Chrome DevTools MCP
**For Layout & Design Research**:
- `take_screenshot` - Capture competitor layouts and design patterns
- `take_snapshot` - Analyze accessibility structures of reference sites
- `navigate_page` - Test navigation patterns and user flows
- `performance_start_trace` - Analyze performance characteristics
- `evaluate_script` - Test interactive elements and functionality

### Tavily MCP
**For Research & Competitive Analysis**:
- `tavily-search` - Find current healthcare web design trends and standards
- `tavily-extract` - Extract content from leading healthcare websites
- `tavily-crawl` - Comprehensive analysis of healthcare site architectures
- `tavily-map` - Map competitor navigation and information architecture

**Architectural Planning Benefits**:
- Research current healthcare website best practices
- Analyze competitor implementations for inspiration
- Validate architectural decisions against industry standards
- Gather evidence for design and technical choices
- Stay current with healthcare web regulations and accessibility requirements

## 🔄 Planning Templates

### Multi-Area Feature Planning
```markdown
# Feature: Patient Portal

## Scope Analysis
- **Pages needed**: Dashboard, appointments, records
- **Components needed**: Patient cards, appointment forms
- **Configuration**: User authentication, data privacy

## Agent Coordination
1. **Page Specialist**: Create portal pages with medical schemas
2. **Component Specialist**: Build patient interface components
3. **Config Specialist**: Set up authentication and privacy settings
4. **Review Specialist**: Validate healthcare compliance

## Implementation Plan
[Detailed step-by-step plan with agent coordination]
```

### Single Area Planning
```markdown
# Component: Doctor Profile Card

## Requirements
- Professional medical appearance
- Trust indicators (credentials, experience)
- Accessibility compliance
- Design token usage

## Implementation
[Direct component development following agents.md patterns]
```

## ✅ Quality Gates

Every architectural plan should include:

1. **Pattern compliance**: Reference to relevant agent files
2. **Design token usage**: Semantic color system
3. **Healthcare standards**: Professional medical tone
4. **Accessibility**: WCAG 2.1 AA compliance
5. **Performance**: Medical website optimization
6. **Integration**: How pieces work together

---

**Architect Mode Rules Version**: 1.0  
**Priority**: High (mode-specific)  
**Focus**: Strategic planning and architecture  
**Last Updated**: 2025-11-22