import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import TileInputsContextProvider from './context/TileInputsContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ import Router

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ Wrap your app here */}
      <TileInputsContextProvider>
        <App />
      </TileInputsContextProvider>
    </BrowserRouter>
  </StrictMode>
);
