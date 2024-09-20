import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/layout/Layout.jsx"
import FallBackUI from "./components/fallBackUI/FallBackUI.jsx"
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx"

// Lazy loaded components
const HomePage = lazy(() => import("./pages/homePage/HomePage.jsx"))
const ReservationPage = lazy(() => import("./pages/reservationPage/ReservationPage.jsx"))
const FlightsPage = lazy(() => import("./pages/flightsPage/FlightsPage.jsx"))


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/reservation",
          element: <ReservationPage />
        },
        {
          path: "/flights",
          element: <FlightsPage />
        }
      ]
    }
  ])

  return (
    <ErrorBoundary>
      <Suspense fallback={<FallBackUI />} >
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App