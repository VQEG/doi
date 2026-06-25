# Google Scholar Indexing Notes

This document summarizes the Google Scholar indexing work for the VQEG DOI landing pages.

## Already Done

- DOI landing pages are generated as complete HTML documents, not standalone fragments.
- Generated landing pages include a standard `<head>` with:
  - `<title>`
  - UTF-8 charset
  - responsive viewport
  - `robots` set to `index,follow`
  - a page description
  - canonical URL when a Crossref landing-page URL is provided
- Generated landing pages include Google Scholar / Highwire metadata:
  - `citation_title`
  - one `citation_author` tag per author
  - `citation_publication_date`
  - `citation_doi`
  - `citation_language`
  - journal, conference, page, dissertation, or technical-report fields when available
- Technical reports emit:
  - `citation_technical_report_institution`
  - `citation_technical_report_number`
- The visible page content now places the main citation and abstract near the top of the landing page.
- The existing `10.66537/OLKA7578/` landing page has been updated to match the generated Scholar-friendly structure.
- The generator copy/download output now produces complete landing-page HTML with Scholar metadata.

## Still To Do Or Verify

- Create a public publications index page outside the DOI generator interface.
  - This page should list all published DOI landing pages.
  - It should use plain HTML links to each landing page.
  - It should be linked from a stable public location so crawlers can discover all DOI pages.
- For every new DOI page, add it to that publications index after publication.
- Verify that each DOI landing page is reachable with HTTP `200`.
- Verify that each DOI landing page has exactly one stable URL and a matching canonical URL.
- Verify that each Crossref DOI resource URL points to the public landing page, not directly to the PDF.
- Decide whether PDFs should be hosted next to the landing pages.
  - Google Scholar recommends `citation_pdf_url` only when the PDF is in the same directory tree as the landing-page HTML.
  - The current generator only emits `citation_pdf_url` when the PDF URL resolves under the same landing-page directory.
- If PDFs are meant to be indexed as full text, verify that each PDF:
  - is publicly accessible without login or click-through barriers
  - is text-searchable
  - is under 5 MB
  - has the title, authors, abstract, and references in machine-readable text
  - has a clearly labeled references section
- Check that landing pages do not rely on JavaScript to reveal title, authors, abstract, or links.
- Keep one article, report, or paper per landing page.
- Avoid placing several full publication records on one DOI landing page.
- Avoid changing landing-page URLs after DOI registration and publication.
- After deployment, test the live HTML source rather than only the local files.
- Expect Scholar indexing to take time after publication; newly crawled pages may take days to months to appear.

## Suggested Publication Workflow

1. Generate the landing page HTML from the DOI builder.
2. Save it under the DOI path, for example `10.66537/ABCD1234/index.html`.
3. Register or update the DOI so the Crossref resource URL points to the landing page.
4. Publish the site.
5. Add the new landing page to the separate public publications index.
6. Verify the live URL, canonical URL, metadata tags, abstract visibility, and PDF accessibility.
