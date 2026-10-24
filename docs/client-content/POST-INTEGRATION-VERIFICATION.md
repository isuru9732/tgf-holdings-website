# TGF Website Post Integration Verification — Historical Snapshot

**Superseded on 24 October 2026.** This report describes the earlier implementation and contains statements that are no longer current, including the portrait count, Google Business link, and generic Bangladesh/UAE project cards. Use [the current content reconciliation inventory](CONTENT-RECONCILIATION-INVENTORY.md) for the website's present state.

**Checked:** 14 October 2026  
**Sources checked:** client content request, active website source, local preview routes, and supplied assets.

## Implementation verified

- Global homepage: updated hero, About copy, Mission, Vision, Why TGF, services, group leadership, Sri Lanka contact details, social links, and corrected tagline.
- Sri Lanka: client-supplied introduction, leadership roster, approved contact details, registered office, operations office, and supplied Thushara Gunawardhana portrait.
- Maldives: supplied market introduction, leadership roster, and contact details.
- Bangladesh: supplied market introduction, leadership roster, and contact details.
- UAE: visible page title and international-market positioning, supplied leadership roster, and supplied email/staff contacts.
- All active routes returned HTTP 200 during verification: `/`, `/sri-lanka`, `/maldives`, `/bangladesh`, and `/dubai`.
- Production compilation succeeds. Lint has no errors; it retains eight pre-existing `img` optimisation warnings.

## Website presentation verified

- Footer social links are compact circular controls aligned below the company summary.
- The support-area contact cards use the full available width.
- The supplied Thushara Gunawardhana image is displayed in the leadership card.

## Items that are not safe to describe as client-approved

The website has been updated at the project owner's direction. The source DOCX still has blank client approval fields, so this is an implementation record, not evidence of client approval or final sign-off.

| Item | Current status | Client action needed before external sign-off |
|---|---|---|
| Company/public name and tagline | Implemented as `The Global Food Holding` and `Where trust is assured`. | Confirm the final public name and tagline. |
| FCSI statements and logo | Website uses supplied FCSI-aligned wording and existing FCSI visual. | Confirm exact permitted wording, membership/certification status, and evidence. |
| Leadership text | Client-provided biographies are published. | Resolve the document's conflict: the Sudesh Shanka biography refers to `Mr. Don`. Confirm the correct name and biography. |
| Leadership imagery | Only Thushara's supplied portrait is displayed. | Provide approved portraits and publishing rights for other leaders, or confirm use of initials. |
| Sri Lanka sales/general contacts | Not shown because the document labels them `Change` without replacements. | Provide replacement email and general telephone details, or confirm removal. |
| UAE general telephone | Not shown because `+97 1507 1213 20` is malformed. | Provide the valid display and dialling number. |
| Google Business, X, and YouTube | Google Business URL is not shown; X and YouTube URLs were not supplied. | Confirm whether Google Business should be added and provide final X/YouTube destinations. |
| Project claims and images | Existing project cards remain; Bangladesh/UAE still use generic portfolio categories. | Provide approved project records, scope wording, images, and publishing permission for every public project. |
| Brand/client logos | Existing logo lists remain active. | Confirm the final logo list, country associations, and permissions. |
| Company statistics and founding year | Not shown as numeric claims. | Confirm an as-of date and final figures/year if these should be published. |

## Client-ready statement

Do not state that all website content has received client approval. A safe status update is: **“The requested content has been implemented and technically verified. Final factual and publication approval is still required for the items in the verification table.”**
