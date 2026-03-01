import  {useState} from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { useContext } from 'react';
import {ProductsContext} from '../ProductContext.jsx'
import { Link } from 'react-router-dom';


function ProductsCard () {
       const {allProducts,displayedProducts,setDisplayedProducts,
             outOfStockMsg, setOutOfStockMsg,showMoreBtn, setShowMoreBtn, 
             setCartProducts, successMesage , setSuccessMessage } = useContext(ProductsContext);

        const [visibleCount , setVisibleCount] = useState (4);
        const visibleProducts = displayedProducts.slice(0, visibleCount);      

        function showMore () {
            allProducts.slice(0, visibleCount);
            setVisibleCount (prev => prev + 4);
        }

            function addToCart(productId) {

            const product = allProducts.find(p => p.id === productId);

            if (product.stock === 0) {
                setOutOfStockMsg(true);
                return;
            }

            setCartProducts(prev => {
                const existing = prev.find(item => item.id === productId);

                if (existing) {
                    if (existing.quantity >= existing.stock) {
                        return prev;
                    }

                    return prev.map(item =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }

                return [...prev, { ...product, quantity: 1 }];
            });
        }

        function handleClick (productId) {
                    addToCart (productId);
                    setSuccessMessage(true);
            }

    function handleViewAll  (){
         setDisplayedProducts(allProducts)
          setShowMoreBtn(true)
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
                           onClick={ () => handleClick(product.id ) }
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

                    <p className={`
                    fixed top-2 left-3 right-3 z-50
                    bg-green-300 text-gray-600 p-3 rounded shadow-md
                    transition-all duration-500 ease-in-out text-center
                    
                    ${outOfStockMsg
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 -translate-y-5"}
                    `}>
                    Product currently out of stock
                </p>
             </div>

            {visibleProducts.length !== 0 && showMoreBtn ?  

                <div className='md:flex md:justify-center md:mt-5'>
                   {visibleCount < allProducts.length &&  <button onClick={showMore} className='bg-orange-700 rounded text-gray-200/80 w-full md:w-1/2 p-2 mt-3 cursor-pointer hover:bg-gray-800'>View More</button>}
               </div>

                : 
                    
                <div className='md:flex md:justify-center md:mt-5'>
                    <button onClick={() => handleViewAll ()}  className='bg-orange-700 rounded text-gray-200/80 w-full md:w-1/2 p-2 mt-3 cursor-pointer hover:bg-gray-800' >
                        View all products
                    </button>
                 </div>
                    
            }
            
            </>
        )
 }

 export default ProductsCard