import { memo, useState } from "react";
import { useFlight } from "../..//hooks/useFlight";
import InputGroup from "../inputGroup/InputGroup";
import PassengerNumber from "../passengerNumber/PassengerNumber";
import "./SearchBar.scss";

const SearchBar = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const {
    isRoundTrip,
    departure,
    destination,
    dateTo,
    dateFrom,
    totalPassengers,
    setIsRoundTrip,
    handleDepartureChange,
    handleDestinationChange,
    handleDateToChange,
    handleDateFromChange,
    handleSubmit,
    handleSwapper,
  } = useFlight();

  //console.log("IsRoundTrip:", isRoundTrip);
  //console.log("Departure:", departure);
  //console.log("Destination:", destination);
  //console.log("DateTo:", dateTo);
  //console.log('DateFrom:', dateFrom);
  //console.log('Passengers:', totalPassengers);

  return (
    <div className="search-bar">
      <form className="flight-type">
        <label className="one-direction">
          <input
            type="radio"
            name="option1"
            onChange={() => setIsRoundTrip(false)}
            defaultChecked
          />
          <span>Tek yön</span>
        </label>
        <label className="two-direction">
          <input
            type="radio"
            name="option1"
            onChange={() => setIsRoundTrip(true)}
          />
          <span>Çift yön</span>
        </label>
      </form>
      <form className="flight-form" onSubmit={handleSubmit}>
        <div className="search-fields">
          <InputGroup
            type="text"
            htmlFor="departure"
            label="Nereden"
            handleChange={handleDepartureChange}
            value={departure}
            placeholder="Şehir veya havalimanı"
          />
          <div className="flight-swapper">
            <button onClick={handleSwapper}>
              <img src="/icons/swap.png" alt="swap icon not found" />
            </button>
          </div>
          <InputGroup
            type="text"
            htmlFor="destination"
            label="Nereye"
            handleChange={handleDestinationChange}
            value={destination}
            placeholder="Şehir veya havalimanı"
          />
          <InputGroup
            type="date"
            htmlFor="date1"
            label="Gidiş"
            handleChange={handleDateToChange}
            value={dateTo}
            placeholder=""
          />
          <InputGroup
            type="date"
            htmlFor="date2"
            label="Dönüş"
            handleChange={handleDateFromChange}
            value={dateFrom}
            disabled={!isRoundTrip}
            placeholder=""
          />
          <div className="passenger-count" onClick={openModal}>
            <label htmlFor="departure">Yolcu sayısı</label>
            <span>{totalPassengers} Yolcu / Ekonomi</span>
          </div>
        </div>
        <button type="submit" className="search-button">
          Bilet bul
        </button>
      </form>
      {isOpen && <PassengerNumber closeModal={closeModal} />}
    </div>
  );
});

// Set a display name for better debugging
SearchBar.displayName = "SearchBar";

export default SearchBar;
