const publicationFieldDefinitions = [
  { name: "author", label: "Author", placeholder: "Surname, Name and Second Author, Name" },
  { name: "editor", label: "Editor", placeholder: "Surname, Name and Second Editor, Name" },
  { name: "title", label: "Title", placeholder: "Publication title", span: 2 },
  { name: "journal", label: "Journal", placeholder: "Journal title", span: 2 },
  { name: "booktitle", label: "Booktitle / Proceedings", placeholder: "Conference proceedings or book title", span: 2 },
  { name: "publisher", label: "Publisher", placeholder: "Publisher name" },
  { name: "institution", label: "Institution", placeholder: "Institution name" },
  { name: "school", label: "School", placeholder: "School or university name" },
  { name: "organization", label: "Organization", placeholder: "Sponsoring organization" },
  { name: "year", label: "Year", placeholder: "2026" },
  { name: "month", label: "Month", placeholder: "March or 03" },
  { name: "volume", label: "Volume", placeholder: "12" },
  { name: "number", label: "Number / Report number", placeholder: "3 or TR-2026-001" },
  { name: "pages", label: "Pages", placeholder: "23--41" },
  { name: "chapter", label: "Chapter", placeholder: "4" },
  { name: "series", label: "Series", placeholder: "Lecture Notes in..." },
  { name: "edition", label: "Edition", placeholder: "2nd" },
  { name: "address", label: "Address", placeholder: "City, Country" },
  { name: "howpublished", label: "How published", placeholder: "Online preprint, website, internal memo" },
  { name: "type", label: "Type", placeholder: "Technical Report, Master's thesis, PhD thesis" },
  { name: "note", label: "Note", placeholder: "Additional note", span: 2 },
  { name: "doi", label: "DOI", placeholder: "10.66537/ABCD1234" },
  { name: "url", label: "Public URL", placeholder: "https://example.org/publication" },
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

const crossrefFieldDefinitions = [
  {
    name: "crossrefResourceUrl",
    label: "Crossref landing page URL",
    placeholder: "https://example.org/doi-landing-page",
    span: 2
  },
  {
    name: "doiBatchId",
    label: "DOI batch ID",
    placeholder: "vqeg-20260409-120000",
    span: 2
  },
  {
    name: "timestamp",
    label: "Timestamp",
    placeholder: "20260409120000"
  },
  {
    name: "crossrefLanguage",
    label: "Language",
    placeholder: "en"
  },
  {
    name: "depositorName",
    label: "Depositor name",
    placeholder: "Your depositor name"
  },
  {
    name: "depositorEmail",
    label: "Depositor email",
    placeholder: "depositor@example.org",
    inputType: "email"
  },
  {
    name: "registrant",
    label: "Registrant",
    placeholder: "Video Quality Experts Group (VQEG)",
    span: 2
  },
  {
    name: "journalIssn",
    label: "Journal ISSN",
    placeholder: "1234-5678"
  },
  {
    name: "journalTitleDoi",
    label: "Journal title DOI",
    placeholder: "10.66537/JKLM1234",
    span: 2
  },
  {
    name: "journalTitleResourceUrl",
    label: "Journal title resource URL",
    placeholder: "https://example.org/journal-home",
    span: 2
  },
  {
    name: "isbn",
    label: "ISBN",
    placeholder: "9781234567897"
  },
  {
    name: "noisbn",
    label: "No ISBN",
    checkbox: true
  },
  {
    name: "conferenceName",
    label: "Conference name",
    placeholder: "Full conference name",
    span: 2
  },
  {
    name: "conferenceAcronym",
    label: "Conference acronym",
    placeholder: "SIGCOMM"
  },
  {
    name: "conferenceNumber",
    label: "Conference number",
    placeholder: "14"
  },
  {
    name: "conferenceLocation",
    label: "Conference location",
    placeholder: "Madrid, Spain",
    span: 2
  },
  {
    name: "conferenceDate",
    label: "Conference date",
    placeholder: "2026-04-09 to 2026-04-11",
    span: 2
  },
  {
    name: "approvalYear",
    label: "Approval year",
    placeholder: "2026"
  },
  {
    name: "approvalMonth",
    label: "Approval month",
    placeholder: "04"
  },
  {
    name: "approvalDay",
    label: "Approval day",
    placeholder: "09"
  },
  {
    name: "contentItemTitle",
    label: "Content item title",
    placeholder: "Chapter or section title",
    span: 2
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

const crossrefMappings = {
  article: {
    label: "journal > journal_article",
    family: "journal_article",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "journalIssn"],
    optional: ["journalTitleDoi", "journalTitleResourceUrl"]
  },
  book: {
    label: "book > book_metadata",
    family: "book",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "publisher"],
    requiredOneOf: [["isbn", "noisbn"]],
    optional: []
  },
  booklet: {
    label: "report-paper > report-paper_metadata",
    family: "report",
    lossy: true,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage"],
    requiredOneOf: [["publisher", "institution", "organization"]],
    optional: []
  },
  conference: {
    label: "conference > conference_paper",
    family: "conference_paper",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "conferenceName"],
    requiredOneOf: [["isbn", "noisbn"]],
    optional: ["conferenceAcronym", "conferenceNumber", "conferenceLocation", "conferenceDate"]
  },
  inbook: {
    label: "book > content_item",
    family: "book_content",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "contentItemTitle"],
    requiredOneOf: [["isbn", "noisbn"]],
    optional: []
  },
  incollection: {
    label: "book > content_item",
    family: "book_content",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage"],
    requiredOneOf: [["isbn", "noisbn"]],
    optional: []
  },
  inproceedings: {
    label: "conference > conference_paper",
    family: "conference_paper",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "conferenceName"],
    requiredOneOf: [["isbn", "noisbn"]],
    optional: ["conferenceAcronym", "conferenceNumber", "conferenceLocation", "conferenceDate"]
  },
  manual: {
    label: "report-paper > report-paper_metadata",
    family: "report",
    lossy: true,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage"],
    requiredOneOf: [["publisher", "institution", "organization"]],
    optional: []
  },
  mastersthesis: {
    label: "dissertation",
    family: "dissertation",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "approvalYear"],
    optional: ["approvalMonth", "approvalDay"]
  },
  misc: {
    label: "report-paper > report-paper_metadata",
    family: "report",
    lossy: true,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage"],
    requiredOneOf: [["publisher", "institution", "organization"]],
    optional: []
  },
  phdthesis: {
    label: "dissertation",
    family: "dissertation",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "approvalYear"],
    optional: ["approvalMonth", "approvalDay"]
  },
  proceedings: {
    label: "conference > proceedings_metadata",
    family: "proceedings",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage", "conferenceName"],
    requiredOneOf: [["isbn", "noisbn"]],
    optional: ["conferenceAcronym", "conferenceNumber", "conferenceLocation", "conferenceDate"]
  },
  techreport: {
    label: "report-paper > report-paper_metadata",
    family: "report",
    lossy: false,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage"],
    requiredOneOf: [["publisher", "institution", "organization"]],
    optional: []
  },
  unpublished: {
    label: "report-paper > report-paper_metadata",
    family: "report",
    lossy: true,
    required: ["crossrefResourceUrl", "doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant", "crossrefLanguage"],
    requiredOneOf: [["publisher", "institution", "organization"]],
    optional: []
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
const doiPrefix = "10.66537/";
const doiPattern = /^10\.66537\/[A-Z]{4}\d{4}$/;
const crossrefSchemaFiles = [
  "crossref5.4.0.xsd",
  "common5.4.0.xsd",
  "fundref.xsd",
  "fundingdata5.4.0.xsd",
  "clinicaltrials.xsd",
  "AccessIndicators.xsd",
  "relations.xsd",
  "languages5.4.0.xsd",
  "mediatypes5.4.0.xsd",
  "xml.xsd",
  "jats-stub.xsd",
  "mathml-stub.xsd"
];

const entryTypeSelect = document.querySelector("#entryType");
const citationKeyInput = document.querySelector("#citationKey");
const dynamicFields = document.querySelector("#dynamicFields");
const typeRequirements = document.querySelector("#typeRequirements");
const showOptionalToggle = document.querySelector("#showOptional");
const crossrefFields = document.querySelector("#crossrefFields");
const crossrefMappingStatus = document.querySelector("#crossrefMappingStatus");
const crossrefRequirements = document.querySelector("#crossrefRequirements");
const preview = document.querySelector("#preview");
const htmlOutput = document.querySelector("#htmlOutput");
const xmlOutput = document.querySelector("#xmlOutput");
const xmlValidationPanel = document.querySelector("#xmlValidationPanel");
const copyButton = document.querySelector("#copyButton");
const copyStatus = document.querySelector("#copyStatus");
const downloadButton = document.querySelector("#downloadButton");
const copyXmlButton = document.querySelector("#copyXmlButton");
const downloadXmlButton = document.querySelector("#downloadXmlButton");
const xmlCopyStatus = document.querySelector("#xmlCopyStatus");
const importBibtexButton = document.querySelector("#importBibtexButton");
const bibtexInput = document.querySelector("#bibtexInput");
const importStatus = document.querySelector("#importStatus");

const state = {
  entryType: "article",
  citationKey: "",
  showOptional: false,
  crossrefResourceUrl: "",
  doiBatchId: "",
  timestamp: "",
  depositorName: "",
  depositorEmail: "",
  registrant: "Video Quality Experts Group (VQEG)",
  crossrefLanguage: "en",
  journalIssn: "",
  journalTitleDoi: "",
  journalTitleResourceUrl: "",
  isbn: "",
  noisbn: false,
  conferenceName: "",
  conferenceAcronym: "",
  conferenceNumber: "",
  conferenceLocation: "",
  conferenceDate: "",
  approvalYear: "",
  approvalMonth: "",
  approvalDay: "",
  contentItemTitle: ""
};

publicationFieldDefinitions.forEach((field) => {
  state[field.name] = "";
});

let crossrefValidator = null;
let crossrefSchemaBundle = null;
let validatorStatus = {
  state: "loading",
  message: "Loading Crossref schema validator..."
};
let validationRunId = 0;

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
    .replace(/[^A-Za-z0-9]+/g, "-")
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

  return replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);
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

