import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LanguageSelector from "../components/LanguageSelector";
import RegistrationWelcome from "../components/registration/RegistrationWelcome";

function RegistrationWelcomePage() {
  const [language, setLanguage] = useState("en");

  const navigate = useNavigate();

  function handleRegister() {
    navigate("/registration/form");
  }

  return (
    <div className="registration-wrapper">
      <div className="registration-language">
        <LanguageSelector
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>

      <RegistrationWelcome
        language={language}
        onRegister={handleRegister}
      />
    </div>
  );
}

export default RegistrationWelcomePage;