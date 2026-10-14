# TGF Website Content — Phase 1 Approval Ledger

**Status:** Complete — review required before Phase 2  
**Prepared:** 13 October 2026  
**Scope:** Content inventory, approval classification, and safe-normalization checklist. No application source, styling, routing, or public asset was changed.

## Status key

| Status | Meaning | Publishing rule |
|---|---|---|
| **Approved** | Explicitly marked `Approved` in the client document. | May be implemented, subject to any identified name/label conflict. |
| **Confirmed scope** | Explicit textual confirmation, independent of an unchecked checkbox. | May guide page naming/scope only; it does not approve adjacent copy. |
| **Provided — approval pending** | Client supplied text, contact, biography, URL, or asset without an explicit approval. | Do not publish or replace existing copy with it. |
| **Existing — approval pending** | Current-site content referenced for client review. | Do not treat as verified or approved. |
| **Conflict / clarification required** | Sources disagree, a value is malformed, or approval is ambiguous. | Do not implement until resolved in writing. |
| **Not provided** | The required fact, asset, approval, or permission is absent. | Do not create a substitute. |

## Source register

| Source | Role in this ledger | Notes |
|---|---|---|
| `TGF Website Content Request.docx` | Client request, supplied content, and approval evidence | Ten-page document; all checkbox controls are unmarked. No comments or tracked changes. |
| `app/country-page.tsx` | Active page content and regional rendering | The homepage renders this component with Sri Lanka as the base record. |
| `app/site-shell.tsx` | Active logo/tagline and dormant legacy footer content | Only `Logo` is currently used by active pages. |
| `app/layout.tsx` and country route files | Global and market metadata | UAE route is currently `/dubai`. |
| `public/` and `public/images/leadership/` | Existing and newly supplied media | The Thushara portrait exists but has no documented publication permission. |

## Content inventory by page and section

| Page / section | Current website content owner | Client document material | Status | Phase 2 action after approval |
|---|---|---|---|---|
| Global homepage — hero | `CountryPage` global branch, currently based on Sri Lanka data | New group introduction and replacement hero wording | Provided — approval pending | Create independent global hero data; do not use supplied replacement copy yet. |
| Global homepage — market cards | `countries` and `marketTiles` arrays | Confirms Sri Lanka, Bangladesh, Maldives, and UAE; provides draft market descriptions | UAE scope is confirmed; all descriptions are approval pending | Keep current market structure; use UAE/International scope only after content-record separation. |
| Global homepage — Why TGF / FCSI | Shared FCSI block | Draft copy about global expertise, FCSI alignment, technical team, and brands | Existing / provided — approval pending | Require exact approved FCSI wording and evidence. |
| Global homepage — services | Shared five-service array | Draft positioning copy and request to confirm activities/markets | Existing / provided — approval pending | Preserve current service list until client confirms scope per market. |
| Global homepage — projects | Sri Lanka project data leaks into global route | Hilton Yala, Hilton Colombo, Hilton Weerawila; Maldives project names | Existing — approval pending | Require a project record and publishing approval per project. |
| Global homepage — brands and clients | Shared partner/client logo arrays | Request to approve/correct logo lists; old site cites 28 brands | Existing — approval pending | Retain current assets; do not add, remove, or assign them by market. |
| Global homepage — about / statistics | Shared about copy, `45` clients, `28` brands | Draft company copy; conflicting founding years and `72` clients / `34` brands in document | Conflict / clarification required | Do not publish revised statistics or a founding year. |
| Global homepage — mission / vision | Global-only blocks in `CountryPage` | Existing mission/vision provided for review | Existing — approval pending | Retain current text pending written approval or replacement. |
| Global homepage — leadership | `groupTeam` | Sri Lanka/global leadership biographies for Thushara, Prageeth, Sudesh, and Darren | Provided — approval pending; identity conflicts exist | Resolve names/titles/credentials before replacing current profiles. |
| Sri Lanka — hero, solutions, projects, about | Sri Lanka record in `data` | Group-level draft copy plus existing-content approval requests | Existing / provided — approval pending | Do not infer Sri Lanka-specific content from global text. |
| Sri Lanka — contacts | Global contact block only; shared footer repeats `info@` | Approved Sri Lanka emails/phones/addresses, with two values marked Change | Partially approved | Use only approved values after the label conflicts are resolved. |
| Maldives — leadership and contacts | Placeholder team cards; no detailed regional contacts | Kapila Ranaweera and Adnan Marikkar biographies; Maldives emails and telephone numbers | Provided — approval pending | Add only after profile, contact, and portrait/right approvals. |
| Maldives — projects | Two named project cards | W Maldives and Le Méridien Maldives Resort & Spa are cited | Existing — approval pending | Require project records, approved scope text, and image rights. |
| Bangladesh — leadership and contacts | Placeholder team cards; generic project-category cards | Quamruz Zaman and Ranu Miah biographies; Bangladesh contacts | Provided — approval pending | Do not replace placeholders or present generic portfolio cards as confirmed projects. |
| UAE / International — title and route | `/dubai` route, Dubai metadata, UAE visible label | Text confirms UAE serves the international market | Confirmed scope | Retain the existing route in Phase 2; update visible name/metadata only after content integration. |
| UAE / International — leadership and contacts | Placeholder team cards; generic project-category cards | Global leadership list and international contact table | Provided — approval pending; phone is malformed | Do not publish the international general line or staff mapping until clarified. |
| Footer and social links | Active country footer has no social links; dormant footer has `#` placeholders | Google Business, Facebook, Instagram, LinkedIn, and TikTok URLs; request also asks for X/Twitter and YouTube | Provided — approval pending; X/YouTube not provided | Do not introduce social links until final destinations are approved. |

