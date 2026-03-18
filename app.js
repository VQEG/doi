const fieldDefinitions = [
  {
    name: "author",
    label: "Author",
    placeholder: "Surname, Name and Second Author, Name"
  },
  {
    name: "editor",
    label: "Editor",
    placeholder: "Surname, Name and Second Editor, Name"
  },
  {
    name: "title",
    label: "Title",
    placeholder: "Publication title",
    span: 2
  },
  {
    name: "journal",
    label: "Journal",
    placeholder: "Journal title",
    span: 2
  },
  {
    name: "booktitle",
    label: "Booktitle / Proceedings",
    placeholder: "Conference proceedings or book title",
    span: 2
  },
  {
    name: "publisher",
    label: "Publisher",
    placeholder: "Publisher name"
  },
  {
    name: "institution",
    label: "Institution",
    placeholder: "Institution name"
  },
  {
    name: "school",
    label: "School",
    placeholder: "School or university name"
  },
  {
    name: "organization",
    label: "Organization",
    placeholder: "Sponsoring organization"
  },
  {
    name: "year",
    label: "Year",
    placeholder: "2026"
  },
  {
    name: "month",
    label: "Month",
    placeholder: "March"
  },
  {
    name: "volume",
    label: "Volume",
    placeholder: "12"
  },
  {
    name: "number",
    label: "Number / Report number",
    placeholder: "3 or TR-2026-001"
  },
  {
    name: "pages",
    label: "Pages",
    placeholder: "23--41"
  },
  {
    name: "chapter",
    label: "Chapter",
    placeholder: "4"
  },
  {
    name: "series",
    label: "Series",
    placeholder: "Lecture Notes in..."
  },
  {
    name: "edition",
    label: "Edition",
    placeholder: "2nd"
  },
  {
    name: "address",
    label: "Address",
    placeholder: "City, Country"
  },
  {
    name: "howpublished",
    label: "How published",
    placeholder: "Online preprint, website, internal memo"
  },
  {
    name: "type",
    label: "Type",
    placeholder: "Technical Report, Master's thesis, PhD thesis"
  },
  {
    name: "note",
    label: "Note",
    placeholder: "Additional note",
    span: 2
  },
  {
    name: "doi",
    label: "DOI",
    placeholder: "10.0000/example"
  },
  {
    name: "url",
    label: "Public URL",
    placeholder: "https://example.org/publication"
  },
  {
    name: "filePath",
    label: "PDF path",
    placeholder: "papers/my-document.pdf or /absolute/path/to/document.pdf",
    span: 2
  },
  {
    name: "abstract",
    label: "Abstract / Description",
    placeholder: "Optional descriptive text for the landing page",
    span: 2,
    multiline: true,
    rows: 5
  }
];

