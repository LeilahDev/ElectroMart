import { createContext ,useState, useEffect } from 'react'
import App from './App.jsx';

const ProductsContext = createContext ();

function ProductContext () {

    //DATA IS FETCHED FROM THE JSON FILE AND SET TO THE STATE VARIABLE allProducts
    const [allProducts, setAllProducts] = useState(() => {
          const products = localStorage.getItem('products');
          return products ? JSON.parse(products) : []
    });
    const [displayedProducts , setDisplayedProducts] = useState([]);

        useEffect(() => {
        const loadProducts = async () => {
            const saved = localStorage.getItem('products');

            if (saved) {
            setAllProducts(JSON.parse(saved));
            } else {
            const res = await fetch("/products.json");
            const data = await res.json();
            setAllProducts(data);
            localStorage.setItem('products', JSON.stringify(data));
            }
        };

        loadProducts();
        }, []);


        useEffect(() => {
            setDisplayedProducts(allProducts);
        }, [allProducts]);

     
    //DEFINING THE COUNT STATE FOR INCREASING AND DECREASING THE NUMBER OF ITEM ADDED TO CART
     const [count , setCount] = useState (1);

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

    // CART PRODUCTS
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

     // TOTAL AMOUNT FOR CART PRODUCTS         
       const [total , setTotal] = useState(() => {
             const savedTotal = localStorage.getItem ('Total');
             return savedTotal ? JSON.parse (savedTotal) : 0;
       });

    // CHOOSING THE BUTTON TO DISPLAY
    const [showMoreBtn , setShowMoreBtn] = useState (true);

    //CLOSING THE NAVBAR ON SCROLL
     const [isOpen, setIsOpen] = useState(false);
         
        useEffect(() => {
        const handleScroll = () => setIsOpen(false);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);



       //DISPLAYING THE SUCCESS AND OUT OF STOCK MESSAGE 
        const [outOfStockMsg, setOutOfStockMsg] = useState (false);
        const [successMesage , setSuccessMessage] = useState(false);
       
             useEffect (() => {

                if(successMesage) {
                const timer = setTimeout(() => {
                          setSuccessMessage(false)
                         
                        }, 2000)

                    return () => clearTimeout(timer);
                }

             }, [successMesage])

                          
             useEffect (() => {

                if(outOfStockMsg) {
                const timer = setTimeout(() => {
                          setOutOfStockMsg(false)
                        }, 2000)

                    return () => clearTimeout(timer);
                }

             }, [outOfStockMsg])
        

       return (
        <>
                     
         <ProductsContext.Provider value = {{allProducts, setAllProducts ,count , setCount ,increase, decrease,
                                             isOpen, setIsOpen,cartProducts, setCartProducts,total , setTotal,
                                             showMoreBtn , setShowMoreBtn,displayedProducts , setDisplayedProducts,
                                             outOfStockMsg, setOutOfStockMsg,successMesage , setSuccessMessage
                                             }} >

                         <App />
         
        </ProductsContext.Provider>
        </>
       )
}

export {ProductsContext}
export default ProductContext;
