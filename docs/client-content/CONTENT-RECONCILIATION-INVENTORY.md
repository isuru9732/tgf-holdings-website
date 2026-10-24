# TGF Website Content Reconciliation Inventory

**Checked:** 24 October 2026  
**Source:** `TGF Website Content Request.docx` (SHA-256 `B8DBB747B1394B78C63D056B28745A7418F7A620940C2B1771F184EC581D76F5`)  
**Routes:** `/`, `/sri-lanka`, `/maldives`, `/bangladesh`, `/dubai`

The project owner directed the site to use the client document regardless of unchecked approval boxes. This record maps the document to the current website; it does not claim a separate client sign-off. The Phase 1 ledger and earlier post-integration report are historical snapshots.

## Content-to-component mapping

| Document item | Website location | Implemented content or treatment |
|---|---|---|
| Public name and corrected tagline | `Logo` in `app/site-shell.tsx`, shared header/footer | The Global Food Holding; Where trust is assured. TGF Holding (Pvt) Ltd remains the legal name at the two Sri Lanka offices. |
| Global hero | `CountryPage` global branch, `/` | “Four markets. One vision.” and “Engineered to perform.” with the supplied group positioning. |
| Market names and descriptions | Shared market links and regional heroes | Sri Lanka, Bangladesh, Maldives and UAE. Country introductions follow the document descriptions; UAE serves international markets. |
| Why TGF and FCSI wording | Shared `fcsi-feature` | Globally recognised team, FCSI-aligned standards, internationally trained technical team, after-sales care and reputed brands. Existing FCSI visual remains; the unsupported “only Sri Lankan company” claim is not used. |
| Services | Shared `services` array and `country-solutions` | Planning/design, equipment supply/installation, fabrication/infrastructure, workflow optimisation and after-sales support. Copy covers technical rigour, compliance, efficiency, sustainability and long-term collaboration. |
| Sri Lanka projects | `data["sri-lanka"].projects` | Hilton Yala, Hilton Colombo and Hilton Weerawila with existing images and captions; also featured on the group homepage. |
| Maldives projects | `data.maldives.projects` | W Maldives and Le Méridien Maldives Resort & Spa with existing images and captions. |
| Bangladesh/UAE projects | `data.bangladesh.projects`, `data.dubai.projects` | No project cards until records are supplied; generic category cards were removed. Brand and client sections remain. |
| Partner and client brands | Shared `partners` and `clients` collections | Existing logo inventory retained; no unconfirmed brand/client count is displayed. |
| Global About | `groupAbout`, global `country-about` | Group position, overseas subsidiaries, design/supply/consulting, FCSI-aligned standards, fabrication/import/export and design philosophy. |
| Country About | Regional `country-about` | Each page uses its own market introduction rather than repeating the full group About text. |
| Mission and vision | Global `mission-vision` | Mission: “To deliver innovative, high-quality hospitality infrastructure solutions combining design, consultation and world-class equipment.” Vision: “To be a leading hospitality-solutions provider in South Asia and the Middle East.” |
| Leadership | `data.*.team`, `portraitByName`, team renderer | Country-specific names, roles and document-derived biographies. Portraits are keyed by person; initials appear when no mapped image exists. |
| Country contacts | `contacts`, `legacy-contact`, support CTA and footer | Country-specific email and phone entries; Sri Lanka also has the two supplied offices. The support CTA uses that market's first email; the footer highlights its first email and phone. |
| UAE / International | `/dubai`, its route metadata and page signature | Visible UAE identity and international-market scope; existing URL retained. |
| Social destinations | Shared footer `.socials` | Google Business Profile, Facebook, Instagram, LinkedIn and TikTok. No X/Twitter or YouTube URL was supplied. |
| Founding year and statistics | All active pages | Omitted because the document gives conflicting years and figures, without a final value. |
| Contact form | All active pages | No form added: no completed recipient or privacy specification was supplied. Mailto and telephone contacts remain available. |