## Approval matrix

### Explicitly approved contact information

| Item | Approved value from client document | Current-site position / discrepancy | Safe normalization rule | Implementation state |
|---|---|---|---|---|
| Managing director email | `md@tgfholding.com` | Current active CTA/footer prefer `info@tgfholding.com` | Use `mailto:md@tgfholding.com` only where client approves the placement. | Ready, placement still to be decided in Phase 2. |
| Mr Thushara telephone | `+94 0727568612` | Current site displays `+94 72 756 8612` | Preserve the approved digits; use `tel:+94727568612` and display `+94 72 756 8612`. | Ready. |
| Mr Prageeth telephone | `+94 77 716 6233` | Current site labels the same number as “Mr. Chathuranga”; document also misspells the name as `Prgaeeth` in places. | Preserve digits only; do not associate it with a final display name until spelling/identity is confirmed. | Blocked by identity clarification. |
| Mr Darren telephone | `+971 50 712 1320` | Current site labels this number as Mr. Darren. | Use `tel:+971507121320`; retain display spacing. | Ready. |
| Mr Sudesh telephone | `+94 71 606 0388` | Current site labels the same number as “Mr. S. Don”; document biography says “Mr. Don.” | Preserve digits only; do not publish a final person label until identity is confirmed. | Blocked by identity clarification. |
| Registered office | `No 217/1, High Level Road, Nugegoda, Sri Lanka` | Current site has the same address with company-name variation. | Preserve address; company legal-name formatting remains unresolved. | Ready after legal-name decision. |
| Operations office | `No 85/1/1, Thimbirigasyaya Road, Colombo 05, Sri Lanka` | Current site has the same address with company-name variation. | Preserve address; company legal-name formatting remains unresolved. | Ready after legal-name decision. |

### Confirmed scope

| Item | Evidence | Allowed use | Not approved by this confirmation |
|---|---|---|---|
| UAE / International market role | Client document: “Confirmed: the UAE operation serves TGF international market. Use UAE as the page title and describe its international-market role in the page content.” | Use UAE as the visible page title and treat it as the international-market page. | Specific hero, market, services, leadership, project, and contact wording around it. |

### Supplied but not approved

| Category | Supplied material | Required approval |
|---|---|---|
| Brand identity | “The Global Food Holding”, “TGF Holding (Pvt) Ltd”, suggested “WHERE TRUST IS ASSURED” tagline | Confirm exact public name, legal name, spacing, and tagline. |
| Hero, market, Why TGF, service, and about copy | Draft prose throughout the Global Website Content table | Mark each section Approved, Approved with changes, or provide replacement. |
| Mission and vision | Existing and draft statements | Approve exact final text and geographic claims. |
| Leadership | Names, roles, biographies, degrees, memberships, certifications, experience ranges, and supplied portrait | Approve each profile and confirm image publication rights. |
| Regional contacts | Maldives, Bangladesh, and International emails/phones | Confirm each contact, its market, its label, and recipient role. |
| Social links | Google Business, Facebook, Instagram, LinkedIn, TikTok | Confirm final destinations and provide X/Twitter and YouTube if required. |
| Projects and logos | Existing named projects and current brand/client assets | Approve each project claim, logo list, market association, and publication right. |

### Existing content awaiting approval

| Existing claim or item | Why it is not safe to treat as approved |
|---|---|
| “The only Sri Lankan company with membership of Foodservice Consultants Society International.” | Client requests exact wording and current evidence; neither is supplied as an approval. |
| Shared service descriptions and market applicability | Client asks which activities remain current and which markets offer them. |
| Current `45` clients and `28` brands statistics | Document cites different figures and asks for current figures with an effective date. |
| Global company-positioning, mission, vision, and about copy | Listed for client approval or replacement; associated choices are unmarked. |
| Sri Lanka and Maldives project names, scopes, and images | Listed as existing content but no project record approval or publication permission exists. |
| Partner/client logo arrays | The document asks for approval/correction but contains no completed decision. |
| Current `info@tgfholding.com` CTA/footer email | It is active in source but does not appear in the client approval table. |

