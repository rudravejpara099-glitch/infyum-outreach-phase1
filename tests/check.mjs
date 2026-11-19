// Consistency checks for the INFYUM outreach kit. Structural only: they cannot tell whether
// Claude behaves well when it follows the kit (that needs the supervised real run).
// Run: npm run check   (Node 22+, no dependencies)
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");
const failures = [];
const fail = (msg) => failures.push(msg);
let checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) fail(msg); };

const SKILL = "skills/infyum-outreach/SKILL.md";
const REFS = "skills/infyum-outreach/references";
const EXPECTED_REFS = ["rules", "setup", "interview", "sheet", "find", "qualify", "warmup", "first-dm", "dm-examples", "followups", "session"];

// 1. Required files exist
const required = [
  "README.md", "CLAUDE.md", "package.json", ".claude-plugin/plugin.json", ".claude-plugin/marketplace.json",
  SKILL, ...EXPECTED_REFS.map((r) => `${REFS}/${r}.md`),
  "docs/SPEC.md", "docs/ADMIN.md", "docs/REAL-RUN-CHECKLIST.md", "docs/TEAM-SHEET-MIGRATION.md", "tests/scenarios.json",
];
for (const f of required) ok(existsSync(join(root, f)), `missing file: ${f}`);
if (failures.length) finish();

// 2. SKILL.md: frontmatter, size, every reference named
const skill = read(SKILL);
const fm = skill.match(/^---\nname: (.+)\ndescription: (.+)\n---\n/);
ok(!!fm, "SKILL.md must start with frontmatter (name, description)");
if (fm) {
  ok(fm[1].trim() === "infyum-outreach", "SKILL.md name must be infyum-outreach");
  ok(fm[2].trim().length > 80 && fm[2].trim().length <= 1024, "SKILL.md description should be 80 to 1024 characters");
}
ok(skill.split("\n").length <= 500, "SKILL.md must stay under 500 lines");
for (const r of EXPECTED_REFS) ok(skill.includes(`references/${r}.md`), `SKILL.md does not name references/${r}.md`);

// 3. Every references/<x>.md mentioned anywhere in the kit exists
const kitFiles = [];
(function walk(dir) {
  for (const name of readdirSync(join(root, dir))) {
    const p = `${dir}/${name}`;
    if (statSync(join(root, p)).isDirectory()) walk(p); else if (p.endsWith(".md")) kitFiles.push(p);
  }
})("skills");
for (const f of [...kitFiles, "README.md", "CLAUDE.md"]) {
  for (const m of read(f).matchAll(/references\/([a-z-]+)\.md/g)) {
    ok(existsSync(join(root, REFS, `${m[1]}.md`)), `${f} points to references/${m[1]}.md which does not exist`);
  }
}
for (const f of readdirSync(join(root, REFS))) ok(EXPECTED_REFS.includes(f.replace(/\.md$/, "")), `unexpected file in references/: ${f}`);

// 4. Scenarios: required wording is still in the file that owns it
for (const s of JSON.parse(read("tests/scenarios.json"))) {
  ok(read(s.file).includes(s.mustContain), `scenario ${s.id}: ${s.file} no longer contains "${s.mustContain}"`);
}

// 5. Removed decisions must not come back (checked across the kit and README)
const all = [...kitFiles, "README.md", "CLAUDE.md"].map((f) => [f, read(f)]);
const forbidden = [
  ["pause and stop", "an Instagram warning must not stop a run (log, skip, carry on)"],
  ["English-speaking", "the market is US only"],
  ["UK, Canada", "the market is US only"],
  ["2 to 4 separate", "the first DM is one message built only from the DM Agent Guidelines document"],
  ["free idea for what to improve", "the offers are Loom audit, where automations fit, or a free funnel concept"],
  ["Sign off with his name", "the sender is the user, not a fixed person"],
  ["dms_hard_ceiling_per_day` | 60", "the ceiling is 35"],
  ["START.md", "there is no START.md; the entry is SKILL.md"],
  ["free_sample_offer` | on", "the free sample offer is not used"],
];
for (const [text, why] of forbidden) for (const [f, body] of all) ok(!body.includes(text), `${f} contains "${text}": ${why}`);

