import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime',
    timeout: 5000,
    headers: {
        "resourceversion": "v4",
        "app_id": "9f7e1173",
        "app_key": "8216a1026e6600c0b104e66cbbce6ac7",
        "Accept": "application/json",
    }
})


export const listFlights = async ({ departure, destination, dateFrom, dateTo }) => {
    const params = new URLSearchParams({
        includedelays: false,
        page: 0,
        sort: "+scheduleTime",
        departure: departure,
        destination: destination,
        dateFrom: dateFrom,  // Format as needed (e.g., YYYY-MM-DD)
        dateTo: dateTo,      // Format as needed (e.g., YYYY-MM-DD)
    });

    try {
        const response = await api.get(`/?${params}`);
        return response; // Assuming your response is already structured correctly
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};
