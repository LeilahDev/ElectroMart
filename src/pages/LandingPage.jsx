import landingPage1 from "../assets/landingPage1.png";
import landingPage2 from "../assets/landingPage2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2"
import ProductsCard from "../components/ProductsCard";
import laptop from "../assets/laptop.jpg"
import smartphone from "../assets/smartphone.jpg"
import headphone from "../assets/headphone.jpg"
import assesories from "../assets/assesories.jpg"
import { useState } from "react";


function LandingPage () {

  const images = [laptop, smartphone, headphone , assesories];
  const categories = ["Laptops", "Smartphones", "Headphones" , "Assesories"]
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  function previous () {
       if(activeIndex < images.length && activeIndex > 0){
          setDirection("prev")
          setActiveIndex( prev => prev - 1)
       }
  }

  function next () {
       if(activeIndex < images.length-1){
        setDirection ("next")
        setActiveIndex (prev => prev + 1)
       }
  }

  return (
    <div className="bg-gray-200 p-5">
       <div>
         <div className="bg-gray-300 py-6">
             <img src={landingPage1} alt="" />
         </div>
         <div className="flex flex-col mt-8 justify-center items-center">
            <p className="text-xs  text-gray-700">Your Trusted Electronics Store</p>
            <h1 className="text-2xl text-center py-2 font-semibold text-gray-800">Smart Electronics for Everyday Life</h1>
            <h3 className="text-sm text-center text-gray-700">Shop phones, laptops, and accessories at affordable prices with fast and reliable delivery.</h3>
            <button className="bg-orange-700 rounded w-1/2 md:w-full mt-5 md:mt-0 self-center text-gray-200/80 p-1 cursor-pointer">Start Shopping</button>
         </div>
       </div>

       <div className="mt-6 px-2 py-3">
           <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
           <div className="bg-gray-300 mt-4">
               <div className="flex gap-3 justify-end py-3 pr-4">
                <FaChevronLeft onClick={previous}/>
                <FaChevronRight onClick={next}/>
               </div>

               <div className="flex flex-col gap-2 px-2">
                <div className="relative w-full h-50 overflow-hidden top-1">
                        {images.map((img, index) => {
                          const isActive = index === activeIndex;
                          return (
                            <div key={index}>
                            <img
                              src={img}
                              className={`
                                w-full h-full object-cover absolute 
                                transition-transform duration-500 ease-in-out
                                ${isActive
                                  ? "translate-x-0 "
                                  : direction === "next"
                                  ? "translate-x-full "
                                  : "-translate-x-full "
                                }
                              `}
                            />
                           
                            </div>
  
                          );
                        })}

                </div>

                <p className="text-orange-800 pb-2">{categories[activeIndex]}</p>
               </div>

           </div>
       </div>


       <div className="mt-6 py-3 ">
          <h2 className="text-lg font-semibold text-gray-800">Featured Products</h2>
          <div className="mt-4">
                 <ProductsCard />
          </div>
          
       </div>

       <div className=" mt-8 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-800">Why Shop With Us</h2>

            <div className="mt-3">
                 <p className="flex items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/>Affordable prices</p>
                 <p className="flex  items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/> Quality and trusted brands</p>
                 <p className="flex items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/> Fast and Reliable delivery</p>
                <p className="flex items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/> Easy and secure shopping</p>
            </div>

       </div>

       <div className="flex flex-col bg-gray-300 mt-8 rounded pb-5">
            <h1 className="text-2xl font-semibold text-gray-800 p-5 text-center">Ready to upgrade your tech?</h1>
            <p className="text-gray-800 text-center">Browse our collections and find the perfect device for your needs</p>
            <button className="bg-orange-700 px-5 self-center mt-3 py-1 rounded text-gray-200/80">Browse All</button>
       </div>
    </div>
  )
}

export default LandingPage