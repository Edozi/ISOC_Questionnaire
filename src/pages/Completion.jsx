import Button from "../components/Button";

function Completion({ content, onRestart }) {
  const completion = content;

  return (
    <main className="completion-page">
      <div className="completion-card">

        <div className="completion-icon">
          ✓
        </div>

        <span className="completion-label">
          {completion.label}
        </span>

        <h1>
          {completion.titleLine1}
          <br />
          <span>{completion.titleHighlight}</span>
        </h1>

        <p>
          {completion.description}
        </p>

        <Button onClick={onRestart}>
          {completion.restart}
        </Button>

      </div>
    </main>
  );
}

export default Completion;