import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TileInputsContextProvider from "./context/TileInputsContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";

// ✅ import the components directly
import TileCalculator from "./pages/TileCalculator";
import KajariaSearch from "./components/KajariaSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
            <KajariaSearch />

      <TileInputsContextProvider>
        {/* ✅ Render components directly instead of App */}
        <TileCalculator />
      </TileInputsContextProvider>
    </BrowserRouter>
  </StrictMode>
);
