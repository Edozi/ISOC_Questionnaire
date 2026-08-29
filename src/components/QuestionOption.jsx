function QuestionOption({
  option,
  selected,
  onClick,
}) {
  return (
    <button
      className={`question-option ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      <span className="option-indicator">
        {selected && <span />}
      </span>

      <span className="option-text">
        {option}
      </span>

      {selected && (
        <span className="option-check">
          ✓
        </span>
      )}
    </button>
  );
}

export default QuestionOption;