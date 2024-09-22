import InputGroup from "../inputGroup/InputGroup";
import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  console.log("IsRoundTrip:", isRoundTrip);

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
      <form className="flight-details">
        <div className="place-inputs">
          <InputGroup
            type="text"
            htmlFor="departure"
            label="Nereden"
            placeholder="Şehir veya havalimanı"
          />
          <div className="flight-swapper">
            <button>
              <img src="/icons/swap.png" alt="swap icon not found" />
            </button>
          </div>
          <InputGroup
            type="text"
            htmlFor="destination"
            label="Nereye"
            placeholder="Şehir veya havalimanı"
          />
          <InputGroup
            type="date"
            htmlFor="date1"
            label="Gidiş"
            placeholder=""
          />
          <InputGroup
            type="date"
            htmlFor="date1"
            label="Dönüş"
            placeholder=""
          />
          <div className="passenger-count">
            <label htmlFor="departure">Yolcu sayısı</label>
            <span>1 Yolcu / Ekonomi</span>
          </div>
        </div>
        <div className="button">
          <button className="search-button">Bilet bul</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
