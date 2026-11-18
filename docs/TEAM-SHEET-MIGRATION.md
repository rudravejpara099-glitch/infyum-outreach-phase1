# Migrating the live team Sheet (not yet applied)

The kit expects the layout in `skills/infyum-outreach/references/sheet.md`. The live "INFYUM Outreach Database" still has the older layout. Apply these changes **once, by the admin, after a copy has passed the real run** (`docs/REAL-RUN-CHECKLIST.md`). Take a copy of the Sheet first.

1. **Lead tabs** (`Leads_Rudra`, `Leads_Sunil`, `Leads_Template`): add 8 columns on the right of `reply_note`: `account`, `angle`, `offer`, `flags`, `followup1_at`, `followup1_text`, `followup2_at`, `followup2_text`. Raise each lead tab to 10,000 rows.
2. **`All Leads`:** header gets the 8 new names; the formula ranges change from `A2:Q1500` to `A2:Y10000` for every tab; raise the tab to 10,000 rows.
3. **New tab `Rejected`:** headers `username, reason, date, source`.
4. **`Team`:** add columns `in_use`, `last_seen`, `followups_used` (U, V, W). Replace `I` to `K` with the text `no limit`; clear `Q` to `S`; replace `L` with `=IF($A2="","",Settings!$B$8)`; replace `P` (dms_used) and add `W` with the new formulas in `sheet.md`; make sure Rudra's and Sunil's rows each name the right Instagram account.
5. **`Settings`:** `dms_hard_ceiling_per_day` (B8) = 35; remove the day-based ramp table in `A1:E5` (nothing reads it any more, but check `Team` first); `market` = `US only`; `the_one_link` = `https://portfolio.infyum.com/sales-funnel`; add `followups_per_account_per_day` = 35; add the eight `work_sample` rows.
6. **`Activity Log`:** raise the tab to 50,000 rows and change the `Team` counting ranges from `$5171` to `$50000` (they currently stop at row 5,171 and will silently stop counting).
7. **`Start here`:** replace rule 2 (it says "pause and stop on any Instagram warning"; the kit logs the warning, skips that action and carries on), and add `Rejected` to the tab table and to rule 1.
8. **Already done (2026-11-18):** the Sheet's title was corrupted ("sheetINFYhttps://...UM Outreach Database"); it was renamed to "INFYUM Outreach Database".
