# Claude AI Development Templates - Setup Guide

This guide explains how to configure the Claude AI templates for your project to enable effective AI-assisted development with session continuity.

---

## Overview

| Template | Purpose |
|----------|---------|
| `CLAUDE-TEMPLATE.md` | Project guidelines, protocols, and documented gotchas |
| `SESSION-STATUS-TEMPLATE.md` | Session state tracking for continuity across conversations |

These templates help Claude (or any AI assistant) understand your project context, follow consistent patterns, and maintain state across sessions.

---

## Quick Start (5 minutes)

### Step 1: Copy Templates

```bash
# In your project root
mkdir -p docs
cp path/to/CLAUDE-TEMPLATE.md docs/CLAUDE.md
cp path/to/SESSION-STATUS-TEMPLATE.md docs/SESSION-STATUS.md
```

### Step 2: Configure CLAUDE.md

Open `docs/CLAUDE.md` and fill in these sections:

1. **Project header** - Replace `[PROJECT_NAME]` and `[DATE]`

2. **Tech Stack Reference** - Add your stack:
   ```markdown
   | Category | Technology | Version |
   |----------|------------|---------|
   | Framework | Next.js | 14.x |
   | Database | PostgreSQL | 15 |
   | ORM | Prisma | 5.x |
   ```

3. **Common Commands** - Add your project commands:
   ```bash
   npm run dev          # Start dev server
   npm run db:push      # Push schema changes
   npm run test         # Run tests
   ```

4. **Reference Docs** - Link important project docs:
   ```markdown
   | File | Purpose |
   |------|---------|
   | docs/SPEC.md | Feature specifications |
   | docs/API.md | API documentation |
   ```

### Step 3: Initialize SESSION-STATUS.md

Open `docs/SESSION-STATUS.md` and:

1. Replace `[PROJECT_NAME]` with your project name
2. Set `Session: 1`
3. Clear the placeholder content in each section
4. Add your initial tasks to "Next Up"

---

## How It Works

### At Session Start
The AI reads both files to understand:
- Project context and tech stack
- Current work state and progress
- What was done previously
- What needs to be done next

### During Work
The AI:
- Monitors its context window (warns at <50k tokens, stops at <20k)
- Updates SESSION-STATUS.md after completing tasks
- Documents any gotchas discovered

### At Session End
The AI saves its state to SESSION-STATUS.md so the next session can resume seamlessly.

---

## Best Practices

### 1. Keep CLAUDE.md Updated

Add new gotchas as you solve bugs:

```markdown
### [Problem Name] - SOLVED [DATE]

> **One-line solution summary**

#### The Problem
What broke and why it was confusing

#### Root Cause
Technical explanation

#### The Solution
Code example with comments

#### DO NOT:
- Anti-pattern to avoid
```

### 2. Review SESSION-STATUS.md Between Sessions

Before starting a new session:
- Check if the previous session's state is accurate
- Add any manual changes you made
- Update priorities if needed

### 3. Use the ABC Approach for Audits

For comprehensive feature audits:
- **Phase A:** Identify all issues
- **Phase B:** Review and categorize (CONFIRMED/INVESTIGATE/FALSE POSITIVE)
- **Phase C:** Plan implementation (requires your approval)

---

## Customization Tips

### Add Project-Specific Sections

```markdown
## Database Schema Reference
<!-- Quick reference for common tables -->

## Environment Variables
<!-- Required env vars and their purpose -->

## Deployment Notes
<!-- How to deploy, staging vs prod differences -->
```

### Add Team Conventions

```markdown
## Code Style
- Use named exports
- Prefer async/await over .then()
- [Your conventions here]
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| AI doesn't read the files | Remind it: "Read docs/CLAUDE.md first" |
| Session state lost | Check if SESSION-STATUS.md was updated |
| Context runs out mid-task | AI should warn at <50k tokens |

---

## File Locations

```
your-project/
├── docs/
│   ├── CLAUDE.md              # ← Project guidelines (from template)
│   ├── SESSION-STATUS.md      # ← Session state (from template)
│   └── CLAUDE-SETUP-GUIDE.md  # ← This guide (optional to keep)
```

---

*Questions? The templates are self-documenting - read through them for detailed explanations of each section.*

