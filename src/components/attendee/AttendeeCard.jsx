import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";

import attendeeTranslations from "../../data/attendee.languages";

function formatEducation(value) {
  const educationLabels = {
    high_school: "High School",
    associate: "Associate Degree",
    bachelors: "Bachelor's Degree",
    masters: "Master's Degree",
    phd: "PhD",
    other: "Other",
  };

  return educationLabels[value] || value
    ?.replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}

function AttendeeCard({
  attendee,
  language = "en",
}) {
  const cardRef = useRef(null);
  const [isDownloading, setIsDownloading] =
    useState(false);

  const t =
    attendeeTranslations[language] ||
    attendeeTranslations.en;

  const questionUrl =
    `${window.location.origin}/attendee/${attendee.attendee_token}/question`;

  async function handleDownload() {
    if (!cardRef.current) {
      return;
    }

    try {
      setIsDownloading(true);

      const image = await toPng(cardRef.current, {
        pixelRatio: 2,
        cacheBust: true,
      });

      const link = document.createElement("a");

      link.download =
        `ISOC-2026-${attendee.name}-${attendee.surname}.png`;

      link.href = image;
      link.click();
    } catch (error) {
      console.error(
        "Failed to download attendee card:",
        error
      );
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="attendee-card-container">
      <div
        ref={cardRef}
        className="attendee-card"
      >
        <div className="attendee-card-top">
          <div>
            <span className="attendee-card-label">
              {t.event}
            </span>

            <h1>{t.attending}</h1>

            <p>{t.eventName}</p>
          </div>

          <div className="attendee-card-mark">
            ISOC
          </div>
        </div>

        <div className="attendee-card-body">
          <div className="attendee-info">
            <span className="attendee-eyebrow">
              {t.attendee}
            </span>

            <h2>
              {attendee.name} {attendee.surname}
            </h2>

            {attendee.university && (
              <p className="attendee-university">
                {attendee.university}
              </p>
            )}

            {attendee.education && (
              <span className="attendee-education">
                {formatEducation(
                  attendee.education
                )}
              </span>
            )}
          </div>

          <div className="attendee-qr">
            <div className="attendee-qr-box">
              <QRCodeSVG
                value={questionUrl}
                size={170}
                bgColor="#ffffff"
                fgColor="#17231c"
                level="M"
              />
            </div>

            <p>{t.scanToAsk}</p>
          </div>
        </div>

        <div className="attendee-card-divider" />

        <div className="attendee-card-footer">
          <span>{t.eventName}</span>

          <span>{t.event}</span>
        </div>
      </div>

      <div className="attendee-card-actions">
        <div className="attendee-save-message">
          <strong>{t.saveTitle}</strong>

          <p>{t.saveMessage}</p>
        </div>

        <button
          type="button"
          className="button button-primary attendee-download"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading
            ? t.preparing
            : t.download}
        </button>
      </div>
    </div>
  );
}

export default AttendeeCard;