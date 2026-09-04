import questionMetadata from "./questionMetadata";


/*
 * =========================================================
 * HELPERS
 * =========================================================
 */


/*
 * Convert a stored option value into its human-readable label.
 *
 * Example:
 * "under_18" → "Under 18"
 */
function getOptionLabel(question, value) {
  if (!question.options) {
    return value;
  }

  const option = question.options.find(
    (item) => item.value === value
  );

  return option ? option.label : value;
}


/*
 * Convert a grid column value into its label.
 *
 * Example:
 * "very_satisfied" → "Very Satisfied"
 */
function getGridColumnLabel(question, value) {
  if (!question.columns) {
    return value;
  }

  const column = question.columns.find(
    (item) => item.value === value
  );

  return column ? column.label : value;
}


/*
 * Escape values for CSV compatibility.
 *
 * Handles:
 * - commas
 * - quotation marks
 * - line breaks
 */
function escapeCSVValue(value) {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  const stringValue = String(value);

  return `"${stringValue.replace(
    /"/g,
    '""'
  )}"`;
}


/*
 * =========================================================
 * ANSWER FORMATTERS
 * =========================================================
 */


/*
 * Format a standard single-choice answer.
 */
function formatDistributionAnswer(
  question,
  answer
) {
  return getOptionLabel(
    question,
    answer
  );
}


/*
 * Format a multiple-choice answer.
 *
 * Example:
 * [
 *   "language_barrier",
 *   "housing"
 * ]
 *
 * becomes:
 *
 * Language barrier, Housing
 */
function formatMultipleAnswer(
  question,
  answer
) {
  if (!Array.isArray(answer)) {
    return "";
  }

  return answer
    .map((value) =>
      getOptionLabel(
        question,
        value
      )
    )
    .join(", ");
}


/*
 * Format text answers.
 */
function formatTextAnswer(answer) {
  if (
    answer === null ||
    answer === undefined
  ) {
    return "";
  }

  return answer;
}


/*
 * Format scale answers.
 */
function formatScaleAnswer(answer) {
  if (
    answer === null ||
    answer === undefined
  ) {
    return "";
  }

  return answer;
}


/*
 * =========================================================
 * RESPONSE NORMALIZATION
 * =========================================================
 */


/*
 * Handles the possible response structures returned
 * by the backend / Supabase.
 *
 * Expected structure:
 *
 * {
 *   id,
 *   language,
 *   answers,
 *   created_at
 * }
 */
function normalizeResponse(response) {
  return {
    id: response.id || "",
    language: response.language || "",
    createdAt:
      response.created_at ||
      response.createdAt ||
      "",
    answers: response.answers || {},
  };
}


/*
 * =========================================================
 * CREATE CSV HEADERS
 * =========================================================
 */


function createHeaders() {
  const headers = [
    "Response ID",
    "Language",
    "Submitted At",
  ];

  Object.entries(questionMetadata).forEach(
    ([questionId, question]) => {
      /*
       * Grid questions get a separate column
       * for every row.
       */
      if (
        question.type === "grid" &&
        question.rows
      ) {
        question.rows.forEach((row) => {
          headers.push(
            `${question.title} - ${row.label}`
          );
        });

        return;
      }

      /*
       * All other questions get one column.
       */
      headers.push(question.title);
    }
  );

  return headers;
}


/*
 * =========================================================
 * CREATE CSV ROW
 * =========================================================
 */


function createResponseRow(response) {
  const normalizedResponse =
    normalizeResponse(response);

  const {
    id,
    language,
    createdAt,
    answers,
  } = normalizedResponse;

  const row = [
    id,
    language,
    createdAt,
  ];


  /*
   * Loop through questions in metadata order.
   */
  Object.entries(questionMetadata).forEach(
    ([questionId, question]) => {
      const answer =
        answers[questionId];


      /*
       * GRID QUESTION
       *
       * Each row becomes a separate CSV column.
       */
      if (
        question.type === "grid" &&
        question.rows
      ) {
        question.rows.forEach((gridRow) => {
          const gridAnswer =
            answer?.[gridRow.value];

          row.push(
            getGridColumnLabel(
              question,
              gridAnswer
            )
          );
        });

        return;
      }


      /*
       * MULTIPLE CHOICE
       */
      if (question.type === "multiple") {
        row.push(
          formatMultipleAnswer(
            question,
            answer
          )
        );

        return;
      }


      /*
       * SINGLE CHOICE DISTRIBUTIONS
       */
      if (
        question.type === "distribution"
      ) {
        row.push(
          formatDistributionAnswer(
            question,
            answer
          )
        );

        return;
      }


      /*
       * SCALE
       */
      if (
        question.type === "scale"
      ) {
        row.push(
          formatScaleAnswer(answer)
        );

        return;
      }


      /*
       * TEXT
       */
      if (
        question.type === "text"
      ) {
        row.push(
          formatTextAnswer(answer)
        );

        return;
      }


      /*
       * Fallback
       */
      row.push(
        answer ?? ""
      );
    }
  );

  return row;
}


/*
 * =========================================================
 * EXPORT CSV
 * =========================================================
 */


export function exportResponsesToCSV(
  responses
) {
  if (
    !responses ||
    responses.length === 0
  ) {
    console.warn(
      "No responses available for export."
    );

    return;
  }


  /*
   * Create headers.
   */
  const headers =
    createHeaders();


  /*
   * Create response rows.
   */
  const rows =
    responses.map(
      createResponseRow
    );


  /*
   * Combine everything into CSV.
   */
  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row
        .map(escapeCSVValue)
        .join(",")
    )
    .join("\n");


  /*
   * Add UTF-8 BOM.
   *
   * Important for:
   * - Turkish characters
   * - French accents
   * - Russian Cyrillic
   *
   * Ensures Excel opens the CSV correctly.
   */
  const BOM = "\uFEFF";


  const blob = new Blob(
    [BOM + csvContent],
    {
      type:
        "text/csv;charset=utf-8;",
    }
  );


  /*
   * Create download URL.
   */
  const url =
    URL.createObjectURL(blob);


  const link =
    document.createElement("a");


  link.href = url;


  /*
   * Generate date for filename.
   */
  const date =
    new Date()
      .toISOString()
      .split("T")[0];


  link.download =
    `isoc-survey-responses-${date}.csv`;


  /*
   * Trigger download.
   */
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);


  /*
   * Clean up.
   */
  URL.revokeObjectURL(url);
}