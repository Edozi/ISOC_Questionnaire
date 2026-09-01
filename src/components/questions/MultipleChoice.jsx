import QuestionOption from "../QuestionOption";

function MultipleChoice({
  options,
  value = [],
  onChange,
}) {
  const handleToggle = (optionValue) => {
    if (value.includes(optionValue)) {
      onChange(
        value.filter(
          (item) => item !== optionValue
        )
      );
    } else {
      onChange([
        ...value,
        optionValue,
      ]);
    }
  };

  return (
    <div className="options">
      {options.map((option) => (
        <QuestionOption
          key={option.value}
          option={option}
          selected={value.includes(
            option.value
          )}
          onClick={() =>
            handleToggle(option.value)
          }
        />
      ))}
    </div>
  );
}

export default MultipleChoice;