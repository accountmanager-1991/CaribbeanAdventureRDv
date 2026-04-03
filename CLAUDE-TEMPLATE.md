<!--
╔══════════════════════════════════════════════════════════════════════════════╗
║                           SETUP INSTRUCTIONS                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  1. Rename this file from CLAUDE-TEMPLATE.md → CLAUDE.md                     ║
║                                                                              ║
║  2. Replace all placeholders:                                                ║
║     • [PROJECT_NAME] → Your project name                                     ║
║     • [DATE] → Today's date                                                  ║
║                                                                              ║
║  3. Fill in the Tech Stack Reference table with your technologies           ║
║                                                                              ║
║  4. Update Common Commands section with your project's npm/yarn scripts     ║
║                                                                              ║
║  5. Add your project's key documentation files to the Reference table       ║
║                                                                              ║
║  6. Create a SESSION-STATUS.md file using the SESSION-STATUS-TEMPLATE.md    ║
║                                                                              ║
║  7. DELETE THIS COMMENT BLOCK when setup is complete                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
-->

# Claude Code Project Instructions Template

**Project:** [PROJECT_NAME]
**Last Updated:** [DATE]

---

## 🚨 MANDATORY: Agent Startup Protocol

**Read this section FIRST before doing any work.**

### Step 1: Read Context Files

1. **Read this file** (`docs/CLAUDE.md`) - You're doing this now ✅
2. **Read `docs/SESSION-STATUS.md`** - Understand current progress and what's left to do

### Step 2: Context Window Monitoring

I can see context window usage in system messages. **I will proactively manage context:**

| Context Remaining | Action |
|-------------------|--------|
| **> 50,000 tokens** | ✅ Continue working normally |
| **< 50,000 tokens** | ⚠️ **WARNING**: Alert user, suggest saving state soon |
| **< 20,000 tokens** | 🛑 **STOP**: Update `SESSION-STATUS.md` with full current state before continuing |

### Step 3: Session Documentation

**During work:**
- Update `docs/SESSION-STATUS.md` after completing each task
- Document what was done, what was learned, and what remains

**If context gets compacted or you notice missing context:**
1. STOP immediately
2. Summarize what was accomplished and what's left to do
3. Update `docs/SESSION-STATUS.md` with full state
4. Tell the user which agent should be re-engaged

---

## Token-Aware Development Guidelines

### Critical: Avoid Token Limit Issues

Large specification files can exhaust API token limits. Follow these guidelines:

#### When Reading Files

1. **Never load entire large files at once** - Use line range parameters:
   ```
   View file with view_range [1, 500]     # First 500 lines
   View file with view_range [500, 1000]  # Next 500 lines
   ```

2. **Use regex search to find specific sections** before loading:
   ```
   Search for "## Section Name" to find line numbers
   Then view with range at that line
   ```

3. **Pattern for large files (>1000 lines):**
   - Search for section headers first: `^## |^### `
   - Read only relevant sections (200-500 lines at a time)
   - Never read more than 750 lines in a single operation

4. **Max chunks:** When reading large spec files, read in chunks of 500-750 lines max.

#### When Generating Files

1. **Break large outputs into parts** - Each large document should be written in 3-4 parts:
   - Part 1: Overview, Objectives (~500 lines)
   - Part 2: Implementation details (~600 lines)
   - Part 3: Additional sections (~500 lines)

2. **Keep files under 40KB** - Consider splitting into multiple files:
   ```
   doc-overview.md
   doc-implementation.md
   doc-testing.md
   ```

---

## Quality Assurance - The ABC Approach

**Systematic methodology for comprehensive feature and code audits:**

### Step 1: Create Audit Document
- Identify all pages/features to audit
- Catalog all database tables and their purposes
- Document requirements and expected behavior
- Output: Comprehensive audit checklist

### Step 2: The ABC Approach
- **Phase A (Identify):** Run through all verification phases, document any issues found
- **Phase B (Review):** Mark issues as CONFIRMED, INVESTIGATE, or FALSE POSITIVE
- **Phase C (Plan):** Triple-check remaining issues, create implementation plan

### Step 3: Implement
- Execute approved fixes systematically
- Verify each fix works
- Commit with clear descriptions
- Update SESSION-STATUS.md

**Key Principle:** No implementation begins until Phase C document is reviewed and approved.

---

## Critical Gotchas Documentation Format

When solving bugs, document them using this format for future reference:

```markdown
### [Problem Name] - SOLVED [DATE]

> **One-line rule/solution summary**

#### The Problem
[Describe what broke, error messages, why it was confusing]

#### Root Cause
[Technical explanation of why it happened]

#### The Solution
[Code examples with inline comments explaining the fix]

#### Files Affected
- `path/to/file1.ts` - What was changed
- `path/to/file2.ts` - What was changed

#### DO NOT:
- [Anti-pattern 1 to avoid]
- [Anti-pattern 2 to avoid]
```

---

## Project Context Files

### Always Read First (Every Session)
1. **docs/CLAUDE.md** (this file) - Development guidelines
2. **docs/SESSION-STATUS.md** - Current work state and next steps

### Reference When Needed
| File | Purpose |
|------|---------|
| [Add project-specific docs] | [Purpose] |

---

## Session Continuity

**Quick Reference:**
1. Read `docs/CLAUDE.md` (this file)
2. Read `docs/SESSION-STATUS.md` for current state
3. Monitor context window (warn at <50k, stop at <20k tokens)
4. Update `SESSION-STATUS.md` after each completed task

---

## Tech Stack Quick Reference

| Category | Technology | Version |
|----------|------------|---------|
| Framework | [e.g., Next.js] | [version] |
| Database | [e.g., PostgreSQL] | [version] |
| API | [e.g., tRPC] | [version] |
| Auth | [e.g., Clerk] | [version] |
| [Add more] | | |

---

## Common Commands

```bash
# Development
npm run dev

# Database
npm run db:push        # Push schema changes

# Testing
npm run test           # Unit tests

# Type checking
npm run typecheck
```

---

## Current Session State

### Features Complete
| Feature | Status | Notes |
|---------|--------|-------|
| [Feature 1] | ✅ Complete | |
| [Feature 2] | 🔄 In Progress | |

### Next Tasks
- [ ] [Task 1]
- [ ] [Task 2]

---

## Critical Gotchas - Project Specific

<!-- Add solved bugs here using the format above -->


