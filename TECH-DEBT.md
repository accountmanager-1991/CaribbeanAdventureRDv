<!--
╔══════════════════════════════════════════════════════════════════════════════╗
║                           SETUP INSTRUCTIONS                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  1. Replace [PROJECT_NAME] with your project name                            ║
║                                                                              ║
║  2. Log technical debt as you incur it - don't rely on memory                ║
║                                                                              ║
║  3. DELETE THIS COMMENT BLOCK when setup is complete                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
-->

# Technical Debt Tracker

**Project:** [PROJECT_NAME]

Track shortcuts, workarounds, and "fix later" items. Acknowledging debt is the first step to managing it.

---

## Debt Summary

| Category | Count | Highest Priority |
|----------|-------|------------------|
| Code Quality | 0 | - |
| Architecture | 0 | - |
| Testing | 0 | - |
| Security | 0 | - |
| Performance | 0 | - |
| Documentation | 0 | - |

---

## Active Debt Items

### High Priority (Fix Soon)

<!-- Items that pose risk or block future work -->

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-001 | [Category] | [Brief description] | [Date] | [Why it matters] |

---

### Medium Priority (Fix When Convenient)

<!-- Items that should be addressed but aren't urgent -->

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-002 | [Category] | [Brief description] | [Date] | [Why it matters] |

---

### Low Priority (Nice to Have)

<!-- Items that would improve things but have minimal impact -->

| ID | Category | Description | Added | Impact |
|----|----------|-------------|-------|--------|
| TD-003 | [Category] | [Brief description] | [Date] | [Why it matters] |

---

## Detailed Debt Descriptions

### TD-001: [Title]

**Category:** [Code Quality | Architecture | Testing | Security | Performance | Documentation]
**Priority:** [High | Medium | Low]
**Added:** [Date]
**File(s):** `path/to/file.ts`

**What's the problem?**
[Describe the current state and why it's technical debt]

**Why was it done this way?**
[Context: time pressure, uncertainty, prototype, etc.]

**What's the ideal solution?**
[How it should be fixed]

**Estimated effort:** [Small | Medium | Large]

**Risks if not addressed:**
- [Risk 1]
- [Risk 2]

---

### TD-002: [Title]

**Category:**
**Priority:**
**Added:**
**File(s):**

**What's the problem?**

**Why was it done this way?**

**What's the ideal solution?**

**Estimated effort:**

**Risks if not addressed:**
-

---

## Resolved Debt

Track paid-off debt for reference:

| ID | Description | Added | Resolved | Resolution Notes |
|----|-------------|-------|----------|------------------|
| TD-000 | Example: Hardcoded config values | 2024-01-01 | 2024-01-15 | Moved to .env |

---

## Debt Prevention Checklist

Before merging, ask:

- [ ] Is this the right solution or a shortcut?
- [ ] If a shortcut, is it documented in this file?
- [ ] Are there TODO/FIXME comments that should be tracked here?
- [ ] Will this make future changes harder?

---

## Categories Reference

| Category | Examples |
|----------|----------|
| **Code Quality** | Duplicated code, poor naming, missing types, complex functions |
| **Architecture** | Wrong abstraction, tight coupling, missing layers |
| **Testing** | Missing tests, flaky tests, inadequate coverage |
| **Security** | Hardcoded secrets, missing validation, outdated deps |
| **Performance** | N+1 queries, missing indexes, unoptimized assets |
| **Documentation** | Missing docs, outdated docs, unclear README |

---

*"The best time to address tech debt was when you created it. The second best time is now."*
