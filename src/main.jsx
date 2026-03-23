import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContextTheme from './utils/ContextAPI.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextTheme>
      <App />
    </ContextTheme>
    </BrowserRouter>
    
  </StrictMode>,
)
