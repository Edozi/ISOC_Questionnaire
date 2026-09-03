export function countAnswers(
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

    if (Array.isArray(answer)) {
      answer.forEach((item) => {
        counts[item] =
          (counts[item] || 0) + 1;
      });

      return;
    }

    counts[answer] =
      (counts[answer] || 0) + 1;
  });

  return Object.entries(counts).map(
    ([name, value]) => ({
      name,
      value,
    })
  );
}


export function calculateAverage(
  responses,
  questionId
) {
  const values = responses
    .map(
      (response) =>
        Number(
          response.answers?.[questionId]
        )
    )
    .filter(
      (value) => !Number.isNaN(value)
    );

  if (values.length === 0) {
    return 0;
  }

  const total = values.reduce(
    (sum, value) => sum + value,
    0
  );

  return total / values.length;
}


export function calculatePercentage(
  responses,
  questionId,
  expectedValue
) {
  if (!responses.length) {
    return 0;
  }

  const matching =
    responses.filter(
      (response) =>
        response.answers?.[questionId] ===
        expectedValue
    ).length;

  return (
    (matching / responses.length) * 100
  );
}


export function calculateGridAverages(
  responses,
  questionId
) {
  const rowValues = {};

  responses.forEach((response) => {
    const answer =
      response.answers?.[questionId];

    if (!answer) {
      return;
    }

    Object.entries(answer).forEach(
      ([row, value]) => {
        if (!rowValues[row]) {
          rowValues[row] = [];
        }

        const scaleMap = {
          very_dissatisfied: 1,
          dissatisfied: 2,
          neutral: 3,
          satisfied: 4,
          very_satisfied: 5,
        };

        if (scaleMap[value]) {
          rowValues[row].push(
            scaleMap[value]
          );
        }
      }
    );
  });

  return Object.entries(rowValues).map(
    ([name, values]) => ({
      name,
      value:
        values.reduce(
          (sum, value) => sum + value,
          0
        ) / values.length,
    })
  );
}