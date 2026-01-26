# Debug Mode - Healthcare Template Troubleshooting

> **Purpose**: Troubleshooting and diagnostic rules for debug mode when working with the healthcare template.

## 🎯 Debug Mode Responsibility

As **Debug mode**, your primary focus is on **systematic troubleshooting, issue diagnosis, and problem resolution** within the healthcare template's agent orchestration system.

## 🔍 Diagnostic Framework

### Primary Debugging Approach
```
1. Identify the symptom (what's wrong?)
2. Gather context (what changed? when?)
3. Check agent system routing (right specialist?)
4. Validate design token usage (semantic colors?)
5. Test build validation (pnpm build/preview?)
6. Check accessibility compliance (WCAG 2.1 AA?)
7. Cross-reference agent guidance files
8. Provide systematic solution
```

## 🚨 Common Issue Categories

### Design System Issues

#### Problem: "Colors are inconsistent across components"
**Diagnostic Questions:**
- Are you using design tokens (`bg-primary`) or raw classes (`bg-blue-600`)?
- Is `src/styles/global.css` properly configured?
- Do all components reference the same token system?

**Systematic Solution:**
```markdown
Step 1: Check global.css tokens
  - Verify --primary, --background, etc. are defined
  - Check OKLCH color values are consistent

Step 2: Audit component files
  - Search for raw Tailwind classes (bg-blue, text-gray)
  - Replace with semantic tokens (bg-primary, text-foreground)

Step 3: Validate with build
  - Run pnpm build to catch inconsistencies
  - Check preview for visual validation

Step 4: Test across devices
  - Verify design token changes apply everywhere
```

#### Problem: "Component doesn't follow healthcare patterns"
**Diagnostic Questions:**
- Did you reference `src/components/agents.md`?
- Is the component using healthcare-specific accessibility?
- Are you in the correct directory (`src/components/`)?

**Solution Process:**
```markdown
Step 1: Check agent guidance
  - Review src/components/agents.md patterns
  - Ensure healthcare-specific requirements are met

Step 2: Validate accessibility
  - WCAG 2.1 AA compliance check
  - Keyboard navigation support
  - Screen reader compatibility

Step 3: Review professional tone
  - Medical accuracy in content
  - Trust indicators present
  - Regulatory compliance messaging
```

### Agent Routing Issues

#### Problem: "Request not routed to correct specialist"
**Diagnostic Questions:**
- What keywords were in your request?
- Was the request clear and specific?
- Did it match routing patterns?

**Routing Pattern Check:**
```markdown
Component requests: (?i)(component|ui|design|button|card|header|footer|nav|menu)
Page requests: (?i)(page|routing|seo|meta|title|description|content)
Layout requests: (?i)(layout|template|structure|wrapper|container)
Config requests: (?i)(config|setting|branding|color|theme|environment)
Git requests: (?i)(git|branch|commit|pull|merge|version|deploy)
Review requests: (?i)(review|quality|test|build|validate|optimize|performance)
```

**Solution:**
- Rephrase request with clearer keywords
- Use orchestrator mode for complex multi-area coordination
- Reference specific agent files in requests

### Build and Performance Issues

#### Problem: "Build fails after component/page changes"
**Diagnostic Process:**
```bash
Step 1: Run diagnostic build
  pnpm build

Step 2: Check for common errors
  - TypeScript type errors
  - Missing imports
  - Design token syntax errors
  - Component prop interface issues

Step 3: Validate with preview
  pnpm preview

Step 4: Check console for runtime errors
```

#### Problem: "Performance issues with new features"
**Performance Diagnostics:**
```markdown
Step 1: Check image optimization
  - Using astro:assets for images?
  - Proper loading strategies (eager/lazy)?
  - Correct width/size attributes?

Step 2: Analyze component structure
  - Excessive re-renders?
  - Large component bundles?
  - Unnecessary dependencies?

Step 3: Validate design token usage
  - No expensive CSS custom properties?
  - Efficient color calculations?
  - Minimal style recalculations?
```

### Healthcare-Specific Issues

#### Problem: "Doesn't meet medical website standards"
**Healthcare Compliance Check:**
```markdown
Step 1: Content Review
  - Professional medical tone
  - Accurate medical information
  - Trust indicators present
  - Regulatory compliance messaging

Step 2: Accessibility Validation
  - WCAG 2.1 AA compliance
  - Color contrast ratios
  - Keyboard navigation
  - Screen reader compatibility

Step 3: Privacy Considerations
  - Patient data handling
  - Privacy policy compliance
  - GDPR considerations
  - HIPAA compliance where applicable

Step 4: Professional Appearance
  - Clean, trustworthy design
  - Medical credibility indicators
  - Professional color schemes
  - Medical industry standards
```

