function StatCard({
  label,
  value,
  description,
  icon,
}) {
  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <span className="stat-label">
          {label}
        </span>

        {icon && (
          <div className="stat-icon">
            {icon}
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