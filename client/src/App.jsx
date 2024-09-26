import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FlightProvider } from "./context/FlightContext.jsx";

// Components
import Layout from "./pages/layout/Layout.jsx";
import FallBackUI from "./components/fallBackUI/FallBackUI.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";

// Lazy loaded components
const HomePage = lazy(() => import("./pages/homePage/HomePage.jsx"));
const ReservationPage = lazy(() => import("./pages/reservationPage/ReservationPage.jsx"))
const FlightsPage = lazy(() => import("./pages/flightsPage/FlightsPage.jsx"));

const App = () => {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <FlightProvider>
              <HomePage />
            </FlightProvider>
          ),
        },
        {
          path: "/reservation",
          element: (
            <FlightProvider>
              <ReservationPage />
            </FlightProvider>
          ),
        },
        {
          path: "/flights",
          element: (
            <FlightProvider>
              <QueryClientProvider client={queryClient}>
                  <FlightsPage />
              </QueryClientProvider>
            </FlightProvider>
          ),
        },
      ],
    },
  ]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<FallBackUI />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
