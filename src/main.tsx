import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './contextApi/CartProvider.tsx'
import { OrderProvider } from './contextApi/OrderProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrderProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </OrderProvider>
  </StrictMode>,
)
