const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000";


export async function getSurveyResponses() {
  const response = await fetch(
    `${API_URL}/api/admin/responses`
  );

  if (!response.ok) {
    throw new Error(
      "Unable to load survey responses."
    );
  }

  return response.json();
}