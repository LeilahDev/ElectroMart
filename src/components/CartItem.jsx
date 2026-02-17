import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
import SingleCartItem from "./SingleCartItem.jsx";
import { Link } from "react-router-dom"
 
 function CartItem () {
  
       const [productsArray , setProductsArray] = useState (() => {
                const cartProductsString =
                     localStorage.getItem('cartProducts');

                  const cartProducts =
                     cartProductsString
                        ? JSON.parse(cartProductsString)
                        : [];

               const counted = cartProducts.reduce ((acc , product) => {
                         if(acc[product.id]) {
                           acc[product.id].quantity += 1;
                         } else {
                           acc[product.id] = {
                              ...product,
                               quantity: 1
                           }
                         }

                         return acc;
               }, {})

                return Object.values(counted);
       })

       useEffect (() => {
            localStorage.setItem ('cartProducts', JSON.stringify (productsArray))
       }, [productsArray])

       function handleDelete (productId) {
                 setProductsArray(prev =>
                  prev.filter(item => item.id !== productId)
               );
       }

     return (
        <>
            {productsArray.length === 0  
                 ?(
                     <div className="bg-gray-300 m-6 py-10 flex flex-col items-center px-4 text-center rounded">
                     <p className="bg-gray-200 p-4 flex justify-center items-center rounded-full"><FiShoppingCart className="text-orange-700 
                        text-2xl 
                     "/></p> 
                     <p className="mt-5 text-gray-700">Your cart is empty!</p>
                     <p className="text-gray-700">Browse our categories and discover our best deals!</p>
                     <Link to="/products"><button className="bg-orange-700 text-gray-200/80 px-2 py-1 rounded mt-5">Start Shopping</button></Link> 
                     </div>
                )
                : (
                     <div>
                    <p>Cart ({productsArray.length})</p>
                    {productsArray.map(product => <SingleCartItem key={product.id} product= {product} handleDelete = {handleDelete}/>)}
                </div>
                ) 
                
            }

            


        </>
     )
 }

 export default CartItem 