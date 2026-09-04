import { supabase } from "./supabase";

const apiUrl = import.meta.env.VITE_API_URL;

export async function adminFetch(
  endpoint,
  options = {}
) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    throw new Error(
      "AUTHENTICATION_REQUIRED"
    );
  }

  const response = await fetch(
    `${apiUrl}${endpoint}`,
    {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );

  if (response.status === 401) {
    await supabase.auth.signOut();

    throw new Error(
      "AUTHENTICATION_REQUIRED"
    );
  }

  if (response.status === 403) {
    throw new Error(
      "ADMIN_ACCESS_REQUIRED"
    );
  }

  if (!response.ok) {
    throw new Error(
      `API request failed with status ${response.status}`
    );
  }

  return response;
}