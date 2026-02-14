import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";   
import { FaShopify } from "react-icons/fa";   
import { MdCategory } from "react-icons/md";  
import { FiShoppingCart } from "react-icons/fi"; 
import { HiOutlineUser } from "react-icons/hi"; 
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import {  HiChevronDown, HiChevronUp } from "react-icons/hi";

function NavBar () {

    const [isOpen, setIsOpen] = useState(false);
    const [subMenu, setSubMenu] = useState (false);

 useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-x-hidden");
    } else {
      document.body.classList.remove("overflow-x-hidden");
    }
  }, [isOpen]);

    function toggle () {
        if(!isOpen){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }

    function showSubMenu () {
        if(!subMenu){
           setSubMenu(true)
        }else{
           setSubMenu(false)
        }
    }

   return (
       <div className="relative bg-gray-300 md:bg-gray-800  md:flex md:gap-12 lg:gap-30 navBar lg:p-1 z-200">
            <div className="flex items-center justify-between px-4 py-1 sm:p-2 lg:pl-24">
                 <p className="relative text-orange-700 font-bold">
                    ElectroMart
                      <svg
                            className="w-full"
                            height="10"
                            viewBox="0 0 200 20"
                          >
                            <path
                            d="M5 5 Q100 -15 195 5"
                            stroke="#f97316"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            />
                        </svg>
                </p>

                 <button onClick={toggle} className="md:hidden">
                    {isOpen ? <MdClose className="text-2xl"/> : <FaBars className="text-2xl"/>}
                 </button>

            </div>

                   <div className={`fixed md:static px-4 py-6 sm:px-24 md:px-0 flex flex-col md:flex-row 
                                     md:justify-around md:items-center md:py-0 gap-3 w-full bg-gray-800 
                                     md:bg-transparent text-gray-200/80 md:text-gray-600 
                                      transform transition-transform duration-300 
                                     ${isOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0
                                    `}>

                    <ul className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-5 lg:gap-10  pl-2 md:text-gray-200/80">
                        <li className="flex items-center gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0 hover:text-orange-700">
                            <AiFillHome className="md:hidden"/>
                            <Link to="/">Home</Link>
                        </li>

                        <li className="flex items-center gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0 hover:text-orange-700">
                            <FaShopify className="md:hidden"/>
                            <Link to="/products">Shop</Link>
                        </li>

                        <li className="border-b border-gray-500/50 pb-2 md:border-none md:pb-0 hover:text-orange-700">

                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="flex justify-between items-center gap-4">
                               <MdCategory className="md:hidden"/>
                               <Link className="sm:pl-4 md:pl-0">Categories</Link>
                            </div>

                            <div className="ml-auto" onClick={showSubMenu}>
                                {subMenu ? <HiChevronUp className="text-2xl cursor-pointer"/> : <HiChevronDown className="text-2xl cursor-pointer"/>}
                            </div>  
                        </div>
                     
                     {subMenu && 
                        <div className="flex flex-col gap-2 pl-12 py-4 md:absolute md:justify-center md:bg-gray-800 md:py-3 md:px-5 md:top-12 md:text-gray-200/80">
                                    <Link className="border-b border-gray-400/40 w-3/4 text-center pb-1 md:w-full hover:text-orange-700">Smartphones</Link>
                                    <Link className="border-b border-gray-400/40 w-3/4 text-center pb-1 md:w-full hover:text-orange-700">Laptops</Link>
                                    <Link className="border-b border-gray-400/40 w-3/4 text-center pb-1 md:w-full hover:text-orange-700">Headphones</Link>
                                    <Link className="text-center w-3/4 md:w-full hover:text-orange-700">Acessories</Link>
                        </div>
                      }
                                             
                        </li>

                        <li className="flex items-center gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0 hover:text-orange-700">
                            <FiShoppingCart className="md:hidden"/>
                            <Link to="/cart">Cart</Link>
                        </li>

                    </ul>

                    <div className="flex flex-col gap-3 pl-2 md:gap-6 lg:gap-12 md:flex-row md:items-center md:justify-between md:text-gray-200/80">
                         <Link className="flex items-center  gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0 hover:text-orange-700">
                         <HiOutlineUser className="md:hidden"/>
                           Login
                         </Link>
                        <button className="bg-orange-700 rounded w-1/2 md:w-full mt-7 md:mt-0 self-center text-gray-200/80 p-1 cursor-pointer hover:bg-gray-300 hover:text-orange-800">Create Account</button>
                    </div>
            </div>

       </div>
   )
}

export default NavBar