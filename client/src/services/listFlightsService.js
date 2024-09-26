import axios from "axios";

const api = axios.create({
  baseURL: "https://flights-app-case-study.onrender.com",
  timeout: 5000,
});

export const fetchFlights = async ({departure, destination, dateTo}) => {
  const response = await api.get("/api/fetch-flights", {
    params: {
      flightDirection: "D",
      scheduleDate: dateTo,
      'route[destinations][0]': `${destination}`,
    }
  })
  return response.data;
};
