import "./FlightCard.scss"

const FlightCard = ({flight}) => {
  function handleTime(flight) {
    return flight.scheduleTime.slice(0, 5)
  }

  function isNonStop (flight) {
    const data =  flight.route['destinations']
    return data.length === 1 ? 'NonStop' : 'Connecting Flight'
  }

  return (
    <div className="flight-card">
      <div className="flight-travel">{flight.departure}-{flight.route['destinations'][0]}</div>
      <div className="flight-times">
        <div className="departure-details">
          <div className="departure">
            <img src="/icons/departures.png" alt="departure icon not found" />
            <span>Çıkış Yeri</span>
          </div>
          <div className="departure-time">
            <span className="time">{handleTime(flight)}</span>
            <span className="airport">Airport: MXP</span>
          </div>
        </div>
        <img className="line" src="/icons/right-arrow.png" alt="arrow not found" />
        <div className="flight-duration">{handleTime(flight)} ({isNonStop(flight)})</div>
        <img className="line" src="/icons/right-arrow.png" alt="arrow not found" />
        <div className="arrival-details">
          <div className="arrival">
            <img src="/icons/arrivals.png" alt="arrival icon not found" />
            <span>Varış Yeri</span>
          </div>
          <div className="arrival-time">
            <span className="a-time">{flight.estimatedLandingTime}</span>
            <span className="a-airport">Airport: {flight.route['destinations'][0]}</span>
          </div>
        </div>
      </div>
      <div className="price-details">
        <div className="price">
            <span className="ticket-price">Fiyat: {flight.price} TRY</span>
            <span className="direction">{flight.direction}</span>
        </div>
        <button className="choose-btn">Seç</button>
      </div>
    </div>
  );
};

export default FlightCard;