## Leadership roster and images

| Market | People shown | Portrait treatment |
|---|---|---|
| Global and Sri Lanka | Thushara Gunawardhana; Prageeth Jayathilake; Sudesh Shanka; Darren Kumar | Thushara and Prageeth portraits; Sudesh and Darren initials. |
| Maldives | Thushara; Prageeth; Kapila Ranaweera; Adnan Marikkar | All four portraits. |
| Bangladesh | Thushara; Quamruz Zaman; Ranu Miah | Thushara and Quamruz portraits; Ranu initials. |
| UAE / International | Thushara; Prageeth; Sudesh; Darren | Thushara and Prageeth portraits; Sudesh and Darren initials. |

The biographies retain the document's substantive experience, qualification, employer, geography and service facts, with spelling and grammar corrections. Prageeth's enterprise-solutions/project focus and the Sudesh/Darren functional focus appear in their role lines. Sudesh's conflicting paragraph is omitted. The DOCX itself embeds a logo, not staff portraits; the website uses the separately supplied `thushara-gunawardhana.jpg`, `prageeth.jpeg`, `kapila.jpeg`, `adnan_marikkar.jpeg` and `quantum_zaman.jpeg`. The supplied `quantum_zaman.jpeg` filename is explicitly mapped to the client-listed name Quamruz Zaman.

## Country contact values

| Market | Document values published |
|---|---|
| Global and Sri Lanka | `md@tgfholding.com`; Thushara `+94 72 756 8612`; Prageeth `+94 77 716 6233`; Darren `+971 50 712 1320`; Sudesh `+94 71 606 0388`; registered office No. 217/1, High Level Road, Nugegoda; operations office No. 85/1/1, Thimbirigasyaya Road, Colombo 05. |
| Maldives | `kapila@tgfholding.com`; `adnan@tgfholding.com`; Kapila `+960 7326145`; Adnan `+960 7535911`; Prageeth `+94 77 716 6233`. |
| Bangladesh | `md@tgfholding.com`; `zaman@tgfholding.com`; general `+880 1921 318286`; Gunawardhana `+94 72 756 8612`; Zaman `+44 7947 411741`. |
| UAE / International | `md@tgfholding.com`; `sales@tgfholding.com`; Thushara `+94 72 756 8612`; Prageeth `+94 77 716 6233`. The UAE-specific table provides the sales email and takes precedence over the earlier general “Change” note. |

## Unresolved contradictions and missing source material

- The heading names **Sudesh Shanka**, but his biography refers to **Mr. Don**. The owner directed us to show Sudesh's name and role without that paragraph until the subject is confirmed.
- Ranu, Sudesh and Darren have no mapped portrait files and retain initials.
- The UAE general number `+97 1507 1213 20` is malformed and not published. No Maldives, Bangladesh or UAE office address was supplied.
- The document does not supply X/Twitter or YouTube destinations, named Bangladesh/UAE project records, a final founding year, current client/brand counts, or a completed contact-form specification. No values were invented.
- The named Sri Lanka/Maldives project scope captions and existing brand/client logos predate this reconciliation. The document lists the projects and describes the logos as existing material but does not replace those records or provide a final logo inventory.

## Verification checklist

- [x] Client download and repository DOCX hashes match; all six tables and leadership sections inspected.
- [x] `npm run lint`: zero errors, nine `<img>` optimisation warnings.
- [x] `npm run build:vercel`: compilation, TypeScript check and static generation pass for all five routes.
- [x] Five desktop routes checked in the local browser for names, portraits, projects, country contacts, social destinations, metadata, and broken images.
- [x] Five mobile routes checked at 390 px: no document-level horizontal overflow or broken images. Maldives leadership cards and the social/footer area were visually inspected at desktop and mobile widths.
- [x] The local preview server was restarted after production build so its CSS reflects the source edits.
- [ ] Resolve the held contradictions above before publishing those omitted values.
