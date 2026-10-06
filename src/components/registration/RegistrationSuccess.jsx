import { useState } from "react";

import registrationSuccessTranslations from "../../data/registrationSuccess.languages";

function RegistrationSuccess({
  language = "en",
}) {
  const t =
    registrationSuccessTranslations[language] ||
    registrationSuccessTranslations.en;

  const [isCalendarOpen, setIsCalendarOpen] =
    useState(false);

  const [shareMessage, setShareMessage] =
    useState("");

  const registrationUrl =
    `${window.location.origin}/registration`;

  function handleWhatsApp() {
    const message =
      `${t.whatsappMessage}\n\n${registrationUrl}`;

    const whatsappUrl =
      `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  async function handleInvite() {
    const message =
      `${t.inviteMessage}\n\n${registrationUrl}`;

    if (
      navigator.share &&
      typeof navigator.share === "function"
    ) {
      try {
        await navigator.share({
          title: t.calendarTitle,
          text: message,
          url: registrationUrl,
        });

        return;
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(message);

      setShareMessage(
        language === "tr"
          ? "Davet mesajı panoya kopyalandı."
          : language === "fr"
            ? "Le message d'invitation a été copié."
            : language === "ru"
              ? "Пригласительное сообщение скопировано."
              : "Invitation message copied."
      );

      setTimeout(() => {
        setShareMessage("");
      }, 3000);
    } catch (error) {
      console.error(
        "Failed to share invitation:",
        error
      );
    }
  }

  function handleGoogleCalendar() {
    const start =
      "20261107T100000";

    const end =
      "20261107T160000";

    const params =
      new URLSearchParams({
        action: "TEMPLATE",
        text: t.calendarTitle,
        dates: `${start}/${end}`,
        details: t.calendarDescription,
        location: t.event.location,
      });

    window.open(
      `https://calendar.google.com/calendar/render?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );

    setIsCalendarOpen(false);
  }

  function handleOutlookCalendar() {
    const params =
      new URLSearchParams({
        path: "/calendar/action/compose",
        rru: "addevent",
        subject: t.calendarTitle,
        startdt: "2026-11-07T10:00:00",
        enddt: "2026-11-07T16:00:00",
        body: t.calendarDescription,
        location: t.event.location,
      });

    window.open(
      `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );

    setIsCalendarOpen(false);
  }

  function handleAppleCalendar() {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//ISOC//ISOC 2.0//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:isoc-2-2026@brightlandcorp.com",
      "DTSTAMP:20261006T000000Z",
      "DTSTART:20261107T100000",
      "DTEND:20261107T160000",
      "SUMMARY:ISOC 2.0 — International Student Orientation Camp",
      "DESCRIPTION:Connect. Belong. Build. — Shaping Futures Together in Türkiye.",
      "LOCATION:KYK Bornova Girls' Student Dormitory Conference Hall, Ege University, İzmir, Türkiye",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob(
      [icsContent],
      {
        type: "text/calendar;charset=utf-8",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download = "ISOC-2.0.ics";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    setIsCalendarOpen(false);
  }

  return (
    <main className="registration-success-page">

      <div className="registration-background-shape registration-shape-one" />

      <div className="registration-background-shape registration-shape-two" />

      <section className="registration-success-card">

        {/* SUCCESS HEADER */}

        <header className="registration-success-header">

          <div className="registration-success-icon">
            ✓
          </div>

          <h1>
            {t.successTitle}
          </h1>

          <div className="registration-success-message">
            {t.successMessage}
          </div>

        </header>


        {/* EVENT DETAILS */}

        <section className="registration-success-event-details">

          <div className="registration-success-detail">

            <span>
              📅
            </span>

            <small>
              {t.event.dateLabel}
            </small>

            <strong>
              {t.event.date}
            </strong>

          </div>


          <div className="registration-success-detail">

            <span>
              🕐
            </span>

            <small>
              {t.event.timeLabel}
            </small>

            <strong>
              {t.event.time}
            </strong>

          </div>


          <div className="registration-success-detail">

            <span>
              📍
            </span>

            <small>
              {t.event.locationLabel}
            </small>

            <strong>
              {t.event.location}
            </strong>

          </div>

        </section>


        {/* ACTIONS */}

        <section className="registration-success-actions">

          <button
            type="button"
            className="button button-primary"
            onClick={() =>
              setIsCalendarOpen(true)
            }
          >
            {t.actions.calendar}
          </button>


          <button
            type="button"
            className="button button-secondary"
            onClick={handleWhatsApp}
          >
            {t.actions.whatsapp}
          </button>


          <button
            type="button"
            className="button button-secondary"
            onClick={handleInvite}
          >
            {t.actions.invite}
          </button>

        </section>


        {shareMessage && (
          <p className="registration-share-message">
            {shareMessage}
          </p>
        )}


        {/* INSTITUTIONAL PARTNERS */}

        <section className="registration-success-partners">

          <p>
            {t.partners}
          </p>

          <div className="registration-success-logos">

            <div className="registration-success-logo">
              <img
                src="/logos/Sporbakanligi-logo.png"
                alt="Gençlik ve Spor Bakanlığı"
              />
            </div>

            <div className="registration-success-logo">
              <img
                src="/logos/Genclik-logo.png"
                alt="Gençlik Merkezi"
              />
            </div>

            <div className="registration-success-logo">
              <img
                src="/logos/Brightland-logo.png"
                alt="Brightland"
              />
            </div>

          </div>

        </section>


        {/* CLOSING */}

        <section className="registration-success-closing">

          <h2>
            {t.closingTitle}
          </h2>

          <p>
            {t.closingSubtitle}
          </p>

        </section>

      </section>


      {/* CALENDAR MODAL */}

      {isCalendarOpen && (
        <div
          className="calendar-modal-overlay"
          onClick={() =>
            setIsCalendarOpen(false)
          }
        >

          <div
            className="calendar-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="calendar-modal-header">

              <h2>
                {t.calendar.title}
              </h2>

              <button
                type="button"
                className="calendar-modal-close"
                onClick={() =>
                  setIsCalendarOpen(false)
                }
                aria-label={t.calendar.close}
              >
                ×
              </button>

            </div>


            <div className="calendar-modal-options">

              <button
                type="button"
                onClick={handleGoogleCalendar}
              >
                <span className="calendar-option-icon">
                  G
                </span>

                <span>
                  {t.calendar.google}
                </span>
              </button>


              <button
                type="button"
                onClick={handleOutlookCalendar}
              >
                <span className="calendar-option-icon">
                  O
                </span>

                <span>
                  {t.calendar.outlook}
                </span>
              </button>


              <button
                type="button"
                onClick={handleAppleCalendar}
              >
                <span className="calendar-option-icon">
                  
                </span>

                <span>
                  {t.calendar.apple}
                </span>
              </button>


              <button
                type="button"
                onClick={handleAppleCalendar}
              >
                <span className="calendar-option-icon">
                  ↓
                </span>

                <span>
                  {t.calendar.download}
                </span>
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default RegistrationSuccess;