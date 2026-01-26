# KiloCode Custom Rules - Live Demo Examples

> **Purpose**: Real examples showing how the healthcare template's custom rules system works in practice.

## 🎭 Live Demonstration

### Example 1: Component Creation

**Your Request**: 
```
"Create a new doctor card component for the team section"
```

**What Happens**:

1. **Pattern Matching**: KiloCode detects keywords: `component`, `card`, `doctor`
2. **Auto-Routing**: Automatically switches to `component-specialist` mode
3. **Knowledge Application**: 
   - References `src/components/agents.md` for patterns
   - Uses design token system (`bg-card`, `text-foreground`)
   - Applies healthcare-specific accessibility standards
   - Follows Astro component structure
4. **Result**: Professional doctor card component that matches your template exactly

**Expected Output Pattern**:
```markdown
✅ Doctor card component created successfully
- Location: src/components/DoctorCard.astro
- Uses design tokens from global.css
- Healthcare accessibility compliance
- Responsive design with proper alt text
- Ready for integration
```

### Example 2: Page Creation with SEO

**Your Request**: 
```
"Add a services overview page with proper SEO optimization"
```

**What Happens**:

1. **Pattern Matching**: Detects `page`, `services`, `SEO`
2. **Auto-Routing**: Switches to `page-specialist` mode
3. **Knowledge Application**:
   - References `src/pages/agents.md` for patterns
   - Uses SiteLayout wrapper
   - Implements healthcare service schemas
   - Follows SEO best practices (title: "Services - Site Name")
4. **Result**: Fully optimized services page with proper meta tags and schemas

**Expected Workflow**:
```markdown
1. Page Specialist creates src/pages/services/index.astro
2. Applies SiteLayout wrapper
3. Implements proper metadata with schemas
4. Validates SEO optimization
5. Ensures healthcare-specific content structure
```

### Example 3: Complex Multi-Area Task

**Your Request**: 
```
"Build a complete contact system with form page and custom form component"
```

**What Happens**:

1. **Pattern Analysis**: Multiple areas detected (`page`, `form`, `component`)
2. **Orchestrator Coordination**: Routes work to multiple specialists
3. **Coordinated Workflow**:
   - **Component Specialist**: Creates contact form component
   - **Page Specialist**: Creates contact page with form integration
   - **Review Specialist**: Validates accessibility and functionality
4. **Integrated Result**: Complete contact system following all patterns

**Coordination Pattern**:
```markdown
🏗️ Orchestrator Mode: Coordinating multi-area request
    ↓
📱 Component Specialist: Creating contact form component
    ↓
📄 Page Specialist: Creating contact page
    ↓
🔍 Review Specialist: Validating system integration
    ✅ Complete contact system ready
```

### Example 4: Configuration Update

**Your Request**: 
```
"Update the color scheme to use teal branding"
```

**What Happens**:

1. **Pattern Matching**: Detects `color`, `branding` 
2. **Auto-Routing**: Switches to `config-specialist` mode
3. **Knowledge Application**:
   - References `src/config/agents.md`
   - Updates design tokens in `src/styles/global.css`
   - Uses OKLCH color selection from guide
   - Maintains design system consistency
4. **Result**: Complete brand update across entire site

**Expected Changes**:
```css
:root {
  /* Updated to teal branding */
  --primary: oklch(0.65 0.15 200);         /* Teal main color */
  --primary-foreground: oklch(1.00 0 0);   /* Text on primary */
  --ring: oklch(0.65 0.15 200);            /* Focus ring */
}
```

### Example 5: Git Workflow

**Your Request**: 
```
"Create a feature branch and commit the new doctor card component"
```

**What Happens**:

1. **Pattern Matching**: Detects `branch`, `commit`, `feature`
2. **Auto-Routing**: Switches to `git-specialist` mode  
3. **Knowledge Application**:
   - References `docs/git.md` for workflow
   - Creates `feature/doctor-card-component` branch
   - Uses conventional commits: `feat(components): add DoctorCard component`
4. **Result**: Professional git workflow with proper branching

**Git Actions**:
```bash
git checkout main
git pull origin main  
git checkout -b feature/doctor-card-component
git add src/components/DoctorCard.astro
git commit -m "feat(components): add DoctorCard component for team section"
```

### Example 6: Quality Assurance

**Your Request**: 
```
"Review the entire site for performance and accessibility issues"
```

**What Happens**:

1. **Pattern Matching**: Detects `review`, `performance`, `accessibility`
2. **Auto-Routing**: Switches to `review-specialist` mode
3. **Comprehensive Analysis**:
   - Runs `pnpm build` and `pnpm preview`
   - Validates design token usage
   - Checks accessibility compliance
   - Analyzes performance optimization
4. **Quality Report**: Detailed findings and recommendations

**Validation Checklist**:
```markdown
✅ Build Validation
  - pnpm build: SUCCESS
  - pnpm preview: SUCCESS  
  - No console errors

✅ Design System Compliance
  - All components use design tokens
  - Consistent color usage
  - Proper semantic naming

✅ Accessibility Review
  - WCAG 2.1 AA compliance
  - Keyboard navigation support
  - Screen reader compatibility

✅ Performance Analysis
  - Image optimization verified
  - Above-the-fold content prioritized
  - No render-blocking resources
```

## 🔄 Interactive Testing

### Try These Requests:

1. **Simple Component**: `"Create a patient testimonial card"`
2. **Page with SEO**: `"Add a privacy policy page"`
3. **Configuration**: `"Change to green branding"`
4. **Git Workflow**: `"Prepare for release v1.0"`
5. **Quality Check**: `"Optimize site performance"`

### Expected Behavior:

- Each request should automatically route to the appropriate specialist
- You should see references to your agent files in responses
- Work should follow your established patterns
- Results should be consistent with your template

## 🎯 Key Benefits Demonstration

### Before Custom Rules:
```
Generic AI: "I'll create a button component for you"
(Results: Raw Tailwind classes, no design system)
```

### After Custom Rules:
```  
Component Specialist: "Creating button component using design tokens
- Following src/components/agents.md patterns
- Using bg-primary, text-primary-foreground
- Healthcare accessibility compliance included
- Ready for integration"
```

### The Difference:
- **Domain Expertise**: AI now knows your specific patterns
- **Consistency**: Every component follows your design system
- **Quality**: Built-in healthcare-specific standards
- **Efficiency**: No time wasted on generic solutions

---

**Demo Version**: 1.0  
**Ready for Testing**: Yes  
**Test Request**: Try any of the examples above!