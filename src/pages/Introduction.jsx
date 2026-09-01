import Button from "../components/Button";

function Introduction({ content, onContinue }) {
  const introduction = content;

  return (
    <main className="introduction-page">

      <div className="introduction-card">
        <span className="introduction-label">
          {introduction.label}
        </span>

        <h1>
          {introduction.titleLine1}
          <br />
          <span>{introduction.titleHighlight}</span>
        </h1>

        <div className="introduction-content">
          <p>{introduction.paragraph1}</p>

          <p>{introduction.paragraph2}</p>

          <p>{introduction.paragraph3}</p>

          <p>{introduction.paragraph4}</p>

          <p className="introduction-info">
            {introduction.thankYou}
          </p>
        </div>

        <Button onClick={onContinue}>
          {introduction.beginButton}
          <span> →</span>
        </Button>
      </div>
    </main>
  );
}

export default Introduction;