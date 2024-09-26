import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export const FlightContext = createContext(); // Creates a context named FlightContext

// Flight provider function handle flight reated state
export const FlightProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departure, setDeparture] = useState("MLX");
  const [destination, setDestination] = useState("SAW");
  const [dateTo, setDateTo] = useState("2024-10-09");
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
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const errorMessage =
    "Çıkış yeri, varış yeri ve gidiş tarihi alanları boş bırakılamaz";
  const errorMessageRound =
    "Çıkış yeri, varış yeri, gidiş tarihi ve dönüş tarihi alanları boş bırakılamaz";
  const sameLocationError =
    "Çıkış yeri ve varış yeri aynı olamaz";
  const invalidDateError =
    "Geçersiz tarih formatı. Lütfen geçerli bir tarih girin.";

  // Validation logic
  if (departure === destination) {
    return message.error(sameLocationError);
  }

  // Simple date format validation (you can add more complex logic if required)
  const isValidDate = (date) => !isNaN(Date.parse(date));

  if (isRoundTrip) {
    if (!departure || !destination || !dateTo || !dateFrom) {
      return message.error(errorMessageRound);
    }
    if (!isValidDate(dateTo) || !isValidDate(dateFrom)) {
      return message.error(invalidDateError);
    }
  } else {
    if (!departure || !destination || !dateTo) {
      return message.error(errorMessage);
    }
    if (!isValidDate(dateTo)) {
      return message.error(invalidDateError);
    }
  }

  // Submit logic
  try {
    navigate("/flights");
  } catch (error) {
    console.error("Failed to fetch flights:", error);
  }
};


  // the function that swaps departure and destination values
  const handleSwapper = (e) => {
    e.preventDefault();
    setDeparture(destination);
    setDestination(departure);
  };

  // Function to increase the number of passengers
  const increasePassenger = (type) => {
    setPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  // Function to decrease the number of passengers
  const decreasePassenger = (type) => {
    setPassengers((prev) => ({ ...prev, [type]: Math.max(prev[type] - 1, 0) }));
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
    passengers,
    totalPassengers,
    setIsRoundTrip,
    handleDepartureChange,
    handleDestinationChange,
    handleDateToChange,
    handleDateFromChange,
    handleSwapper,
    handlePassengers,
    handleSubmit,
    increasePassenger,
    decreasePassenger,
  };
  
  return (
    <FlightContext.Provider value={values}>{children}</FlightContext.Provider>
  );
};
