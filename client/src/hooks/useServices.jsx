import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addFlight, fetchFlightById, fetchFlights, updateFlight, deleteFlight } from "../services/flightServices"
import { message } from "antd"

// GET
export const useFlights = () => {
    return useQuery({
        queryKey: ['flights'],
        queryFn: fetchFlights,
        staleTime: 1000 * 60 * 5,  // data remains fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // cache data for 10 minutes
        onError: (error) => {
            console.error('Error fetching flights:', error);
            message.error('Failed to fetch flights.');
        },
    })
}

// GET/:id
export const useFlight = (id) => {
    return useQuery({
        queryKey: ['flight', id],
        queryFn: () => fetchFlightById(id),
        staleTime: 1000 * 60 * 5,  // data remains fresh for 5 minutes
        cacheTime: 1000 * 60 * 10, // cache data for 10 minutes
        onError: (error) => {
            console.error('Error fetching the flight:', error);
            message.error('Failed to fetch the flight.');
        },
    })
}

// POST
export const useCreateFlight = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: data => addFlight(data),
        onSuccess: () => {
            queryClient.invalidateQueries(['flights'])
            message.success('Created successfully')
        },
        onError: (error) => {
            console.error('Error creating flight:', error)
            message.error('Error adding flight')
        },
    })
}

// PUT
export const useUpdateFlight = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, important }) => updateFlight(id, {important}),
        onSuccess: () => {
            queryClient.invalidateQueries(['flights'])
            message.success('Updated successfully')
        },
        onError: (error) => {
            console.error('Error updating flight:', error)
            message.error('Error updating flight')
        }
    })
}

// DELETE
export const useDeleteFlight = () =>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: id => deleteFlight(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['flights'])
            message.success('Removed successfully')
        },
        onError: (error) => {
            console.error('Error deleting flight:', error)
            message.error('Error deleting flight')
        }
    })
}