const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000";


const sleep = (milliseconds) =>
  new Promise((resolve) =>
    setTimeout(resolve, milliseconds)
  );


async function fetchWithTimeout(
  url,
  options = {},
  timeout = 10000
) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}


/*
 * Wake up the backend silently.
 *
 * Designed for Render cold starts.
 */
export async function wakeUpBackend(
  maxRetries = 6,
  retryDelay = 5000
) {
  for (
    let attempt = 1;
    attempt <= maxRetries;
    attempt++
  ) {
    try {
      console.log(
        `Backend wake-up attempt ${attempt}/${maxRetries}`
      );

      const response =
        await fetchWithTimeout(
          `${API_URL}/health`,
          {},
          30000
        );

      if (response.ok) {
        console.log(
          "Backend is awake."
        );

        return true;
      }
    } catch (error) {
      console.log(
        `Backend not ready yet. Attempt ${attempt}.`
      );
    }

    if (attempt < maxRetries) {
      await sleep(retryDelay);
    }
  }

  console.warn(
    "Backend did not respond during pre-warming."
  );

  return false;
}


/*
 * Submit survey response with retry logic.
 *
 * This is the actual failover mechanism.
 */
export async function submitSurveyResponse(
  language,
  answers,
  maxRetries = 5,
  retryDelay = 3000
) {
  let lastError;

  for (
    let attempt = 1;
    attempt <= maxRetries;
    attempt++
  ) {
    try {
      console.log(
        `Submission attempt ${attempt}/${maxRetries}`
      );

      const response =
        await fetchWithTimeout(
          `${API_URL}/api/responses`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              language,
              answers,
            }),
          },
          30000
        );

      if (!response.ok) {
        throw new Error(
          `Submission failed with status ${response.status}`
        );
      }

      const data = await response.json();

      console.log(
        "Survey submitted successfully."
      );

      return data;

    } catch (error) {
      lastError = error;

      console.warn(
        `Submission attempt ${attempt} failed.`,
        error.message
      );

      if (attempt < maxRetries) {
        await sleep(retryDelay);
      }
    }
  }

  throw new Error(
    lastError?.message ||
      "Unable to submit survey response."
  );
}