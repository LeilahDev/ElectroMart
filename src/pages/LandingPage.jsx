import landingPage1 from "../assets/landingPage1.png";
import landingPage2 from "../assets/landingPage2.png";
import whyUs from "../assets/whyUs.jpg"
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
    <div className="bg-gray-200 p-5 sm:px-8 md:p-8 md:px-12">
       <div className="md:grid md:grid-cols-5 md:gap-8  md:mt-8 md:justify-around md:p-5 lg:mt-20 lg:grid-cols-4">
         <div className="bg-gray-300 py-6 sm:px-8 md:order-2 md:col-span-2  md:flex lg:col-span-2">
             <img src={landingPage1} alt="" className="md:w-full"/>
         </div>
         <div className="flex flex-col mt-8 justify-center items-center md:items-start
                   md:order-1 md:mt-0 md:col-span-3 md:p-5 lg:col-span-2
         
         ">
            <p className="text-xs lg:text-base  text-gray-700">Your Trusted Electronics Store</p>
            <h1 className="text-2xl lg:text-5xl text-center py-2 font-semibold text-gray-800 md:text-start">Smart Electronics for Everyday Life</h1>
            <p className="text-sm lg:text-2xl text-center text-gray-700 md:text-start">Shop phones, laptops, and accessories at affordable prices with fast and reliable delivery.</p>
            <button className="bg-orange-700 rounded w-1/2 mt-5 md:self-start  
                self-center text-gray-200/80 p-1 cursor-pointer lg:mt-8 lg:w-1/4 lg:p-2">Start Shopping</button>
         </div>
       </div>

       <div className="mt-6 px-2 py-3 md:px-5 lg:mt-14">
           <h2 className="text-lg font-semibold text-gray-800 lg:text-2xl lg:text-center lg:mb-8">Categories</h2>

           {/* Mobile slider */}
           <div className="bg-gray-300 mt-4 md:hidden">
               <div className="flex gap-3 justify-end py-3 pr-4">
                <FaChevronLeft onClick={previous}/>
                <FaChevronRight onClick={next}/>
               </div>

               <div className="flex flex-col gap-2 px-2 sm:px-8 md:hidden">
                <div className="relative w-full h-50 sm:h-65 overflow-hidden top-1">
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

                <p className="text-orange-800 pb-2 sm:pb-5 sm:pt-3">{categories[activeIndex]}</p>
               </div>

           </div>

           {/* Desktop Categories Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-3 mt-4 lg:px-20 lg:gap-12">
              {images.map((img, index) => (
                <div 
                  key={index}
                  className="bg-gray-300 p-2 lg:p-1 rounded hover:shadow-lg transition"
                >
                  <img 
                    src={img}
                    alt={categories[index]}
                    className="w-full h-48 lg:h-60 object-cover rounded"
                  />
                  <p className="text-orange-800 font-medium text-center mt-3">
                    {categories[index]}
                  </p>
                </div>
              ))}
            </div>
       </div>


       <div className="mt-6 py-3 md:px-5 lg:mt-8 lg:px-20">
          <h2 className="text-lg font-semibold text-gray-800 lg:text-2xl lg:text-center lg:mb-8">Featured Products</h2>
          <div className="mt-4">
                 <ProductsCard />
          </div>
          
       </div>

       
            

            <div className="mt-8 sm:flex sm:gap-5  m-auto px-5 md:px-8 lg:mt-12 lg:px-16 lg:grid lg:grid-cols-4 lg:gap-0  lg:items-center">
              <div className="lg:col-span-2 lg:flex lg:justify-center sm:w-1/2">
                <img src={whyUs} className="sm:w-full pb-4 lg:w-3/4 lg:h-75 lg:px-1 lg:pb-0 "/>
              </div>

                <div className="text-center lg:text-start lg:col-span-2 lg:h-full lg:pt-14">
                        <h2 className="text-lg font-semibold text-gray-800 pb-3 lg:text-2xl">Why Shop With Us</h2>
                        <p className="flex items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/>Affordable prices</p>
                        <p className="flex items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/> Quality and trusted brands</p>
                        <p className="flex items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/> Fast and Reliable delivery</p>
                        <p className="flex items-center gap-3 text-gray-700">< HiCheckCircle className="text-gray-700"/> Easy and secure shopping</p>
                </div>
         </div>

       <div className="flex flex-col bg-gray-300 mt-8 rounded pb-5">
            <h1 className="text-2xl font-semibold text-gray-800 p-5 text-center lg:text-5xl">Ready to upgrade your tech?</h1>
            <p className="text-gray-800 text-center lg:text-lg">Browse our collections and find the perfect device for your needs</p>
            <button className="bg-orange-700 px-5 self-center mt-3 py-1 rounded text-gray-200/80">Browse All</button>
       </div>
    </div>
  )
}

export default LandingPage