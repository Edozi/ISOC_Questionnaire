import Button from "../components/Button";

function Submitting({
  error,
  onRetry,
}) {
  if (error) {
    return (
      <main className="completion-page">
        <div className="completion-card">

          <div className="completion-icon">
            !
          </div>

          <span className="completion-label">
            Submission issue
          </span>

          <h1>
            We couldn't save
            <br />
            <span>your responses yet.</span>
          </h1>

          <p>
            <p>
                Your answers are still safely stored in this
                session. Please try submitting again.
            </p>
          </p>

          <Button onClick={onRetry}>
            Try again
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

        <span className="completion-label">
          Saving your contribution
        </span>

        <h1>
          Recording
          <br />
          <span>your responses.</span>
        </h1>

        <p>
          Please wait a moment while we securely
          save your survey responses.
        </p>

      </div>
    </main>
  );
}


export default Submitting;