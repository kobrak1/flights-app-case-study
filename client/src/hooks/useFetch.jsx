import { useQuery } from "@tanstack/react-query"
import { fetchFlights } from "../services/listFlightsService"
import { message } from "antd"

export const useFetchFlights = (destination, dateTo) => {
    return useQuery({
        queryKey: ['flights', destination, dateTo],
        queryFn: ({ queryKey }) => {
          const [, destination, dateTo] = queryKey;
          return fetchFlights({ destination, dateTo });
        },
        staleTime: 1000 * 6 * 5, // data remains fresh for 5 minutes
        cacheTime: 1000 * 60 *10, // cache the data for 10 minutesS
        throwOnError: (error) => {
            console.error('Error fetching flights:', error)
            message.error('Failed to fetch flights.')
        }
    })
}