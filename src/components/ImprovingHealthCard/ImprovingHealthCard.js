import "./ImprovingHealthCard.scss";

const ImprovingHealthCard = ({ title, subtitle, icon, pic }) => {
  return (
    <div
      className="improving-health-card"
      style={{
        background: `url(${pic})`,
      }}
    >
      <div className="improving-health-card--overlay">
        <div className="improving-health-card--icon">
          <img src={icon} alt={`${title}`} />
        </div>
        <div className="improving-health-card--title">{title}</div>
        <div className="improving-health-card--subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default ImprovingHealthCard;
