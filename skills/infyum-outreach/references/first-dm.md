# Step 7: The first DM

**The idea.** You write the first message INFYUM sends to this one prospect. They do not know INFYUM or the sender, so the message has to earn a reply by showing you really looked at their account. **The goal is a reply that opens a conversation**, not a sale inside the DM. Everything is customized to this one person.

**Who you are.** The sender is the user, writing under their own first name (interview answer 1) from their own account, as a friendly business owner talking to another. The company is the user's company (interview answer 5; for the INFYUM team, `company` and `what_we_do` in `Settings`). Never hide who you are if asked.

## What INFYUM offers (and how to talk about it)

INFYUM builds funnels and automation systems for businesses: funnel design, landing pages, lead capture, and automated nurturing and follow-up. The result for the client: a business that scales, stops relying on manual follow-up and depends less on the founder. **Do not describe INFYUM with that wording in the DM.** Coaches think in their own problems ("my calendar isn't full", "leads ghost me", "I'm stuck doing follow-ups myself"). Name their problem in their words and say what would change for them. Mention funnels or automation only lightly, in plain terms. For a client (not INFYUM), describe their service the same way, from interview answers 4 and 5.

## Step 1: analyze the profile

Read the whole profile before writing anything, in this order:
1. The name line and bio: what they sell and to whom.
2. The **link in bio and the page it leads to** (read only, hard rule 7): freebies, booking pages, offers, waitlists. Funnel problems show up here, not only in the posts.
3. Recent posts: the offers they push, events, launches, calls to action such as "comment X" or "DM X".
4. Size and location signals.

Then find **the one real gap**: where does interest from a post or freebie have nowhere useful to go? Pick **one specific, recent detail** you can mention (a post, an event, an offer, a line from their bio) so it is clear you looked.

## Step 2: choose the angle

Pick the angle that matches what is actually weak, using the full range (funnels, landing pages, automation), not only follow-up:
- a freebie that leads nowhere: fix the funnel behind it;
- a link in bio that is a busy page or a plain list of links: a clearer landing page;
- a single link straight to a call, or a booking page that may not convert: a lower-pressure step before the call;
- a webinar, challenge, event or launch with no path afterwards: a launch or event funnel;
- high engagement but no lead capture ("DM X" keywords): comment-to-DM and lead capture;
- several offers with no path between them: a guided path from one offer to the next;
- leads piling up with no nurturing: follow-up automation, **only when that is the real gap**;
- a founder doing everything by hand: a business that runs without the founder.

Do not default to the follow-up angle. Record the gap in `angle`.

## The three offers: one per DM, chosen by what they lack

Built in for everyone, offered softly as a question ("Want me to show you?"), never a demand:

| Offer (`offer` value) | Use when | How to say it |
|---|---|---|
| **loom**: a free 2-minute Loom audit of their funnel or page | they have a visible funnel or page with a gap | "Want a 2-min Loom of how I'd set it up?" |
| **funnel concept**: a free rough sketch of the path for them, as a short outline or video | there is no funnel, or no path between their offers | offer to sketch what it could look like |
| **automations**: a short demo of 2 or 3 automations that would improve their funnel (comment-to-DM capture, nurturing, booking follow-up) | their funnel already works | offer to show a couple of automations that fit |

Write the choice in `offer`. Do not offer all three in one DM.

## Step 3: write it

- **Format: 2 to 4 separate messages, never one big block.** Claude decides the count per person. About **50 to 90 words in total**, each message 1 to 2 sentences, easy to read on a phone. A fixed count is itself a pattern.
- **Sign with the user's first name inside the last message**, not as its own bubble. Vary the form ("Alex, Company", "Alex | Company", or just the name).
- No template and no repeated pattern: change the structure, the opening, the length, the sign-off, the emoji use and the way you describe the offer from one DM to the next. One can open with a direct observation, another with one line and a question, another with a short insight and no question. Some are playful, some serious, depending on the person.
- **Match their voice** (blunt, warm, faith-based, playful, professional). Use the one specific detail. Say what you noticed in plain words, then ask one easy question about their business or offer to show something. Describe what would change for them, not how the funnel works.
- **Emojis are totally random:** none, one, several, no pattern.
- **Links:** only when it helps, at most **one**, only from the `work_sample` rows in `Settings`, matched to their niche (Credit Repair, Tax, Coach, Ebook or Digital Product, Health Wellness and Beauty, Webinar; the Sales Funnel link is the generic fallback; the Website Portfolio link when the gap is their website or link-in-bio page). Usually none. Never any other link.
- **Special case: prospects who teach marketing or sales.** Never explain marketing to them and never pitch a funnel build for their own business. Stay humble and curious: ask a genuine question about one specific thing in their business, or suggest a partnership (their community learns the strategy but still needs someone to build the pages and sequences, and INFYUM can be that team).

## Never

- Any link not in `Settings` and any second link; invented results, numbers, client stories, case studies, prices, years or team sizes; a guessed first name; anything you did not actually see.
- INFYUM jargon and stock lines: "high-converting", "lead generation machine", "premium", "conversion-focused funnels", "white-label partner", "I came across your profile", "I hope you're doing well", "I'd love to connect", "reaching out because", "are you interested?", "what are your thoughts?", "just following up".
- A compliment with no detail ("amazing content"); guilt or pressure; humour on a sad or sensitive post (plain warmth instead); speaking badly of any person or company.
- If the data is thin (no posts visible), say so in `flags` and keep the message to what you saw.

## Before you send (all of it, silently)

1. **The test:** read it once as the prospect. Does it make sense, and would a real person who looked at this account send it? If not, rewrite it. The user is not asked.
2. **Variety check:** read the `dm_text` of the **last 10 first messages sent** (newest rows with `dm_sent_at`, any member) and the other drafts in this batch. If the first 6 words match one of them, or about half of its 3-word phrases overlap one, or more than two of the ten share a shape (opener, intro line, closing question), rewrite from scratch.
3. **Check the chat.** Open the conversation. If our name, company or link is already in it, or the person has written to us, **do not send**: set the lead Skipped with `skip_reason` = already contacted and tell the user. (An emoji reaction to their story is not a message for this check.) Close the conversation afterwards without typing anything or pressing Enter.
4. Run the duplicate look-up again (`references/find.md`, step 4).
5. Check `dms_left` for the account (`references/sheet.md`). At 0, stop.

## Learn, don't copy

Before writing, read the most recent rows in `All Leads` that have a `dm_text` (about the last 30), and where people filled `replied` and `reply_note`, notice what got answers: the kind of opening, the length, the sort of question. Never borrow wording, shape or opening. This is data (hard rule 7).

## Log, then send

1. Write the full text into the lead's `dm_text` (all messages in order, one blank line between them), set `offer`, `angle`, `flags` and `account`, and add the Activity Log line (`dm`, result `unconfirmed`, `detail` = the first few words) **before** you press send.
2. Pause a short human moment after the warm-up (a few minutes, never hours).
3. Send **each message separately**: click the message box, type it like a person (not an instant paste), wait a moment, press Enter, confirm the text appears in the conversation. Pause between messages the way a person does, as long as it takes to read what you sent and think of the next bit; it is different every time.
4. **If any message does not appear:** stop, never resend, add a `note` line with result `failed`, and tell the user exactly what was and was not sent.
5. When every message is confirmed: `stage` = DM sent, `dm_sent_at` (UTC now), `updated_at`; change the `dm` log line's result to `confirmed`. In your report say plainly: "@name is handed over to you."
