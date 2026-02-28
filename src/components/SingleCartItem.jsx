import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ProductsContext } from "../ProductContext.jsx";
 function SingleCartItem ({product , handleDelete}) {

    const {setCartProducts} = useContext(ProductsContext)
    
            function increase () {
                setCartProducts(prev =>
                    prev.map(item =>
                        item.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                    )
                );
            }

            function decrease () {
                setCartProducts(prev =>
                    prev.map(item =>
                        item.id === product.id
                        ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1}
                        : item
                    )
                );
            }
           const isDisabled = product.quantity >= product.stock;
    
    return (
              
            <div key={product.id} className="bg-gray-300 px-2 sm:px-5"> 

                        <div className="flex gap-2 justify-between py-3">
                            
                             <div className="grid grid-cols-3 ">
                                   <img src={product.images} alt="" className="h-15 w-15 object-cover sm:h-20 sm:w-20 lg:w-3/4"/>
                                   <div className="col-span-2 mr-5">
                                        <p className="text-base text-gray-800">{product.title}</p>
                                        <p className="text-sm text-gray-800">{product.description}</p>
                                   </div>
                                    
                             </div>
                            <p className="text-orange-800">Ksh. {product.price}</p>
                        </div>

                        <div className="flex justify-between py-3 border-b border-white">
                                   <div className="flex  items-center text-orange-700 py-1 cursor-pointer"  onClick={() => handleDelete(product.id)}>
                                        <p className="text-lg"><MdDelete /> </p>
                                         <p className="text-xs">Remove</p>
                                   </div>
                                 
                                    <div className='flex  px-1 items-center gap-4  rounded '>
                                        <button className='bg-orange-600 text-gray-200 w-5  rounded flex items-center justify-center cursor-pointer' onClick={decrease}>-</button>
                                        <p>{product.quantity}</p>
                                        <button className='bg-orange-600 text-gray-200 w-5 rounded flex items-center justify-center cursor-pointer' disabled={isDisabled} onClick={increase}>+</button>
                                    </div>
                        </div>                            
         </div>
                                                          
    )
 }

 export default SingleCartItem