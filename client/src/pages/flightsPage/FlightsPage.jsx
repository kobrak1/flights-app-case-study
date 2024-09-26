import FlightCard from "../../components/flightCard/FlightCard"
import SortField from "../../components/sortField/SortField"
import { useFlight } from "../../hooks/useFlight"
import "./FlightsPage.scss"

const FlightsPage = () => {
  const { flights } = useFlight()
  const data = flights.flights

  return (
    <div className="flights-page">
      <SortField />
      <div className="flights-list">
        {data && data.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  )
}

export default FlightsPage
