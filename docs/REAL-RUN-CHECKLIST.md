# Real-run checklist (nothing counts as done until this passes)

One supervised run on a **spare Instagram account** with **3 profiles**, watched by the admin. Use a copy of the team Sheet (or a fresh client Sheet), not the live team Sheet. Write down what you actually saw; tick only what you saw.

## Setup and Sheet
- [ ] Pasting the README prompt makes Claude read `skills/infyum-outreach/SKILL.md` and start with the welcome (two lines, then the route question).
- [ ] Preflight: in a cloud session it stops with the exact "I need to run on your own computer" message; with Chrome missing it names what is missing.
- [ ] The interview shows 9 questions in the numbered layout with recommended answers; "yes" accepts; a vague answer gets one follow-up round; the read-back waits for a "yes"; one `interview:` note lands in the Activity Log.
- [ ] Team route: the Sheet is found by pasted link and by the title "INFYUM Outreach Database"; a read-only account gets the exact "can't open the team Sheet" message.
- [ ] Client route: Claude builds a Sheet; `Team` shows `local_date`, `day_number` and `dms_limit` (35) without errors; `All Leads` has the 25 column names.
- [ ] **New formulas verified:** after one first message is sent, `dms_used` on the Team row shows 1 and `dms_left` 34; after a follow-up, `followups_used` shows 1.

## Account and lock
- [ ] Claude reads the Instagram username from the address bar and confirms it.
- [ ] A second person (or a second chat) on the same account gets exactly "This account is currently in use by someone else." and works nothing.
- [ ] The lock clears on "stop"; a stale mark older than 20 minutes does not block.

## Find and qualify
- [ ] With Apify connected: a test search runs, phrases come from the interview answers and are logged as a `search phrases:` note.
- [ ] With Apify disconnected: Claude says once that it switched to web search; leads carry `source` = web.
- [ ] Dropped candidates appear in `Rejected` with a reason; none appear in the person's Leads tab.
- [ ] A candidate that already exists is skipped silently; two Claudes claiming the same username back off correctly.
- [ ] Checks run in order and stop at the first failure; a failing "About this account" is retried once, then judged, with `flags` filled.
- [ ] The check list usernames are searched in Followers and Following, matched exactly, last.

## Warm-up and first message
- [ ] Warm-up touches a random 2 to 5 posts, not the top of the grid; comments are specific, logged before posting, and visible after.
- [ ] The first message goes out as **one** message of about 50 to 90 words, with the user's name and company worked into the message (no separate sign-off line), with `dm_text`, `angle`, `offer`, `flags`, `account` filled and the `dm` log line confirmed.
- [ ] It offers one of the three free things (Loom audit, where funnel automations fit, free funnel concept), softly, as a question; it contains no link and no invented result.
- [ ] If a message is made to fail, Claude stops, does not resend, logs `failed` and says what was sent.

## Follow-ups, stop and schedule
- [ ] A lead whose `dm_sent_at` is moved back 3 days gets the follow-up when a new session starts (only if a `followup draft:` is in `notes`); one with `replied` filled gets none; a lead sent from another account is left alone.
- [ ] There is never a second follow-up.
- [ ] "Status" shows counts and used/left of 35. "Stop" halts at once and releases the account.
- [ ] A scheduled run with the account in use skips and writes a `note`; one with Instagram signed out writes one `note` and ends.

## Result
Date, account, who watched, what failed, and what was changed because of it.

## Rehearsal 1 (2026-11-18): view-only, client route, web-search fallback

A fresh Claude session followed the kit as a new user. Nothing was followed, liked, commented on or sent. 26 candidates were checked, 2 qualified, 2 first messages and 1 follow-up were drafted and not sent.

**Passed:** Sheet built (after the Drive-full failure) with no formula errors; `dms_used`, `dms_left` and `followups_used` count correctly, including the local-midnight edge (tested with fake dates, then restored); username read from the address bar; account lock claimed and released; web-search fallback worked and logged `source` = web.

**Fixed afterwards:** no instruction for a failed Sheet create; the time zone was never asked; the Sheet's own time zone was never set to UTC; the Team row was added before the username was known; check 11 assumed a search box that was not there; hidden like counts made strict engagement skip good prospects; a missing Message button was skipped on page text alone; "Not shared" in About was not covered; no rule for where Chrome-checked skips go; no rule for stopping short; question numbering; a redundant "how many" ask.

**Still NOT tested (do these in the real run):** the Apify path; the team route; a second person refused by the lock; a stale lock; a real warm-up; a real send with the name in the last message and a `dm` log line confirmed; a failed message; `dms_used` after a real send; follow-ups through a real session start (including "replied filled gets none" and "another account's lead is left alone"); follow-up 2; "status" and "stop"; scheduled runs; preflight messages in a cloud session.
