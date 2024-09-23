import { createRoot } from "react-dom/client";
import { FlightProvider } from "./context/FlightContext.jsx";
import PromisePolyfill from "promise-polyfill";
import App from "./App.jsx";
import "./index.scss";

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

createRoot(document.getElementById("root")).render(
  <FlightProvider>
    <App />
  </FlightProvider>
);
