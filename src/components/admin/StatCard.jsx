function StatCard({
  title,
  label,
  value,
  description,
  icon,
}) {
  const Icon = icon;

  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <span className="stat-label">
          {title || label}
        </span>

        {Icon && (
          <div className="stat-icon">
            <Icon size={20} />
          </div>
        )}

      </div>

      <div className="stat-value">
        {value}
      </div>

      {description && (
        <div className="stat-description">
          {description}
        </div>
      )}

    </div>
  );
}

export default StatCard;