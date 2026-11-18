# Step 8: Follow-ups

A follow-up is a short message to someone who got a first message and has not answered. At most **2** per person. You do them automatically when the user opens a session (or a scheduled run starts): see `references/session.md`.

## Who is due

A lead is due for follow-up 1 when all of these are true:
- `stage` is DM sent and `account` is the Instagram account you are signed in as (a follow-up must come from the account that sent the first message; leave the others);
- `dm_sent_at` is **3 or more days ago** and `followup1_at` is empty;
- `replied` is **empty** (a human fills it; if it has anything in it, never follow up);
- `notes` does not contain `do not contact`.

It is due for follow-up 2 when `followup1_at` is **4 or more days ago**, `followup2_at` is empty, and the other conditions still hold. After follow-up 2, never contact them again.

**You do not open the chat to look for replies, and you never answer a reply.** The `replied` column is the only signal. (Humans must keep it up to date; that is their job, not yours.)

## The limit

Follow-ups have **their own limit of 35 per account per day**, separate from first messages (`references/sheet.md`, "Counting the 35"). At the limit, stop doing follow-ups for today.

## What it says

A follow-up must **add something new**: a fresh idea, a specific observation, or a different angle on their funnel, never "just following up", "just checking in", "circling back" or "touching base". Make it shorter and lower-pressure than the first message, and different from person to person. Do not end every follow-up with the same Loom line, and do not repeat the offer wording of the first message: use a different offer line (`references/first-dm.md`), or none. No guilt, no pressure, no invented facts.

- **Separate messages, never one big block.** The user's first name goes inside the last message.
- **Links:** none by default. The one case for a link is a matching `work_sample` from `Settings` (`references/first-dm.md`) when it adds something concrete, at most one.
- Read `dm_text` and the `angle` of the first message first, so you add something new and keep the same voice.
- The same checks as a first message apply where they make sense: it must make sense to the prospect, it must not repeat the wording of other recent messages, and it must follow the "Never" list in `references/first-dm.md`.

## Log, then send

1. Write the full text into `followup1_text` (or `followup2_text`) and add the Activity Log line (`followup`, result `unconfirmed`) **before** you send.
2. Send each message separately, like a first message.
3. If any message does not appear: stop, never resend, add a `note` line with result `failed`, and tell the user exactly what was and was not sent.
4. When every message is confirmed: set `followup1_at` (or `followup2_at`) to UTC now, update `updated_at`, and change the log line's result to `confirmed`. The `stage` stays DM sent.
