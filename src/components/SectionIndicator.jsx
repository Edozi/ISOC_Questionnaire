function SectionIndicator({ sections, currentSection }) {
  return (
    <div className="section-indicator">
      {sections.map((section, index) => {
        const isActive = index === currentSection;
        const isCompleted = index < currentSection;

        return (
          <div
            key={section.id}
            className={`section-item ${
              isActive ? "active" : ""
            } ${isCompleted ? "completed" : ""}`}
          >
            <span className="section-number">
              {isCompleted ? "✓" : index + 1}
            </span>

            <span className="section-title">
              {section.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default SectionIndicator;