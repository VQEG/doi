const bibtexTypes = [
  "article",
  "book",
  "booklet",
  "conference",
  "inbook",
  "incollection",
  "inproceedings",
  "manual",
  "mastersthesis",
  "misc",
  "phdthesis",
  "proceedings",
  "techreport",
  "unpublished"
];

const typeLabels = {
  article: "Article",
  book: "Book",
  booklet: "Booklet",
  conference: "Conference",
  inbook: "In Book",
  incollection: "In Collection",
  inproceedings: "In Proceedings",
  manual: "Manual",
  mastersthesis: "Master Thesis",
  misc: "Misc",
  phdthesis: "PhD Thesis",
  proceedings: "Proceedings",
  techreport: "Tech Report",
  unpublished: "Unpublished"
};

const fieldMap = {
  title: "title",
  author: "author",
  year: "year",
  doi: "doi",
  url: "url",
  journal: "containerTitle",
  booktitle: "containerTitle",
  series: "containerTitle",
  publisher: "publisher",
  institution: "institution",
  school: "institution",
  organization: "institution",
  volume: "volume",
  number: "number",
  issue: "number",
  pages: "pages",
  month: "month",
  abstract: "abstract",
  file: "filePath",
  pdf: "filePath"
};

const form = document.querySelector("#publicationForm");
const entryTypeSelect = document.querySelector("#entryType");
const preview = document.querySelector("#preview");
const htmlOutput = document.querySelector("#htmlOutput");
const copyButton = document.querySelector("#copyButton");
const copyStatus = document.querySelector("#copyStatus");
const downloadButton = document.querySelector("#downloadButton");
const importBibtexButton = document.querySelector("#importBibtexButton");
const bibtexInput = document.querySelector("#bibtexInput");
const importStatus = document.querySelector("#importStatus");

function populateEntryTypes() {
  bibtexTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = `${type} - ${typeLabels[type] || type}`;
    entryTypeSelect.append(option);
  });
  entryTypeSelect.value = "article";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugify(value) {
  return String(value || "publication")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "publication";
}

function getFormData() {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}

function normalizeAuthors(authorField) {
  if (!authorField) {
    return "";
  }

  return authorField
    .split(/\s+and\s+/i)
    .map((author) => author.trim())
    .filter(Boolean)
    .join(", ");
}

function buildCitationText(data) {
  const bits = [];
  const authors = normalizeAuthors(data.author);
  const title = data.title?.trim();
  const container = data.containerTitle?.trim();
  const publisher = data.publisher?.trim();
  const institution = data.institution?.trim();
  const monthYear = [data.month?.trim(), data.year?.trim()].filter(Boolean).join(" ");
  const volumeNumber = [data.volume?.trim(), data.number?.trim()].filter(Boolean);

  if (authors) {
    bits.push(authors);
  }

  if (monthYear) {
    bits.push(`(${monthYear})`);
  } else if (data.year?.trim()) {
    bits.push(`(${data.year.trim()})`);
  }

  if (title) {
    bits.push(`<em>${escapeHtml(title)}</em>.`);
  }

  if (container) {
    bits.push(escapeHtml(container));
  }

  if (volumeNumber.length) {
    bits.push(escapeHtml(volumeNumber.join(", no. ")));
  }

  if (data.pages?.trim()) {
    bits.push(`pp. ${escapeHtml(data.pages.trim())}`);
  }

  if (publisher) {
    bits.push(escapeHtml(publisher));
  }

  if (institution) {
    bits.push(escapeHtml(institution));
  }

  return bits.join(" ");
}

function buildResourceLinks(data) {
  const links = [];
  const pdfPath = data.filePath?.trim();
  const url = data.url?.trim();
  const doi = data.doi?.trim();

  if (pdfPath) {
    links.push({
      href: pdfPath,
      label: "Open PDF"
    });
  }

  if (url) {
    links.push({
      href: url,
      label: "Publication URL"
    });
  }

  if (doi) {
    const href = doi.startsWith("http") ? doi : `https://doi.org/${doi}`;
    links.push({
      href,
      label: "DOI"
    });
  }

  return links;
}

