import  {useState , useEffect } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { useContext } from 'react';
import {ProductsContext} from '../App.jsx'
import { Link } from 'react-router-dom';


function ProductsCard () {
       const {products, setProducts ,filteredProducts , setFilteredProducts, cartProducts,  setCartProducts } = useContext(ProductsContext);

        const [errorMessage , setErrorMessage] = useState(null);
        const [visibleCount , setVisibleCount] = useState (4);
        const visibleProducts = filteredProducts.slice(0, visibleCount);
        const [successMesage , setSuccessMessage] = useState(false);

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
                          setFilteredProducts(data);
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

        localStorage.setItem ('products', JSON.stringify (products));

            function addToCart(productId) {
                    const updatedCart = [...cartProducts, products[productId - 1]];
                    setCartProducts(updatedCart);

                    localStorage.setItem(
                        'cartProducts',
                        JSON.stringify(updatedCart)
                    ) || [];

            }

            function handleClick (productId) {
                    addToCart (productId);
                    setSuccessMessage(true);
            }

             useEffect (() => {

                if(successMesage) {
                const timer = setTimeout(() => {
                          setSuccessMessage(false)
                        }, 2000)

                    return () => clearTimeout(timer);
                }

             }, [successMesage])

             function handleNotFound (){
                setFilteredProducts(products)
             }

        return (
            <>
             <div className="grid grid-cols-1 gap-6 p-3 sm:grid-cols-2 md:grid-cols-4 md:p-1 md:gap-3 lg:gap-12">

            {visibleProducts.length !== 0
               ?
                visibleProducts.map ((product) => 
                  <div key = {product.id}  className="bg-gray-300 p-1 sm:p-2 pb-3 rounded md:p-1">
                    <img src={product.images} alt=""
                     className="w-full h-40 object-cover pb-3 rounded"
                    />
                    <p className="text-orange-700 text-xs pl-2">{product.brand}</p>
                     <h3 className="text-gray-700 pl-2">{product.title}</h3>
                     <p className="text-orange-800 pl-2">${product.price}</p>

                     <div className="mt-3 flex justify-between px-2">
                        <p  className="bg-gray-300 p-1 rounded text-gray-700"><Link to={`/products/${product.id}`}><FaEye/></Link></p>
                        <p className="bg-gray-400 p-1 rounded-full flex justify-center items-center md:p-2 text-gray-700 cursor-pointer"
                           onClick={ () => handleClick(product.id) }
                        ><FiShoppingCart  /></p> 
                     </div>

                  </div> )
              
                 :
                <div className="py-3">
                    <p className="text-gray-700 text-lg">No products found</p>
                    <p className="text-gray-500 text-sm mt-1">
                        Try searching with a different name or category.
                    </p>

                 </div>

            }

                    <p className={`
                    fixed top-2 left-3 right-3 z-50 text-center
                    bg-green-300 text-gray-600 p-3 rounded shadow-md
                    
                    transition-all duration-500 ease-in-out
                    
                    ${successMesage 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 -translate-y-5"}
                    `}>
                    Product Added successfully
                    </p>
             </div>

            {visibleProducts.length !== 0 
                ? 
                <div className='md:flex md:justify-center md:mt-5'>
                   {visibleCount < products.length &&  <button onClick={showMore} className='bg-orange-700 rounded text-gray-200/80 w-full md:w-1/2 p-2 mt-3 cursor-pointer hover:bg-gray-800'>View More</button>}
               </div>
                :
                    
                <div className='md:flex md:justify-center md:mt-5'>
                    <button onClick={() => handleNotFound ()}  className='bg-orange-700 rounded text-gray-200/80 w-full md:w-1/2 p-2 mt-3 cursor-pointer hover:bg-gray-800' >
                        View all products
                    </button>
                </div>
                    
            }
            
           
           
            </>
        )
 }

 export default ProductsCard