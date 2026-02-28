import {Routes , Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckOutPage from './pages/CheckOutPage.jsx'
import ConfirmationPage  from './pages/ConfirmationPage.jsx'

function Router () {

    return (
         <>
          <Routes>
                 <Route path='/' element ={<LandingPage />}/>
                 <Route path='/products' element = { <ProductsPage />}/>
                 <Route path='/products/:id'element = {<ProductDetails />}/>
                 <Route path='/cart' element = {<CartPage />}/>
                 <Route path='/checkout' element = {<CheckOutPage />} />
                 <Route path='/confirmation' element = {<ConfirmationPage />} />
          </ Routes>
         </>
    )

}

export default Router