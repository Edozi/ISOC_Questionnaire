function LanguageSelector({ language, onLanguageChange }) {
return ( <div className="language-selector"> <span className="language-icon">🌐</span>

  <select
    value={language}
    onChange={(event) =>
      onLanguageChange(event.target.value)
    }
    aria-label="Select language"
  >
    <option value="en">English</option>
    <option value="tr">Türkçe</option>
    <option value="fr">Français</option>
    <option value="ru">Русский</option>
  </select>
</div>


);
}

export default LanguageSelector;
