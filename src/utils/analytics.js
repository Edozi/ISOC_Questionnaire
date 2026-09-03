// ============================================================
// GENERAL
// ============================================================

export function calculatePercentage(value, total) {
  if (!total) {
    return 0;
  }

  return Number(
    ((value / total) * 100).toFixed(1)
  );
}


// ============================================================
// SINGLE-CHOICE DISTRIBUTION
// ============================================================

export function getDistribution(
  responses,
  questionId
) {
  const counts = {};

  responses.forEach((response) => {
    const answer =
      response.answers?.[questionId];

    if (
      answer === undefined ||
      answer === null ||
      answer === ""
    ) {
      return;
    }

    counts[answer] =
      (counts[answer] || 0) + 1;
  });

  return Object.entries(counts).map(
    ([value, count]) => ({
      value,
      count,
    })
  );
}


// ============================================================
// MULTIPLE-CHOICE DISTRIBUTION
// ============================================================

export function getMultipleChoiceDistribution(
  responses,
  questionId
) {
  const counts = {};

  responses.forEach((response) => {
    const answers =
      response.answers?.[questionId];

    if (!Array.isArray(answers)) {
      return;
    }

    answers.forEach((answer) => {
      counts[answer] =
        (counts[answer] || 0) + 1;
    });
  });

  return Object.entries(counts).map(
    ([value, count]) => ({
      value,
      count,
    })
  );
}


// ============================================================
// LANGUAGE DISTRIBUTION
// ============================================================

export function getLanguageDistribution(
  responses
) {
  const counts = {};

  responses.forEach((response) => {
    const language = response.language;

    if (!language) {
      return;
    }

    counts[language] =
      (counts[language] || 0) + 1;
  });

  const total = responses.length;

  return Object.entries(counts)
    .map(([language, count]) => ({
      language,
      count,
      percentage: calculatePercentage(
        count,
        total
      ),
    }))
    .sort(
      (a, b) => b.count - a.count
    );
}


// ============================================================
// SCALE ANALYTICS
// ============================================================

export function getScaleAnalytics(
  responses,
  questionId
) {
  const values = responses
    .map(
      (response) =>
        response.answers?.[questionId]
    )
    .filter(
      (value) =>
        value !== undefined &&
        value !== null &&
        value !== ""
    )
    .map(Number)
    .filter(
      (value) =>
        !Number.isNaN(value)
    );

  if (values.length === 0) {
    return {
      count: 0,
      average: 0,
      min: 0,
      max: 0,
      median: 0,
    };
  }

  const sorted = [...values].sort(
    (a, b) => a - b
  );

  const average =
    values.reduce(
      (sum, value) => sum + value,
      0
    ) / values.length;

  const middle =
    Math.floor(sorted.length / 2);

  const median =
    sorted.length % 2 === 0
      ? (
          sorted[middle - 1] +
          sorted[middle]
        ) / 2
      : sorted[middle];

  return {
    count: values.length,

    average: Number(
      average.toFixed(2)
    ),

    min: Math.min(...values),

    max: Math.max(...values),

    median: Number(
      median.toFixed(2)
    ),
  };
}


// ============================================================
// GRID ANALYTICS
// ============================================================

export function getGridAnalytics(
  responses,
  questionId
) {
  const results = {};

  responses.forEach((response) => {
    const answer =
      response.answers?.[questionId];

    if (
      !answer ||
      typeof answer !== "object" ||
      Array.isArray(answer)
    ) {
      return;
    }

    Object.entries(answer).forEach(
      ([row, value]) => {
        if (!results[row]) {
          results[row] = {};
        }

        results[row][value] =
          (results[row][value] || 0) + 1;
      }
    );
  });

  return results;
}


// ============================================================
// GRID SCORE ANALYTICS
// ============================================================

export function getGridScoreAnalytics(
  responses,
  questionId,
  columns
) {
  const scoreMap = {};

  columns.forEach((column) => {
    scoreMap[column.value] =
      column.score;
  });

  const results = {};

  responses.forEach((response) => {
    const answer =
      response.answers?.[questionId];

    if (
      !answer ||
      typeof answer !== "object" ||
      Array.isArray(answer)
    ) {
      return;
    }

    Object.entries(answer).forEach(
      ([row, value]) => {
        const score =
          scoreMap[value];

        if (
          score === undefined ||
          score === null
        ) {
          return;
        }

        if (!results[row]) {
          results[row] = {
            count: 0,
            totalScore: 0,
            average: 0,
          };
        }

        results[row].count += 1;
        results[row].totalScore += score;
      }
    );
  });

  Object.entries(results).forEach(
    ([row, result]) => {
      result.average = Number(
        (
          result.totalScore /
          result.count
        ).toFixed(2)
      );
    }
  );

  return results;
}


// ============================================================
// SORT DISTRIBUTION
// ============================================================

export function sortDistribution(
  distribution,
  order = []
) {
  if (!order.length) {
    return [...distribution].sort(
      (a, b) =>
        b.count - a.count
    );
  }

  return [...distribution].sort(
    (a, b) => {
      const indexA =
        order.indexOf(a.value);

      const indexB =
        order.indexOf(b.value);

      // Unknown values go to the end
      if (indexA === -1) {
        return 1;
      }

      if (indexB === -1) {
        return -1;
      }

      return indexA - indexB;
    }
  );
}


// ============================================================
// TEXT RESPONSES
// ============================================================

export function getTextResponses(
  responses,
  questionId
) {
  return responses
    .map((response) => {
      const answer =
        response.answers?.[questionId];

      if (
        typeof answer !== "string" ||
        answer.trim() === ""
      ) {
        return null;
      }

      return {
        id: response.id,
        language: response.language,
        answer,
        createdAt:
          response.created_at,
      };
    })
    .filter(Boolean);
}


// ============================================================
// QUESTION RESPONSE RATE
// ============================================================

export function getQuestionResponseRate(
  responses,
  questionId
) {
  if (!responses.length) {
    return 0;
  }

  const answered = responses.filter(
    (response) => {
      const answer =
        response.answers?.[questionId];

      if (
        answer === undefined ||
        answer === null
      ) {
        return false;
      }

      if (
        typeof answer === "string"
      ) {
        return answer.trim() !== "";
      }

      if (Array.isArray(answer)) {
        return answer.length > 0;
      }

      if (
        typeof answer === "object"
      ) {
        return (
          Object.keys(answer).length > 0
        );
      }

      return true;
    }
  );

  return calculatePercentage(
    answered.length,
    responses.length
  );
}


// ============================================================
// YES PERCENTAGE
// ============================================================

export function getYesPercentage(
  responses,
  questionId
) {
  const distribution =
    getDistribution(
      responses,
      questionId
    );

  const yes =
    distribution.find(
      (item) => item.value === "yes"
    );

  const total =
    distribution.reduce(
      (sum, item) =>
        sum + item.count,
      0
    );

  return calculatePercentage(
    yes?.count || 0,
    total
  );
}