import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { message } from "antd";

export const FlightContext = createContext(); // Creates a context named FlightContext

// Flight provider function handle flight reated state
export const FlightProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    babies: 0,
  });

  // onChange functions
  const handleDepartureChange = (e) => setDeparture(e.target.value);
  const handleDestinationChange = (e) => setDestination(e.target.value);
  const handleDateToChange = (e) => setDateTo(e.target.value);
  const handleDateFromChange = (e) => setDateFrom(e.target.value);
  const handlePassengers = (e) => setPassengers(e.target.value);

  // Function handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage =
      "You should fill departure, destination and departure date";
    const errorMessageRound =
      "You should fill departure, destination, departure date and return date";

    if (isRoundTrip) {
      if (!departure || !destination || !dateTo || !dateFrom) {
        return message.error(errorMessageRound);
      }
    } else {
      if (!departure || !destination || !dateTo) {
        return message.error(errorMessage);
      }
    }

    // Proceed if all fields are filled
    console.log("Form submitted");
    navigate("/flights")
  };

  // the function that swaps departure and destination values
  const handleSwapper = () => {
    setDeparture(destination);
    setDestination(departure);
  };

  // calculated number value of total passenger number
  const totalPassengers = Object.values(passengers).reduce(
    (sum, value) => sum + value,
    0
  );

  const values = {
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
    handleSwapper,
    handlePassengers,
    handleSubmit,
  };

  return (
    <FlightContext.Provider value={values}>{children}</FlightContext.Provider>
  );
};
