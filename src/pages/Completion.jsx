import Button from "../components/Button";

function Completion({ onRestart }) {
  return (
    <main className="completion-page">
      <div className="completion-card">
        <div className="completion-icon">
          ✓
        </div>

        <span className="completion-label">
          Journey complete
        </span>

        <h1>
          Thank you for
          <br />
          sharing <span>your story.</span>
        </h1>

        <p>
          Your responses have been recorded. Every answer
          helps us better understand young people's
          perspectives, goals and aspirations.
        </p>

        {/* <Button onClick={onRestart}>
          Start again
        </Button> */}
      </div>
    </main>
  );
}

export default Completion;