# Account safety (read with the hard rules, every session)

**Keeping the Instagram account alive comes before speed and before today's number.** When this file and any other file disagree, this file wins. It changes how much you do and how fast, never what you do: the steps (find, qualify, warm up, first message, follow-up) stay exactly the same.

Say this honestly if the user asks: Instagram can restrict or disable any account that does outreach with automated help. These rules make that much less likely. Nothing makes it impossible.

## What gets accounts caught

1. **A brand-new account that starts acting at once.** New accounts have no trust yet; follows, comments and messages to strangers on day one are the fastest way to a suspension.
2. **Too much in one day.** One prospect means a follow, a few likes, maybe a comment and a story reaction, and a message. Done for many prospects, that adds up to hundreds of actions a day.
3. **Carrying on after a warning.** "Action blocked" or "Try again later" is Instagram's last warning. More actions after it turn a short block into a suspension.
4. **Working with no real breaks,** at every hour, every day.
5. **Many messages to strangers in a row.** Message requests that are ignored, declined or reported count against the account.
6. **Opening many people's Followers and Following lists.** This looks like a scraper.
7. **Several outreach accounts on one computer or network.** When one is taken down, Instagram often takes down the accounts linked to it.
8. **Links in messages to strangers.**

## Rule A: is the account ready? (check before you touch it)

- **Age and real use.** The account must be **at least 14 days old** and must have been used by a person, by hand, in that time: a profile photo, a bio, a few posts, some accounts followed, normal scrolling. Interview answer 8 tells you. If it is newer, or the user does not know: do no Instagram actions at all with it. Say in one line: "This account is too new. Use it yourself by hand for 2 weeks (post, scroll, follow a few accounts you like), then I can start." You may still find prospects with Apify or web search and save them.
- **Ask the user once, at setup** (they do it themselves; you never touch these settings): confirm the email and phone number on the account, turn on two-factor authentication, and add a profile photo and a bio.
- **One outreach account per Chrome profile,** and only one outreach account worked at a time on this computer. Never switch between accounts in one session.
- **No VPN.** Use the computer and network the user normally uses for this account.

## Rule B: today's limits grow slowly

Your `Team` row's `day_number` is how many days the kit has used this account (day 1 is `start_date`).

**Effective day (this decides the line you use).**
- **Established account:** interview answer 8 shows the account is 14 or more days old and the user uses it by hand most days (Rule A is met). If they say "established" but give no age, ask once for the age and whether they use it by hand most days. Effective day = `day_number` + 14, so it starts on the 15 to 30 line, not on 3 messages a day.
- **Spare, new or rarely used account:** effective day = `day_number`.
- Everywhere below that says "kit day", use the effective day. After a warning, Rule C sets the line instead.

Use the line for today's effective day. These are the kit's own careful numbers; Instagram does not publish its limits.

| Effective day | First messages | Follows | Likes | Comments | Follow-ups |
|---|---|---|---|---|---|
| 1 to 3 | 3 | 5 | 15 | 0 | 3 |
| 4 to 7 | 5 | 8 | 25 | 2 | 5 |
| 8 to 14 | 10 | 15 | 40 | 5 | 10 |
| 15 to 30 | 15 | 20 | 60 | 8 | 15 |
| 31 onward | 20 | 25 | 80 | 10 | 20 |

- Story reactions count as likes.
- These numbers are for the **account**, shared by everyone using it. Count what was already done today: `dms_used` on the `Team` row for first messages, and the confirmed `follow`, `like` and `comment` lines in today's Activity Log for every member on this account (`follows_used`, `likes_used` and `comments_used` show it per member). Count follow-ups from `followup1_at` (`followups_used`).
- **Today's number of new prospects** is the smallest of: the user's number, `dms_left` (the 35 ceiling stays), and this table's first messages minus those already sent today.
- When a limit is reached, stop that kind of action for the day. When likes or follows run out, stop starting new prospects (a prospect without a warm-up gets no message).
- After a warning, Rule C sets the line you use.

## Rule C: a warning stops the account

**Any** of these is a warning: "Action blocked", "Try again later", "We restrict certain activity", "We suspect automated behavior", "Your account has been restricted", a puzzle or "confirm it's you" screen, or a message that did not send.

