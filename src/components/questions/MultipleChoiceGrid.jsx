function MultipleChoiceGrid({
  rows,
  columns,
  value = {},
  onChange,
}) {
  const handleSelect = (row, column) => {
    onChange({
      ...value,
      [row]: column,
    });
  };

  return (
    <div className="grid-question">
      <div className="grid-table">
        <div className="grid-header grid-row">
          <div className="grid-row-label" />

          {columns.map((column) => (
            <div
              key={column}
              className="grid-column-label"
            >
              {column}
            </div>
          ))}
        </div>

        {rows.map((row) => (
          <div
            key={row}
            className="grid-row"
          >
            <div className="grid-row-label">
              {row}
            </div>

            {columns.map((column) => (
              <div
                key={column}
                className="grid-cell"
              >
                <button
                  type="button"
                  className={`grid-radio ${
                    value[row] === column
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(row, column)
                  }
                  aria-label={`${row}: ${column}`}
                >
                  {value[row] === column && (
                    <span />
                  )}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultipleChoiceGrid;