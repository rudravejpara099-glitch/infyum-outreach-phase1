# Step 5: Qualify (in Chrome, one candidate at a time)

The duplicate check (`references/find.md`) comes first. Then open each remaining candidate's profile in Chrome and run these checks **in this order, stopping at the first failure**: set `stage` = Skipped, write `skip_reason` (the short phrases in `references/sheet.md`), and move on. Unsure means skip. Never ask the user to look at a profile or a link; never wait for a yes. You judge every profile yourself.

| # | Check | Skip reason |
|---|---|---|
| 1 | The account is still **public**. | private |
| 2 | Not an age or region "Restricted profile". | restricted profile |
| 3 | **Followers** are inside the user's range (read them on the real page). | under min / over max followers |
| 4 | **Active:** at least 2 posts in the last 14 days (or the user's own rule). Read the post dates. **Strict:** if you cannot see the dates, skip. | inactive |
| 5 | **Some engagement:** judge by eye; do not calculate rates. If like counts are hidden ("Liked by X and others"), that is **not** a reason to skip: judge from comments, named likers and how the recent posts look. Skip only when the visible signals are clearly dead (a handful of likes on a large account, or no comments for weeks). | low engagement |
| 6 | **Industry match:** the bio shows a business in the user's one industry (interview answer 2) that sells services or programs. Any size or sub-type of that industry passes. | wrong niche |
| 7 | **Market is the US** (see below). | outside market |
| 8 | Not an **agency, competitor, large brand or celebrity**. | competitor or agency / big brand |
| 9 | **Can pay and has the user's problem** (see below). | cannot pay |
| 10 | A **Message** button is on the profile, and the bio and story do not say DMs are closed. Confirm a missing Message button on the screen before skipping (page text can leave it out). | no message button / dms closed |
| 11 | **Not connected to the user's check list** (see below). | connected to team |

Also skip: a business that is clearly winding down (`winding down`), or one with no offer INFYUM could improve, such as a personal account or a creator with nothing for sale in the industry (`no offer`).

If you see a decisive failure before its turn (a bio clearly outside the US, an agency bio), you may skip on it right away; never skip on a guess.

## Check 7: market

INFYUM only messages **US-based** businesses in the user's industry. Open the account's "About this account" and read the country. The page text does not include that dialog, so read it from a screenshot. If it shows a country other than the US: skip. If it shows "Not shared", judge straight away (do not retry). If the dialog fails to load ("Failed to load" is Instagram's problem), do **not** hammer it: retry it **once** later in the same run. If it still fails, judge from the bio, language, location tags, currency and posts and write `country: judged` in `flags`. If the location is still unclear, **assume the US** and write `location unconfirmed, assumed US` in `flags`. A clear sign of being abroad (a stated move, local currency, a foreign city) means skip.

## Check 9: can they pay, and do they have the problem

Look for **selling signals** (a program, a call-booking link, ads, launches, clear pricing language) and **size signals** (a real offer, a team). Then look for the signs of the problem from the user's interview answer 4 (for INFYUM: funnel, lead capture, booking, nurturing or follow-up gaps; a bare Linktree or a "DM me" bio is a strong sign). Write `fit`: High, Medium or Low. **Low is skipped.** Skip hobby accounts and people with nothing for sale.

## Check 11: the user's check list

Interview answer 7 is a list of exact usernames. Skip the prospect if **any** of them appears in:
- the profile's "Followed by" line;
- their **Followers** list: open it and type the username in its search box;
- their **Following** list: open it and type the username in its search box.

**Before effective day 15** (`references/account-safety.md`, Rule F) never open the lists: check only the "Followed by" line and write `check list not verified` in `flags`. From day 15, open lists for at most 10 prospects a day.

Match **exact usernames only**. Close each list afterwards **without following or clicking anyone in it.** Do this check **last**, only for prospects that already passed everything else: opening lists is the part Instagram is most likely to notice.

**If a list has no search box, never scroll or click inside it** (every row there carries a Follow button and one wrong click follows a stranger). Check only the "Followed by" line, write `check list not verified` in `flags`, and carry on. Count these in your end report so the user can decide.

## Result

Write what you learned on the row: `niche` (the short industry phrase), `followers`, `fit`, `flags`. Then set `stage` = Qualified yourself.

## Work order

Work Qualified prospects in this order: the user's **best follower band first** (interview answer 3), then the rest of the range; within each, High fit before Medium. If the user named no best band, oldest found first. Never engage a prospect who is not Qualified.

## If anything looks wrong later

If, at any moment, the account looks wrong (private now, deleted, restricted, no Message button), set it to Skipped, note why, and move on. Skipping is always cheaper than a mistake.
