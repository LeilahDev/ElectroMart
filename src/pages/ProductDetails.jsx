import { useParams } from 'react-router-dom';
import SearchSection from '../components/SearchSection.jsx'
import { FiShoppingCart } from "react-icons/fi";
import { useContext, useState } from 'react';
import { ProductsContext } from '../App.jsx';

function ProductDetails () {
      const [collapse1 , setCollapse1] = useState(false);
      const [collapse2 , setCollapse2] = useState(false);
      const [count , setCount] = useState (1);

      const {id} = useParams();

      const savedproducts = JSON.parse(
        localStorage.getItem('products')
       ) || [];

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

         function description () {
            if(!collapse1) {
                setCollapse1 (true);
                 setCollapse2 (false);
            }else if(collapse1){
                setCollapse1 (false)
            }
         }

         function specification () {
            if(!collapse2) {
                setCollapse2 (true);
                setCollapse1 (false);
            }else if(collapse2){
                setCollapse2 (false);
                
            }
         }

    return (
        <>
              <SearchSection />
              <div className='p-8'>
                  <img src={savedproducts[id-1].images} alt="" className='h-60 rounded w-full object-cover' />
                  <h1 className='text-lg mt-5'>{savedproducts[id-1].title}</h1>
                  <p className='text-xs mb-2 mt-2'>Brand: {savedproducts[id-1].brand}</p>
                  <p className='border-b py-2 mb-4'>Ksh. {savedproducts[id-1].price}</p>
                  
                 
                     <p onClick={description}>+ Description</p>
                      {collapse1 && 
                        <p>{savedproducts[id-1].description}</p>
                      }
                    
                    <div className='border-b border-t pb-4 mb-4 mt-4 pt-4'>
                            <p  onClick={specification}>+ Specification</p>

                            {collapse2 && 
                                        <div>
                                                <p>Battery</p>
                                                <p>Connectivity</p>
                                        </div>
                            }
                    </div>


 
                  <div className='text-xs bg-gray-300 w-1/4 py-1 text-center rounded'>
                       <p>{savedproducts[id-1].stock} in stock</p>
                  </div>


                 <div className='flex justify-between mt-4'>
                     <div className='flex border justify-around w-1/4 items-center'>
                        <p className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer' onClick={decrease}>-</p>
                        <p>{count}</p>
                        <p className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer' onClick={increase}>+</p>
                     </div>

                    <button className='bg-orange-700 w-1/2 p-1 rounded'>Add to cart</button>
                 </div>

              </div>
        </>
    )
}

export default ProductDetails