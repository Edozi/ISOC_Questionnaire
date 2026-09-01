function LongAnswer({
  value = "",
  onChange,
  placeholder,
}) {
  return (
    <textarea
      className="text-area"
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      placeholder={placeholder}
      rows="6"
    />
  );
}

export default LongAnswer;