**Overview**
- What: Audit and analyze the Next.js + TypeScript + Tailwind + Sanity project for errors, build problems, vulnerabilities, and architectural concerns.
- Why: Ensure the repo builds, passes static checks, and surface high-confidence fixes.

**Project Type**
- WEB: Next.js (app router), TypeScript, Tailwind, Sanity CMS

**Success Criteria**
- Lint and TypeScript checks run and issues documented
- `npm run build` completes or build errors captured with reproduction steps
- Vulnerable/outdated dependencies listed with upgrade guidance
- A concise list of code issues with suggested fixes and optional patches

**Tech Stack**
- Framework: Next.js (app router)
- Language: TypeScript
- CSS: Tailwind (tailwind.config.js present)
- CMS: Sanity (sanity.config.ts)
- Tooling: npm, PostCSS

**File Structure (high-level)**
- `src/app/` - Next.js app router pages and layout
- `src/components/` - UI and store components
- `src/lib/` - helpers (delivery, whatsapp, types)
- `src/sanity/` - Sanity client and schemas
- `public/` - static assets

**Task Breakdown**
- Task 1: Run static checks
  - Agent: dev
  - INPUT → `npm run lint`, `npx tsc --noEmit`
  - OUTPUT → lint/type errors list
  - VERIFY → commands run and produce logs

- Task 2: Attempt build
  - Agent: dev
  - INPUT → `npm run build`
  - OUTPUT → build logs / error trace
  - VERIFY → build exit code and logs

- Task 3: Dependency & vulnerability audit
  - Agent: dev
  - INPUT → `npm audit` and `npm outdated`
  - OUTPUT → list of vulnerabilities and upgrade suggestions
  - VERIFY → `npm audit` report saved

- Task 4: Test runner (conditional)
  - Agent: test-engineer
  - INPUT → `npm test` or configured test scripts
  - OUTPUT → pass/fail results
  - VERIFY → test output captured

- Task 5: Static code review (manual)
  - Agent: frontend-specialist
  - INPUT → scan `src/` for SSR mismatches, data fetching, client/server component issues, and Sanity usage
  - OUTPUT → list of code concerns + suggested patches
  - VERIFY → issues are actionable and reproducible locally

- Task 6: Apply fixes (opt-in)
  - Agent: dev
  - INPUT → review findings
  - OUTPUT → patches or PRs
  - VERIFY → build/tests pass after changes

**Phase X: Verification**
- Commands to run locally:

```powershell
npm run lint
npx tsc --noEmit
npm run build
npm audit --json > audit.json
npm outdated --json > outdated.json
```

- Final checklist:
  - [ ] Lint: captured
  - [ ] Typecheck: captured
  - [ ] Build: captured
  - [ ] Audit: captured
  - [ ] Report: `audit-report.md` created

**Notes & Risks**
- This plan will run commands in the user's environment; on Windows Powershell use the commands above.
- Some checks (Lighthouse, Playwright) require additional setup and are out-of-scope until requested.

---
File created by planner on request; run the listed commands next or tell me how you'd like me to proceed.