# KiloCode Custom Rules - Healthcare Template Guide

> **Purpose**: Complete guide to the healthcare template's AI agent orchestration system using KiloCode custom rules.

## 🎯 Overview

Your healthcare template now has a sophisticated AI agent orchestration system that automatically routes work to specialized agents based on your specific domain expertise. This creates the **"best template made for AI ever"** through intelligent automation and domain specialization.

## 🚀 How It Works

### Automatic Mode Routing

When you make a request, KiloCode's custom rules automatically:

1. **Analyzes your request** using pattern matching
2. **Routes to the appropriate specialist** based on keywords and context  
3. **Applies domain-specific knowledge** from your agent files
4. **Ensures consistency** with your established patterns

### Example Workflows

#### Request: "Create a new service card component"

**Before (generic AI)**:
- Generic component creation
- May not follow your design system
- No knowledge of healthcare patterns

**After (with custom rules)**:
- Automatically routes to `component-specialist` mode
- Uses patterns from `src/components/agents.md`
- Applies design token system (`bg-primary`, not `bg-blue-600`)
- Follows healthcare-specific accessibility standards

#### Request: "Add SEO to our about page"

**Before (generic AI)**:
- Basic meta tags
- May not follow your schema patterns

**After (with custom rules)**:
- Automatically routes to `page-specialist` mode  
- Uses patterns from `src/pages/agents.md`
- Implements proper healthcare schemas
- Follows your SEO title patterns

## 🏗️ Mode Architecture

### Core KiloCode Modes (Available)

| Mode | Responsibility | Routing Pattern | Guidance Files |
|------|---------------|-----------------|----------------|
| **Orchestrator** | Project coordination | Multi-area/strategic | `AGENTS.md`, `.kilocode/rules/orchestration-rules.md` |
| **Code** | Direct implementation | component, ui, page, config | `src/components/agents.md`, `src/pages/agents.md` |
| **Architect** | Planning & design | architecture, planning | `.kilocode/rules-architect/planning.md` |
| **Ask** | Explanations & guidance | how, why, explain | `.kilocode/rules-ask/explanations.md` |
| **Debug** | Troubleshooting | error, fix, debug | `.kilocode/rules-debug/troubleshooting.md` |

### Agent Specialization System

The healthcare template uses a sophisticated **agent specialization system** that works within these modes:

- **Component Work** → Automatically routed to appropriate mode with component expertise
- **Page Work** → Automatically routed to appropriate mode with page/SEO expertise  
- **Layout Work** → Automatically routed to appropriate mode with template expertise
- **Config Work** → Automatically routed to appropriate mode with configuration expertise
- **Git Work** → Automatically routed to appropriate mode with version control expertise
- **Review Work** → Automatically routed to appropriate mode with quality assurance expertise

### File Restrictions

Each mode follows specific patterns and file restrictions:

- **Component Development**: `src/components/` directory patterns
- **Page Development**: `src/pages/` directory patterns
- **Layout Development**: `src/layouts/` directory patterns
- **Configuration**: `src/config/` and `src/styles/` directories

This prevents agents from accidentally modifying files outside their expertise area.

## 🧠 Intelligence Features

### Pattern-Based Routing

The system uses keyword patterns to intelligently route work to the appropriate mode:

```markdown
# Component-related requests
Keywords: component, ui, design, button, card, header, footer, nav, menu
Route to: Code mode with component expertise

# Page-related requests  
Keywords: page, routing, seo, meta, title, description, content
Route to: Code mode with page/SEO expertise

# Complex coordination
Keywords: orchestrate, coordinate, plan, strategy, multiple
Route to: Orchestrator mode for coordination

# Troubleshooting
Keywords: error, fix, debug, troubleshoot, problem
Route to: Debug mode for diagnostics

# Explanations
Keywords: how, why, explain, what, help
Route to: Ask mode for guidance
```

### Domain Knowledge Integration

Each mode includes detailed role definitions that ensure:

1. **Follow your specific patterns** (like design tokens instead of raw Tailwind)
2. **Use your naming conventions** (PascalCase components, lowercase pages)
3. **Apply healthcare-specific standards** (accessibility, professional tone)
4. **Reference your documentation** (always check the relevant agent guidance files)

### Multi-Mode Coordination

For complex tasks, the orchestrator mode coordinates between specialized modes:

```
User Request: "Create a new service page with custom component"
    ↓
Orchestrator Mode Analyzes:
- Service page → Code mode (with page expertise)
- Custom component → Code mode (with component expertise)  
    ↓
Coordinates both implementations
    ↓
Returns integrated solution following all patterns
```

## 🎯 Usage Examples

### Simple Requests (Automatic Routing)

These requests are automatically routed to the right specialist:

```bash
# Creates header component using design system
"Add a header component with navigation"

# Creates about page with SEO
"Create an about page with proper meta tags"  

# Updates branding colors
"Change the primary color to blue"

# Git workflow
"Create a feature branch for the new contact form"
```

### Complex Requests (Orchestrator Coordination)

For multi-area tasks, the orchestrator manages the workflow:

```bash
# Multi-specialist coordination
"Build a complete services section with new pages and components"

# Strategic planning  
"Plan the architecture for adding a blog feature"

# Quality assurance
"Review and optimize the entire site for performance"
```

## 🔧 Advanced Features

### Custom Instructions

Each mode includes specific instructions for your template:

- **Component Specialist**: Always use design tokens, follow healthcare UI patterns
- **Page Specialist**: Use SiteLayout wrapper, implement healthcare schemas
- **Layout Specialist**: Understand TechnicalLayout vs SiteLayout system
- **Git Specialist**: Use conventional commits, follow branch strategy

### Build Validation

The review specialist automatically:

- Runs `pnpm build` and `pnpm preview`
- Validates SEO and accessibility
- Checks performance optimization
- Ensures design token compliance

### Error Prevention

File restrictions prevent:
- Components being created in wrong directories
- Configuration changes affecting unrelated files
- Git operations on non-versioned files

## 🚀 Getting Started

### 1. Make Your First Request

Try a simple component request:
```
"Create a new testimonials component for the homepage"
```

### 2. Observe the Routing

Watch how the system automatically:
- Switches to `component-specialist` mode
- References your `src/components/agents.md`
- Uses design tokens and healthcare patterns

### 3. Try Complex Coordination

Test multi-area coordination:
```
"Add a complete contact section with page and form component"
```

### 4. Validate Results

Use the review specialist for quality assurance:
```
"Review the site and optimize performance"
```

## 🏆 Benefits for Your Team

### For Developers
- **Consistent patterns** across all work
- **Automatic documentation** reference
- **Built-in best practices** for healthcare templates
- **Reduced decision fatigue** from automated routing

### For Project Managers  
- **Predictable workflows** with clear specialist areas
- **Quality assurance** built into every change
- **Strategic oversight** through orchestrator mode
- **Faster development** with domain expertise

### For AI Agents
- **Clear role definitions** and boundaries
- **Domain-specific knowledge** in every mode
- **Automatic coordination** for complex tasks
- **Failure prevention** through file restrictions

## 📚 Additional Resources

- **AGENTS.md**: Main orchestration guide
- **src/components/agents.md**: Component development patterns
- **src/pages/agents.md**: Page creation and SEO patterns  
- **docs/git.md**: Version control workflows
- **docs/review.md**: Quality assurance standards

---

**Custom Rules Version**: 1.0  
**Healthcare Template Version**: 3.0  
**Last Updated**: 2025-11-22  
**Built by**: Dev Foundry Team