import Button from "../components/Button";

function Submitting({ content, error, onRetry }) {
  if (error) {
    return (
      <main className="completion-page">
        <div className="completion-card">
          <div className="completion-icon">!</div>

          <span className="completion-label">{content.errorLabel}</span>

          <h1>
            {content.errorTitleLine1}
            <br />
            <span>{content.errorTitleHighlight}</span>
          </h1>

          <p>{content.errorDescription}</p>

          <Button onClick={onRetry}>
            {content.retryButton}
            <span> →</span>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="completion-page">
      <div className="completion-card">
        <div className="completion-icon loading-icon">
          <span />
        </div>

        <span className="completion-label">{content.loadingLabel}</span>

        <h1>
          {content.loadingTitleLine1}
          <br />
          <span>{content.loadingTitleHighlight}</span>
        </h1>

        <p>{content.loadingDescription}</p>
      </div>
    </main>
  );
}

export default Submitting;