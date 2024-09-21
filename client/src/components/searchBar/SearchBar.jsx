import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  console.log('IsRoundTrip:', isRoundTrip)
  
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
          <div className="input-group clicked">
            <label htmlFor="departure">Nereden</label>
            <input type="text" id="departure" placeholder="Nereden" />
          </div>
          <div className="flight-swapper">
            <button>
              <img src="/icons/swap.png" alt="swap icon not found" />
            </button>
          </div>
          <div className="input-group clicked">
            <label htmlFor="destination">Nereye</label>
            <input type="text" id="destination" placeholder="Nereye" />
          </div>
        </div>
        <div className="date-inputs">
          <div className="input-group">
            <label htmlFor="date1">Gidiş</label>
            <input type="date" id="date1" placeholder="Nereden" />
          </div>
          <div className="input-group">
            <label htmlFor="date2">Dönüş</label>
            <input type="date" id="date2" placeholder="Nereden" />
          </div>
          <div className="input-group">
            <label htmlFor="departure">Nereden</label>
            <input type="text" id="departure" placeholder="Nereden" />
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
