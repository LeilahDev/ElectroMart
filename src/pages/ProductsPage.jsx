import SearchSection from "../components/SearchSection"
import studioHeadPhones from '../assets/studioHeadPhones.jpg'
import { FaChevronDown } from "react-icons/fa";
import ProductsCard from '../components/ProductsCard' 

 function ProductsPage () {
     return (
        <>
           <SearchSection />

           <div className="relative p-4 flex flex-col items-center justify-center">
                <div className="absolute z-10 text-white text-center">
                    <h1 className="text-2xl">Shop Electronics</h1>
                    <p>Browse phones, laptops, and accessories</p>
                    <p className="bg-gray-400 w-8 m-auto mt-5 p-2 rounded-full flex justify-center items-center"><FaChevronDown /></p> 
                </div>

                <div className="rounded relative">
                     <div className="absolute inset-0 bg-black/70 rounded-lg"></div>
                    <img src={studioHeadPhones} className="rounded"/>                  
                </div>
           </div>

           <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 lg:text-2xl text-center lg:mb-8">Find Your Best Device</h2>
                <ProductsCard />
           </div>
        </>
     )
 }

 export default ProductsPage