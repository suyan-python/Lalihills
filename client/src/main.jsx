import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./layouts/CartContext.jsx";



if ("scrollRestoration" in window.history)
{
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <HelmetProvider >
        <App />
      </HelmetProvider>
    </CartProvider>
  </StrictMode>,
)