function buildPreviewMarkup(data) {
  const hasCoreContent = data.title?.trim() || data.author?.trim() || data.doi?.trim();
  if (!hasCoreContent) {
    return `<p class="empty-preview">Enter some details to generate the bibliographic record.</p>`;
  }

  const citation = buildCitationText(data);
  const resourceLinks = buildResourceLinks(data)
    .map(
      (link) =>
        `<a class="resource-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(link.label)}</a>`
    )
    .join("");

  const typeText = typeLabels[data.entryType] || data.entryType;
  const abstractMarkup = data.abstract?.trim()
    ? `
      <section class="abstract-box">
        <h4>Abstract</h4>
        <p>${escapeHtml(data.abstract.trim()).replaceAll("\n", "<br />")}</p>
      </section>
    `
    : "";

  const doiLine = data.doi?.trim()
    ? `<p class="landing-meta"><strong>DOI:</strong> ${escapeHtml(data.doi.trim())}</p>`
    : "";

  const keyLine = data.citationKey?.trim()
    ? `<p class="landing-meta"><strong>BibTeX key:</strong> ${escapeHtml(data.citationKey.trim())}</p>`
    : "";

  return `
    <article class="landing-card">
      <p class="eyebrow">${escapeHtml(typeText)}</p>
      <h3>${escapeHtml(data.title?.trim() || "Untitled publication")}</h3>
      <p class="landing-meta">${escapeHtml(normalizeAuthors(data.author) || "Author information pending")}</p>
      <p class="citation-line">${citation || "Citation details pending."}</p>
      ${doiLine}
      ${keyLine}
      ${resourceLinks ? `<div class="resource-row">${resourceLinks}</div>` : ""}
      ${abstractMarkup}
    </article>
  `;
}

function buildEmbeddedStyles() {
  return `<style>
.vqeg-doi-card{max-width:760px;margin:0 auto;padding:0;color:#1d2730;font-family:Georgia,"Times New Roman",Times,serif}
.vqeg-doi-eyebrow{margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#1f5d8e}
.vqeg-doi-card h1{margin:0 0 14px;font-size:34px;line-height:1.2;color:#163e5b}
.vqeg-doi-meta{margin:0 0 12px;color:#566572}
.vqeg-doi-citation{margin:0 0 18px;line-height:1.7}
.vqeg-doi-links{display:flex;flex-wrap:wrap;gap:10px 14px;margin:18px 0}
.vqeg-doi-links a{display:inline-block;padding:9px 14px;border:1px solid #1f5d8e;color:#1f5d8e;text-decoration:none}
.vqeg-doi-links a:hover{background:#eaf3f9}
.vqeg-doi-abstract{margin-top:22px;padding-top:18px;border-top:1px solid #c6d6e2}
.vqeg-doi-abstract h2{margin:0 0 10px;font-size:18px;color:#163e5b}
</style>`;
}

function buildStaticBlockHtml(data) {
  const citation = buildCitationText(data);
  const typeText = typeLabels[data.entryType] || data.entryType;
  const authors = normalizeAuthors(data.author) || "Author information pending";
  const links = buildResourceLinks(data)
    .map(
      (link) =>
        `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(link.label)}</a>`
    )
    .join("");
  const abstractMarkup = data.abstract?.trim()
    ? `<section class="vqeg-doi-abstract"><h2>Abstract</h2><p>${escapeHtml(data.abstract.trim()).replaceAll("\n", "<br />")}</p></section>`
    : "";
  const doiLine = data.doi?.trim()
    ? `<p class="vqeg-doi-meta"><strong>DOI:</strong> ${escapeHtml(data.doi.trim())}</p>`
    : "";
  const keyLine = data.citationKey?.trim()
    ? `<p class="vqeg-doi-meta"><strong>BibTeX key:</strong> ${escapeHtml(data.citationKey.trim())}</p>`
    : "";

  return `${buildEmbeddedStyles()}
<article class="vqeg-doi-card">
  <p class="vqeg-doi-eyebrow">${escapeHtml(typeText)}</p>
  <h1>${escapeHtml(data.title?.trim() || "Untitled publication")}</h1>
  <p class="vqeg-doi-meta">${escapeHtml(authors)}</p>
  <p class="vqeg-doi-citation">${citation || "Citation details pending."}</p>
  ${doiLine}
  ${keyLine}
  ${links ? `<div class="vqeg-doi-links">${links}</div>` : ""}
  ${abstractMarkup}
</article>`;
}

function buildFullHtmlDocument(data) {
  const title = escapeHtml(data.title?.trim() || "VQEG Publication");
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
${buildStaticBlockHtml(data)
  .split("\n")
  .map((line) => `    ${line}`)
  .join("\n")}
  </body>
</html>`;
}

function updateOutput() {
  const data = getFormData();
  preview.innerHTML = buildPreviewMarkup(data);
  htmlOutput.value = buildStaticBlockHtml(data);
}

function setFieldValue(fieldId, value) {
  const field = document.querySelector(`#${fieldId}`);
  if (!field || value === undefined || value === null) {
    return;
  }

  field.value = value;
}

