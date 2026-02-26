import SearchSection from "../components/SearchSection"
import studioHeadphones from '../assets/studioHeadphones.png'
import { FaChevronDown } from "react-icons/fa";
import ProductsCard from '../components/ProductsCard' 
import ProductsCategory from "../components/ProductsCategory";

 function ProductsPage () {

     return (
        <>
           <SearchSection />

           <div className="lg:flex lg:pl-10 lg:gap-22">
                <ProductsCategory />

                <div className="relative">
                    {/* Added the relative position */}
                            <div className="flex flex-col justify-center items-center md:flex-row">
                            <div className="w-3/4 md:order-2 lg:flex lg:justify-center">
                                <img src={studioHeadphones} />                  
                            </div>

                            <div className="text-center bg-gray-300 px-2 py-3 md:py-4 text-gray-700
                                rounded sm:w-3/4 md:order-1 md:w-1/2  md:relative md:left-20 z-20
                                lg:w-1/4 lg:left-50 ml-3 mr-3 sm:ml-0 sm:mr-0
                                ">
                                <h1 className="text-2xl text-gray-800">Shop Electronics</h1>
                                <p>Browse phones, laptops,headphones and accessories </p>
                                <p className="bg-gray-400 w-8 m-auto mt-5 p-2 rounded-full flex justify-center items-center"><FaChevronDown /></p> 
                            </div>
                    </div>

                            <div className="p-4 mt-7 md:px-5 lg:px-34">                                
                                    <h1 className="text-lg md:text-2xl md:mb-4 font-semibold text-gray-800 lg:text-2xl text-center lg:mb-8">Find Your Best Device</h1>
                                    <ProductsCard />
                            </div>
                </div>
                
 
        </div>

        </>
     )
 }

 export default ProductsPage