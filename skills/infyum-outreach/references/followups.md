# Step 8: The follow-up

*Source: "INFYUM Instagram DM Agent Guidelines (with reference DMs)", Step 4. Only what that document says.*

The follow-up is a short message to send **3 to 4 days after the first DM if there is no reply**. There is **one** per person. You send it automatically when the user opens a session (or a scheduled run starts): see `references/session.md`.

## Who is due

A lead is due when all of these are true:
- `stage` is DM sent and `account` is the Instagram account you are signed in as (a follow-up must come from the account that sent the first message);
- `dm_sent_at` is **3 or more days ago** and `followup1_at` is empty;
- `replied` is **empty** (a human fills it; if it has anything in it, never follow up);
- `notes` has a `followup draft:` line (the first DM's follow-up is included only when it adds something new; no draft, no follow-up) and does not contain `do not contact`.

**You do not open the chat to look for replies, and you never answer a reply.** The `replied` column is the only signal. After the follow-up, never contact them again.

## What it says

Start from the `followup draft:` in `notes`. Send it only if it still **adds something new**, such as a fresh idea or a different angle, never a plain "just following up". It is **shorter and lower-pressure than the first DM**, and different from person to person. Do not end every follow-up with the same Loom line. No invented results, numbers or claims. If it no longer adds anything, do not send one and write a `note` line saying so.

## Log, then send

1. Write the text into `followup1_text` and add the Activity Log line (`followup`, result `unconfirmed`) **before** you send.
2. Type it like a person; paragraph breaks with Shift+Enter; Enter once at the end; confirm it appears.
3. If it does not appear: stop, never resend, add a `note` line with result `failed`, and tell the user exactly what was and was not sent.
4. When confirmed: set `followup1_at` to UTC now, update `updated_at`, and change the log line's result to `confirmed`. The `stage` stays DM sent.