function readBraceValue(input, startIndex) {
  let depth = 0;
  let cursor = startIndex;
  let value = "";

  while (cursor < input.length) {
    const char = input[cursor];
    if (char === "{") {
      depth += 1;
      if (depth > 1) {
        value += char;
      }
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return { value, nextIndex: cursor + 1 };
      }
      value += char;
    } else {
      value += char;
    }
    cursor += 1;
  }

  return { value: value.trim(), nextIndex: cursor };
}

function readQuotedValue(input, startIndex) {
  let cursor = startIndex + 1;
  let value = "";

  while (cursor < input.length) {
    const char = input[cursor];
    if (char === '"' && input[cursor - 1] !== "\\") {
      return { value, nextIndex: cursor + 1 };
    }
    value += char;
    cursor += 1;
  }

  return { value: value.trim(), nextIndex: cursor };
}

function parseBibtexEntry(input) {
  const normalizedInput = input.trim();
  const entryMatch = normalizedInput.match(/^@([a-zA-Z]+)\s*[{(]\s*([^,]+)\s*,/);

  if (!entryMatch) {
    throw new Error("No valid BibTeX entry was found.");
  }

  const entryType = entryMatch[1].toLowerCase();
  const citationKey = entryMatch[2].trim();
  let cursor = entryMatch[0].length;
  const fields = {};

  while (cursor < normalizedInput.length) {
    while (cursor < normalizedInput.length && /[\s,]/.test(normalizedInput[cursor])) {
      cursor += 1;
    }

    if (cursor >= normalizedInput.length || normalizedInput[cursor] === "}" || normalizedInput[cursor] === ")") {
      break;
    }

    const keyMatch = normalizedInput.slice(cursor).match(/^([a-zA-Z][a-zA-Z0-9_-]*)\s*=/);
    if (!keyMatch) {
      cursor += 1;
      continue;
    }

    const fieldName = keyMatch[1].toLowerCase();
    cursor += keyMatch[0].length;

    while (cursor < normalizedInput.length && /\s/.test(normalizedInput[cursor])) {
      cursor += 1;
    }

    let parsedValue;
    if (normalizedInput[cursor] === "{") {
      parsedValue = readBraceValue(normalizedInput, cursor);
    } else if (normalizedInput[cursor] === '"') {
      parsedValue = readQuotedValue(normalizedInput, cursor);
    } else {
      const remainder = normalizedInput.slice(cursor);
      const rawValueMatch = remainder.match(/^([^,\n}]+)/);
      const rawValue = rawValueMatch ? rawValueMatch[1].trim() : "";
      parsedValue = {
        value: rawValue,
        nextIndex: cursor + rawValue.length
      };
    }

    fields[fieldName] = parsedValue.value.trim();
    cursor = parsedValue.nextIndex;
  }

  return { entryType, citationKey, fields };
}

function applyBibtexToForm(parsedEntry) {
  setFieldValue("entryType", bibtexTypes.includes(parsedEntry.entryType) ? parsedEntry.entryType : "misc");
  setFieldValue("citationKey", parsedEntry.citationKey);

  Object.entries(parsedEntry.fields).forEach(([bibtexField, value]) => {
    const fieldId = fieldMap[bibtexField];
    if (fieldId) {
      setFieldValue(fieldId, value);
    }
  });
}

async function copyHtml() {
  try {
    await navigator.clipboard.writeText(htmlOutput.value);
    copyStatus.textContent = "HTML copied to the clipboard.";
  } catch (error) {
    htmlOutput.select();
    document.execCommand("copy");
    copyStatus.textContent = "HTML copied using compatibility mode.";
  }
}

function downloadHtmlFile() {
  const data = getFormData();
  const htmlDocument = buildFullHtmlDocument(data);
  const blob = new Blob([htmlDocument], { type: "text/html;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${slugify(data.title || data.citationKey || "vqeg-publication")}.html`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function importBibtex() {
  try {
    const parsedEntry = parseBibtexEntry(bibtexInput.value);
    applyBibtexToForm(parsedEntry);
    importStatus.textContent = "BibTeX entry imported successfully.";
    updateOutput();
  } catch (error) {
    importStatus.textContent = error.message;
  }
}

populateEntryTypes();
updateOutput();

form.addEventListener("input", updateOutput);
importBibtexButton.addEventListener("click", importBibtex);
copyButton.addEventListener("click", copyHtml);
downloadButton.addEventListener("click", downloadHtmlFile);
