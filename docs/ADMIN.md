# Admin guide: changing the kit

The kit is Markdown. Users' Claudes read `skills/infyum-outreach/SKILL.md`, then open one `references/` file per step. This repository is read-only for users and for the operating Claude.

## Rules for changing it

1. **A rule lives in one place.** Change it there, delete anything that contradicts it, run `npm run check`. Never add a second rule that "overrides" the first. The hard rules are only in `references/rules.md`.
2. **`SKILL.md` stays short** (under 500 lines) and names every file in `references/`. Detail goes in the reference files.
3. **Decisions live in `docs/SPEC.md`.** If you change behaviour, change the spec in the same pull request, with the reason. Do not append dated logs.
4. **Never commit to `main`.** Branch, then pull request.
5. **No real people's names or profile details** in any file: the repo is public.
6. Do not claim something works unless you ran it. A change that touches Sheet formulas or live Instagram behaviour is not "done" until the real run in `docs/REAL-RUN-CHECKLIST.md` passes.

## Checks

```bash
npm run check
```

Needs Node 22 or later and no dependencies. It checks that every file exists and is linked, that the numbers agree everywhere (35 a day, 3 and 4 days, 20 minutes, 2 follow-ups), that every hard rule and the exact "in use" message are present, that removed decisions have not come back, that the Sheet column list is intact, and that the scenarios in `tests/scenarios.json` still find their required wording. **These checks are structural.** They cannot tell whether Claude behaves well when it follows the kit; only a supervised real run shows that.

## Files

| Path | What it is |
|---|---|
| `skills/infyum-outreach/SKILL.md` | The entry. Description (triggers it), behaviour, journey map, preflight |
| `skills/infyum-outreach/references/` | One file per step: setup, interview, sheet, find, qualify, warmup, first-dm, followups, session, rules |
| `.claude-plugin/` | Makes the repo installable as a plugin |
| `docs/SPEC.md` | Every decision behind the kit |
| `docs/REAL-RUN-CHECKLIST.md` | The supervised first run |
| `docs/TEAM-SHEET-MIGRATION.md` | What must change in the live team Sheet (not yet applied) |
| `tests/` | The consistency checks and scenarios |
