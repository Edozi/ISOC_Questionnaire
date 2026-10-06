import { useState } from "react";

import LanguageSelector from "../components/LanguageSelector";
import RegistrationSuccess from "../components/registration/RegistrationSuccess";

function RegistrationSuccessPage() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="registration-wrapper">

      <div className="registration-language">
        <LanguageSelector
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>

      <RegistrationSuccess
        language={language}
      />

    </div>
  );
}

export default RegistrationSuccessPage;