## 🛠️ Available MCP Tools for Debugging

You have access to powerful MCP tools that enhance your troubleshooting capabilities:

### Chrome DevTools MCP
**For Visual & Layout Debugging**:
- `take_screenshot` - Capture visual state for comparison
- `take_snapshot` - Accessibility tree analysis to identify a11y issues
- `navigate_page` - Test browser interactions and navigation flows
- `evaluate_script` - Execute JavaScript for interactive debugging
- `performance_start_trace` - Identify performance bottlenecks

### Tavily MCP
**For Research & Verification**:
- `tavily-search` - Find current web standards and best practices
- `tavily-extract` - Extract content from reference websites
- `tavily-crawl` - Research competitor implementations
- `tavily-map` - Analyze website structures for comparison

**Debugging Best Practices**:
- Use Chrome DevTools for visual regression testing
- Leverage Tavily to verify against current web standards
- Document issues with screenshots for clear communication
- Research solutions with web content extraction when needed

## 🛠️ Systematic Debugging Tools

### Diagnostic Commands
```bash
# Build validation
pnpm build
pnpm preview

# Dependency analysis
pnpm audit

# Type checking
npx tsc --noEmit

# Linting
npx eslint src/

# Accessibility testing
npx @axe-core/cli http://localhost:4321
```

### Code Analysis Checklist
```markdown
## Design Token Compliance
□ All colors use semantic tokens (bg-primary, not bg-blue-600)
□ No raw Tailwind color classes found
□ global.css tokens properly defined

## Component Structure
□ Proper TypeScript interfaces for props
□ Accessibility attributes included
□ Healthcare-specific patterns followed
□ Performance optimizations applied

## Page Structure
□ SiteLayout wrapper used
□ Proper metadata with schemas
□ SEO optimization implemented
□ Healthcare content standards met

## Accessibility
□ WCAG 2.1 AA compliance
□ Keyboard navigation support
□ Screen reader compatibility
□ Color contrast requirements
```

### Agent System Validation
```markdown
## Routing Verification
□ Request keywords match expected patterns
□ Correct specialist mode identified
□ File restrictions respected
□ Agent guidance files referenced

## Integration Check
□ Components integrate properly with pages
□ Layout system maintains consistency
□ Configuration changes apply correctly
□ Quality gates pass validation
```

## 📋 Issue Resolution Templates

### Component Issues Template
```markdown
# Component Issue Resolution

## Issue Description
[Clear description of the problem]

## Diagnostic Steps Taken
1. [First diagnostic step]
2. [Second diagnostic step]
3. [Third diagnostic step]

## Root Cause Analysis
[What was causing the issue]

## Solution Applied
[Specific changes made]

## Validation Results
□ Build passes (pnpm build)
□ Preview works (pnpm preview)
□ Accessibility validated
□ Design token compliance checked

## Prevention Measures
[How to prevent this issue in the future]
```

### System-Level Issues Template
```markdown
# System Issue Resolution

## Issue Scope
[Single component / Multi-area / Agent routing / Build system]

## Impact Assessment
[Affects what parts of the system]

## Root Cause
[Underlying cause of the issue]

## Solution Strategy
[Approach to fixing the issue]

## Testing Protocol
[How to verify the fix works]

## System Health Check
□ All agent modes functional
□ Routing patterns working correctly
□ Build validation passes
□ Quality gates operational
```

## ✅ Debug Quality Standards

### What Makes Effective Debugging
1. **Systematic approach** - methodical step-by-step process
2. **Evidence-based** - use commands and validation tools
3. **Root cause focus** - fix underlying issues, not symptoms
4. **Prevention oriented** - help prevent future issues
5. **Healthcare aware** - understand medical website requirements

### Documentation Standards
- Clear issue description
- Step-by-step diagnostic process
- Evidence (commands, outputs, file references)
- Solution with validation
- Prevention recommendations

### Healthcare-Specific Considerations
- Medical accuracy in content
- Accessibility compliance for medical websites
- Trust and credibility factors
- Regulatory compliance requirements
- Patient privacy considerations

---

**Debug Mode Rules Version**: 1.0  
**Priority**: High (mode-specific)  
**Focus**: Systematic troubleshooting and diagnostics  
**Last Updated**: 2025-11-22