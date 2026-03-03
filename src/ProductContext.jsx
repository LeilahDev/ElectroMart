import { createContext ,useState, useEffect } from 'react'
const ProductsContext = createContext ();

function ProductContext ( {children}) {

    //DATA IS FETCHED FROM THE JSON FILE AND SET TO THE STATE VARIABLE allProducts
    const [allProducts, setAllProducts] = useState(() => {
          const products = localStorage.getItem('products');
          return products ? JSON.parse(products) : []
    });
    const [displayedProducts , setDisplayedProducts] = useState(() => {
          const products = localStorage.getItem('products');
          return products ? JSON.parse(products) : []
    });

        useEffect(() => {
        const loadProducts = async () => {
            const saved = localStorage.getItem('products');

            if (saved) {
            setAllProducts(JSON.parse(saved));
            } else {
            const res = await fetch("/products.json");
            const data = await res.json();
            setAllProducts(data);
            localStorage.setItem('products', JSON.stringify(data));
            }
        };

        loadProducts();
        }, []);


        useEffect(() => {
            setDisplayedProducts(allProducts); 
        }, [allProducts]);   

       return (
        <>
                     
         <ProductsContext.Provider value = {{allProducts,
                                             setAllProducts,
                                             displayedProducts,
                                             setDisplayedProducts                                            
                                             }} >

                       {children}
         
        </ProductsContext.Provider>
        </>
       )
}

export {ProductsContext}
export default ProductContext;
