import { useState } from "react";

import registrationTranslations from "../../data/registration.languages";

function Registration({
  language = "en",
  onSubmit,
  isSubmitting,
  error,
  success,
}) {
  const t =
    registrationTranslations[language] ||
    registrationTranslations.en;
    
    const [legalAccepted, setLegalAccepted] = useState(false);

    const privacyUrl =
    language === "tr"
        ? "https://brightlandcorp.com/gizlilik"
        : "https://brightlandcorp.com/en/privacy";

    const termsUrl =
    language === "tr"
        ? "https://brightlandcorp.com/kosullar"
        : "https://brightlandcorp.com/en/terms";

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    gender: "",
    country: "",
    university: "",
    education: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!legalAccepted) {
        return;
    }

    if (onSubmit) {
        onSubmit(formData);
        return;
    }

    console.log("Registration:", formData);
  }

  return (
    <main className="registration-page">
      <div className="registration-background-shape registration-shape-one" />
      <div className="registration-background-shape registration-shape-two" />

      <section className="registration-card">
        <div className="registration-header">
          <img
            src="/logo-original.png"
            alt="Brightland"
            className="registration-logo"
          />
          <div className="registration-brand">
            {t.brand}
          </div>

          <div className="registration-label">
            ISOC
          </div>

          <h1>{t.title}</h1>

          <p>{t.subtitle}</p>
        </div>

        <form
          className="registration-form"
          onSubmit={handleSubmit}
        >
          <div className="registration-field-group">
            <div className="registration-field">
              <label htmlFor="registration-name">
                {t.fields.name.label}
              </label>

              <input
                id="registration-name"
                name="name"
                type="text"
                className="text-input"
                placeholder={t.fields.name.placeholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="registration-field">
              <label htmlFor="registration-surname">
                {t.fields.surname.label}
              </label>

              <input
                id="registration-surname"
                name="surname"
                type="text"
                className="text-input"
                placeholder={t.fields.surname.placeholder}
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="registration-field">
            <label htmlFor="registration-email">
              {t.fields.email.label}
            </label>

            <input
              id="registration-email"
              name="email"
              type="email"
              className="text-input"
              placeholder={t.fields.email.placeholder}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registration-field-group">
            <div className="registration-field">
              <label htmlFor="registration-gender">
                {t.fields.gender.label}
              </label>

              <select
                id="registration-gender"
                name="gender"
                className="registration-select"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">
                  {t.fields.gender.placeholder}
                </option>

                {t.genderOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="registration-field">
              <label htmlFor="registration-country">
                {t.fields.country.label}
              </label>

              <input
                id="registration-country"
                name="country"
                type="text"
                className="text-input"
                placeholder={t.fields.country.placeholder}
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="registration-field">
            <label htmlFor="registration-university">
              {t.fields.university.label}
            </label>

            <input
              id="registration-university"
              name="university"
              type="text"
              className="text-input"
              placeholder={t.fields.university.placeholder}
              value={formData.university}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registration-field">
            <div className="registration-label-row">
              <label htmlFor="registration-education">
                {t.fields.education.label}
              </label>

              <span>{t.optional}</span>
            </div>

            <select
              id="registration-education"
              name="education"
              className="registration-select"
              value={formData.education}
              onChange={handleChange}
            >
              <option value="">
                {t.fields.education.placeholder}
              </option>

              {t.educationOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <label className="registration-consent">
            <input
                type="checkbox"
                checked={legalAccepted}
                onChange={(event) =>
                setLegalAccepted(event.target.checked)
                }
                required
            />

            <span>
                {t.legal.beforeTerms}{" "}
                <a
                    href={termsUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t.legal.terms}
                </a>{" "}
                {t.legal.between}{" "}
                <a
                    href={privacyUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t.legal.privacy}
                </a>.
            </span>
            </label>

          <button
            type="submit"
            className="button button-primary registration-submit"
            disabled={isSubmitting}
            >
            {isSubmitting ? "Submitting..." : t.submit}
        </button>
        {error && (
            <p className="registration-error">
                {error}
            </p>
            )}

            {success && (
            <p className="registration-success">
                Registration successful!
            </p>
        )}

          <p className="registration-note">
            {t.note}
          </p>
        </form>
      </section>
    </main>
  );
}

export default Registration;