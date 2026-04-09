# Crossref XML Support

This project can generate a full Crossref metadata deposit XML document based on the current publication form.

It targets the Crossref Metadata Deposit Schema **5.4.0** and is designed for a static GitHub Pages workflow.

## What the app generates

- A full `<doi_batch>` deposit XML document.
- A `<head>` section with deposit metadata.
- A `<body>` section containing one Crossref record mapped from the current BibTeX entry type.
- Real-time Crossref readiness checks.
- Real XML Schema validation using the vendored Crossref 5.4.0 XSD set and a browser-side WASM validator.

## URL fields

The app keeps website URLs and Crossref URLs separate:

- `url`: general public or publication URL used by the landing-page UI.
- `filePath`: PDF path used for the PDF button on the landing page.
- `crossrefResourceUrl`: explicit Crossref landing-page URL used in `<doi_data><resource>`.

The Crossref XML generator **never** uses `url` or `filePath` as a fallback for `<resource>`.

## Reused publication metadata

The current publication form already provides these metadata values:

- `author`, `editor`
- `title`, `journal`, `booktitle`
- `publisher`, `institution`, `school`, `organization`
- `year`, `month`
- `volume`, `number`, `pages`, `chapter`, `series`, `edition`
- `address`, `howpublished`, `type`, `note`
- `doi`, `url`, `filePath`, `abstract`

## Additional Crossref-specific metadata

The XML generator adds a dedicated Crossref section for metadata not covered by BibTeX:

Global deposit metadata:

- `doiBatchId`
- `timestamp`
- `depositorName`
- `depositorEmail`
- `registrant`
- `crossrefLanguage`

Shared record metadata:

- `crossrefResourceUrl`

Type-specific fields:

- `journalIssn` for journal articles
- optional `journalTitleDoi` and `journalTitleResourceUrl` for journal-level metadata
- `isbn` or `noisbn` for books, book content items, and conference proceedings
- `conferenceName` for conference records
- optional event metadata: acronym, number, location, date
- `approvalYear`, `approvalMonth`, `approvalDay` for dissertations
- `contentItemTitle` for `inbook`

## BibTeX to Crossref mapping

The app uses this fixed mapping:

| BibTeX | Crossref target |
|---|---|
| `article` | `journal > journal_article` |
| `book` | `book > book_metadata` |
| `booklet` | `report-paper > report-paper_metadata` |
| `conference` | `conference > conference_paper` |
| `inbook` | `book > content_item` |
| `incollection` | `book > content_item` |
| `inproceedings` | `conference > conference_paper` |
| `manual` | `report-paper > report-paper_metadata` |
| `mastersthesis` | `dissertation` |
| `misc` | `report-paper > report-paper_metadata` |
| `phdthesis` | `dissertation` |
| `proceedings` | `conference > proceedings_metadata` |
| `techreport` | `report-paper > report-paper_metadata` |
| `unpublished` | `report-paper > report-paper_metadata` |

Lossy fallback mappings are explicitly flagged in the UI for:

- `booklet`
- `manual`
- `misc`
- `unpublished`

## Record-level XML behavior

### Journal article

- Uses `journal` as `full_title`
- Requires `journalIssn` in the current app version
- Can optionally include `journalTitleDoi` + `journalTitleResourceUrl` at `journal_metadata > doi_data`
- Creates one `journal_article`

### Conference paper

- Uses `conferenceName` in `event_metadata`
- Uses `booktitle` as `proceedings_title`
- Requires `isbn` or `noisbn`
- Creates one `conference_paper`
- Proceedings-level DOI is not required in this app’s conference-paper path

### Proceedings

- Creates `conference > proceedings_metadata`
- Uses the current record DOI/resource at proceedings level

### Book

- Creates `book > book_metadata`
- Requires `isbn` or `noisbn`

### Book content item

- Used for `inbook` and `incollection`
- Parent book metadata is created from `booktitle`/book-level fields
- Child DOI is attached to `content_item`
- `inbook` requires an explicit `contentItemTitle`

### Dissertation

- Used for `mastersthesis` and `phdthesis`
- Requires approval date data
- Uses `school` or `institution` as the awarding institution

### Report / working paper

- Used for `techreport` and the lossy fallback types
- Accepts institution-only metadata, publisher-only metadata, or both

## Validation model

Validation happens in two layers:

### 1. Fast field-rule validation

The app checks:

- missing Crossref-required metadata
- invalid DOI format
- explicit `crossrefResourceUrl`
- email format
- timestamp format
- ISSN format
- ISBN presence or `noisbn`
- type-specific fields such as `conferenceName` or dissertation approval date

### 2. Real XSD validation

The app vendors:

- the Crossref 5.4.0 schema files
- minimal local stubs for unused JATS/MathML imports
- a browser-side `xmllint-wasm` validator

The generated XML is validated against the XSD in the browser. Validation results are shown in the Crossref XML panel.

## Important implementation constraints

- `filePath` is required for the landing page but is **never** written into Crossref XML.
- `abstract` is shown on the landing page but is currently **not** written into Crossref XML.
- The XML output is a separate export artifact and is not embedded inside the landing-page HTML card.
- The app is intentionally conservative: it emits a minimal valid Crossref structure rather than trying to serialize every optional BibTeX field into XML.

## Files involved

- `app.js`: form logic, mapping rules, XML generation, validation wiring
- `index.html`: UI for Crossref metadata and XML export
- `styles.css`: UI styles for the Crossref panel and validation messages
- `crossref-schema/`: vendored Crossref 5.4.0 schema files and local stubs
- `vendor/xmllint-wasm/`: browser-side XML/XSD validator runtime
