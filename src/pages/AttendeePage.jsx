import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LanguageSelector from "../components/LanguageSelector";
import AttendeeCard from "../components/attendee/AttendeeCard";
import attendeeTranslations from "../data/attendee.languages";

function AttendeePage() {
  const { token } = useParams();

  const [language, setLanguage] = useState("en");
  const [attendee, setAttendee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const t =
    attendeeTranslations[language] ||
    attendeeTranslations.en;

  useEffect(() => {
    async function loadAttendee() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/registrations/${token}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.detail || t.notFound
          );
        }

        setAttendee(data.data);
      } catch (error) {
        console.error(error);
        setError(error.message || t.notFound);
      } finally {
        setLoading(false);
      }
    }

    loadAttendee();
  }, [token]);

  if (loading) {
    return (
      <main className="attendee-page">
        <p>{t.loading}</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="attendee-page">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="attendee-page">
      <div className="attendee-language">
        <LanguageSelector
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>

      <AttendeeCard
        attendee={attendee}
        language={language}
      />
    </main>
  );
}

export default AttendeePage;