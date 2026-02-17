import { MdDelete } from "react-icons/md";
import { useState } from "react";

 function SingleCartItem ({product , handleDelete}) {
      
      const [count , setCount] = useState (product.quantity);
      console.log(product);

      function increase () {
         setCount(prev => prev + 1)
      }

      function decrease () {
            setCount(prev => (prev > 1 ? prev - 1 : 1));
      }

    
    return (
            <div>

                <div>
                      <div key={product.id}> 
                           <img src={product.images} alt="" />
                                <p>{product.title}</p>
                                    <p>Ksh. {product.price}</p>
                                        <div>
                                            <p onClick={() => handleDelete(product.id)}>Remove <MdDelete /></p>
                                                <div className='flex border justify-around w-1/4 items-center border-gray-500/50 rounded'>
                                                    <p className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer' onClick={decrease}>-</p>
                                                    <p>{count}</p>
                                                    <p className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer' onClick={increase}>+</p>
                                                </div>
                                        </div>
                      </div>
                                               
                </div>

            </div>
    )
 }

 export default SingleCartItem