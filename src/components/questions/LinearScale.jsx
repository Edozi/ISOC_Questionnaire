function LinearScale({
  min,
  max,
  minLabel,
  maxLabel,
  value,
  onChange,
}) {
  const values = Array.from(
    { length: max - min + 1 },
    (_, index) => min + index
  );

  return (
    <div className="linear-scale">
      <div className="scale-options">
        {values.map((number) => (
          <button
            key={number}
            type="button"
            className={`scale-option ${
              value === number ? "selected" : ""
            }`}
            onClick={() => onChange(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <div className="scale-labels">
        <span>
          {min} — {minLabel}
        </span>

        <span>
          {max} — {maxLabel}
        </span>
      </div>
    </div>
  );
}

export default LinearScale;