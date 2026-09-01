import { useMemo, useState } from "react";

import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import SectionIndicator from "../components/SectionIndicator";

function Questionnaire({
  questionnaire,
  content,
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

  /*
   * Find the section containing the
   * current question.
   */
  const currentSectionIndex =
    questionnaire.sections.findIndex(
      (section) =>
        section.id === currentQuestion.sectionId
    );

  /*
   * Calculate questionnaire progress.
   */
  const progress =
    ((safeQuestionIndex + 1) /
      visibleQuestions.length) *
    100;

  /*
   * Get the current answer.
   */
  const currentAnswer =
    answers[currentQuestion.id];

  /*
   * Update the current answer.
   */
  const handleAnswerChange = (value) => {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: value,
    }));
  };

  /*
   * Validate the current answer.
   */
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

  /*
   * Move to the next question or finish.
   */
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

  /*
   * Move back to the previous question.
   */
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
          <span className="brand-icon">
            ✦
          </span>

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

        <ProgressBar
          progress={progress}
        />

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
            content={content}
          />
        </div>

      </section>

      <footer className="question-navigation">

        <Button
          variant="secondary"
          onClick={handleBack}
          disabled={safeQuestionIndex === 0}
        >
          ← {content.back}
        </Button>

        <Button
          onClick={handleNext}
          disabled={!isAnswerValid()}
        >
          {safeQuestionIndex ===
          visibleQuestions.length - 1
            ? content.submit
            : content.next}

          <span>→</span>
        </Button>

      </footer>

    </main>
  );
}

export default Questionnaire;