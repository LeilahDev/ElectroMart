import { createContext ,useState, useEffect } from 'react'
import App from './App.jsx';

const MyCartContext = createContext ();

function CartContext ( {children}) {

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

       return (
        <>
                     
         <MyCartContext.Provider value = {{count,
                                             setCount,
                                             increase,
                                             decrease,
                                             cartProducts,
                                             setCartProducts,
                                             total, 
                                             setTotal,
                                             }} >

                         {children}
         
        </MyCartContext.Provider>
        </>
       )
}

export {MyCartContext }
export default CartContext ;
