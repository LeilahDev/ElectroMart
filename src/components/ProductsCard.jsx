import  {useState , useEffect } from 'react'

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
              {visibleProducts.map ((product) => 
                 <div key = {product.id}>
                    <img src={product.images} alt="" />
                     <h3>{product.title}</h3>
                     <p>{product.brand}</p>
                     <p>ksh. {product.price}</p>
                     <button>View Details</button>
                     <button>Add to Cart</button>
                 </div>  
            )}

            {visibleCount < products.length &&  <button onClick={showMore}>View More</button>}
           
            </>
        )
 }

 export default ProductsCard