function normalizeDoiValue(value) {
  const sanitized = sanitizeInputValue(value).replace(/^https?:\/\/doi\.org\//i, "");
  if (!sanitized) {
    return "";
  }

  const uppercased = sanitized.toUpperCase();
  if (doiPattern.test(uppercased)) {
    return uppercased;
  }

  const suffixOnly = uppercased.replace(/^10\.66537\/?/i, "");
  if (/^[A-Z]{4}\d{4}$/.test(suffixOnly)) {
    return `${doiPrefix}${suffixOnly}`;
  }

  return uppercased;
}

function isValidDoi(value) {
  return doiPattern.test(normalizeDoiValue(value));
}

function generateRandomDoi() {
  const letters = Array.from({ length: 4 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  ).join("");
  const digits = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)).join("");
  return `${doiPrefix}${letters}${digits}`;
}

function normalizeUrlValue(value) {
  return sanitizeInputValue(value);
}

function createTimestamp() {
  const now = new Date();
  const parts = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
    String(now.getUTCHours()).padStart(2, "0"),
    String(now.getUTCMinutes()).padStart(2, "0"),
    String(now.getUTCSeconds()).padStart(2, "0")
  ];
  return parts.join("");
}

function createBatchId() {
  return `vqeg-${createTimestamp()}`;
}

function getSchema(entryType = state.entryType) {
  return bibtexTypes[entryType] || bibtexTypes.article;
}

function getCrossrefMapping(entryType = state.entryType) {
  return crossrefMappings[entryType] || crossrefMappings.article;
}

function getRequiredPublicationFields(schema) {
  return [...schema.required, ...globalMandatoryFields].filter(
    (fieldName, index, values) => values.indexOf(fieldName) === index
  );
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
  const authors = splitAuthors(authorField).map(normalizeNameForIeee);
  if (authors.length <= 1) {
    return authors[0] || "";
  }
  if (authors.length === 2) {
    return `${authors[0]} and ${authors[1]}`;
  }
  return `${authors.slice(0, -1).join(", ")}, and ${authors[authors.length - 1]}`;
}

function splitName(author) {
  if (!author) {
    return { given: "", surname: "" };
  }

  if (author.includes(",")) {
    const [surname, given] = author.split(",").map((part) => part.trim());
    return { given, surname };
  }

  const parts = author.trim().split(/\s+/);
  if (parts.length === 1) {
    return { given: "", surname: parts[0] };
  }

  const surname = parts.pop();
  return { given: parts.join(" "), surname };
}

