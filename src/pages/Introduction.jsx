import Button from "../components/Button";

function Introduction({ onStart }) {
return ( <main className="introduction-page"> <div className="introduction-card">

    <span className="introduction-label">
      Before we begin
    </span>

    <h1>
      Your experience
      <br />
      <span>matters.</span>
    </h1>

    <div className="introduction-content">
      <p>
        This survey is being conducted by the International Student
        Orientation Camp (ISOC) Organizers to collect information about
        the experiences, educational backgrounds, employment status, and
        quality of life of foreign nationals residing in İzmir, Türkiye.
      </p>

      <p>
        The information gathered will help us better understand the
        demographics, challenges, opportunities, and overall experiences
        of foreigners living in İzmir. The findings will support
        evidence-based initiatives, programs, and future research aimed at
        improving the well-being, integration, and support services
        available to the international community.
      </p>

      <p>
        Your participation is voluntary, and all responses will remain
        anonymous and confidential. No personally identifiable information
        will be collected, and the data will be used strictly for research,
        planning, and statistical purposes.
      </p>

      <p>
        The survey takes approximately <strong>5–7 minutes</strong> to
        complete. We kindly ask that you answer each question honestly
        based on your personal experiences.
      </p>
    </div>

    <div className="introduction-info">
      <span>✦</span>
      <p>
        Thank you for your valuable time and contribution.
      </p>
    </div>

    <Button onClick={onStart}>
      Begin survey →
    </Button>

  </div>
</main>


);
}

export default Introduction;
