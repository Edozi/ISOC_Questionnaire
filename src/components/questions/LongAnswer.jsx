function LongAnswer({
  value = "",
  onChange,
}) {
  return (
    <textarea
      className="text-area"
      value={value}
      onChange={(event) =>
        onChange(event.target.value)
      }
      placeholder="Share your thoughts here..."
      rows="6"
    />
  );
}

export default LongAnswer;