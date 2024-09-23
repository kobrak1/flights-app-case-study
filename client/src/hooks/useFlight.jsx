import { useContext } from "react";
import { FlightContext } from "../context/FlightContext"

export const useFlight = () => {
    const context = useContext(FlightContext);
  
    if (!context) {
      throw new Error(
        "The useFlight hook must be called inside the FlightProvider"
      );
    }
  
    return context;
  }