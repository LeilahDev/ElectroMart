import { MdDelete } from "react-icons/md";
 function SingleCartItem ({product , handleDelete , setProductsArray}) {
    
            function increase () {
                setProductsArray(prev =>
                    prev.map(item =>
                        item.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                    )
                );
            }

            function decrease () {
                setProductsArray(prev =>
                    prev.map(item =>
                        item.id === product.id
                        ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1}
                        : item
                    )
                );
            }
    
    return (
              
            <div key={product.id} className="bg-gray-300 px-2 sm:px-5"> 

                        <div className="flex gap-2 justify-between py-3">
                            
                             <div className="flex flex-col gap-2">
                                   <img src={product.images} alt="" className="h-15 w-15 object-cover sm:h-20 sm:w-20"/>
                                    <p className="text-sm text-gray-800">{product.title}</p>
                             </div>
                            <p className="text-orange-800">Ksh. {product.price}</p>
                        </div>

                        <div className="flex justify-between py-3 border-b border-white">
                                   <div className="flex  items-center text-orange-700 py-1">
                                        <p className="text-lg" onClick={() => handleDelete(product.id)}><MdDelete /> </p>
                                         <p className="text-xs">Remove</p>
                                   </div>
                                 
                                    <div className='flex  px-1 items-center gap-4  rounded '>
                                        <p className='bg-gray-400 w-5  rounded flex items-center justify-center cursor-pointer' onClick={decrease}>-</p>
                                        <p>{product.quantity}</p>
                                        <p className='bg-gray-400 w-5 rounded flex items-center justify-center cursor-pointer' onClick={increase}>+</p>
                                    </div>
                        </div>                            
         </div>
                                                          
    )
 }

 export default SingleCartItem