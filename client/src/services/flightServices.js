import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/flights',
    timeout: 5000,
})

// Response interceptor for global error handling
api.interceptors.response.use(
  res => res.data,
  err => {
    if (err.response) {
      // handle different error status codes
      switch (err.response.status) {
        case 403:
          console.error('Forbidden. You do not have permission to perform this action.')
          break
        case 404:
          console.error('Resource not found.')
          break
        case 500:
          console.log('Server error please try again later.')
          break
        default:
          console.error('An error occured:', err.response.status)
      }
    } else if (err.request) {
      console.error('No response from server. Please check your network.')
    } else {
      console.error('Error:', err.message)
    }
    return Promise.reject(err)
  }
)

export const fetchFlights = () => api.get('/')
export const fetchFlightById = (id) => api.get(`/${id}`)
export const addFlight = (content) => api.post('/', content)
export const updateFlight = (id, updatedFlight) => api.put(`/${id}`, updatedFlight)
export const deleteFlight = (id) => api.delete(`/${id}`)