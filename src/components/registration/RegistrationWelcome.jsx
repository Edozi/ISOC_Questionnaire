import registrationWelcomeTranslations from "../../data/registrationWelcome.languages";

function RegistrationWelcome({
  language = "en",
  onRegister,
}) {
  const t =
    registrationWelcomeTranslations[language] ||
    registrationWelcomeTranslations.en;

  return (
    <main className="registration-welcome-page">
      {/* Background shapes */}
      <div className="registration-background-shape registration-shape-one" />
      <div className="registration-background-shape registration-shape-two" />

      <section className="registration-welcome-card">

        {/* =========================
            HERO
        ========================= */}

        <header className="registration-welcome-header">
          <img
            src="/logo-original.png"
            alt="Brightland"
            className="registration-logo"
          />

          <div className="registration-label">
            ISOC 2.0
          </div>

          <h1>{t.title}</h1>

          <p className="registration-welcome-subtitle">
            {t.subtitle}
          </p>

          <p className="registration-welcome-description">
            {t.description}
          </p>
        </header>


        {/* =========================
            EVENT DETAILS
        ========================= */}

        <section className="registration-event-details">
          <div className="registration-detail-card">
            <span className="registration-detail-icon">
              📅
            </span>

            <span className="registration-detail-label">
              {t.event.dateLabel}
            </span>

            <strong>
              {t.event.date}
            </strong>
          </div>

          <div className="registration-detail-card">
            <span className="registration-detail-icon">
              🕐
            </span>

            <span className="registration-detail-label">
              {t.event.timeLabel}
            </span>

            <strong>
              {t.event.time}
            </strong>
          </div>

          <div className="registration-detail-card">
            <span className="registration-detail-icon">
              📍
            </span>

            <span className="registration-detail-label">
              {t.event.locationLabel}
            </span>

            <strong>
              {t.event.location}
            </strong>
          </div>
        </section>


        {/* =========================
            IMPORTANT NOTICE
        ========================= */}

        <section className="registration-important">
          <strong>
            {t.important}
          </strong>
        </section>


        {/* =========================
            WHY ATTEND
        ========================= */}

        <section className="registration-section">
          <div className="registration-section-heading">
            <span>
              {t.whyEyebrow}
            </span>

            <h2>
              {t.whyTitle}
            </h2>
          </div>

          <div className="registration-reasons">
            {t.reasons.map((reason) => (
              <article
                className="registration-reason-card"
                key={reason.title}
              >
                <div className="registration-reason-icon">
                  {reason.icon}
                </div>

                <div>
                  <h3>
                    {reason.title}
                  </h3>

                  <p>
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* =========================
            WHO CAN ATTEND
        ========================= */}

        <section className="registration-section">
          <div className="registration-section-heading">
            <span>
              {t.attendEyebrow}
            </span>

            <h2>
              {t.attendTitle}
            </h2>
          </div>

          <div className="registration-audience-grid">
            {t.audience.map((item) => (
              <div
                className="registration-audience-card"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </section>


        {/* =========================
            INSTITUTIONAL COLLABORATION
        ========================= */}

        <section className="registration-section registration-collaboration">
          <div className="registration-section-heading">
            <span>
              {t.collaborationEyebrow}
            </span>

            <h2>
              {t.collaborationTitle}
            </h2>

            <p>
              {t.collaborationDescription}
            </p>
          </div>

          <div className="registration-collaboration-logos">
            <div className="registration-sponsor">
              <img
                src="/logos/Sporbakanligi-logo.png"
                alt="Genclik ve Spor Bakanligi"
              />
            </div>

            <div className="registration-sponsor">
              <img
                src="/logos/Genclik-logo.png"
                alt="Genclik Merkezi"
              />
            </div>

            <div className="registration-sponsor">
              <img
                src="/logos/Brightland-logo.png"
                alt="BrightLand"
              />
            </div>
          </div>
        </section>


        {/* =========================
            FINAL CTA
        ========================= */}

        <section className="registration-final">
          <div>
            <span>
              {t.ctaEyebrow}
            </span>

            <h2>
              {t.ctaTitle}
            </h2>

            <p>
              {t.ctaDescription}
            </p>
          </div>

          <button
            type="button"
            className="button button-primary registration-welcome-button"
            onClick={onRegister}
          >
            {t.register}
          </button>
        </section>

      </section>
    </main>
  );
}

export default RegistrationWelcome;