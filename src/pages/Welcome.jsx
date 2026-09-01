import Button from "../components/Button";
import LanguageSelector from "../components/LanguageSelector";

function Welcome({
content,
language,
onLanguageChange,
onStart,
}) {
return (
<main className="welcome-page">
<div className="welcome-background-shape shape-one" />
<div className="welcome-background-shape shape-two" />

  <div className="welcome-language">
    <LanguageSelector
      language={language}
      onLanguageChange={onLanguageChange}
    />
  </div>

  <div className="welcome-content">
    <div className="brand-mark">
      <span>✦</span>
    </div>

    <div className="welcome-badge">
      {content.badge}
    </div>

    <h1>
      {content.titleLine1}
      <br />
      <span>{content.titleHighlight}</span>
    </h1>

    <p>
      {content.description}
    </p>

    <Button onClick={onStart}>
      {content.startButton} <span>→</span>
    </Button>

    <div className="welcome-note">
      {content.duration}
    </div>
  </div>
</main>

);
}

export default Welcome;