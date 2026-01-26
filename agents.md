# AGENTS.md - Healthcare Template Orchestration Guide

> **Purpose**: This is the main orchestration guide for AI agents. For specific technical guidance, consult the directory-level agents.md files.

## 🎯 Agent Orchestration Model

This project uses a **layered agent approach** where the root agent acts as an orchestrator, directing work to specialized sub-agents based on the directory and context required.

### Core Agent Responsibilities

**Root Agent (this file)**:
- Project orchestration and coordination
- Directory-specific task routing
- Cross-agent communication coordination
- User request interpretation and delegation

**Sub-Agents** (directory-level):
- `src/components/agents.md` → Component development and UI patterns
- `src/pages/agents.md` → Page creation and routing
- `src/layouts/agents.md` → Layout system and template management
- `src/config/agents.md` → Configuration and site settings

**Specialized Agents** (functional):
- `docs/git.md` → Git operations and version control
- `docs/review.md` → Build validation and code review

---

## 🗺️ Directory Navigation Guide

### When You Need to Work On...

**Components & UI** → `src/components/agents.md`
- Creating new UI components
- Modifying existing components
- Design system and color tokens
- Component patterns and examples

**Pages & Routing** → `src/pages/agents.md`
- Adding new pages
- Modifying existing pages
- SEO and metadata patterns
- Page-specific schemas

**Layout System** → `src/layouts/agents.md`
- Understanding the two-tier layout system
- TechnicalLayout vs SiteLayout responsibilities
- Layout modification guidelines

**Configuration** → `src/config/agents.md`
- Site-wide settings and branding
- Environment variables
- Global schemas and SEO configuration

**Git Operations** → `docs/git.md`
- Branch creation and management
- Commit conventions and validation
- Pull request workflows
- Version control best practices

**Code Review** → `docs/review.md`
- Build validation and testing
- Breaking changes detection
- Performance optimization
- Code quality standards

**Documentation** → `docs/`
- `docs/components.md` → Component documentation standards
- `docs/layouts.md` → Layout system documentation  
- `docs/pages.md` → Page creation documentation
- `docs/config.md` → Configuration documentation

---

## 🚀 Common Agent Workflows

### Task Type 1: Add New Component
1. **Route**: Root agent interprets request
2. **Action**: Delegate to `src/components/agents.md` sub-agent
3. **Review**: Optionally delegate to `review/agents.md` for validation
4. **Return**: Sub-agent reports completion to root agent

### Task Type 2: Add New Page
1. **Route**: Root agent interprets request
2. **Action**: Delegate to `src/pages/agents.md` sub-agent
3. **Git**: If needed, delegate to `docs/git.md` for branch creation
4. **Return**: Sub-agent reports completion to root agent

### Task Type 3: Git Operations
1. **Route**: Root agent identifies git workflow need
2. **Action**: Delegate entire workflow to `docs/git.md`
3. **Return**: Git master reports status to root agent
4. **Coordinate**: Root agent may then delegate development tasks

### Task Type 4: Site-wide Changes
1. **Route**: Root agent determines scope
2. **Coordinate**: May spawn multiple sub-agents for different areas
3. **Review**: Use `docs/review.md` for validation
4. **Git**: Delegate to `docs/git.md` for change management

### Task Type 5: Build/Review Tasks
1. **Route**: Root agent identifies review/validation need
2. **Action**: Delegate to `docs/review.md` for comprehensive analysis
3. **Return**: Review agent provides structured report
4. **Coordinate**: Root agent addresses any issues found

---

## 🎯 Agent Spawning Guidelines

### When to Spawn Sub-Agents
- **Clear scope**: Task is contained to single directory/responsibility
- **Complex workflow**: Task requires specialized domain expertise
- **Multiple files**: Task spans multiple files in same area
- **Pattern following**: Task requires following established patterns
- **Git operations**: Any version control workflow
- **Validation needs**: Build, performance, or quality checks

### When to Handle at Root Level
- **Cross-cutting**: Task affects multiple directories requiring coordination
- **Multi-agent coordination**: Task requires multiple sub-agents working together
- **Strategic decisions**: High-level decision making
- **User communication**: Direct user interaction and status updates

### Communication Protocol
```markdown
# Root → Sub-agent directive
"Create new ServiceCard component for healthcare template.
Use design system from src/components/agents.md.
After creation, validate with docs/review.md."

# Sub-agent → Root response  
"✅ ServiceCard component created successfully
- Location: src/components/ServiceCard.astro
- Props interface defined
- Design tokens applied
- Ready for integration"

# Git Master → Root response
"✅ Feature branch created: feature/service-card
✅ All changes committed with conventional commits
✅ PR opened for review"
```

---

## 📞 Quick Reference

### Essential Commands
```bash
pnpm build      # Always validate changes work
pnpm dev        # Development server
pnpm preview    # Test production build
```

### Directory Mapping
- **Components**: `src/components/agents.md`
- **Pages**: `src/pages/agents.md`  
- **Layouts**: `src/layouts/agents.md`
- **Config**: `src/config/agents.md`
- **Git Operations**: `docs/git.md`
- **Code Review**: `docs/review.md`
- **Documentation**: `docs/*.md`

### Agent Capabilities
- **Root Agent**: Coordination and delegation only
- **Component Agent**: UI development and styling patterns
- **Page Agent**: Content creation and SEO patterns
- **Layout Agent**: Template and structure management
- **Config Agent**: Settings and environment management
- **Git Master**: Version control and collaboration workflows
- **Review Agent**: Quality assurance and validation

---

**Orchestration Version**: 3.0  
**Last Updated**: 2025-11-22  
**Maintainer**: Dev Foundry Team