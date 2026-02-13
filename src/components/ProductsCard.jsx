import  {useState , useEffect } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

function ProductsCard () {
    
        const [products , setProducts] = useState([]);
        const [errorMessage , setErrorMessage] = useState(null);
        const [visibleCount , setVisibleCount] = useState (4);

        const visibleProducts = products.slice(0, visibleCount);

        function showMore () {
            products.slice(0, visibleCount);

            setVisibleCount (prev => prev + 4);
        }
    
        useEffect(()=>{
             const productsArray = async () => {
                   try{
                        const res = await fetch ("/products.json");
                        const data = await res.json ();
    
                        if(!res){
                            throw new Error ("Something went wrong")
                        }
                        
                        setProducts (data);
                   } catch{
                            if(error instanceof TypeError){
                                setErrorMessage ("Network error: Check Your internet connection")
                            }else {
                                setErrorMessage (error.message);
                            }
                   }
             }
    
             productsArray ();
        }, [])
    
        return (
            <>
             <div className="grid grid-cols-1 gap-6 p-3 sm:grid-cols-2 md:grid-cols-4 md:p-1 md:gap-3 lg:gap-12">

              {visibleProducts.map ((product) => 
                  <div key = {product.id}  className="bg-gray-300 p-1 sm:p-2 pb-3 rounded md:p-1">
                    <img src={product.images} alt=""
                     className="w-full h-40 object-cover pb-3 rounded"
                    />
                    <p className="text-orange-700 text-xs pl-2">{product.brand}</p>
                     <h3 className="text-gray-700 pl-2">{product.title}</h3>
                     <p className="text-orange-800 pl-2">${product.price}</p>

                     <div className="mt-3 flex justify-between px-2">
                        <p  className="bg-gray-300 p-1 rounded text-gray-700"><FaEye/></p>
                        <p className="bg-gray-400 p-1 rounded-full flex justify-center items-center md:p-2 text-gray-700"><FiShoppingCart  /></p> 
                     </div>

                  </div> 
            )}
             </div>

             <div className='md:flex md:justify-center md:mt-5'>
                 {visibleCount < products.length &&  <button onClick={showMore} className='bg-orange-700 rounded text-gray-200/80 w-full md:w-1/2 p-2 mt-3 cursor-pointer hover:bg-gray-800'>View More</button>}
             </div>
           
           
            </>
        )
 }

 export default ProductsCard