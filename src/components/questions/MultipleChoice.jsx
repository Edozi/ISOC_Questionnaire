import QuestionOption from "../QuestionOption";

function SingleChoice({
  options,
  value,
  onChange,
}) {
  return (
    <div className="options">
      {options.map((option) => (
        <QuestionOption
          key={option}
          option={option}
          selected={value === option}
          onClick={() => onChange(option)}
        />
      ))}
    </div>
  );
}

export default SingleChoice;