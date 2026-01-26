# KiloCode Custom Rules - Structure Overview

> **Purpose**: Complete overview of the healthcare template's KiloCode custom rules system structure.

## 🏗️ Complete File Structure

```
.kilocode/
├── rules/                           # Generic rules (all modes)
│   ├── orchestration-rules.md       # Master coordination rules
│   ├── component-rules.md           # Component development patterns
│   └── page-rules.md                # Page creation patterns
│
├── rules-orchestrator/              # Orchestrator mode specific
│   └── coordination.md              # Master coordination rules
│
├── rules-code/                      # Code mode specific
│   └── implementation.md            # Implementation guidelines
│
├── rules-architect/                 # Architect mode specific
│   └── planning.md                  # Planning and architecture rules
│
├── rules-ask/                       # Ask mode specific
│   └── explanations.md              # Explanation and guidance rules
│
└── rules-debug/                     # Debug mode specific
    └── troubleshooting.md           # Troubleshooting and diagnostics
```

## 🎯 Rule Priority System

1. **Mode-Specific Rules** (Highest Priority)
   - `.kilocode/rules-{mode}/` directories
   - Loaded based on current active mode
   - Override generic rules when both exist

2. **Generic Rules** (Fallback)
   - `.kilocode/rules/` directory
   - Applied to all modes when mode-specific rules don't exist
   - Contains core healthcare template patterns

## 🧭 Mode-Specific Rule Overview

### Orchestrator Mode
**File**: `.kilocode/rules-orchestrator/coordination.md`
**Focus**: Master coordination, routing, and agent management
**Responsibilities**:
- Project orchestration and coordination (NOT direct implementation)
- User request interpretation and delegation
- Cross-agent communication coordination
- Directory-specific task routing

### Code Mode  
**File**: `.kilocode/rules-code/implementation.md`
**Focus**: Direct implementation and coding
**Responsibilities**:
- Component development following design token system
- Page creation with SEO and healthcare patterns
- Configuration updates and styling
- Following established agent guidance files

### Architect Mode
**File**: `.kilocode/rules-architect/planning.md`
**Focus**: Strategic planning and system design
**Responsibilities**:
- Architectural decision making
- Multi-area feature planning
- Design system architecture
- Healthcare template system understanding

### Ask Mode
**File**: `.kilocode/rules-ask/explanations.md`
**Focus**: Clear explanations and educational guidance
**Responsibilities**:
- Explaining the healthcare template system
- Providing guidance on how to use the agent system
- Educational content about design tokens and patterns
- Troubleshooting explanations

### Debug Mode
**File**: `.kilocode/rules-debug/troubleshooting.md`
**Focus**: Systematic troubleshooting and diagnostics
**Responsibilities**:
- Issue diagnosis and problem resolution
- Build validation and performance analysis
- Design token compliance checking
- Healthcare-specific troubleshooting

## 📚 Generic Rules (Applied to All Modes)

### Core Pattern Files
1. **orchestration-rules.md**: Master coordination logic
2. **component-rules.md**: Design token system and component patterns
3. **page-rules.md**: Page structure, SEO, and routing patterns

### These Files Provide:
- Design token system rules (use `bg-primary`, not `bg-blue-600`)
- Healthcare-specific accessibility standards
- Component and page creation templates
- Naming conventions and file organization
- Performance optimization guidelines

## 🔄 How the System Works

### 1. User Makes Request
```
"Create a doctor card component for the homepage"
```

### 2. Mode Detection
- KiloCode analyzes request keywords
- Determines appropriate mode (Code mode for component work)
- Loads mode-specific rules + generic rules

### 3. Rule Application
```markdown
Mode: Code mode (component work)
↓
Applies: 
- .kilocode/rules-code/implementation.md (mode-specific)
- .kilocode/rules/component-rules.md (generic)
- .kilocode/rules/orchestration-rules.md (coordination)
```

### 4. Implementation
- Uses design token system
- Follows healthcare patterns
- References agent guidance files
- Applies accessibility standards

### 5. Quality Validation
- Build validation (pnpm build)
- Design token compliance
- Healthcare-specific standards
- Performance optimization

## 🎯 Key Benefits of This Structure

### 1. Mode Specialization
Each mode has specific rules tailored to its primary function

### 2. Priority System
Mode-specific rules override generic rules for precision

### 3. Healthcare Focus
All rules emphasize healthcare-specific patterns and requirements

### 4. Comprehensive Coverage
Every aspect of the template has corresponding rules

### 5. Quality Assurance
Built-in validation and compliance checking

## 🚀 Usage Examples

### Simple Component Request
```
Request: "Create a patient testimonial component"
Mode: Code mode automatically selected
Rules Applied: 
  - .kilocode/rules-code/implementation.md
  - .kilocode/rules/component-rules.md
Result: Healthcare-compliant component using design tokens
```

### Complex Multi-Area Task
```
Request: "Build a complete contact system"
Mode: Orchestrator mode coordinates
Rules Applied:
  - .kilocode/rules-orchestrator/coordination.md
  - Specialized mode rules for each area
Result: Coordinated system across multiple specialists
```

### Troubleshooting
```
Request: "Fix inconsistent colors across components"
Mode: Debug mode automatically selected
Rules Applied:
  - .kilocode/rules-debug/troubleshooting.md
  - .kilocode/rules/component-rules.md
Result: Systematic diagnostic and fix process
```

## ✅ System Validation

To ensure the custom rules system is working correctly:

1. **Check file structure** matches the overview above
2. **Test routing** with different types of requests
3. **Validate rule application** by checking referenced files
4. **Confirm healthcare compliance** in all implementations
5. **Test quality gates** with build and preview validation

---

**Structure Overview Version**: 1.0  
**System Status**: ✅ Complete and Ready  
**Last Updated**: 2025-11-22