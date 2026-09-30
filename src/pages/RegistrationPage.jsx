import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LanguageSelector from "../components/LanguageSelector";
import Registration from "../components/registration/Registration";

import { wakeUpBackend } from "../api/surveyApi";

function RegistrationPage() {
  const [language, setLanguage] = useState("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    wakeUpBackend();
    }, []);

  async function handleRegistration(formData) {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Registration failed."
        );
      }

      const attendee = data.data?.[0];

      if (!attendee?.attendee_token) {
        throw new Error(
          "Registration succeeded, but attendee information was not returned."
        );
      }

      navigate(`/attendee/${attendee.attendee_token}`);
    } catch (error) {
      console.error("Registration error:", error);

      setError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="registration-wrapper">
      <div className="registration-language">
        <LanguageSelector
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>

      <Registration
        language={language}
        onSubmit={handleRegistration}
        isSubmitting={isSubmitting}
        error={error}
      />
    </div>
  );
}

export default RegistrationPage;