import FlightCard from "../../components/flightCard/FlightCard"
import SortField from "../../components/sortField/SortField"
import { useFetch } from "../../hooks/useFetch"
import { useFlight } from "../../hooks/useFlight"
import "./FlightsPage.scss"

const FlightsPage = () => {
  const { destination, dateTo } = useFlight()
  const {data, isLoading, isError} = useFetch(destination, dateTo)

  return (
    <div className="flights-page">
      <SortField />
      <div className="flights-list">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error occured!</p>}
        {data && data.flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  )
}

export default FlightsPage
