import { useMemo, useState } from "react";

import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import SectionIndicator from "../components/SectionIndicator";

function Questionnaire({
  questionnaire,
  onComplete,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [answers, setAnswers] = useState({});

  /*
   * Flatten all questions and attach section information.
   */
  const allQuestions = useMemo(() => {
    return questionnaire.sections.flatMap(
      (section) =>
        section.questions.map((question) => ({
          ...question,
          sectionId: section.id,
        }))
    );
  }, [questionnaire]);

  /*
   * Filter questions according to conditional logic.
   */
  const visibleQuestions = useMemo(() => {
    return allQuestions.filter((question) => {
      if (!question.condition) {
        return true;
      }

      const {
        questionId,
        equals,
      } = question.condition;

      return answers[questionId] === equals;
    });
  }, [allQuestions, answers]);

  /*
   * Prevent index problems when conditional
   * questions appear/disappear.
   */
  const safeQuestionIndex = Math.min(
    currentQuestionIndex,
    visibleQuestions.length - 1
  );

  const currentQuestion =
    visibleQuestions[safeQuestionIndex];

  const currentSectionIndex =
    questionnaire.sections.findIndex(
      (section) =>
        section.id === currentQuestion.sectionId
    );

  const progress =
    ((safeQuestionIndex + 1) /
      visibleQuestions.length) *
    100;

  const currentAnswer =
    answers[currentQuestion.id];

  const handleAnswerChange = (value) => {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: value,
    }));
  };

  const isAnswerValid = () => {
    if (!currentQuestion.required) {
      return true;
    }

    if (
      currentAnswer === undefined ||
      currentAnswer === null
    ) {
      return false;
    }

    if (typeof currentAnswer === "string") {
      return currentAnswer.trim().length > 0;
    }

    if (Array.isArray(currentAnswer)) {
      return currentAnswer.length > 0;
    }

    if (
      typeof currentAnswer === "object"
    ) {
      return (
        Object.keys(currentAnswer).length ===
        currentQuestion.rows?.length
      );
    }

    return true;
  };

  const handleNext = () => {
    if (!isAnswerValid()) {
      return;
    }

    const isLastQuestion =
      safeQuestionIndex ===
      visibleQuestions.length - 1;

    if (isLastQuestion) {
      onComplete(answers);
      return;
    }

    setCurrentQuestionIndex(
      (previous) => previous + 1
    );
  };

  const handleBack = () => {
    if (safeQuestionIndex === 0) {
      return;
    }

    setCurrentQuestionIndex(
      (previous) => previous - 1
    );
  };

  return (
    <main className="questionnaire-page">
      <header className="questionnaire-header">
        <div className="brand">
          <span className="brand-icon">✦</span>
          <span>Path</span>
        </div>

        <div className="question-counter">
          {String(
            safeQuestionIndex + 1
          ).padStart(2, "0")}{" "}
          /{" "}
          {String(
            visibleQuestions.length
          ).padStart(2, "0")}
        </div>
      </header>

      <div className="questionnaire-progress">
        <ProgressBar progress={progress} />

        <SectionIndicator
          sections={questionnaire.sections}
          currentSection={currentSectionIndex}
        />
      </div>

      <section className="question-area">
        <div
          className="question-transition"
          key={currentQuestion.id}
        >
          <QuestionCard
            question={currentQuestion}
            value={currentAnswer}
            onChange={handleAnswerChange}
          />
        </div>
      </section>

      <footer className="question-navigation">
        <Button
          variant="secondary"
          onClick={handleBack}
          disabled={safeQuestionIndex === 0}
        >
          ← Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={!isAnswerValid()}
        >
          {safeQuestionIndex ===
          visibleQuestions.length - 1
            ? "Finish"
            : "Next"}

          <span>→</span>
        </Button>
      </footer>
    </main>
  );
}

export default Questionnaire;