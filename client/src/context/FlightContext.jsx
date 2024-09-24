import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listFlights } from "../services/listFlightsService";
import { message } from "antd";

export const FlightContext = createContext(); // Creates a context named FlightContext

// Flight provider function handle flight reated state
export const FlightProvider = ({ children }) => {
  const navigate = useNavigate()
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [flights, setFlights] = useState([])
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

    if (isRoundTrip) {
        if (!departure || !destination || !dateTo || !dateFrom) {
            return message.error(errorMessageRound);
        }
    } else {
        if (!departure || !destination || !dateTo) {
            return message.error(errorMessage);
        }
    }

    try {
        // Fetch flights with provided details
        const response = await listFlights({ departure, destination, dateFrom, dateTo });
        console.log("Flights fetched:", response);
        // Update your state with the fetched flights
        setFlights(response); // Assuming you have setFlights available to update the flights in the FlightsPage
    } catch (error) {
        // Handle errors here
        console.error("Failed to fetch flights:", error);
    }
    navigate("/flights");
};


  // the function that swaps departure and destination values
  const handleSwapper = (e) => {
    e.preventDefault()
    setDeparture(destination);
    setDestination(departure);
  };

  // Function to increase the number of passengers
  const increasePassenger = (type) => {
    setPassengers(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  // Function to decrease the number of passengers
  const decreasePassenger = (type) => {
    setPassengers(prev => ({...prev, [type]: Math.max(prev[type] - 1, 0)}));
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
    flights,
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
