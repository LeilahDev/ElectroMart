import {Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckOutPage from './pages/CheckOutPage.jsx'
import ConfirmationPage  from './pages/ConfirmationPage.jsx'
import Footer from './components/Footer.jsx'
import { createContext ,useState, useEffect } from 'react'

const ProductsContext = createContext ();


function App () {
     
    const [products , setProducts] = useState([]);
    const [filteredProducts , setFilteredProducts] = useState ([]);
    const [count , setCount] = useState (1);
    const [isOpen, setIsOpen] = useState(false);
    
       const [total , setTotal] = useState(() => {
             const savedTotal = localStorage.getItem ('Total');
             return savedTotal ? JSON.parse (savedTotal) : 0;
       });
    const [cartProducts, setCartProducts] = useState(() => {
           const savedCart = localStorage.getItem("cartProducts");
           return savedCart ? JSON.parse(savedCart) : [];
      });
   
         useEffect(() => {

         localStorage.setItem(
            "cartProducts",
            JSON.stringify(cartProducts)
         );

      }, [cartProducts]);
    

         function increase () {
            setCount(count + 1);
         }

         function decrease () {
            if(count === 1){
                setCount (1);
            }else{
                setCount (count - 1);
            }
         }

         function closeNavBar () {
            setIsOpen (false)
         }
   

   return <>

         
         <ProductsContext.Provider value = {{products, setProducts , count, setCount , increase , decrease , 
                                             cartProducts ,setCartProducts , isOpen ,setIsOpen ,closeNavBar,
                                             filteredProducts , setFilteredProducts, total , setTotal
                                             }}>
          <NavBar />
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
