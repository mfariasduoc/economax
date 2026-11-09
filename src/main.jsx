import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './tailwind.css'
import App from './App.jsx'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { InventarioProvider } from './context/InventarioContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InventarioProvider>
      <App />
    </InventarioProvider>
  </StrictMode>
)