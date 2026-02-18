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
                           acc[product.id].quantity += product.quantity || 1;
                         } else {
                           acc[product.id] = {
                              ...product,
                               quantity: product.quantity || 1
                           }
                         }

                         return acc;
               }, {})

                return Object.values(counted);
       })

          function handleDelete(productId) {
            setProductsArray(prev => {
               const updatedProducts = prev.filter(
                  item => item.id !== productId
               );

               return updatedProducts;
            });
            }

      useEffect (() => {
            localStorage.setItem ('cartProducts', JSON.stringify (productsArray))
       }, [productsArray])


       const [total , setTotal] = useState(0);

       useEffect(()=>{
         
         let subTotal = 0;
          productsArray.forEach ((item) =>{
            subTotal += item.quantity * item.price ;
          })

          setTotal(subTotal)
       },[productsArray])

       console.log(total)

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
                        <div className="px-3 mb-3">
                              <p className="px-4 py-1 bg-gray-300 mt-5 flex items-center">
                                    <span className="border-b border-gray-400 w-full pb-2 pt-1" >Cart ({productsArray.length})</span>
                                 </p>
                              <div className="flex flex-col">
                                       {productsArray.map(product => <SingleCartItem key={product.id} product= {product} handleDelete = {handleDelete} productsArray = {productsArray} setProductsArray = {setProductsArray}/>)}
                              </div>
                  
                      </div>

                          <div className="py-2 px-6 bg-gray-300 ml-3 mr-3 mb-3 rounded">
                                 <h1 className="border-b border-white py-2">CART SUMMARY</h1>
                                 <p className="border-b border-white py-2 flex justify-between">
                                    <span>Subtotal </span>
                                    <span>Ksh. {total}</span>
                                 </p>
                                 <button className="bg-orange-700 py-1 px-5 w-full mt-2 rounded text-gray-300 border-b border-white">CheckOut</button>
                          </div>


                  </div>

                ) 
                
            }
           
        </>
     )
 }

 export default CartItem 