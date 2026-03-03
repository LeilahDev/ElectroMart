import { useContext } from "react";
import { Link } from "react-router-dom"
import { ProductsContext } from "../ProductContext.jsx";
import { MyUIcontext } from "../UIContext.jsx";

function ProductsCategory () {

    const {setDisplayedProducts, allProducts} = useContext (ProductsContext);
    const {setShowMoreBtn } = useContext (MyUIcontext)

   function categoryProducts (category) {

        if(category === "allCategories") {
             setDisplayedProducts (allProducts)
        }
        else {
            const categoryProducts = allProducts.filter(item =>
                item.category.toLowerCase().includes(category)
            );
        
            setDisplayedProducts (categoryProducts)
        }

       setShowMoreBtn(false);
    
    }

    return (
        <>        
                <div className="hidden lg:flex text-gray-200/80">
                        <ul className="flex flex-col gap-4 fixed bg-gray-800 py-2 px-8 rounded">
                            <li className="border-b pb-2 px-6 " onClick={() => categoryProducts ("allCategories")}><Link className="hover:text-orange-800">All Categories</Link></li>
                            <li className="border-b pb-2 px-6 " onClick={() => categoryProducts ("smartphones")}><Link className="hover:text-orange-800">Smartphones</Link></li>
                            <li className="border-b pb-2 px-6 " onClick={() => categoryProducts ("laptops")}><Link className="hover:text-orange-800">Laptops</Link></li>
                            <li className="border-b pb-2 px-6 " onClick={() => categoryProducts ("headphones")}><Link className="hover:text-orange-800">Headphones</Link></li>
                            <li className="px-6 hover:text-orange-800" onClick={() => categoryProducts ("accessories")}><Link className="hover:text-orange-800">Accessories</Link></li>
                        </ul>
                </div> 

        </> 
    )
}

export default ProductsCategory