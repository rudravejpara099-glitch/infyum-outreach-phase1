# Step 1: Setup (preflight, welcome, sign-ins)

Do this when you do not yet know the user, or when a sign-in is missing. A returning user skips to `references/session.md`.

## 1.1 If something is missing (preflight failed)

Say exactly one message, then wait:

> I can't start yet. Missing: <what>. Fix: <one line>. Tell me "done" and I'll carry on.

Fixes you can name:
- **Claude in Chrome missing:** "Add Claude in Chrome from the Chrome Web Store (publisher Anthropic; it needs a paid Claude plan), sign in to it, and allow it on instagram.com."
- **Google Sheets missing:** "Connect Google Sheets in Settings, then Connectors, and sign in with the Google account the team Sheet was shared with." Google Drive and Google Sheets are separate connectors: Drive can find a file but not edit it, so you need Sheets.
- **Apify missing:** not a stop. See 1.6.

Never conclude "no Sheets here" and move on: offer the Connect card (search the connector directory if you have a tool for it) or send the user to Settings, then Connectors. They sign in in their own browser; tell you "connected"; check that the tools appeared (load them if deferred).

## 1.2 Welcome (your first message when preflight passes)

Two lines, then straight into the first question. Adapt the words, keep the content:

> Hi! I find the right Instagram prospects, warm them up the way a person would, and send each a friendly first message, then follow up later if needed. First a short interview (say "yes" to accept my suggestions), then three sign-ins: Google Sheets, Instagram and Apify.
>
> First question: is this for the INFYUM team, or your own business?

That answer is the **route** (team or client). It decides who owns the Sheet.

## 1.3 The interview

Run `references/interview.md` now. Do not sign in to anything before the interview is confirmed.

## 1.4 Google Sheets (first sign-in)

**INFYUM team.**
1. Ask: "Do you have the Sheet link from Rudra? Paste it if you do." If they paste it, open that exact Sheet. If not, search the user's Drive for the title **INFYUM Outreach Database**.
2. If you cannot find it, or you can read it but not write to it, do not guess and do not create a new Sheet. Say exactly: "I can't open the team Sheet with the Google account you connected (<email>). Please ask Rudra to share it with that email as an Editor, or send me the link he gave you, then say 'ready'." Wait.
3. Read the tabs `Start here`, `Team`, `All Leads`, the hidden `Settings`, and the last lines of `Activity Log`.
4. Find the user's row on `Team` by first name and Instagram username (done after 1.5, when you know the username). Team members must already be listed there by the admin.

**Client (own business).** You build their Sheet in their own Drive, exactly like the team Sheet. Follow "Building a client Sheet" in `references/sheet.md`; add their Team row at the Instagram step (1.5), when you know their username.
**If creating the Sheet fails** (for example "Drive storage quota exceeded"): say in one plain line what failed ("Your Google Drive is full, so I can't create your Sheet"), what they can do (free some space, or connect a different Google account), then wait. No retry loop, no half-built Sheet, and never write into another existing Sheet.

## 1.5 Instagram (second sign-in)

1. Open `https://www.instagram.com/` in the Chrome window you control.
2. If you see a login page, say: "Please sign in to the Instagram account you want to use for outreach, **in the Chrome window I just opened** (it is the one I can control). I won't see or touch your password. Say 'done' when you're in."
3. If they say they are already signed in elsewhere, they are in a **different Chrome profile**: you can only use the profile where Claude in Chrome is connected. Offer the two ways: sign in to Instagram in the connected profile (quickest), or install Claude in Chrome in the other profile, sign in to it with the same Claude account, keep that window open, and you reconnect.
4. Say once, in one line: "In the Claude in Chrome extension, allow instagram.com and choose the setting that lets me act without asking you at every click (its wording may differ)."
5. Open the account's own profile and **read the username from the address (`instagram.com/<username>/`), not from small text on the page**. Confirm: "I see you're signed in as @name. Use this account for outreach?"
6. **Check the account in the Sheet.**
   - **Team:** the user's `Team` row must exist with that `ig_username` (lowercase, no @). If it does not, **add it yourself**, for this user only: say in one line "I'm adding you to the team Sheet" and follow "Add a teammate" in `references/sheet.md` (their `Leads_<Name>` tab if missing, their Team row with first name, username, `status` active, `start_date` today, time zone and UTC offset from the interview, and the tab in the `All Leads` formula). If another Team row already uses the same `ig_username`, copy its `time_zone` and `utc_offset_hours`. If you cannot write to the Sheet, say so and ask them to have the owner share it as an Editor.
   - **Client:** add their Team row (first name, username, `status` active, `start_date` today, time zone and UTC offset from the interview).
   - **Time zone:** all Team rows with the same `ig_username` must carry the same `time_zone` and `utc_offset_hours`. If they differ, stop and tell the user to ask the admin; the day boundary of the 35 depends on it.
7. **Claim the account** and check the count (`references/sheet.md`, "The account lock" and "Counting the 35"). If it is in use by someone else: say exactly "This account is currently in use by someone else." and stop. If `dms_left` is 0: tell the user the account has reached its 35 for today.
8. **Account safety** (`references/account-safety.md`, Rule A). If interview answer 8 says the account is under 14 days old or not used by hand, say the one line from Rule A and do no Instagram actions with it. Otherwise ask once, in one short round: "Please confirm your email and phone number on this account, turn on two-factor authentication, and make sure it has a profile photo and a bio. No VPN. Say done." Say once, honestly: automated-style activity can get any account restricted; these steps lower the risk, nothing removes it.

## 1.6 Apify (third sign-in; wanted, not required)

Tell the user: "I find prospects with Apify, a free service (about $5 of free credit a month). You sign in once; there is no key to copy. Please connect it now."
- If you already have Apify tools, go to the test.
- If not, show the Connect card for Apify. If there is no card, the address for a custom connector is `https://mcp.apify.com?tools=apify/instagram-search-scraper` (Settings, then Connectors). The user signs in (or makes a free account) and clicks Allow; wait for "connected", then load the tools.
- **Test with one tiny search:** "business coach", 5 results. If it works, say "Apify connected and tested."
- **If it fails or the free credit is out:** say in one line exactly what failed, then carry on with web search (`references/find.md`) and log the source as `web`. Never pay or upgrade.

## 1.7 Start

Say in a few lines what is set (the interview answers, the account, today's count), then begin with `references/session.md`.
