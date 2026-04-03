<!--
╔══════════════════════════════════════════════════════════════════════════════╗
║                           SETUP INSTRUCTIONS                                  ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  1. Replace [PROJECT_NAME] with your project name                            ║
║                                                                              ║
║  2. Use this to document important decisions as you make them                ║
║                                                                              ║
║  3. DELETE THIS COMMENT BLOCK when setup is complete                         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
-->

# Architecture Decision Records

**Project:** [PROJECT_NAME]

This document tracks key technical and architectural decisions made during the project. Recording the "why" behind decisions helps future developers (and AI assistants) understand context and avoid revisiting settled debates.

---

## How to Use This Document

When making a significant decision, add an entry using this format:

```markdown
### [NUMBER]. [DECISION TITLE]

**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Deprecated | Superseded by [#X]
**Deciders:** [Who made or approved this decision]

#### Context
What situation or problem prompted this decision?

#### Decision
What was decided?

#### Consequences
- **Positive:** Benefits of this approach
- **Negative:** Tradeoffs or downsides accepted
- **Risks:** Potential future issues to watch for

#### Alternatives Considered
1. [Alternative 1] - Why rejected
2. [Alternative 2] - Why rejected
```

---

## Decisions Log

<!-- Add decisions below, newest at top -->

### 0. Template Example - Database Selection

**Date:** YYYY-MM-DD
**Status:** Accepted
**Deciders:** [Your name]

#### Context
Needed to choose a database for the application. Requirements included [list requirements].

#### Decision
Selected PostgreSQL with Prisma ORM.

#### Consequences
- **Positive:** Strong typing with Prisma, excellent query performance, rich ecosystem
- **Negative:** More complex than SQLite for local development
- **Risks:** Schema migrations need careful handling in production

#### Alternatives Considered
1. MongoDB - Rejected: Project has relational data that benefits from SQL
2. SQLite - Rejected: Need concurrent connections and advanced features
3. MySQL - Rejected: PostgreSQL has better JSON support and extensions

---

<!--
TEMPLATE FOR NEW DECISIONS - Copy and fill in:

### [NUMBER]. [DECISION TITLE]

**Date:** YYYY-MM-DD
**Status:** Accepted
**Deciders:**

#### Context


#### Decision


#### Consequences
- **Positive:**
- **Negative:**
- **Risks:**

#### Alternatives Considered
1.
2.

---
-->
