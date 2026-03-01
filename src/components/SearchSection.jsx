import { useContext, useState } from "react"
import { ProductsContext } from "../ProductContext.jsx"
import { useNavigate } from "react-router-dom";

function SearchSection () {

const {allProducts, setShowMoreBtn,setDisplayedProducts} = useContext(ProductsContext);
const [inputValue, setInputValue] = useState("");

function handleInput (event) {
    setInputValue (event.target.value)
}

const navigate = useNavigate();

function searchItem() {
    const search = inputValue.toLowerCase();
    
    const searchedProducts = allProducts.filter(item =>
        item.title.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search)
    );

    if (searchedProducts.length > 0) {
        // Navigate to the first matched product's detail page
        navigate(`/products/${searchedProducts[0].id}`);
    }

    setDisplayedProducts(searchedProducts);
    setShowMoreBtn(false);
    setInputValue("");
}

   return (
    <>
        <div className="p-2  sm:flex sm:justify-end">
            <input type="text" placeholder="Search by name or category" onChange={handleInput} value={inputValue}
              className="w-3/4 bg-gray-300 p-1 rounded pl-3 md:w-1/2 lg:w-1/4"
            ></input>
            <button onClick={searchItem} className="bg-orange-700 ml-2 py-1 px-3 rounded text-gray-200/80 md:mr-6 lg:mr-40 lg:px-8  cursor-pointer hover:bg-gray-800">Search</button>
        </div>
    </>
   )
}

export default SearchSection