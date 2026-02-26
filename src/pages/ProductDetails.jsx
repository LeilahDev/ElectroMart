import { useParams } from 'react-router-dom';
import SearchSection from '../components/SearchSection.jsx'
import { FiShoppingCart } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { useContext, useState , useRef , useEffect } from 'react';
import { ProductsContext } from '../App.jsx';
import {Link} from 'react-router-dom';


function ProductDetails () {

    const {count,setCount, increase , decrease, cartProducts,products,filteredProducts,setCartProducts } = useContext(ProductsContext)

    console.log(filteredProducts)
     
      const [collapse1 , setCollapse1] = useState(false);
      const [collapse2 , setCollapse2] = useState(false);
      const sectionRef = useRef (null);
      const [successMesage , setSuccessMessage] = useState(false);
     
      const {id} = useParams();
      const productId = Number(id);

       const productCategory = products[productId-1].category
       const currentProduct = products[productId-1].title

       const productsArray = products.filter ((item) => {
             if(currentProduct !== item.title && productCategory === item.category) {
                return item
             }
       }) ;

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

           function handleScroll () {
                sectionRef.current.scrollIntoView ({
                behavior: "smooth"
                })
            }


            function addToCart(productId) {
                const product = products[productId];
                setCartProducts(prev => {
                    const existingIndex = prev.findIndex(item => item.id === product.id);
                    if (existingIndex !== -1) {
                        // If product already in cart, increase quantity
                        const updatedCart = [...prev];
                        updatedCart[existingIndex] = {
                            ...updatedCart[existingIndex],
                            quantity: updatedCart[existingIndex].quantity + count
                        };
                        return updatedCart;
                    } else {
                        // Add new product to cart
                        return [...prev, { ...product, quantity: count }];
                    }
                });
                
                setSuccessMessage(true);
                setCount(1);
            }

            useEffect (() => {
                localStorage.setItem('cartProducts' , JSON.stringify(cartProducts));
            }, [cartProducts])

             useEffect (() => {

                if(successMesage) {
                const timer = setTimeout(() => {
                          setSuccessMessage(false)
                        }, 2000)

                    return () => clearTimeout(timer);
                }

             }, [successMesage])

             const product = filteredProducts.find(p => p.id === productId);

             const isDisabled = count >= product?.stock;

    return (
        <>
              <SearchSection />

        <div ref= {sectionRef} className='relative p-8 sm:grid sm:grid-cols-3 sm:gap-4 md:px-15 md:gap-8 md:grid-cols-4 lg:px-50'>

                <div className='sm:col-span-1  md:col-span-2'>
                     <img src={products[productId-1].images} alt="" className='h-60 rounded w-full object-cover sm:h-80' />
                </div>
                 
                 <div className='sm:col-span-2 md:col-span-2'>
                        <h1 className='mt-5 text-lg font-semibold text-gray-800'>{products[productId-1].title}</h1>
                            <p className='text-xs mb-2 mt-2 text-gray-700'>Brand: {products[productId-1].brand}</p>
                            <p className='border-b py-2 mb-4 border-gray-500/50 text-gray-700'>Ksh. {products[productId-1].price}</p>
                            
                            
                                <p className='text-gray-700 cursor-pointer' onClick={description}>+ Description</p>
                                {collapse1 && 
                                    <p className='text-gray-700 pl-4 pt-1 text-sm'>{products[productId-1].description}</p>
                                }
                                
                                <div className='border-b border-t pb-4 mb-4 mt-4 pt-4 border-gray-500/50 text-gray-700 cursor-pointer'>
                                        <p  onClick={specification}>+ Specification</p>

                                        {collapse2 && 
                                                    <div className='text-gray-700 px-4 pt-1 text-sm flex justify-between'>
                                                            <p>Battery</p>
                                                            <p>Connectivity</p>
                                                    </div>
                                        }
                                </div>


            
                            <div className='text-xs bg-gray-300 w-1/4 py-1 text-center rounded '>
                                <p className='text-gray-800'>{filteredProducts[productId-1].stock} in stock</p>
                            </div>


                            <div className='flex justify-between mt-4 '>
                                <div className='flex border justify-around w-1/4 items-center border-gray-500/50 rounded'>
                                    <button className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer' onClick={decrease}>-</button>
                                    <p>{count}</p>
                                    <button className='bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer' disabled={isDisabled} onClick={increase}>+</button>
                                </div>

                                <button onClick={() => addToCart (productId-1)} className='bg-orange-700 w-1/2 p-1 rounded text-gray-300 cursor-pointer'>Add to cart</button>
                            </div>
                 </div>
              </div>

              <div className='mb-8 px-10 md:px-15 lg:px-50 lg:mt-12'>
                 <h1 className=' mb-4 mt-5 text-lg font-semibold text-gray-800 lg:text-center lg:text-2xl lg:mb-8'>Related Products</h1>

             <div className="grid grid-cols-1 gap-8 p-3 sm:grid-cols-2 md:grid-cols-4 md:p-1 md:gap-3 lg:gap-12">

              {productsArray.map ((product) => 
                  <div key = {product.id}  className="bg-gray-300 p-1 sm:p-2 pb-3 rounded md:p-1">
                    <img src={product.images} alt=""
                     className="w-full h-40 object-cover pb-3 rounded"
                    />
                    <p className="text-orange-700 text-xs pl-2">{product.brand}</p>
                     <h3 className="text-gray-700 pl-2">{product.title}</h3>
                     <p className="text-orange-800 pl-2">${product.price}</p>

                     <div className="mt-3 flex justify-between px-2">
                        <p onClick={handleScroll}  className="bg-gray-300 p-1 rounded text-gray-700"><Link to={`/products/${product.id}`}><FaEye/></Link></p>
                        <p onClick={() => addToCart (product.id-1)} className="bg-gray-400 p-1 rounded-full flex justify-center items-center md:p-2 text-gray-700"><FiShoppingCart  /></p> 
                     </div>

                  </div> 
            )}

                <p className={`
                    fixed top-2 left-3 right-3 z-50
                    bg-green-300 text-gray-600 p-3 rounded shadow-md
                    transition-all duration-500 ease-in-out text-center
                    
                    ${successMesage 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 -translate-y-5"}
                    `}>
                    Product Added successfully
                </p>

             </div>
        </div> 
        </>
    )
}

export default ProductDetails