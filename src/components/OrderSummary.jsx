import { useContext, useState } from "react";
import { ProductsContext } from "../App.jsx";


function OrderSummary () {
    const {total} = useContext (ProductsContext);

    const [cartProducts, setCartProducts] = useState(() => {
           const savedCart = localStorage.getItem("cartProducts");
           return savedCart ? JSON.parse(savedCart) : []})


     return (
                <div className="flex flex-col mb-5 mt-5 border-b border-white pb-2">
                      <h2 className="text-lg text-gray-800">Order Summary</h2>

                       <div className="py-2 ">
                         <div className="flex justify-between text-gray-800">
                           <h3>Name</h3>
                           <h3>Quantity</h3>
                           <h3>Price</h3>
                         </div>

                           {cartProducts.map ((item)=>
                                <div key={item.id} className="grid grid-cols-3 justify-between text-gray-600"> 
                                    <p>{item.title}</p>
                                    <p className="text-center">{item.quantity}</p>
                                    <p className="text-end">ksh. {item.price}</p>  
                                </div>
                              
                            )}
                       </div>

                       <div className="py-2 flex justify-between">
                            <p>Total</p>
                            <p>{total}</p>
                       </div>
                  </div>
     )
}

export default OrderSummary;
