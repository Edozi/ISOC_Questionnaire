import Button from "../components/Button";

function Welcome({ questionnaire, onStart }) {
return ( <main className="welcome-page"> <div className="welcome-background-shape shape-one" /> <div className="welcome-background-shape shape-two" />

  <div className="welcome-content">
    <div className="brand-mark">
      <span>✦</span>
    </div>

    <div className="welcome-badge">
      ISOC Research Survey · 2026
    </div>

    <h1>
      Share
      <br />
      <span>your experience.</span>
    </h1>

    <p>
      Help us better understand the experiences, challenges, and
      opportunities of foreign nationals living in İzmir, Türkiye.
    </p>

    <Button onClick={onStart}>
      Let's begin <span>→</span>
    </Button>

    <div className="welcome-note">
      Takes approximately 5–7 minutes
    </div>
  </div>
</main>


);
}

export default Welcome;
