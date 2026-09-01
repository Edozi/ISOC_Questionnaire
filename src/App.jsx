import { useEffect, useState } from "react";

// Questionnaires
import questionnaireEN from "./data/questionnaires/questionnaire.en";
import questionnaireTR from "./data/questionnaires/questionnaire.tr";
import questionnaireFR from "./data/questionnaires/questionnaire.fr";
import questionnaireRU from "./data/questionnaires/questionnaire.ru";

// Translations
import translationsEN from "./data/translations/en";
import translationsTR from "./data/translations/tr";
import translationsFR from "./data/translations/fr";
import translationsRU from "./data/translations/ru";

import Welcome from "./pages/Welcome";
import Introduction from "./pages/Introduction";
import Questionnaire from "./pages/Questionnaire";
import Completion from "./pages/Completion";
import Submitting from "./pages/Submitting";

import {
  wakeUpBackend,
  submitSurveyResponse,
} from "./api/surveyApi";

const questionnaires = {
en: questionnaireEN,
tr: questionnaireTR,
fr: questionnaireFR,
ru: questionnaireRU,
};

const translations = {
en: translationsEN,
tr: translationsTR,
fr: translationsFR,
ru: translationsRU,
};

function App() {
const [screen, setScreen] = useState("welcome");
const [language, setLanguage] = useState("en");
const [answers, setAnswers] = useState({});
const [submissionError, setSubmissionError] = useState(null);

const questionnaire = questionnaires[language];
const t = translations[language];

/*
   * Silently wake up the Render backend.
   *
   * This does not block the UI.
   */
  useEffect(() => {
    wakeUpBackend();
  }, []);

const handleStart = () => {
setScreen("introduction");
};

const handleBeginSurvey = () => {
setScreen("questionnaire");
};

const handleComplete = async (
    submittedAnswers
  ) => {
    setAnswers(submittedAnswers);

    setSubmissionError(null);

    /*
     * Show submission screen immediately.
     */
    setScreen("submitting");

    try {
      await submitSurveyResponse(
        language,
        submittedAnswers
      );

      setScreen("completion");

      console.log("Language:", language);
      console.log("Submitted answers:", submittedAnswers);

    } catch (error) {
      console.error(
        "Survey submission failed:",
        error
      );

      setSubmissionError(
        error.message
      );
    }
  };


  const handleRetrySubmission =
    async () => {
      setSubmissionError(null);

      try {
        await submitSurveyResponse(
          language,
          answers
        );

        setScreen("completion");

      } catch (error) {
        setSubmissionError(
          error.message
        );
      }
    };



const handleRestart = () => {
setAnswers({});
setSubmissionError(null);
setScreen("welcome");
};

if (screen === "introduction") {
return ( <Introduction
     content={t.introduction}
     onContinue={handleBeginSurvey}
   />
);
}

if (screen === "submitting") {
  return (
    <Submitting
      error={submissionError}
      onRetry={handleRetrySubmission}
    />
  );
}


if (screen === "questionnaire") {
return ( <Questionnaire
  questionnaire={questionnaire}
  content={t.questionnaire}
  onComplete={handleComplete}
/>
);
}

if (screen === "completion") {
return ( <Completion
     content={t.completion}
     onRestart={handleRestart}
     answers={answers}
   />
);
}

return ( <Welcome
   content={t.welcome}
   language={language}
   onLanguageChange={setLanguage}
   onStart={handleStart}
 />
);
}

export default App;