function monthToCrossrefNumber(value) {
  const normalized = sanitizeInputValue(value).toLowerCase();
  const numeric = normalized.replace(/\D/g, "");
  const monthMap = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    sept: "09",
    oct: "10",
    nov: "11",
    dec: "12"
  };

  if (numeric) {
    return String(Number(numeric)).padStart(2, "0");
  }

  return monthMap[normalized] || "";
}

function normalizeDayValue(value) {
  const numeric = sanitizeInputValue(value).replace(/\D/g, "");
  return numeric ? String(Number(numeric)).padStart(2, "0") : "";
}

function parsePageRange(value) {
  const normalized = sanitizeInputValue(value).replace(/\s+/g, "");
  if (!normalized) {
    return null;
  }

  const parts = normalized.split(/--|-/);
  if (parts.length >= 2) {
    return {
      first: parts[0],
      last: parts[1]
    };
  }

  return {
    first: normalized,
    last: ""
  };
}

function getEnabledPublicationFieldNames() {
  const schema = getSchema();
  return [
    ...getRequiredPublicationFields(schema),
    ...(schema.requiredOneOf || []).flat(),
    ...(state.showOptional ? schema.optional : [])
  ].filter((fieldName, index, values) => values.indexOf(fieldName) === index);
}

function getPublicationData() {
  const data = {
    entryType: state.entryType,
    citationKey: sanitizeInputValue(state.citationKey)
  };

  getEnabledPublicationFieldNames().forEach((fieldName) => {
    const rawValue = state[fieldName];
    let sanitizedValue = "";

    if (fieldName === "abstract") {
      sanitizedValue = sanitizeMultilineInputValue(rawValue);
    } else if (fieldName === "doi") {
      sanitizedValue = normalizeDoiValue(rawValue);
    } else if (fieldName === "url" || fieldName === "filePath") {
      sanitizedValue = normalizeUrlValue(rawValue);
    } else {
      sanitizedValue = sanitizeInputValue(rawValue);
    }

    if (sanitizedValue) {
      data[fieldName] = sanitizedValue;
    }
  });

  return data;
}

function getCrossrefData() {
  return {
    crossrefResourceUrl: normalizeUrlValue(state.crossrefResourceUrl),
    doiBatchId: sanitizeInputValue(state.doiBatchId),
    timestamp: sanitizeInputValue(state.timestamp),
    depositorName: sanitizeInputValue(state.depositorName),
    depositorEmail: sanitizeInputValue(state.depositorEmail),
    registrant: sanitizeInputValue(state.registrant),
    crossrefLanguage: sanitizeInputValue(state.crossrefLanguage || "en"),
    journalIssn: sanitizeInputValue(state.journalIssn),
    journalTitleDoi: normalizeDoiValue(state.journalTitleDoi),
    journalTitleResourceUrl: normalizeUrlValue(state.journalTitleResourceUrl),
    isbn: sanitizeInputValue(state.isbn),
    noisbn: Boolean(state.noisbn),
    conferenceName: sanitizeInputValue(state.conferenceName),
    conferenceAcronym: sanitizeInputValue(state.conferenceAcronym),
    conferenceNumber: sanitizeInputValue(state.conferenceNumber),
    conferenceLocation: sanitizeInputValue(state.conferenceLocation),
    conferenceDate: sanitizeInputValue(state.conferenceDate),
    approvalYear: sanitizeInputValue(state.approvalYear),
    approvalMonth: monthToCrossrefNumber(state.approvalMonth),
    approvalDay: normalizeDayValue(state.approvalDay),
    contentItemTitle: sanitizeInputValue(state.contentItemTitle)
  };
}

function getCombinedData() {
  return {
    ...getPublicationData(),
    ...getCrossrefData()
  };
}

