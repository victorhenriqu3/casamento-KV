const DateTimeDisplay = () => {
  return (
    <div className="elegant-date-time">
      <div className="date-time-container">
        <div className="date-column">
          <div className="large-number">28</div>
          <div className="label">Junho</div>
        </div>

        <div className="separator">
          <div className="line"></div>
          <div className="symbol">✦</div>
          <div className="line"></div>
        </div>

        <div className="time-column">
          <div className="large-number">15</div>
          <div className="label">Horas</div>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
