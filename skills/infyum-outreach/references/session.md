# Step 9: Sessions, commands, reports, scheduled runs

## Session start (every time, no questions first)

1. **Read the Sheet silently:** your `Team` row (`status` must be `active`), `Settings`, `All Leads` and the last lines of the `Activity Log`. Find the latest `interview:` note for this member.
2. **Sign-in and account:** open Instagram, read the username from the address bar, confirm it matches your `Team` row's `ig_username`. A different account than the row means stop and say so.
3. **Claim the account** and read today's count (`references/sheet.md`). In use by someone else: say exactly "This account is currently in use by someone else." and stop.
4. **Follow-ups due** (`references/followups.md`): do them now, without being asked.
5. **Warmed-up prospects whose first message was not sent** (stage Engaged): finish them (`references/first-dm.md`).
6. **New prospects.** Ask once: "How many new profiles today?" (never more than `dms_left`). A returning user is offered the recap from the latest `interview:` note ("Same as last time: ...? Say yes, or tell me what to change"); a new user runs `references/setup.md`.

Then run the loop below until the number is reached, you are stopped, or you are signed out.

## The loop: one prospect after another

Find (`references/find.md`) → qualify (`references/qualify.md`) → warm up (`references/warmup.md`) → first DM (`references/first-dm.md`), logging each step. Do not stop to report after each prospect and do not ask anything on the way. Report at once only if you are signed out or hit an identity check. When fewer than 5 candidates are waiting, find more. **The aim is up to 35 a day per account; it is a target, not a quota to hit at any cost.**

## Commands

| User says | You do |
|---|---|
| "start" / "do N profiles" | The session-start flow, then the loop until N first messages are sent |
| "find prospects" | Find and qualify only; no engagement |
| "go" / "next" | Warm up and message the next Qualified prospect |
| "status" | Counts per stage (Found, Qualified, Engaged, DM sent, Skipped), the account's used and left of 35 for first messages and for follow-ups, anything that needs them |
| "stop" / "pause" | Stop immediately (hard rule 8); release the account |
| "settings" | Show the settings in plain words; narrow them for this person's run only |
| "skip @name" / "undo" | Set the lead to Skipped with the note `do not contact`; never touch them again |

## Reports (in your own words, short)

- **After a prospect:** "Done with @name: followed, liked 3 posts and commented on 2. Their first message is sent. They're yours now."
- **End of a session or scheduled run:** first messages sent out of the account's 35, follow-ups sent, skipped with reasons, any Instagram warnings, anything that needs the user, and a line "@name is handed over to you" for each new first message.
- **Signed out or an identity check:** "Instagram needs you: [what it showed]. Please sign in or complete it in Chrome and tell me when it's done; I'll carry on."

## Scheduled runs

The kit does not create or offer a schedule. A user who wants one sets it up in Claude's scheduled-tasks feature. Tell them the honest limits if they ask: scheduled tasks that use Chrome run on their computer, which must be awake, with Claude Desktop and Chrome open and signed in to Instagram. For the task's instructions they can paste:

> Run my INFYUM Instagram outreach for today. Read the INFYUM outreach kit (skills/infyum-outreach/SKILL.md in the repo https://github.com/rudravejpara099-glitch/infyum-outreach-phase1) and follow it, especially references/rules.md and references/session.md. My team name is <first name> and my Instagram account is @<username>. This is a scheduled run with no one to ask: use my latest `interview:` note from the Activity Log, do follow-ups first, then new prospects up to the account's remaining first messages for today. Log everything. Finish with a five-line summary.

**Rules for a scheduled run** (nobody is there to answer):
1. Read your `Team` row. If `status` is not `active`, do nothing and say so.
2. **Account in use by someone else:** skip the run and write a `note` line; the next scheduled time tries again.
3. Use the latest `interview:` note. If there is none, do only the follow-ups and write a `note` line saying why.
4. **Blocked** (signed out, identity check, Chrome closed, Sheets or Apify disconnected): stop, write **one** `note` line with exactly what happened, and end with a short summary. There is **no catch-up**: a missed run simply happens at the next time.
5. At the user's next session, tell them first about anything a scheduled run left in the Activity Log that needs them.
6. Release the account (`in_use` cleared) when the run ends.
