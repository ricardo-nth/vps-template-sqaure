# Git Master Agent Guide

> **Purpose**: Specialized agent for all Git operations, branch management, and version control workflows.

## 🎯 Git Agent Responsibilities

The Git Master Agent handles:
- **Branch Creation**: Feature, bugfix, hotfix, and chore branches
- **Commit Management**: Conventional commits with proper formatting
- **Pull Request Workflows**: PR creation, review, and merging
- **Version Control**: Tags, releases, and version management
- **Git Hygiene**: Cleanup, synchronization, and best practices

## 🗂️ Branch Strategy Management

### Branch Types and Naming

```bash
main                    # Production infrastructure only
├── feature/[name]     # New features (e.g., feature/contact-form)
├── bugfix/[name]      # Bug fixes (e.g., bugfix/mobile-nav)
├── hotfix/[name]      # Critical fixes (e.g., hotfix/seo-meta)
└── chore/[name]       # Maintenance tasks (e.g., chore/update-deps)
```

### Automated Branch Creation

**Feature Branch Workflow**:
```bash
# From root agent command: "Add new contact form feature"
git checkout main
git pull origin main
git checkout -b feature/contact-form

# Return to root agent: "Feature branch created: feature/contact-form"
```

**Hotfix Branch Workflow**:
```bash
# From root agent command: "Critical SEO fix needed"
git checkout main
git pull origin main
git checkout -b hotfix/critical-seo-fix

# Return to root agent: "Hotfix branch created: hotfix/critical-seo-fix"
```

## 📝 Commit Convention Enforcement

### Commit Message Format

**Structure**: `type(scope): message`

**Valid Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Commit Examples

```bash
# Component changes
feat(components): add ServiceCard component
fix(header): correct mobile menu toggle behavior
style(components): improve responsive layout

# Page changes
feat(pages): add services overview page
docs(pages): update routing documentation

# Layout changes
refactor(layouts): simplify metadata prop interface
perf(layouts): optimize image loading

# Configuration changes
chore(config): update site branding
feat(config): add new environment variables

# General
perf(images): optimize hero image loading
test(build): add build validation tests
```

### Commit Validation

**Pre-commit Checklist**:
- [ ] Follow conventional commit format
- [ ] Include relevant scope in parentheses
- [ ] Use present tense ("add" not "added")
- [ ] Keep subject line under 50 characters
- [ ] Body provides clear context if needed

## 🔄 Pull Request Workflow

### PR Template

```markdown
## Description
[Brief description of changes]

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Build succeeds (`pnpm build`)
- [ ] Preview tested (`pnpm preview`)
- [ ] SEO meta tags verified
- [ ] Images optimized
- [ ] No console errors

## Screenshots (if applicable)
[Add screenshots]
```

### PR Process

1. **Branch Sync**: Ensure feature branch is up to date with main
2. **Build Validation**: Run `pnpm build` and `pnpm preview`
3. **PR Creation**: Use standardized template
4. **Review**: Automated checks + manual review
5. **Merge**: Squash and merge to main
6. **Cleanup**: Delete feature branch

### Automated PR Checks

**Required Checks**:
- [ ] `pnpm build` completes without errors
- [ ] `pnpm preview` runs successfully
- [ ] No console errors in preview
- [ ] SEO meta tags present in built HTML
- [ ] Sitemap generated correctly

## 🚀 Deployment Workflow

### Release Process

**Version Management**:
```bash
# Semantic versioning: MAJOR.MINOR.PATCH
# - MAJOR: Breaking changes
# - MINOR: New features (backward compatible)
# - PATCH: Bug fixes (backward compatible)

git tag v1.2.3
git push origin v1.2.3
```

**Release Branch Workflow**:
```bash
# Create release branch
git checkout -b release/v1.2.3

# Final testing and version bumps
npm version minor  # or major/patch

# Merge to main and develop
git checkout main
git merge release/v1.2.3
git tag v1.2.3

# Cleanup
git branch -d release/v1.2.3
```

## 🔧 Git Operations

### Common Commands

**Status and Sync**:
```bash
git status                    # Check current status
git pull origin main         # Update main branch
git fetch --all              # Fetch all remotes
```

**Branch Management**:
```bash
git branch -a                # List all branches
git branch -d feature-name   # Delete local branch
git push origin --delete feature-name  # Delete remote branch
```

**Stash and Cleanup**:
```bash
git stash                    # Stash changes temporarily
git stash pop               # Restore stashed changes
git stash drop              # Delete stashed changes
```

### Conflict Resolution

**Merge Conflict Workflow**:
```bash
# Identify conflicts
git status

# Resolve conflicts in files
# Add resolved files
git add .

# Complete merge
git commit

# Force push if needed (with caution)
git push --force-with-lease origin feature-branch
```

## 📊 Git Analytics

### Repository Health

**Key Metrics**:
- Commit frequency and patterns
- Branch lifecycle and cleanup
- PR review time and merge success rate
- Release frequency and stability

### Best Practices

**DO**:
- Keep feature branches focused and short-lived
- Use descriptive branch names
- Commit early and often with meaningful messages
- Regularly sync with main branch
- Clean up merged branches

**DON'T**:
- Commit directly to main branch
- Push incomplete or broken code
- Leave long-running feature branches
- Ignore merge conflicts
- Force push without communication

## 🤖 Automation Scripts

### Pre-commit Hook

```bash
#!/bin/sh
# .git/hooks/pre-commit

echo "Running pre-commit checks..."

# Check for build errors
pnpm build > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo "Build failed. Run 'pnpm build' to fix issues."
  exit 1
fi

echo "Pre-commit checks passed!"
```

### Post-merge Hook

```bash
#!/bin/sh
# .git/hooks/post-merge

echo "Running post-merge checks..."

# Install new dependencies if package.json changed
if git diff --name-only HEAD~1 HEAD | grep -q "package.json"; then
  echo "Installing dependencies..."
  pnpm install
fi

echo "Post-merge checks completed!"
```

## 🚨 Emergency Procedures

### Critical Bug Fixes

**Hotfix Workflow**:
1. Create hotfix branch from main
2. Implement minimal fix
3. Test thoroughly
4. Create PR for review
5. Fast-track merge to main
6. Deploy immediately

### Repository Recovery

**Backup Strategy**:
- Regular local backups of repository
- Remote backup on multiple platforms
- Tagged releases for rollback points
- Documentation of critical branch states

---

**Git Master Version**: 1.0  
**Last Updated**: 2025-11-22