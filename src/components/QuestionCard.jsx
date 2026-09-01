import SingleChoice from "./questions/SingleChoice";
import MultipleChoice from "./questions/MultipleChoice";
import ShortAnswer from "./questions/ShortAnswer";
import LongAnswer from "./questions/LongAnswer";
import LinearScale from "./questions/LinearScale";
import MultipleChoiceGrid from "./questions/MultipleChoiceGrid";

function QuestionCard({
  question,
  value,
  onChange,
  content,
}) {
  const renderQuestionInput = () => {
    switch (question.type) {
      case "single-choice":
        return (
          <SingleChoice
            options={question.options}
            value={value}
            onChange={onChange}
          />
        );

      case "multiple-choice":
        return (
          <MultipleChoice
            options={question.options}
            value={value}
            onChange={onChange}
          />
        );

      case "short-answer":
        return (
          <ShortAnswer
            value={value}
            onChange={onChange}
          />
        );

      case "long-answer":
        return (
          <LongAnswer
            value={value}
            onChange={onChange}
          />
        );

      case "linear-scale":
        return (
          <LinearScale
            min={question.min}
            max={question.max}
            minLabel={question.minLabel}
            maxLabel={question.maxLabel}
            value={value}
            onChange={onChange}
          />
        );

      case "multiple-choice-grid":
        return (
          <MultipleChoiceGrid
            rows={question.rows}
            columns={question.columns}
            value={value}
            onChange={onChange}
          />
        );

      default:
        return <p>Unsupported question type.</p>;
    }
  };

  return (
    <div className="question-card">
      <div className="question-number">
        {content.question}
      </div>

      <h1>{question.question}</h1>

      {question.description && (
        <p className="question-description">
          {question.description}
        </p>
      )}

      {renderQuestionInput()}
    </div>
  );
}

export default QuestionCard;