1. **Stop every Instagram action on this account at once.** Do not retry the action, and do not try another kind of action instead.
2. If the screen has a plain OK or Dismiss button, press it. Anything that asks for a code, a phone number, a password or "this was me" is the user's to answer.
3. Log one `warning` line with the exact text, then one `pause` line. Tell the user in one line what Instagram showed and when you can carry on.
4. **Rest:** no actions on this account for **48 hours** from the warning (finding prospects with Apify or web search is fine). After the rest, use the **kit day 1 to 3** line for 3 days, then climb back up the table one line every 3 days until you reach the line for the real `day_number`.
5. **Two warnings within 7 days:** no actions for **7 days,** and tell the user.
6. **A suspension or a disabled account:** stop at once and do nothing more with **that account**. Log a `warning` line and a `pause` line. Tell the user in plain words, once: "Instagram suspended @name. Only you can appeal, through Instagram's own form. A brand-new account made right after a suspension on the same computer or network is often suspended too, so I won't make one. Another established account of yours is your choice, and I can carry on with it if you say so." **This never blocks a different account:** a suspension on one account is not a reason to stop work on another one, and a suspension on someone else's account (another member, another computer) is none of this account's business. Never create or suggest a replacement account.
7. **At every session start,** read the Activity Log for `warning` lines on **this account** from the last 7 days and apply these rests before doing anything. Ignore warning and pause lines for other accounts.

## Rule D: a human rhythm

- **Daytime only:** between 9 am and 9 pm in the account's time zone. At night, do nothing on Instagram.
- **Short sessions:** at most **5 prospects per session** (or about 40 minutes), then end the session. Tell the user: "Done for now. Start me again in 2 hours or more." At most **3 sessions a day.** Leftover work simply waits for the next session or the next day.
- **Rest one day a week:** no Instagram actions on that day (follow-ups wait too). Use the day the user names, or Sunday.
- **Space things out.** Real pauses between actions (seconds to minutes, never the same length twice). At least **5 minutes** between the first DMs of two different people, a different length every time. The 3 to 4 parts of one person's DM go a few seconds apart (`references/first-dm.md`); never send DMs to two people back to back.
- **Look like a person using Instagram,** not a machine going down a list: now and then scroll the home feed for a moment or watch a story from an account already followed, without liking or commenting.

## Rule E: a lighter warm-up

- **Per prospect:** at most 1 follow, 1 to 3 likes, at most 1 comment, and a story reaction only sometimes.
- **Follow only about half** of the prospects. Liking a couple of posts is enough warm-up.
- **Effective days 1 to 7:** no comments and no story reactions. Likes and follows only.
- **Open profiles directly by their address** (`instagram.com/<username>/`). Do not use Instagram's own search box to find people, and do not scroll through hashtags or Explore to find prospects.

## Rule F: the risky checks

- **The check list (qualify check 11):** before effective day 15, never open Followers or Following lists. Check only the "Followed by" line and write `check list not verified` in `flags`. From effective day 15, open lists for at most 10 prospects a day.
- **"About this account" (qualify check 7):** open it once per prospect, never again. If it fails, judge from the profile (already in `references/qualify.md`).

## Rule H: fewer reports

Ignored, declined and reported message requests count against the account, so message fewer, better-fitting people.
- **Never more than 20 first messages from one account in a day,** whatever the kit day or the 35 in the Sheet. The table above already stops at 20; this is a hard ceiling on top of it.
- **First messages only to High fit, or Medium fit with a clear sign of the problem** from interview answer 4 that you can name in the DM. A Medium fit without that sign is skipped (`skip_reason` = cannot pay).
- **The follow-up goes only to High fit.** A Medium-fit prospect who did not reply gets no follow-up: write a `note` line saying so.

## Rule G: messages

- **No links in first messages or follow-ups,** ever. A link goes out only from the user, by hand, after the prospect replies.
- Every message is written fresh for that person (already in `references/first-dm.md`). Never send the same or nearly the same text twice.

## Report it

In the end-of-session report, add one line: "Account safety: effective day N, today's limits X messages / Y follows / Z likes / W comments, used A / B / C / D." Add any warning and when work can carry on.
