import "./FlightCard.scss"

const FlightCard = () => {
  return (
    <div className="flight-card">
      <div className="flight-travel">Istanbul-Madrid</div>
      <div className="flight-times">
        <div className="departure-details">
          <div className="departure">
            <img src="/icons/departures.png" alt="departure icon not found" />
            <span>Çıkış Yeri</span>
          </div>
          <div className="departure-time">
            <span className="time">7.30 AM</span>
            <span className="airport">Airport: MXP</span>
          </div>
        </div>
        <img className="line" src="/icons/right-arrow.png" alt="arrow not found" />
        <div className="flight-duration">2h 25m (Nonstop)</div>
        <img className="line" src="/icons/right-arrow.png" alt="arrow not found" />
        <div className="arrival-details">
          <div className="arrival">
            <img src="/icons/arrivals.png" alt="arrival icon not found" />
            <span>Varış Yeri</span>
          </div>
          <div className="arrival-time">
            <span className="a-time">9.30 AM</span>
            <span className="a-airport">Airport: SAP</span>
          </div>
        </div>
      </div>
      <div className="price-details">
        <div className="price">
            <span className="ticket-price">Fiyat: 2350 TRY</span>
            <span className="direction">Çift yön</span>
        </div>
        <button className="choose-btn">Seç</button>
      </div>
    </div>
  );
};

export default FlightCard;
