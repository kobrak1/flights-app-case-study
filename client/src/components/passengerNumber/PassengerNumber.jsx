import { useFlight } from "../../hooks/useFlight";
import "./PassengerNumber.scss";

const PassengerNumber = ({ closeModal }) => {
  const { passengers, increasePassenger, decreasePassenger } = useFlight();
  console.log("Passengers:", passengers);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="passenger">
            <span className="passenger-type">Yetişkin</span>
            <div className="number">
              <span id="plus-icon" onClick={() => increasePassenger("adults")}>+</span>
              <span>{passengers.adults}</span>
              <span id="minus-icon" onClick={() => decreasePassenger("adults")}>-</span>
            </div>
          </div>
          <div className="passenger">
            <span className="passenger-type">Çocuk</span>
            <div className="number">
              <span id="plus-icon" onClick={() => increasePassenger("children")}>+</span>
              <span>{passengers.children}</span>
              <span id="minus-icon" onClick={() => decreasePassenger("children")}>-</span>
            </div>
          </div>
          <div className="passenger">
            <span className="passenger-type">Bebek</span>
            <div className="number">
              <span id="plus-icon" onClick={() => increasePassenger("babies")}>+</span>
              <span>{passengers.babies}</span>
              <span id="minus-icon" onClick={() => decreasePassenger("babies")}>-</span>
            </div>
          </div>
          <button className="state-btn" onClick={closeModal}>
            Tamam
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassengerNumber;