function getPublicationMissingRequirements(data) {
  const schema = getSchema(data.entryType);
  const missing = [];

  getRequiredPublicationFields(schema).forEach((fieldName) => {
    if (!data[fieldName]) {
      missing.push(fieldName);
    } else if (fieldName === "doi" && !isValidDoi(data[fieldName])) {
      missing.push(`doi (must match ${doiPrefix}ABCD1234)`);
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

function getCrossrefVisibleFields() {
  const mapping = getCrossrefMapping();
  const always = [
    "crossrefResourceUrl",
    "doiBatchId",
    "timestamp",
    "depositorName",
    "depositorEmail",
    "registrant",
    "crossrefLanguage"
  ];

  return [...always, ...mapping.required, ...(mapping.requiredOneOf || []).flat(), ...(mapping.optional || [])]
    .filter((fieldName, index, values) => values.indexOf(fieldName) === index)
    .filter((fieldName) => !always.includes(fieldName) || fieldName.startsWith("crossref") || ["doiBatchId", "timestamp", "depositorName", "depositorEmail", "registrant"].includes(fieldName));
}

function getCrossrefIssues(data) {
  const mapping = getCrossrefMapping(data.entryType);
  const issues = [];

  mapping.required.forEach((fieldName) => {
    if (!data[fieldName]) {
      issues.push(`${fieldName} is required for ${mapping.label}`);
    }
  });

  (mapping.requiredOneOf || []).forEach((group) => {
    if (!group.some((fieldName) => data[fieldName])) {
      issues.push(`One of ${group.join(" / ")} is required for ${mapping.label}`);
    }
  });

  if (data.crossrefResourceUrl && !/^https?:\/\//i.test(data.crossrefResourceUrl)) {
    issues.push("crossrefResourceUrl must be a valid absolute URL");
  }

  if (data.depositorEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.depositorEmail)) {
    issues.push("depositorEmail must be a valid email address");
  }

  if (data.timestamp && !/^\d{14}$/.test(data.timestamp)) {
    issues.push("timestamp must use the format YYYYMMDDhhmmss");
  }

  if (data.journalIssn && !/^\d{4}-\d{3}[\dX]$/i.test(data.journalIssn)) {
    issues.push("journalIssn must use the format 1234-5678");
  }

  if (data.journalTitleDoi && !isValidDoi(data.journalTitleDoi)) {
    issues.push(`journalTitleDoi must match ${doiPrefix}ABCD1234`);
  }

  if (data.journalTitleResourceUrl && !/^https?:\/\//i.test(data.journalTitleResourceUrl)) {
    issues.push("journalTitleResourceUrl must be a valid absolute URL");
  }

  if (data.isbn && !/^\d{10}(\d{3})?$/.test(data.isbn.replace(/[-\s]/g, ""))) {
    issues.push("isbn must be a valid 10 or 13 digit ISBN");
  }

  if (["mastersthesis", "phdthesis"].includes(data.entryType) && data.approvalMonth && !data.approvalYear) {
    issues.push("approvalYear is required when an approval month is provided");
  }

  return issues;
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

function buildFieldMarkup(field, config) {
  const value = field.checkbox ? Boolean(state[field.name]) : escapeHtml(state[field.name] || "");
  const badgeText = config.badgeText || "Optional";
  const helpText = config.helpText || "";
  const fieldClass = `${field.span === 2 ? "field-span-2" : ""} field-card ${config.required ? "field-required" : "field-optional"}`.trim();
  const labelActions = field.name === "doi"
    ? `<span class="field-label-actions"><span class="field-badge">${badgeText}</span><button type="button" class="field-generate-button" data-generate-doi="true">Generate</button></span>`
    : `<span class="field-badge">${badgeText}</span>`;

  let control = "";
  if (field.checkbox) {
    control = `<input id="${field.name}" name="${field.name}" type="checkbox" data-field="${field.name}" ${value ? "checked" : ""} />`;
  } else if (field.multiline) {
    control = `<textarea id="${field.name}" name="${field.name}" rows="${field.rows || 4}" data-field="${field.name}" placeholder="${escapeHtml(field.placeholder || "")}">${value}</textarea>`;
  } else {
    control = `<input id="${field.name}" name="${field.name}" type="${field.inputType || "text"}" data-field="${field.name}" value="${value}" placeholder="${escapeHtml(field.placeholder || "")}" />`;
  }

  return `
    <label class="${fieldClass}">
      <span class="field-label-row">
        <span>${escapeHtml(field.label)}</span>
        ${labelActions}
      </span>
      ${control}
      <p class="field-help">${escapeHtml(helpText)}</p>
    </label>
  `;
}

function renderPublicationRequirementsText() {
  const schema = getSchema();
  const requiredText = getRequiredPublicationFields(schema).length
    ? `Required fields: ${getRequiredPublicationFields(schema).join(", ")}.`
    : "This type has no universally required BibTeX fields.";
  const alternativeText = (schema.requiredOneOf || []).length
    ? ` One of each group is also required: ${(schema.requiredOneOf || []).map((group) => group.join(" / ")).join("; ")}.`
    : "";
  typeRequirements.textContent = `${requiredText}${alternativeText}`;
}

function renderDynamicFields() {
  const schema = getSchema();
  const visibleFields = [];
  const visibleFieldNames = new Set([
    ...getRequiredPublicationFields(schema),
    ...(schema.requiredOneOf || []).flat(),
    ...(state.showOptional ? schema.optional : [])
  ]);

  publicationFieldDefinitions.forEach((field) => {
    if (!visibleFieldNames.has(field.name)) {
      return;
    }

    const isRequired = getRequiredPublicationFields(schema).includes(field.name);
    const isAlternativeRequired = (schema.requiredOneOf || []).some((group) => group.includes(field.name));
    const badgeText = isRequired ? "Required" : isAlternativeRequired ? "One of required group" : "Optional";
    const helpText = field.name === "doi"
      ? `${isRequired ? "This field is required for the selected BibTeX type." : "This field is optional and only appears in the output when enabled."} Format: ${doiPrefix}ABCD1234.`
      : isAlternativeRequired
        ? "At least one field in this group must be filled for the selected BibTeX type."
        : isRequired
          ? "This field is required for the selected BibTeX type."
          : "This field is optional and only appears in the output when enabled.";

    visibleFields.push(
      buildFieldMarkup(field, {
        required: isRequired || isAlternativeRequired,
        badgeText,
        helpText
      })
    );
  });

  dynamicFields.innerHTML = visibleFields.join("");
  renderPublicationRequirementsText();
  attachFieldListeners(dynamicFields);
}

function renderCrossrefFields() {
  const mapping = getCrossrefMapping();
  const visibleFieldNames = getCrossrefVisibleFields();
  const fieldsMarkup = [];

  crossrefMappingStatus.textContent = `BibTeX ${state.entryType} maps to Crossref ${mapping.label}.${mapping.lossy ? " This is a lossy fallback mapping." : ""}`;
  const requiredNames = [...mapping.required, ...(mapping.requiredOneOf || []).flat()].filter(
    (fieldName, index, values) => values.indexOf(fieldName) === index
  );
  crossrefRequirements.textContent = `Crossref requires these metadata for this type: ${requiredNames.join(", ")}. Some of them may come from the publication form above.`;

  crossrefFieldDefinitions.forEach((field) => {
    if (!visibleFieldNames.includes(field.name)) {
      return;
    }

    const isRequired = mapping.required.includes(field.name);
    const isAlternativeRequired = (mapping.requiredOneOf || []).some((group) => group.includes(field.name));
    const badgeText = isRequired ? "Required" : isAlternativeRequired ? "One of required group" : "Crossref";
    const helpText = isAlternativeRequired
      ? "At least one field in this Crossref group must be provided."
      : isRequired
        ? "This field is required to produce a Crossref deposit."
        : "Crossref-specific field for the mapped record type.";

    fieldsMarkup.push(
      buildFieldMarkup(field, {
        required: isRequired || isAlternativeRequired,
        badgeText,
        helpText
      })
    );
  });

  crossrefFields.innerHTML = fieldsMarkup.join("");
  attachFieldListeners(crossrefFields);
}

function attachFieldListeners(container) {
  container.querySelectorAll("[data-field]").forEach((element) => {
    element.addEventListener("input", (event) => {
      const { field } = event.target.dataset;
      const target = event.target;

      if (target.type === "checkbox") {
        state[field] = target.checked;
      } else if (field === "doi") {
        state[field] = normalizeDoiValue(target.value);
        target.value = state[field];
      } else {
        state[field] = target.value;
      }

      updateOutputs();
    });

    if (element.type === "checkbox") {
      element.addEventListener("change", (event) => {
        const { field } = event.target.dataset;
        state[field] = event.target.checked;
        updateOutputs();
      });
    }
  });

  container.querySelectorAll("[data-generate-doi]").forEach((button) => {
    button.addEventListener("click", () => {
      state.doi = generateRandomDoi();
      renderDynamicFields();
      updateOutputs();
    });
  });
}

function buildCitationText(data) {
  const bits = [];
  const authors = formatAuthorListForDisplay(data.author);
  const title = data.title?.trim();

  if (authors) {
    bits.push(authors);
  }

  if (data.month || data.year) {
    bits.push(`(${[data.month, data.year].filter(Boolean).join(" ")})`);
  }

  if (title) {
    bits.push(`<em>${escapeHtml(title)}</em>.`);
  }

  const container = data.journal || data.booktitle;
  if (container) {
    bits.push(escapeHtml(container));
  }

  if (data.publisher) {
    bits.push(escapeHtml(data.publisher));
  }

  if (data.institution) {
    bits.push(escapeHtml(data.institution));
  }

  if (data.pages) {
    bits.push(`pp. ${escapeHtml(data.pages)}`);
  }

  return bits.join(" ");
}

function buildIeeeCitationText(data) {
  const segments = [];
  const authors = formatAuthorListForDisplay(data.author || data.editor || "");
  if (authors) {
    segments.push(authors);
  }
  if (data.title) {
    segments.push(`"${data.title}"`);
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

function buildMetadataRows(data) {
  return [
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
  ].filter(([, value]) => value);
}

function buildMetadataTableMarkup(data) {
  return `<table class="metadata-table"><tbody>${buildMetadataRows(data)
    .map(([label, value]) => {
      let renderedValue = escapeHtml(value);
      if (label === "DOI") {
        const href = value.startsWith("http") ? value : `https://doi.org/${value}`;
        renderedValue = `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(value)}</a>`;
      } else if (label === "URL") {
        renderedValue = `<a href="${escapeHtml(value)}" target="_blank" rel="noreferrer noopener">${escapeHtml(value)}</a>`;
      }
      return `<tr><th scope="row">${escapeHtml(label)}</th><td>${renderedValue}</td></tr>`;
    })
    .join("")}</tbody></table>`;
}

function buildResourceLinks(data) {
  const links = [];
  if (data.filePath) {
    links.push({ href: data.filePath, label: "Open PDF" });
  }
  if (data.url) {
    links.push({ href: data.url, label: "Open page" });
  }
  if (data.doi) {
    links.push({ href: data.doi.startsWith("http") ? data.doi : `https://doi.org/${data.doi}`, label: "DOI" });
  }
  return links;
}

function formatBibtexField(fieldName, value) {
  const sanitized = sanitizeBibtexOutputValue(value);
  const wrappedValue = fieldName === "title" ? `{{${sanitized}}}` : `{${sanitized}}`;
  return `  ${fieldName} = ${wrappedValue}`;
}

function buildBibtexOutput(data) {
  const fields = getEnabledPublicationFieldNames()
    .filter((fieldName) => !["filePath", "abstract"].includes(fieldName))
    .filter((fieldName) => data[fieldName])
    .map((fieldName) => formatBibtexField(fieldName, data[fieldName]));
  const citationKey = data.citationKey || slugify(data.title || "publication");
  return `@${data.entryType || "misc"}{${citationKey},
${fields.join(",\n")}
}`;
}

function buildCardSupplementMarkup(data, classNames = {}) {
  const citationSectionClass = classNames.citationSection || "supplement-box";
  const bibtexSectionClass = classNames.bibtexSection || "supplement-box";
  const preClass = classNames.pre || "code-block";

  return `
    <section class="${citationSectionClass}">
      <h4>IEEE citation</h4>
      <p class="ieee-line">${escapeHtml(buildIeeeCitationText(data) || "IEEE citation pending.")}</p>
    </section>
    <section class="${bibtexSectionClass}">
      <h4>BibTeX</h4>
      <pre class="${preClass}">${escapeHtml(buildBibtexOutput(data))}</pre>
    </section>
  `;
}

function buildPreviewMarkup(data) {
  const hasContent = Object.keys(data).some((key) => !["entryType", "citationKey"].includes(key));
  if (!hasContent) {
    return `<p class="empty-preview">Enter some details to generate the bibliographic record.</p>`;
  }

  const missing = getPublicationMissingRequirements(data);
  const warning = missing.length
    ? `<p class="missing-note">Missing BibTeX-required fields for ${escapeHtml(getSchema(data.entryType).label)}: ${escapeHtml(missing.join(", "))}</p>`
    : "";
  const resourceLinks = buildResourceLinks(data)
    .map((link) => `<a class="resource-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(link.label)}</a>`)
    .join("");
  const abstractMarkup = data.abstract
    ? `<section class="abstract-box"><h4>Abstract</h4><p>${escapeHtml(data.abstract).replaceAll("\n", "<br />")}</p></section>`
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
  const missing = getPublicationMissingRequirements(data);
  const warning = missing.length
    ? `<p class="vqeg-doi-warning">Missing BibTeX-required fields: ${escapeHtml(missing.join(", "))}</p>`
    : "";
  const resourceLinks = buildResourceLinks(data)
    .map((link) => `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(link.label)}</a>`)
    .join("");
  const abstractMarkup = data.abstract
    ? `<section class="vqeg-doi-abstract"><h2>Abstract</h2><p>${escapeHtml(data.abstract).replaceAll("\n", "<br />")}</p></section>`
    : "";
  const metadataRows = buildMetadataRows(data)
    .map(([label, value]) => {
      let renderedValue = escapeHtml(value);
      if (label === "DOI") {
        const href = value.startsWith("http") ? value : `https://doi.org/${value}`;
        renderedValue = `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(value)}</a>`;
      } else if (label === "URL") {
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
  <table class="vqeg-doi-table"><tbody>${metadataRows}</tbody></table>
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

function xmlEscape(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function tag(name, content, attributes = {}) {
  if (content === undefined || content === null || content === "") {
    return "";
  }

  const attrs = Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => ` ${key}="${xmlEscape(value)}"`)
    .join("");
  return `<${name}${attrs}>${content}</${name}>`;
}

function emptyTag(name, attributes = {}) {
  const attrs = Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => ` ${key}="${xmlEscape(value)}"`)
    .join("");
  return `<${name}${attrs}/>`;
}

function buildTitlesXml(titleValue) {
  return tag("titles", tag("title", xmlEscape(titleValue)));
}

function buildPersonNameXml(author, role, sequence) {
  const parts = splitName(author);
  const nameChildren = [
    parts.given ? tag("given_name", xmlEscape(parts.given)) : "",
    tag("surname", xmlEscape(parts.surname))
  ].join("");
  return tag(
    "person_name",
    nameChildren,
    {
      contributor_role: role,
      sequence
    }
  );
}

function buildContributorsXml(authorField, editorField) {
  const contributors = [];
  splitAuthors(authorField).forEach((author, index) => {
    contributors.push(buildPersonNameXml(author, "author", index === 0 ? "first" : "additional"));
  });
  splitAuthors(editorField).forEach((editor, index) => {
    contributors.push(buildPersonNameXml(editor, "editor", contributors.length === 0 && index === 0 ? "first" : "additional"));
  });
  return contributors.length ? tag("contributors", contributors.join("")) : "";
}

function buildDateXml(tagName, year, month, day, mediaType = "") {
  if (!year) {
    return "";
  }
  const parts = [
    month ? tag("month", xmlEscape(month)) : "",
    day ? tag("day", xmlEscape(day)) : "",
    tag("year", xmlEscape(year))
  ].join("");
  const attrs = mediaType ? { media_type: mediaType } : {};
  return tag(tagName, parts, attrs);
}

function buildPagesXml(pages) {
  const range = parsePageRange(pages);
  if (!range) {
    return "";
  }
  return tag(
    "pages",
    `${tag("first_page", xmlEscape(range.first))}${range.last ? tag("last_page", xmlEscape(range.last)) : ""}`
  );
}

function buildPublisherItemXml(number, itemType) {
  if (!number) {
    return "";
  }
  return tag(
    "publisher_item",
    tag("item_number", xmlEscape(number), itemType ? { item_number_type: itemType } : {})
  );
}

function buildDoiDataXml(doi, resourceUrl) {
  return tag(
    "doi_data",
    `${tag("doi", xmlEscape(doi))}${tag("resource", xmlEscape(resourceUrl))}`
  );
}

function buildPublisherXml(publisher) {
  return publisher ? tag("publisher", tag("publisher_name", xmlEscape(publisher))) : "";
}

function buildInstitutionXml(institution) {
  return institution ? tag("institution", tag("institution_name", xmlEscape(institution))) : "";
}

function buildIsbnOrNoisbnXml(data, family) {
  if (data.isbn) {
    return tag("isbn", xmlEscape(data.isbn.replace(/[-\s]/g, "")), { media_type: "electronic" });
  }
  if (data.noisbn) {
    const reason = family === "conference_paper" || family === "proceedings" ? "archive_volume" : "monograph";
    return emptyTag("noisbn", { reason });
  }
  return "";
}

function buildJournalXml(data) {
  const publicationDate = buildDateXml("publication_date", data.year, monthToCrossrefNumber(data.month), "", "online");
  const articleChildren = [
    buildTitlesXml(data.title),
    buildContributorsXml(data.author, data.editor),
    publicationDate,
    buildPagesXml(data.pages),
    buildPublisherItemXml(data.number, "article-number"),
    buildDoiDataXml(data.doi, data.crossrefResourceUrl)
  ].filter(Boolean).join("");
  const journalMetadataDoiData = data.journalTitleDoi && data.journalTitleResourceUrl
    ? buildDoiDataXml(data.journalTitleDoi, data.journalTitleResourceUrl)
    : "";

  return `
<journal>
  <journal_metadata language="${xmlEscape(data.crossrefLanguage || "en")}">
    ${tag("full_title", xmlEscape(data.journal))}
    ${tag("issn", xmlEscape(data.journalIssn), { media_type: "electronic" })}
    ${journalMetadataDoiData}
  </journal_metadata>
  <journal_article publication_type="full_text" language="${xmlEscape(data.crossrefLanguage || "en")}">
    ${articleChildren}
  </journal_article>
</journal>`.trim();
}

function buildConferenceEventMetadataXml(data) {
  return tag(
    "event_metadata",
    [
      tag("conference_name", xmlEscape(data.conferenceName)),
      data.conferenceAcronym ? tag("conference_acronym", xmlEscape(data.conferenceAcronym)) : "",
      data.conferenceNumber ? tag("conference_number", xmlEscape(data.conferenceNumber)) : "",
      data.conferenceLocation ? tag("conference_location", xmlEscape(data.conferenceLocation)) : "",
      data.conferenceDate ? tag("conference_date", xmlEscape(data.conferenceDate)) : ""
    ].filter(Boolean).join("")
  );
}

function buildProceedingsMetadataXml(data, includeDoi) {
  return tag(
    "proceedings_metadata",
    [
      tag("proceedings_title", xmlEscape(data.booktitle || data.title)),
      buildPublisherXml(data.publisher || data.organization || data.institution),
      buildDateXml("publication_date", data.year, monthToCrossrefNumber(data.month), "", "online"),
      buildIsbnOrNoisbnXml(data, "conference_paper"),
      includeDoi ? buildDoiDataXml(data.doi, data.crossrefResourceUrl) : ""
    ].filter(Boolean).join(""),
    { language: data.crossrefLanguage || "en" }
  );
}

function buildConferencePaperXml(data) {
  const paper = tag(
    "conference_paper",
    [
      buildContributorsXml(data.author, data.editor),
      buildTitlesXml(data.title),
      buildDateXml("publication_date", data.year, monthToCrossrefNumber(data.month), "", "online"),
      buildPagesXml(data.pages),
      buildPublisherItemXml(data.number, "paper-number"),
      buildDoiDataXml(data.doi, data.crossrefResourceUrl)
    ].filter(Boolean).join(""),
    {
      publication_type: "full_text",
      language: data.crossrefLanguage || "en"
    }
  );

  return `
<conference>
  ${buildConferenceEventMetadataXml(data)}
  ${buildProceedingsMetadataXml(data, false)}
  ${paper}
</conference>`.trim();
}

function buildProceedingsXml(data) {
  return `
<conference>
  ${buildConferenceEventMetadataXml(data)}
  ${buildProceedingsMetadataXml(data, true)}
</conference>`.trim();
}

function buildBookMetadataXml(data, includeDoi) {
  return tag(
    "book_metadata",
    [
      buildContributorsXml(data.author, data.editor),
      buildTitlesXml(data.title),
      data.edition ? tag("edition_number", xmlEscape(data.edition)) : "",
      buildDateXml("publication_date", data.year, monthToCrossrefNumber(data.month), "", "online"),
      buildIsbnOrNoisbnXml(data, "book"),
      buildPublisherXml(data.publisher),
      buildPublisherItemXml(data.number, "book-number"),
      includeDoi ? buildDoiDataXml(data.doi, data.crossrefResourceUrl) : ""
    ].filter(Boolean).join(""),
    {
      language: data.crossrefLanguage || "en"
    }
  );
}

function buildBookXml(data) {
  return `<book book_type="monograph">${buildBookMetadataXml(data, true)}</book>`;
}

function buildContentItemXml(data) {
  const contentTitle = data.entryType === "inbook" ? data.contentItemTitle : data.title;
  const parentTitle = data.entryType === "inbook" ? data.title : data.booktitle;
  const parentContributors = data.entryType === "incollection" ? data.editor : data.author || data.editor;

  return `
<book book_type="edited_book">
  ${tag(
    "book_metadata",
    [
      buildContributorsXml("", parentContributors),
      buildTitlesXml(parentTitle),
      buildDateXml("publication_date", data.year, monthToCrossrefNumber(data.month), "", "online"),
      buildIsbnOrNoisbnXml(data, "book"),
      buildPublisherXml(data.publisher)
    ].filter(Boolean).join(""),
    { language: data.crossrefLanguage || "en" }
  )}
  ${tag(
    "content_item",
    [
      buildContributorsXml(data.author, data.editor),
      buildTitlesXml(contentTitle),
      buildDateXml("publication_date", data.year, monthToCrossrefNumber(data.month), "", "online"),
      buildPagesXml(data.pages),
      buildPublisherItemXml(data.chapter || data.number, "component-number"),
      buildDoiDataXml(data.doi, data.crossrefResourceUrl)
    ].filter(Boolean).join(""),
    {
      component_type: "chapter",
      level_sequence_number: "1",
      language: data.crossrefLanguage || "en"
    }
  )}
</book>`.trim();
}

function buildDissertationXml(data) {
  const degree = data.type || (data.entryType === "phdthesis" ? "PhD thesis" : "Master's thesis");
  return tag(
    "dissertation",
    [
      buildContributorsXml(data.author, ""),
      buildTitlesXml(data.title),
      buildDateXml("approval_date", data.approvalYear || data.year, data.approvalMonth, data.approvalDay),
      buildInstitutionXml(data.school || data.institution),
      degree ? tag("degree", xmlEscape(degree)) : "",
      buildDoiDataXml(data.doi, data.crossrefResourceUrl)
    ].filter(Boolean).join(""),
    { language: data.crossrefLanguage || "en" }
  );
}

function buildReportXml(data) {
  return tag(
    "report-paper",
    tag(
      "report-paper_metadata",
      [
        buildContributorsXml(data.author, data.editor),
        buildTitlesXml(data.title),
        data.edition ? tag("edition_number", xmlEscape(data.edition)) : "",
        buildDateXml("publication_date", data.year, monthToCrossrefNumber(data.month), "", "online"),
        ["techreport", "manual", "misc", "booklet", "unpublished"].includes(data.entryType) && data.approvalYear
          ? buildDateXml("approval_date", data.approvalYear, data.approvalMonth, data.approvalDay)
          : "",
        data.isbn ? tag("isbn", xmlEscape(data.isbn.replace(/[-\s]/g, "")), { media_type: "electronic" }) : "",
        buildPublisherXml(data.publisher || data.organization),
        buildInstitutionXml(data.institution || data.school),
        buildPublisherItemXml(data.number, "report-number"),
        buildDoiDataXml(data.doi, data.crossrefResourceUrl)
      ].filter(Boolean).join(""),
      { language: data.crossrefLanguage || "en" }
    ),
    { publication_type: "full_text" }
  );
}

function buildCrossrefBodyXml(data) {
  const mapping = getCrossrefMapping(data.entryType);
  switch (mapping.family) {
    case "journal_article":
      return buildJournalXml(data);
    case "conference_paper":
      return buildConferencePaperXml(data);
    case "proceedings":
      return buildProceedingsXml(data);
    case "book":
      return buildBookXml(data);
    case "book_content":
      return buildContentItemXml(data);
    case "dissertation":
      return buildDissertationXml(data);
    case "report":
      return buildReportXml(data);
    default:
      return buildReportXml(data);
  }
}

function buildCrossrefXml(data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<doi_batch xmlns="http://www.crossref.org/schema/5.4.0" version="5.4.0">
  <head>
    <doi_batch_id>${xmlEscape(data.doiBatchId)}</doi_batch_id>
    <timestamp>${xmlEscape(data.timestamp)}</timestamp>
    <depositor>
      <depositor_name>${xmlEscape(data.depositorName)}</depositor_name>
      <email_address>${xmlEscape(data.depositorEmail)}</email_address>
    </depositor>
    <registrant>${xmlEscape(data.registrant)}</registrant>
  </head>
  <body>
${buildCrossrefBodyXml(data)
  .split("\n")
  .map((line) => `    ${line}`)
  .join("\n")}
  </body>
</doi_batch>`;
}

function renderValidationPanel(fastIssues, schemaResult) {
  const items = [];
  const mapping = getCrossrefMapping();

  items.push(`<p class="validation-line"><strong>Crossref target:</strong> ${escapeHtml(mapping.label)}${mapping.lossy ? " (lossy mapping)" : ""}</p>`);

  if (fastIssues.length) {
    items.push(`<p class="validation-error"><strong>Field validation:</strong> ${escapeHtml(fastIssues.join(" | "))}</p>`);
  } else {
    items.push(`<p class="validation-ok"><strong>Field validation:</strong> all required Crossref fields are present.</p>`);
  }

  if (schemaResult?.state === "loading") {
    items.push(`<p class="validation-line"><strong>XSD validation:</strong> ${escapeHtml(schemaResult.message)}</p>`);
  } else if (schemaResult?.state === "unavailable") {
    items.push(`<p class="validation-error"><strong>XSD validation unavailable:</strong> ${escapeHtml(schemaResult.message)}</p>`);
  } else if (schemaResult?.state === "waiting") {
    items.push(`<p class="validation-line"><strong>XSD validation:</strong> waiting for required Crossref fields.</p>`);
  } else if (schemaResult?.state === "valid") {
    items.push(`<p class="validation-ok"><strong>XSD validation:</strong> Crossref 5.4.0 schema validation passed.</p>`);
  } else if (schemaResult?.state === "invalid") {
    items.push(
      `<ul class="validation-list">${schemaResult.errors
        .map((error) => `<li>${escapeHtml(error)}</li>`)
        .join("")}</ul>`
    );
  }

  xmlValidationPanel.innerHTML = items.join("");
}

async function loadCrossrefValidator() {
  try {
    const xmllintModule = await import("./vendor/xmllint-wasm/index-browser.mjs");
    const schemaEntries = await Promise.all(
      crossrefSchemaFiles.map(async (fileName) => {
        const response = await fetch(`./crossref-schema/${fileName}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${fileName}`);
        }
        return {
          fileName,
          contents: await response.text()
        };
      })
    );
    crossrefValidator = xmllintModule.validateXML;
    crossrefSchemaBundle = {
      schema: [schemaEntries[0]],
      preload: schemaEntries.slice(1)
    };
    validatorStatus = {
      state: "ready",
      message: "Crossref schema validator loaded."
    };
  } catch (error) {
    validatorStatus = {
      state: "unavailable",
      message: error.message || "Failed to load the Crossref schema validator."
    };
  }
  updateOutputs();
}

async function runCrossrefValidation(data, xml, fastIssues) {
  const currentRun = ++validationRunId;

  if (validatorStatus.state === "loading") {
    renderValidationPanel(fastIssues, validatorStatus);
    return;
  }

  if (validatorStatus.state === "unavailable" || !crossrefValidator || !crossrefSchemaBundle) {
    renderValidationPanel(fastIssues, validatorStatus);
    return;
  }

  if (fastIssues.length) {
    renderValidationPanel(fastIssues, { state: "waiting" });
    return;
  }

  try {
    const result = await crossrefValidator({
      xml: [{ fileName: "deposit.xml", contents: xml }],
      schema: crossrefSchemaBundle.schema,
      preload: crossrefSchemaBundle.preload
    });
    if (currentRun !== validationRunId) {
      return;
    }

    if (result.valid) {
      renderValidationPanel(fastIssues, { state: "valid" });
    } else {
      renderValidationPanel(
        fastIssues,
        {
          state: "invalid",
          errors: result.errors.map((error) => error.rawMessage || error.message || String(error))
        }
      );
    }
  } catch (error) {
    if (currentRun !== validationRunId) {
      return;
    }
    renderValidationPanel(fastIssues, {
      state: "unavailable",
      message: error.message || "The schema validator could not run."
    });
  }
}

function updateOutputs() {
  const publicationData = getPublicationData();
  const combinedData = getCombinedData();
  const crossrefXml = buildCrossrefXml(combinedData);
  const crossrefIssues = getCrossrefIssues(combinedData);

  preview.innerHTML = buildPreviewMarkup(publicationData);
  htmlOutput.value = buildStaticBlockHtml(publicationData);
  xmlOutput.value = crossrefXml;
  runCrossrefValidation(combinedData, crossrefXml, crossrefIssues);
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
      parsedValue = { value: rawValue, nextIndex: cursor + rawValue.length };
    }

    fields[fieldName] = parsedValue.value.trim();
    cursor = parsedValue.nextIndex;
  }

  return { entryType, citationKey, fields };
}

function importBibtex() {
  try {
    const parsedEntry = parseBibtexEntry(bibtexInput.value);
    state.entryType = bibtexTypes[parsedEntry.entryType] ? parsedEntry.entryType : "misc";
    state.citationKey = parsedEntry.citationKey;
    citationKeyInput.value = state.citationKey;
    entryTypeSelect.value = state.entryType;

    publicationFieldDefinitions.forEach((field) => {
      state[field.name] = "";
    });

    Object.entries(parsedEntry.fields).forEach(([bibtexField, rawValue]) => {
      const internalField = bibtexInputMap[bibtexField];
      if (!internalField) {
        return;
      }
      if (internalField === "abstract") {
        state[internalField] = sanitizeMultilineInputValue(rawValue);
      } else if (internalField === "doi") {
        state[internalField] = normalizeDoiValue(rawValue);
      } else {
        state[internalField] = sanitizeInputValue(rawValue);
      }
    });

    state.showOptional = true;
    showOptionalToggle.checked = true;
    renderDynamicFields();
    renderCrossrefFields();
    updateOutputs();
    importStatus.textContent = "BibTeX entry imported successfully.";
  } catch (error) {
    importStatus.textContent = error.message;
  }
}

async function copyText(value, statusElement, successMessage) {
  try {
    await navigator.clipboard.writeText(value);
    statusElement.textContent = successMessage;
  } catch (error) {
    statusElement.textContent = "Copy failed. Please copy manually.";
  }
}

function downloadFile(contents, fileName, mimeType) {
  const blob = new Blob([contents], { type: mimeType });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

entryTypeSelect.addEventListener("change", (event) => {
  state.entryType = event.target.value;
  renderDynamicFields();
  renderCrossrefFields();
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

copyButton.addEventListener("click", () => {
  copyText(htmlOutput.value, copyStatus, "HTML copied to the clipboard.");
});

downloadButton.addEventListener("click", () => {
  const publicationData = getPublicationData();
  downloadFile(
    buildFullHtmlDocument(publicationData),
    `${slugify(publicationData.doi)}_index.html`,
    "text/html;charset=utf-8"
  );
});

copyXmlButton.addEventListener("click", () => {
  copyText(xmlOutput.value, xmlCopyStatus, "XML copied to the clipboard.");
});

downloadXmlButton.addEventListener("click", () => {
  const combinedData = getCombinedData();
  downloadFile(
    buildCrossrefXml(combinedData),
    `${slugify(combinedData.doi)}.xml`,
    "application/xml;charset=utf-8"
  );
});

importBibtexButton.addEventListener("click", importBibtex);

state.timestamp = createTimestamp();
state.doiBatchId = createBatchId();
state.crossrefLanguage = "en";

populateEntryTypes();
renderDynamicFields();
renderCrossrefFields();
updateOutputs();
loadCrossrefValidator();