### Conflicts and missing information

| Item | Conflicting or missing values | Required resolution |
|---|---|---|
| Company name | The Global Food Holding; TGF Holding (Pvt) Ltd; T G F Holding (Pvt) Ltd | Confirm public brand name and legal entity presentation. |
| Tagline | Current source: “Were the trust is assured”; document mentions “WE THE TRUST IS ASSURED” and suggests “WHERE TRUST IS ASSURED” | Provide one final, approved tagline or direct its removal. |
| Founding year | 2017; document notes conflicts between 2015 and 2021 | Provide year and entity to which it applies. |
| Statistics | Source: 45 clients / 28 brands; document: 72 clients / 34 brands | Provide approved figures and as-of date. |
| Leadership identities | M. Chathuranga vs Prageeth Jayathilake; Shanaka Don vs Sudesh Shanka vs Mr. Don | Confirm final people, spelling, titles, and number assignments. |
| Thushara biography | Source says 20 years and active Vice Chairman; supplied biography says 24+ years, Treasurer, former Vice Chairman, degrees/certifications | Approve one factual biography and supporting credentials. |
| Vision geography | Current source includes Europe; document’s existing wording lists South Asia and Middle East | Approve final geographic scope. |
| Sri Lanka sales/general contacts | `sales@tgfholding.com` and `+94 71 606 0388` are explicitly marked Change, with no replacement | Provide replacement values or instruct removal. |
| International general number | `+97 1507 1213 20` | Provide a valid number and owner label; do not infer a correction. |
| Regional addresses | None supplied for Maldives, Bangladesh, or UAE | Provide addresses or confirm that none should appear. |
| Contact form | Requested field, recipient, and privacy approval; no form exists in the application | Confirm whether a form is required; this remains outside Phase 1. |
| Projects | No complete record for any project; no named Bangladesh/UAE projects | Supply project title, market, location, scope, date/status, approved copy, image, and rights confirmation. |
| Media rights | No publication permission for leadership/project images or logo use is recorded | Provide explicit rights confirmation. |

## Safe-normalization register

The following rules are approved for future implementation only; no website content was changed in Phase 1.

| Rule | Decision |
|---|---|
| Telephone links | Normalize an explicitly approved number to E.164 for the `tel:` target while preserving an approved, human-readable display format. |
| Email links | Use a `mailto:` value only for emails explicitly approved for publication and the correct page placement. |
| Names and labels | Never normalize, abbreviate, expand, or remap a person name where the document conflicts. |
| Credentials and claims | Do not copy-edit or publish qualifications, certifications, membership statements, years of experience, statistics, or “only” claims without explicit approval. |
| Draft prose | Preserve the supplied text for review; do not silently rewrite it into production copy. |
| Unapproved assets | Keep supplied assets out of active rendering until permission and intended placement are confirmed. |

## Phase 1 implementation checklist

### Completed

- [x] Read the complete client DOCX, including tables, leadership biographies, approval fields, contacts, hyperlinks, document metadata, and embedded media.
- [x] Reconciled document content with all active routes, shared sections, source constants, metadata, and public assets.
- [x] Classified content as Approved, Confirmed scope, Provided — approval pending, Existing — approval pending, Conflict, or Not provided.
- [x] Recorded the global homepage/Sri Lanka data coupling as a Phase 2 architecture requirement.
- [x] Recorded all safe telephone/email normalization rules without modifying source code.
- [x] Confirmed that no application source code, CSS, route, dependency, deployment configuration, or active media reference changed in this phase.

### Required before Phase 2

- [ ] Approve the public/legal company name and tagline.
- [ ] Approve or replace global, market, service, mission, vision, and about copy.
- [ ] Resolve all leadership-name, title, biography, credential, and telephone-label conflicts.
- [ ] Provide approved current statistics and founding-year information.
- [ ] Approve FCSI wording and evidence.
- [ ] Approve country-specific contacts, addresses, projects, brands, clients, and social URLs.
- [ ] Provide the replacement sales/general contact information marked Change.
- [ ] Confirm image/logo publication rights and intended placement.
- [ ] Confirm whether a contact form is needed.

## Phase 1 completion report

Phase 1 is complete. The authoritative approval ledger is this file. The application remains unchanged; the working tree contains only the pre-existing client document, supplied portrait, and this ledger under `docs/`.

**Remaining blocker:** Written client decisions for every item in the “Required before Phase 2” checklist. Until those decisions are received, Phase 2 must not publish draft copy, disputed identities, unsupported claims, generic projects, unapproved regional contacts, or supplied media.
