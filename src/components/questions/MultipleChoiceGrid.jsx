function MultipleChoiceGrid({
  rows,
  columns,
  value = {},
  onChange,
}) {
  const handleSelect = (rowValue, columnValue) => {
    onChange({
      ...value,
      [rowValue]: columnValue,
    });
  };

  return (
    <div className="grid-question">
      <div className="grid-table">

        <div className="grid-header grid-row">
          <div className="grid-row-label" />

          {columns.map((column) => (
            <div
              key={column.value}
              className="grid-column-label"
            >
              {column.label}
            </div>
          ))}
        </div>

        {rows.map((row) => (
          <div
            key={row.value}
            className="grid-row"
          >
            <div className="grid-row-label">
              {row.label}
            </div>

            {columns.map((column) => (
              <div
                key={`${row.value}-${column.value}`}
                className="grid-cell"
              >
                <button
                  type="button"
                  className={`grid-radio ${
                    value[row.value] ===
                    column.value
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      row.value,
                      column.value
                    )
                  }
                  aria-label={`${row.label}: ${column.label}`}
                >
                  {value[row.value] ===
                    column.value && (
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