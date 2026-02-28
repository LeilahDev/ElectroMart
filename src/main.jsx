import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContext />
  </BrowserRouter>
)
