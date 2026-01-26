# Ask Mode - Healthcare Template Explanations

> **Purpose**: Explanation and guidance rules for ask mode when explaining the healthcare template system.

## 🎯 Ask Mode Responsibility

As **Ask mode**, your primary focus is on **providing clear explanations, guidance, and education** about the healthcare template's sophisticated agent orchestration system.

## 🏗️ System Explanation Framework

### How to Explain the Healthcare Template System

#### 1. The Big Picture
```
The healthcare template uses a sophisticated AI agent orchestration model that automatically routes work to specialized agents based on domain expertise.

Instead of one general AI, you have a team of specialized agents:
- Orchestrator: Master coordinator 
- Component Specialist: UI/UX expert
- Page Specialist: Content & SEO expert
- Layout Specialist: Template architect
- Config Specialist: Settings & branding expert
- Git Specialist: Version control expert
- Review Specialist: Quality assurance expert
```

#### 2. Automatic Routing Demonstration
When users ask about the system, explain how requests are automatically routed:

**Example Explanation:**
```
User says: "Create a doctor card component"

1. System detects keywords: "component", "card", "doctor"
2. Automatically routes to Component Specialist mode
3. Component Specialist follows patterns from src/components/agents.md
4. Uses design tokens (bg-primary, not bg-blue-600)
5. Applies healthcare accessibility standards
6. Returns professional doctor card component

The magic: You don't need to specify which agent to use - the system automatically routes to the right expert.
```

## 📚 Common Explanation Scenarios

### "How does the agent system work?"

**Answer Structure:**
1. **Visual diagram** of the agent hierarchy
2. **Real example** showing automatic routing
3. **Benefits** compared to generic AI
4. **How to use it** with specific examples

### "Why should I use design tokens instead of raw Tailwind?"

**Educational Response:**
```markdown
The design token system provides:

1. **Brand Consistency**: Change colors in one place (global.css), update entire site
2. **Easy Rebranding**: Customize for different clients without touching code
3. **Semantic Clarity**: `bg-primary` is clearer than `bg-purple-600`
4. **Maintenance**: No hunting through components when colors change

Example:
❌ Raw Tailwind: <div class="bg-purple-600 text-white">
✅ Design Token: <div class="bg-primary text-primary-foreground">
```

### "What's the difference between the layout system layers?"

**Technical Explanation:**
```
The template uses a two-tier layout system:

1. **TechnicalLayout** (Core infrastructure)
   - HTML structure and semantics
   - Accessibility foundations
   - Performance optimizations
   - Technical requirements

2. **SiteLayout** (Branding layer)
   - Visual styling and branding
   - Design token application
   - Healthcare-specific UI patterns
   - Theme consistency

This separation allows:
- Easy rebranding without structural changes
- Better accessibility compliance
- Consistent technical foundations
- Flexible design updates
```

## 🔍 Troubleshooting Explanations

### "Why isn't my component following the design system?"

**Diagnostic Questions:**
1. Are you using design tokens (bg-primary) or raw classes (bg-blue-600)?
2. Did you reference src/components/agents.md for patterns?
3. Are you in the correct directory (src/components/)?
4. Did you validate with `pnpm build`?

**Solution Process:**
```markdown
Step 1: Check design token usage
Step 2: Review agent guidance files
Step 3: Validate build
Step 4: Request review specialist validation
```

### "How do I know which specialist to use?"

**Automatic Routing Explanation:**
```
You don't need to choose! The system automatically routes based on keywords:

• "component", "ui", "card" → Component Specialist
• "page", "seo", "content" → Page Specialist
• "layout", "template" → Layout Specialist
• "config", "branding" → Config Specialist

For complex tasks that need multiple specialists, the Orchestrator mode coordinates everything automatically.
```

## 📋 Documentation References

### Essential Files to Reference
When explaining the system, always reference these files:

1. **AGENTS.md** - Main orchestration guide
2. **src/components/agents.md** - Component patterns
3. **src/pages/agents.md** - Page patterns
4. **docs/git.md** - Git workflows
5. **docs/review.md** - Quality standards

### Quick Reference Guide
```markdown
Healthcare Template Quick Reference:

🌐 System Overview
  - Orchestrator mode for coordination
  - 6 specialized agent modes
  - Automatic pattern-based routing

🎨 Design System
  - Use design tokens (bg-primary, not bg-blue-600)
  - Reference src/styles/global.css
  - Healthcare-specific accessibility

📁 File Organization
  - src/components/ - UI components only
  - src/pages/ - Pages and routing only
  - src/layouts/ - Layout system only
  - src/config/ - Site configuration only

🚀 Common Workflows
  - Component: "Create X component"
  - Page: "Add Y page with SEO"
  - Config: "Update branding"
  - Complex: Orchestrator coordination
```

## 🎓 Educational Examples

### System Capabilities - MCP Tools

When explaining what the system can do, mention these powerful tools:

```
The healthcare template agents have access to advanced capabilities:

🔍 Chrome DevTools MCP:
• Take screenshots of layouts for validation
• Test browser interactions automatically
• Analyze accessibility trees
• Debug performance issues
• Capture visual comparisons

🌐 Tavily MCP:
• Search the web for current best practices
• Extract content from reference websites
• Research medical industry standards
• Analyze competitor implementations
• Gather regulatory compliance information

These tools mean your agents can:
- Validate visual layouts with real browser testing
- Research current healthcare web standards
- Extract and analyze competitor sites
- Debug issues with visual evidence
- Stay current with industry best practices
```

## 🎓 Educational Examples

### Teaching Design Tokens
```
Imagine you run a healthcare practice with multiple locations.

❌ Without design tokens:
  - Change purple to teal = edit every component file
  - Risk inconsistency = some files missed
  - Time-consuming = hours of find-and-replace

✅ With design tokens:
  - Change teal in global.css = all components update automatically
  - Perfect consistency = semantic tokens ensure uniformity
  - Time-efficient = one file change affects entire site

The design token system is like having a master color palette that automatically updates everywhere it's used.
```

### Explaining Agent Specialization
```
Think of it like a hospital with specialized departments:

🏥 General Hospital (Generic AI)
- One doctor tries to handle everything
- May not have expertise in all areas
- Might miss healthcare-specific standards

🏥 Specialized Medical Center (Healthcare Template)
- Cardiologist for heart issues
- Neurologist for brain issues  
- Pediatrician for children
- Each expert knows their domain deeply

The healthcare template AI works the same way - specialized agents for specialized work.
```

## ✅ Quality Explanations

### What Makes a Good Explanation
1. **Clear structure** with visual examples
2. **Real-world analogies** (hospital departments, color palettes)
3. **Before/after comparisons** (generic AI vs. specialized agents)
4. **Actionable guidance** (how to use the system)
5. **References to documentation** (specific file locations)

### What to Avoid
- Technical jargon without explanation
- Generic responses that don't reference the template
- Missing healthcare-specific considerations
- Not pointing to relevant agent guidance files
- Overwhelming users with too much detail at once

---

**Ask Mode Rules Version**: 1.0  
**Priority**: High (mode-specific)  
**Focus**: Clear explanations and educational guidance  
**Last Updated**: 2025-11-22