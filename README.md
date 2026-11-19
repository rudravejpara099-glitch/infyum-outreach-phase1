# INFYUM Instagram Outreach (Phase 1)

**Paste this repo into your Claude. It sets you up in a few minutes, then finds the right prospects on Instagram, warms them up like a real person, sends a friendly, personal first message, and follows up once if they stay silent. You answer a short interview and sign in to three things; Claude does the rest.**

Nothing to install. No files to edit. No account to create with us, and no permission to ask for.

---

## Start

**Run this in the Claude desktop app on your own computer** (a normal chat or a session on "This computer"), not in a cloud session: Claude needs to reach your Chrome.

**1. Have these ready**

| What | Why |
|---|---|
| **Claude** (desktop app) with the **Claude in Chrome** extension | Claude uses it to see and click in your Chrome, like a person would. Add it from the Chrome Web Store (publisher Anthropic) and sign in. It needs a paid Claude plan. |
| **An Instagram account** | The account the messages come from. A spare account is the safe choice. You sign in yourself, in the Chrome profile Claude in Chrome is connected to. Claude never sees your password. |
| **A Google account** | Your lead list lives in a Google Sheet. INFYUM team members use the shared team Sheet; clients get their own, built for them. |
| **Apify** (free plan is enough, optional) | The fastest way to find prospects. Without it Claude uses web search, which is slower. |

**2. Paste this into Claude**

```
Set me up with the INFYUM Instagram outreach kit. Repo: https://github.com/rudravejpara099-glitch/infyum-outreach-phase1
Get it onto this computer (git clone, or read its files as plain text, never a summary) and follow skills/infyum-outreach/SKILL.md exactly. I am a user, not a developer: do not change any file.
```

**Or install it as a skill** (Claude Code, one time), then just say "start outreach":

```
/plugin marketplace add rudravejpara099-glitch/infyum-outreach-phase1
/plugin install infyum-outreach@infyum-outreach-phase1
```

**3. Follow Claude.** It tells you what you will do before you do it: a short interview (each question has a recommended answer; say "yes" to accept), then Google Sheets, Instagram and Apify.

---

## What a day looks like

| You say | Claude does |
|---|---|
| **"Start"** / **"Do 10 profiles"** | Follows up where it is due, then finds prospects, checks each against your rules, warms each one up, and sends a personal first message. |
| **"Find 10 prospects"** | Finds and checks only. No engagement. |
| **"Status"** | Shows today's counts and how many of the account's 35 are used. |
| **"Stop"** | Stops immediately and reports what was done. |

You never approve a comment or a message. Claude writes and sends them itself.

## The rules in short

- **Who it picks:** US-based coaches and consultants with a public account, 2,000 to 70,000 followers (your range), posting recently, selling something online, and with a gap Claude can really see. Never agencies, big brands, competitors, private accounts or anyone connected to the accounts you list.
- **35 first messages per Instagram account per day,** shared by everyone using that account. One person at a time per account.
- **Warm-up:** like a person browsing, not a script: a follow, then a few random likes and comments, sometimes a story reaction. Comments are written for that person and that post, never generic.
- **First message:** written fresh for every person after reading their profile and bio link. one short DM (about 50 to 90 words) with one specific detail from their account, with your name and company worked into the message, offering softly one of three free things: a 2-minute Loom audit, an explanation of where funnel automations could fit into their funnel, or a free funnel concept.
- **Follow-up:** one, 3 to 4 days after the first message, only if it adds something new and nobody has marked the person as replied in the Sheet.
- **Where it stops:** Claude never reads or answers replies. From the first reply on, the conversation is yours.

## Your data stays yours

Your lead list lives in your Google Sheet (or the shared team Sheet), which we never see for clients. **Passwords and keys are never typed into the chat.** What you type to Claude goes to Anthropic as usual, and searches go to Apify. This repository is read-only reference material and Claude never edits it.

## Worth knowing

Liking, commenting, following and messaging automatically can go against Instagram's rules, and Instagram can limit an account that behaves unusually. That risk is real; a spare account is the safe choice. Scheduled runs (if you set one up yourself in Claude's scheduled tasks) need your computer awake, with Claude Desktop and Chrome open.

---

## For the admin

[`docs/SPEC.md`](docs/SPEC.md) is every decision behind the kit. [`docs/ADMIN.md`](docs/ADMIN.md) says how to change it and run `npm run check`. [`docs/REAL-RUN-CHECKLIST.md`](docs/REAL-RUN-CHECKLIST.md) is the supervised first run. [`docs/TEAM-SHEET-MIGRATION.md`](docs/TEAM-SHEET-MIGRATION.md) lists what must change in the live team Sheet.
