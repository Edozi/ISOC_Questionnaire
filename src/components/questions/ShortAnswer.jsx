function ShortAnswer({
  value = "",
  onChange,
}) {
  return (
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      placeholder="Type your answer here..."
    />
  );
}

export default ShortAnswer;