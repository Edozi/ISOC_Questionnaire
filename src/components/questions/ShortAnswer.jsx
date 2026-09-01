function ShortAnswer({
  value = "",
  onChange,
  placeholder,
  
}) {
  return (
    <input
      type="text"
      className="text-input"
      value={value || ""}
      onChange={(event) =>
        onChange(event.target.value)
      }
      placeholder={placeholder}
    />
  );
}

export default ShortAnswer;