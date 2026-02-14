import {Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckOutPage from './pages/CheckOutPage.jsx'
import ConfirmationPage  from './pages/ConfirmationPage.jsx'
import Footer from './components/Footer.jsx'
import { createContext ,useState } from 'react'

const ProductsContext = createContext ();


function App () {
     
    const [products , setProducts] = useState([]);
  
   return <>

         <NavBar />
         <ProductsContext.Provider value = {{products, setProducts}}>
          <Routes>
                 <Route path='/' element ={<LandingPage />}/>
                 <Route path='/products' element = { <ProductsPage />}/>
                 <Route path='/products/:id'element = {<ProductDetails />}/>
                 <Route path='/cart' element = {<CartPage />}/>
                 <Route path='/checkout' element = {<CheckOutPage />} />
                 <Route path='/confirmation' element = {<ConfirmationPage />} />
          </ Routes>
           </ProductsContext.Provider>
        <Footer />
   </>
}

export {ProductsContext}
export default App
