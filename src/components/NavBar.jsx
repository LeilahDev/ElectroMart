import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";   
import { FaShopify } from "react-icons/fa";   
import { MdCategory } from "react-icons/md";  
import { FiShoppingCart } from "react-icons/fi"; 
import { HiOutlineUser } from "react-icons/hi"; 
import { MdClose } from "react-icons/md";
import { useState } from "react";
import {  HiChevronDown, HiChevronUp } from "react-icons/hi";

function NavBar () {

    const [isOpen, setIsOpen] = useState(false);
    const [subMenu, setSubMenu] = useState (false);

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
       <div className="relative bg-gray-300 md:bg-gray-800 md:flex md:gap-12">
            <div className="flex items-center justify-between p-3 sm:p-4">
                 <p className="text-orange-700">ElectroMart</p>

                 <button onClick={toggle} className="md:hidden">
                    {isOpen ? <MdClose className="text-2xl"/> : <FaBars className="text-2xl"/>}
                 </button>

            </div>

                    <div className={`absolute md:static px-4 py-8 sm:px-24 md:px-0 flex flex-col md:flex-row md:justify-around md:items-center md:py-3 gap-3 w-full bg-gray-800  text-gray-200/80
                                      transform transition-transform duration-300
                                     ${isOpen ? "translate-x-0" : "translate-x-full"}
                                    `}>

                    <ul className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-5 pl-2">
                        <li className="flex items-center gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0">
                            <AiFillHome className="md:hidden"/>
                            <Link to="/">Home</Link>
                        </li>

                        <li className="flex items-center gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0">
                            <FaShopify className="md:hidden"/>
                            <Link to="/products">Shop</Link>
                        </li>

                        <li className="border-b border-gray-500/50 pb-2 md:border-none md:pb-0">

                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="flex justify-between items-center gap-4">
                               <MdCategory className="md:hidden"/>
                               <Link className="sm:pl-4 md:pl-0">Categories</Link>
                            </div>

                            <div className="ml-auto" onClick={showSubMenu}>
                                {subMenu ? <HiChevronUp className="text-2xl"/> : <HiChevronDown className="text-2xl"/>}
                            </div>  
                        </div>
                     
                     {subMenu && 
                        <div className="flex flex-col gap-2 pl-12 py-4 md:absolute md:pl-2">
                                    <Link className="border-b border-gray-400/40 w-3/4 text-center pb-1">Smartphones</Link>
                                    <Link className="border-b border-gray-400/40 w-3/4 text-center pb-1">Laptops</Link>
                                    <Link className="border-b border-gray-400/40 w-3/4 text-center pb-1">Headphones</Link>
                                    <Link className="text-center w-3/4">Acessories</Link>
                        </div>
                      }
                                             
                        </li>

                        <li className="flex items-center gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0">
                            <FiShoppingCart className="md:hidden"/>
                            <Link to="/cart">Cart</Link>
                        </li>

                    </ul>

                    <div className="flex flex-col gap-3 pl-2 md:gap-6 md:flex-row md:items-center md:justify-between">
                         <Link className="flex items-center  gap-4 sm:gap-8 border-b md:border-none border-gray-500/50 pb-2 md:pb-0">
                         <HiOutlineUser className="md:hidden"/>
                           Login
                         </Link>
                        <button className="bg-orange-700 rounded w-1/2 md:w-full mt-7 md:mt-0 self-center text-gray-200/80 p-1">Create Account</button>
                    </div>
            </div>

       </div>
   )
}

export default NavBar