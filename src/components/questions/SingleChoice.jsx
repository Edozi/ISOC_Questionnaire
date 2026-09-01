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
          key={option.value}
          option={option}
          selected={value === option.value}
          onClick={() =>
            onChange(option.value)
          }
        />
      ))}
    </div>
  );
}

export default SingleChoice;