// 6. Numbers agree everywhere
const sheet = read(`${REFS}/sheet.md`), followups = read(`${REFS}/followups.md`), rules = read(`${REFS}/rules.md`), session = read(`${REFS}/session.md`);
ok(/dms_hard_ceiling_per_day` \| 35 \|/.test(sheet), "sheet.md Settings must set dms_hard_ceiling_per_day to 35");
ok(/followups_per_account_per_day` \| 35 \|/.test(sheet), "sheet.md Settings must set followups_per_account_per_day to 35");
ok(sheet.includes("less than 20 minutes ago"), "sheet.md lock must expire after 20 minutes");
ok(sheet.includes("A scheduled run that finds the account in use"), "sheet.md must cover a scheduled run finding the account in use");
ok(rules.includes("35 first messages per Instagram account per day"), "rules.md must state the 35 cap");
ok(followups.includes("**3 or more days ago**"), "followups.md must send the follow-up 3 or more days after the first DM");
ok(followups.includes("There is **one** per person") || followups.includes("**one** per person"), "followups.md must allow exactly one follow-up");
for (const [f, body] of all) {
  for (const m of body.matchAll(/(\d+) (?:first messages?|DMs?) (?:per|a|each) (?:Instagram )?(?:account )?(?:per )?day/gi)) {
    ok(m[1] === "35", `${f} states a daily number other than 35: "${m[0]}"`);
  }
}

// 7. Hard rules: 13 numbered, each present once
const ruleItems = rules.split("\n").filter((l) => /^\d+\. \*\*/.test(l));
ok(ruleItems.length === 13, `rules.md must have 13 numbered hard rules (found ${ruleItems.length})`);

// 8. Interview: 9 numbered questions, in order
const interview = read(`${REFS}/interview.md`);
const section = interview.split("## The 9 questions")[1]?.split("\n## ")[0] ?? "";
const qs = section.split("\n").filter((l) => /^\d+\. \*\*/.test(l)).map((l) => Number(l.match(/^(\d+)\./)[1]));
ok(qs.join(",") === "1,2,3,4,5,6,7,8,9", `interview.md must have questions 1 to 9 in order (found ${qs.join(",")})`);

// 9. Sheet columns: the legacy 17 stay in order, then the 8 new ones
const cols = "member, username, profile_url, niche, followers, fit, stage, skip_reason, source, warmup_status, dm_sent_at, dm_text, notes, updated_at, claimed_at, replied, reply_note, account, angle, offer, flags, followup1_at, followup1_text, followup2_at, followup2_text";
ok(sheet.includes("`" + cols + "`"), "sheet.md lead columns must be the 25 agreed columns in order");
ok(cols.split(", ").length === 25, "lead columns must be 25");

// 10. The eight work samples are all in sheet.md
for (const slug of ["sales-funnel", "credit-repair-sales-funnel", "tax-funnel", "coach-sales-funnel", "ebook-digital-product-sales-funnel", "health-wellness-and-beauty-sales-funnel", "webinar-sales-funnel", "website-portfolio"]) {
  ok(sheet.includes(`https://portfolio.infyum.com/${slug}`), `sheet.md is missing the work sample ${slug}`);
}

// 11. README carries the paste prompt and the plugin lines
const readme = read("README.md");
ok(readme.includes("follow skills/infyum-outreach/SKILL.md exactly"), "README must carry the paste prompt pointing at SKILL.md");
ok(readme.includes("/plugin marketplace add") && readme.includes("/plugin install infyum-outreach@infyum-outreach-phase1"), "README must carry the plugin install lines");
const mkt = JSON.parse(read(".claude-plugin/marketplace.json")), plg = JSON.parse(read(".claude-plugin/plugin.json"));
ok(mkt.name === "infyum-outreach-phase1" && mkt.plugins?.[0]?.name === plg.name, "marketplace.json and plugin.json names must match the README install lines");

// 12. No real people from the reference DMs, no private contact details
const privacy = ["@gmail.com"]; // the reference DMs are in the source document and are kept as written in references/dm-examples.md
for (const [f, body] of all) for (const p of privacy) ok(!body.includes(p), `${f} contains "${p}": no real people or private addresses in a public repo`);

finish();

function finish() {
  if (failures.length) {
    console.error(`\n${failures.length} check(s) failed:\n`);
    for (const f of failures) console.error(`  x ${f}`);
    process.exit(1);
  }
  console.log(`All ${checks} checks passed. (Structural only: run docs/REAL-RUN-CHECKLIST.md before calling the kit done.)`);
}