const bibtexTypes = {
  article: {
    label: "Article",
    required: ["author", "title", "journal", "year"],
    optional: ["volume", "number", "pages", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  book: {
    label: "Book",
    required: ["title", "publisher", "year"],
    requiredOneOf: [["author", "editor"]],
    optional: ["volume", "series", "address", "edition", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  booklet: {
    label: "Booklet",
    required: ["title"],
    optional: ["author", "howpublished", "address", "month", "year", "doi", "url", "filePath", "abstract", "note"]
  },
  conference: {
    label: "Conference",
    required: ["author", "title", "booktitle", "year"],
    optional: ["editor", "pages", "organization", "publisher", "address", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  inbook: {
    label: "In Book",
    required: ["title", "publisher", "year"],
    requiredOneOf: [["author", "editor"], ["chapter", "pages"]],
    optional: ["volume", "series", "type", "address", "edition", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  incollection: {
    label: "In Collection",
    required: ["author", "title", "booktitle", "publisher", "year"],
    optional: ["editor", "pages", "chapter", "volume", "series", "type", "address", "edition", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  inproceedings: {
    label: "In Proceedings",
    required: ["author", "title", "booktitle", "year"],
    optional: ["editor", "pages", "organization", "publisher", "address", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  manual: {
    label: "Manual",
    required: ["title"],
    optional: ["author", "organization", "address", "edition", "month", "year", "doi", "url", "filePath", "abstract", "note"]
  },
  mastersthesis: {
    label: "Master's Thesis",
    required: ["author", "title", "school", "year"],
    optional: ["type", "address", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  misc: {
    label: "Misc",
    required: [],
    optional: ["author", "title", "howpublished", "month", "year", "doi", "url", "filePath", "abstract", "note"]
  },
  phdthesis: {
    label: "PhD Thesis",
    required: ["author", "title", "school", "year"],
    optional: ["type", "address", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  proceedings: {
    label: "Proceedings",
    required: ["title", "year"],
    optional: ["editor", "publisher", "organization", "address", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  techreport: {
    label: "Tech Report",
    required: ["author", "title", "institution", "year"],
    optional: ["type", "number", "address", "month", "doi", "url", "filePath", "abstract", "note"]
  },
  unpublished: {
    label: "Unpublished",
    required: ["author", "title", "note"],
    optional: ["month", "year", "doi", "url", "filePath", "abstract"]
  }
};

const bibtexInputMap = {
  author: "author",
  editor: "editor",
  title: "title",
  journal: "journal",
  booktitle: "booktitle",
  publisher: "publisher",
  institution: "institution",
  school: "school",
  organization: "organization",
  year: "year",
  month: "month",
  volume: "volume",
  number: "number",
  pages: "pages",
  chapter: "chapter",
  series: "series",
  edition: "edition",
  address: "address",
  howpublished: "howpublished",
  type: "type",
  note: "note",
  doi: "doi",
  url: "url",
  abstract: "abstract",
  file: "filePath",
  pdf: "filePath"
};

const globalMandatoryFields = ["doi", "filePath"];

const preview = document.querySelector("#preview");
const form = document.querySelector("#publicationForm");
const entryTypeSelect = document.querySelector("#entryType");
const citationKeyInput = document.querySelector("#citationKey");
const dynamicFields = document.querySelector("#dynamicFields");
const typeRequirements = document.querySelector("#typeRequirements");
const showOptionalToggle = document.querySelector("#showOptional");
const htmlOutput = document.querySelector("#htmlOutput");
const copyButton = document.querySelector("#copyButton");
const copyStatus = document.querySelector("#copyStatus");
const downloadButton = document.querySelector("#downloadButton");
const importBibtexButton = document.querySelector("#importBibtexButton");
const bibtexInput = document.querySelector("#bibtexInput");
const importStatus = document.querySelector("#importStatus");

const state = {
  entryType: "article",
  citationKey: "",
  showOptional: false
};

fieldDefinitions.forEach((field) => {
  state[field.name] = "";
});

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

function normalizeWhitespace(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function hasBalancedOuterBraces(value) {
  if (!value.startsWith("{") || !value.endsWith("}")) {
    return false;
  }

  let depth = 0;
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (char === "{" && value[index - 1] !== "\\") {
      depth += 1;
    } else if (char === "}" && value[index - 1] !== "\\") {
      depth -= 1;
      if (depth === 0 && index < value.length - 1) {
        return false;
      }
    }
  }

  return depth === 0;
}

function stripOuterBraces(value) {
  let result = normalizeWhitespace(value);
  while (hasBalancedOuterBraces(result)) {
    result = result.slice(1, -1).trim();
  }
  return result;
}

function decodeLatexAccents(value) {
  const replacements = [
    [/\{\\'a\}|\\'a/g, "á"],
    [/\{\\'e\}|\\'e/g, "é"],
    [/\{\\'i\}|\\'i/g, "í"],
    [/\{\\'o\}|\\'o/g, "ó"],
    [/\{\\'u\}|\\'u/g, "ú"],
    [/\{\\"a\}|\\"a/g, "ä"],
    [/\{\\"e\}|\\"e/g, "ë"],
    [/\{\\"i\}|\\"i/g, "ï"],
    [/\{\\"o\}|\\"o/g, "ö"],
    [/\{\\"u\}|\\"u/g, "ü"],
    [/\{\\~n\}|\\~n/g, "ñ"],
    [/\{\\c c\}|\\c\{c\}|\\cc/g, "ç"],
    [/\{\\ss\}|\\ss/g, "ß"],
    [/\{\\o\}|\\o/g, "ø"],
    [/\{\\aa\}|\\aa/g, "å"],
    [/\{\\&\}|\\&/g, "&"],
    [/\{\\%\}|\\%/g, "%"],
    [/\{\\_\}|\\_/g, "_"],
    [/\{\\#\}|\\#/g, "#"],
    [/\{\\\$\}|\\\$/g, "$"],
    [/~/g, " "]
  ];

  return replacements.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    value
  );
}

function sanitizeInputValue(value) {
  return decodeLatexAccents(stripOuterBraces(value))
    .replace(/[{}]/g, "")
    .replace(/\\([&%_#$])/g, "$1")
    .replace(/\s+--\s+/g, "--")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeMultilineInputValue(value) {
  return decodeLatexAccents(stripOuterBraces(value))
    .replace(/[{}]/g, "")
    .replace(/\\([&%_#$])/g, "$1")
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function sanitizeBibtexOutputValue(value) {
  return normalizeWhitespace(value)
    .replace(/\\/g, "\\\\")
    .replace(/([&_#$%])/g, "\\$1")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}");
}

function createEmptyStateSnapshot() {
  const snapshot = {
    entryType: state.entryType,
    citationKey: state.citationKey,
    showOptional: state.showOptional
  };

  fieldDefinitions.forEach((field) => {
    snapshot[field.name] = state[field.name];
  });

  return snapshot;
}

function getSchema(entryType = state.entryType) {
  return bibtexTypes[entryType] || bibtexTypes.article;
}

function getRequiredFields(schema) {
  return [
    ...schema.required,
    ...globalMandatoryFields
  ].filter((fieldName, index, values) => values.indexOf(fieldName) === index);
}

function populateEntryTypes() {
  Object.entries(bibtexTypes).forEach(([type, schema]) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = `${type} - ${schema.label}`;
    entryTypeSelect.append(option);
  });

  entryTypeSelect.value = state.entryType;
}

function renderRequirementsText(schema) {
  const requiredFields = getRequiredFields(schema);
  const requiredText = requiredFields.length
    ? `Required fields: ${requiredFields.join(", ")}.`
    : "This type has no universally required BibTeX fields.";
  const alternativeText = (schema.requiredOneOf || []).length
    ? ` One of each group is also required: ${(schema.requiredOneOf || [])
        .map((group) => group.join(" / "))
        .join("; ")}.`
    : "";

  typeRequirements.textContent = `${requiredText}${alternativeText}`;
}

function buildFieldMarkup(field, schema) {
  const isRequired = getRequiredFields(schema).includes(field.name);
  const isAlternativeRequired = (schema.requiredOneOf || []).some((group) =>
    group.includes(field.name)
  );
  const badgeText = isRequired
    ? "Required"
    : isAlternativeRequired
      ? "One of required group"
      : "Optional";
  const value = escapeHtml(state[field.name] || "");
  const fieldClass = `${field.span === 2 ? "field-span-2" : ""} field-card ${
    isRequired || isAlternativeRequired ? "field-required" : "field-optional"
  }`.trim();
  const helpText = isAlternativeRequired
    ? "At least one field in this group must be filled for the selected BibTeX type."
    : isRequired
      ? "This field is required for the selected BibTeX type."
      : "This field is optional and only appears in the output when enabled.";
  const control = field.multiline
    ? `<textarea id="${field.name}" name="${field.name}" rows="${field.rows || 4}" data-field="${field.name}" ${isRequired ? "required" : ""} placeholder="${escapeHtml(field.placeholder || "")}">${value}</textarea>`
    : `<input id="${field.name}" name="${field.name}" type="text" data-field="${field.name}" ${isRequired ? "required" : ""} value="${value}" placeholder="${escapeHtml(field.placeholder || "")}" />`;

  return `
    <label class="${fieldClass}">
      <span class="field-label-row">
        <span>${escapeHtml(field.label)}</span>
        <span class="field-badge">${badgeText}</span>
      </span>
      ${control}
      <p class="field-help">${escapeHtml(helpText)}</p>
    </label>
  `;
}

function renderDynamicFields() {
  const schema = getSchema();
  const visibleFields = [];
  const allRelevantFields = new Set([
    ...getRequiredFields(schema),
    ...(schema.requiredOneOf || []).flat(),
    ...(state.showOptional ? schema.optional : [])
  ]);

  fieldDefinitions.forEach((field) => {
    if (allRelevantFields.has(field.name)) {
      visibleFields.push(buildFieldMarkup(field, schema));
    }
  });

  dynamicFields.innerHTML = visibleFields.join("");
  renderRequirementsText(schema);

  dynamicFields.querySelectorAll("[data-field]").forEach((element) => {
    element.addEventListener("input", (event) => {
      const { field } = event.target.dataset;
      state[field] = event.target.value;
      updateOutputs();
    });
  });
}

function getEnabledFieldNames() {
  const schema = getSchema();
  return [
    ...getRequiredFields(schema),
    ...(schema.requiredOneOf || []).flat(),
    ...(state.showOptional ? schema.optional : [])
  ].filter((fieldName, index, values) => values.indexOf(fieldName) === index);
}

function getEnabledData() {
  const data = {
    entryType: state.entryType,
    citationKey: sanitizeInputValue(state.citationKey)
  };

  getEnabledFieldNames().forEach((fieldName) => {
    const rawValue = state[fieldName];
    const sanitizedValue = fieldName === "abstract"
      ? sanitizeMultilineInputValue(rawValue)
      : sanitizeInputValue(rawValue);

    if (sanitizedValue) {
      data[fieldName] = sanitizedValue;
    }
  });

  return data;
}

function getMissingRequirements(data) {
  const schema = getSchema(data.entryType);
  const missing = [];

  getRequiredFields(schema).forEach((fieldName) => {
    if (!data[fieldName]) {
      missing.push(fieldName);
    }
  });

  (schema.requiredOneOf || []).forEach((group) => {
    const hasOne = group.some((fieldName) => data[fieldName]);
    if (!hasOne) {
      missing.push(group.join(" / "));
    }
  });

  return missing;
}

function splitAuthors(authorField) {
  return String(authorField || "")
    .split(/\s+and\s+/i)
    .map((author) => author.trim())
    .filter(Boolean);
}

function normalizeNameForIeee(author) {
  if (!author) {
    return "";
  }

  if (author.includes(",")) {
    const [family, given] = author.split(",").map((part) => part.trim());
    const initials = given
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => `${part[0].toUpperCase()}.`)
      .join(" ");
    return `${initials} ${family}`.trim();
  }

  const parts = author.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0];
  }

  const family = parts.pop();
  const initials = parts.map((part) => `${part[0].toUpperCase()}.`).join(" ");
  return `${initials} ${family}`.trim();
}

function formatAuthorListForDisplay(authorField) {
  return formatAuthorListForIeee(authorField);
}

function formatAuthorListForIeee(authorField) {
  const authors = splitAuthors(authorField).map(normalizeNameForIeee);
  if (authors.length <= 1) {
    return authors[0] || "";
  }
  if (authors.length === 2) {
    return `${authors[0]} and ${authors[1]}`;
  }
  return `${authors.slice(0, -1).join(", ")}, and ${authors[authors.length - 1]}`;
}

function buildIeeeCitationText(data) {
  const segments = [];
  const authors = formatAuthorListForIeee(data.author || data.editor || "");
  const title = data.title ? `"${data.title}"` : "";

  if (authors) {
    segments.push(authors);
  }

  if (title) {
    segments.push(title);
  }

  if (data.journal) {
    segments.push(data.journal);
  } else if (data.booktitle) {
    segments.push(`in ${data.booktitle}`);
  }

  if (data.publisher) {
    segments.push(data.publisher);
  }

  if (data.institution) {
    segments.push(data.institution);
  }

  if (data.school) {
    segments.push(data.school);
  }

  if (data.organization) {
    segments.push(data.organization);
  }

  if (data.volume) {
    segments.push(`vol. ${data.volume}`);
  }

  if (data.number) {
    segments.push(`no. ${data.number}`);
  }

  if (data.pages) {
    segments.push(`pp. ${data.pages}`);
  }

  if (data.month && data.year) {
    segments.push(`${data.month} ${data.year}`);
  } else if (data.year) {
    segments.push(data.year);
  }

  if (data.doi) {
    segments.push(`doi: ${data.doi}`);
  }

  return segments.filter(Boolean).join(", ") + (segments.length ? "." : "");
}

function buildIeeeCitationMarkup(data) {
  const citationText = buildIeeeCitationText(data);
  let citationMarkup = escapeHtml(citationText);

  if (data.journal) {
    citationMarkup = citationMarkup.replace(
      escapeHtml(data.journal),
      `<i>${escapeHtml(data.journal)}</i>`
    );
  } else if (data.booktitle) {
    citationMarkup = citationMarkup.replace(
      `in ${escapeHtml(data.booktitle)}`,
      `in <i>${escapeHtml(data.booktitle)}</i>`
    );
  }

  return citationMarkup;
}

function buildMetadataRows(data) {
  const rows = [
    ["Type", getSchema(data.entryType).label],
    ["Title", data.title],
    ["Author", formatAuthorListForDisplay(data.author)],
    ["Editor", formatAuthorListForDisplay(data.editor)],
    ["Journal", data.journal],
    ["Booktitle", data.booktitle],
    ["Publisher", data.publisher],
    ["Institution", data.institution],
    ["School", data.school],
    ["Organization", data.organization],
    ["Year", data.year],
    ["Month", data.month],
    ["Volume", data.volume],
    ["Number", data.number],
    ["Pages", data.pages],
    ["Chapter", data.chapter],
    ["Series", data.series],
    ["Edition", data.edition],
    ["Address", data.address],
    ["How published", data.howpublished],
    ["Type detail", data.type],
    ["Note", data.note],
    ["DOI", data.doi],
    ["URL", data.url]
  ];

  return rows.filter(([, value]) => value);
}

function buildMetadataTableMarkup(data) {
  const rows = buildMetadataRows(data)
    .map(([label, value]) => {
      let renderedValue = escapeHtml(value);

      if (label === "DOI") {
        const href = value.startsWith("http") ? value : `https://doi.org/${value}`;
        renderedValue = `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(value)}</a>`;
      } else if (label === "URL" || label === "PDF") {
        renderedValue = `<a href="${escapeHtml(value)}" target="_blank" rel="noreferrer noopener">${escapeHtml(value)}</a>`;
      }

      return `<tr><th scope="row">${escapeHtml(label)}</th><td>${renderedValue}</td></tr>`;
    })
    .join("");

  return rows
    ? `<table class="metadata-table"><tbody>${rows}</tbody></table>`
    : "";
}

function buildResourceLinks(data) {
  const links = [];

  if (data.filePath) {
    links.push({
      href: data.filePath,
      label: "Open PDF"
    });
  }

  if (data.url) {
    links.push({
      href: data.url,
      label: "Open page"
    });
  }

  if (data.doi) {
    links.push({
      href: data.doi.startsWith("http") ? data.doi : `https://doi.org/${data.doi}`,
      label: "DOI"
    });
  }

  return links;
}

function buildCardSupplementMarkup(data, classNames = {}) {
  const ieeeCitationText = buildIeeeCitationText(data);
  const bibtexText = buildBibtexOutput(data);
  const citationSectionClass = classNames.citationSection || "supplement-box";
  const bibtexSectionClass = classNames.bibtexSection || "supplement-box";
  const preClass = classNames.pre || "code-block";

  return `
    <section class="${citationSectionClass}">
      <h4>IEEE citation</h4>
      <p class="ieee-line">${escapeHtml(ieeeCitationText || "IEEE citation pending.")}</p>
    </section>
    <section class="${bibtexSectionClass}">
      <h4>BibTeX</h4>
      <pre class="${preClass}">${escapeHtml(bibtexText)}</pre>
    </section>
  `;
}

function buildPreviewMarkup(data) {
  const hasContent = Object.keys(data).some((key) => !["entryType", "citationKey"].includes(key));
  if (!hasContent) {
    return `<p class="empty-preview">Enter some details to generate the bibliographic record.</p>`;
  }

  const missing = getMissingRequirements(data);
  const resourceLinks = buildResourceLinks(data)
    .map(
      (link) =>
        `<a class="resource-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(link.label)}</a>`
    )
    .join("");
  const abstractMarkup = data.abstract
    ? `
      <section class="abstract-box">
        <h4>Abstract</h4>
        <p>${escapeHtml(data.abstract).replaceAll("\n", "<br />")}</p>
      </section>
    `
    : "";
  const warning = missing.length
    ? `<p class="missing-note">Missing BibTeX-required fields for ${escapeHtml(getSchema(data.entryType).label)}: ${escapeHtml(missing.join(", "))}</p>`
    : "";

  return `
    <article class="landing-card">
      <p class="eyebrow">${escapeHtml(getSchema(data.entryType).label)}</p>
      <h3>${escapeHtml(data.title || "Untitled publication")}</h3>
      <p class="landing-meta">${escapeHtml(formatAuthorListForDisplay(data.author) || formatAuthorListForDisplay(data.editor) || "Author information pending")}</p>
      ${warning}
      ${buildMetadataTableMarkup(data)}
      ${resourceLinks ? `<div class="resource-row">${resourceLinks}</div>` : ""}
      ${abstractMarkup}
      ${buildCardSupplementMarkup(data)}
    </article>
  `;
}

function buildEmbeddedStyles() {
  return `<style>
.vqeg-doi-card{max-width:780px;margin:0 auto;padding:0;color:#1d2730;font-family:Georgia,"Times New Roman",Times,serif}
.vqeg-doi-eyebrow{margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#1f5d8e}
.vqeg-doi-card h1{margin:0 0 14px;font-size:34px;line-height:1.18;color:#163e5b}
.vqeg-doi-meta{margin:0 0 16px;color:#566572;line-height:1.6}
.vqeg-doi-table{width:100%;margin:18px 0 20px;border-collapse:collapse;border-top:1px solid #c6d6e2}
.vqeg-doi-table th,.vqeg-doi-table td{padding:11px 0;border-bottom:1px solid #c6d6e2;vertical-align:top}
.vqeg-doi-table th{width:180px;padding-right:18px;text-align:left;color:#163e5b;font-weight:700}
.vqeg-doi-citation{margin:0 0 18px;line-height:1.7}
.vqeg-doi-links{display:flex;flex-wrap:wrap;gap:10px 14px;margin:18px 0}
.vqeg-doi-links a{display:inline-block;padding:9px 14px;border:1px solid #1f5d8e;color:#1f5d8e;text-decoration:none}
.vqeg-doi-links a:hover{background:#eaf3f9}
.vqeg-doi-warning{margin:0 0 16px;padding:12px 14px;border:1px solid #e2c27b;background:#fff9ea;color:#6b5220}
.vqeg-doi-abstract{margin-top:22px;padding-top:18px;border-top:1px solid #c6d6e2}
.vqeg-doi-abstract h2{margin:0 0 10px;font-size:18px;color:#163e5b}
.vqeg-doi-supplement{margin-top:20px;padding-top:16px;border-top:1px solid #c6d6e2}
.vqeg-doi-supplement h4{margin:0 0 10px;font-size:18px;color:#163e5b}
.vqeg-doi-code{margin:0;padding:14px;border:1px solid #c6d6e2;background:#f9fbfc;white-space:pre-wrap;word-break:break-word;font:14px/1.45 "Courier New",Courier,monospace}
</style>`;
}

function buildStaticBlockHtml(data) {
  const resourceLinks = buildResourceLinks(data)
    .map(
      (link) =>
        `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(link.label)}</a>`
    )
    .join("");
  const abstractMarkup = data.abstract
    ? `<section class="vqeg-doi-abstract"><h2>Abstract</h2><p>${escapeHtml(data.abstract).replaceAll("\n", "<br />")}</p></section>`
    : "";
  const warning = getMissingRequirements(data).length
    ? `<p class="vqeg-doi-warning">Missing BibTeX-required fields: ${escapeHtml(getMissingRequirements(data).join(", "))}</p>`
    : "";
  const metadataRows = buildMetadataRows(data)
    .map(([label, value]) => {
      let renderedValue = escapeHtml(value);

      if (label === "DOI") {
        const href = value.startsWith("http") ? value : `https://doi.org/${value}`;
        renderedValue = `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(value)}</a>`;
      } else if (label === "URL" || label === "PDF") {
        renderedValue = `<a href="${escapeHtml(value)}" target="_blank" rel="noreferrer noopener">${escapeHtml(value)}</a>`;
      }

      return `<tr><th scope="row">${escapeHtml(label)}</th><td>${renderedValue}</td></tr>`;
    })
    .join("");

  return `${buildEmbeddedStyles()}
<article class="vqeg-doi-card">
  <p class="vqeg-doi-eyebrow">${escapeHtml(getSchema(data.entryType).label)}</p>
  <h1>${escapeHtml(data.title || "Untitled publication")}</h1>
  <p class="vqeg-doi-meta">${escapeHtml(formatAuthorListForDisplay(data.author) || formatAuthorListForDisplay(data.editor) || "Author information pending")}</p>
  ${warning}
  ${metadataRows ? `<table class="vqeg-doi-table"><tbody>${metadataRows}</tbody></table>` : ""}
  ${resourceLinks ? `<div class="vqeg-doi-links">${resourceLinks}</div>` : ""}
  ${abstractMarkup}
  ${buildCardSupplementMarkup(data, {
    citationSection: "vqeg-doi-supplement",
    bibtexSection: "vqeg-doi-supplement",
    pre: "vqeg-doi-code"
  })}
</article>`;
}

function buildFullHtmlDocument(data) {
  const title = escapeHtml(data.title || "VQEG Publication");
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

function formatBibtexField(fieldName, value) {
  const sanitized = sanitizeBibtexOutputValue(value);
  const wrappedValue = fieldName === "title" ? `{{${sanitized}}}` : `{${sanitized}}`;
  return `  ${fieldName} = ${wrappedValue}`;
}

function buildBibtexOutput(data) {
  const fields = getEnabledFieldNames()
    .filter((fieldName) => !["filePath", "abstract"].includes(fieldName))
    .filter((fieldName) => data[fieldName])
    .map((fieldName) => formatBibtexField(fieldName, data[fieldName]));
  const citationKey = data.citationKey || slugify(data.title || "publication");

  return `@${data.entryType || "misc"}{${citationKey},
${fields.join(",\n")}
}`;
}

function updateOutputs() {
  const data = getEnabledData();
  preview.innerHTML = buildPreviewMarkup(data);
  htmlOutput.value = buildStaticBlockHtml(data);
}

function readBraceValue(input, startIndex) {
  let depth = 0;
  let cursor = startIndex;
  let value = "";

  while (cursor < input.length) {
    const char = input[cursor];
    if (char === "{" && input[cursor - 1] !== "\\") {
      depth += 1;
      if (depth > 1) {
        value += char;
      }
    } else if (char === "}" && input[cursor - 1] !== "\\") {
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
  const normalizedInput = normalizeWhitespace(input);
  const entryMatch = normalizedInput.match(/^@([a-zA-Z]+)\s*[{(]\s*([^,]+)\s*,/);

  if (!entryMatch) {
    throw new Error("No valid BibTeX entry was found.");
  }

  const entryType = entryMatch[1].toLowerCase();
  const citationKey = sanitizeInputValue(entryMatch[2]);
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

function importBibtex() {
  try {
    const parsedEntry = parseBibtexEntry(bibtexInput.value);
    const snapshot = createEmptyStateSnapshot();

    snapshot.entryType = bibtexTypes[parsedEntry.entryType] ? parsedEntry.entryType : "misc";
    snapshot.citationKey = parsedEntry.citationKey;

    fieldDefinitions.forEach((field) => {
      snapshot[field.name] = "";
    });

    Object.entries(parsedEntry.fields).forEach(([bibtexField, rawValue]) => {
      const internalField = bibtexInputMap[bibtexField];
      if (!internalField) {
        return;
      }

      snapshot[internalField] = internalField === "abstract"
        ? sanitizeMultilineInputValue(rawValue)
        : sanitizeInputValue(rawValue);
    });

    snapshot.showOptional = true;

    Object.assign(state, snapshot);
    entryTypeSelect.value = state.entryType;
    citationKeyInput.value = state.citationKey;
    showOptionalToggle.checked = state.showOptional;
    renderDynamicFields();
    updateOutputs();
    importStatus.textContent = "BibTeX entry imported successfully.";
  } catch (error) {
    importStatus.textContent = error.message;
  }
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
  const data = getEnabledData();
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

entryTypeSelect.addEventListener("change", (event) => {
  state.entryType = event.target.value;
  renderDynamicFields();
  updateOutputs();
});

citationKeyInput.addEventListener("input", (event) => {
  state.citationKey = event.target.value;
  updateOutputs();
});

showOptionalToggle.addEventListener("change", (event) => {
  state.showOptional = event.target.checked;
  renderDynamicFields();
  updateOutputs();
});

importBibtexButton.addEventListener("click", importBibtex);
copyButton.addEventListener("click", copyHtml);
downloadButton.addEventListener("click", downloadHtmlFile);

populateEntryTypes();
showOptionalToggle.checked = state.showOptional;
renderDynamicFields();
updateOutputs();
