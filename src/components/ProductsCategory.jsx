import { Link } from "react-router-dom"

function ProductsCategory () {

    return (
        <>        
                <div className="hidden lg:flex text-gray-200/80">
                        <ul className="flex flex-col gap-4 fixed bg-gray-800 py-2 px-8 bottom-104 rounded">
                            <li className="border-b pb-2 px-6 "><Link className="hover:text-orange-800">All Categories</Link></li>
                            <li className="border-b pb-2 px-6 "><Link className="hover:text-orange-800">Smartphones</Link></li>
                            <li className="border-b pb-2 px-6 "><Link className="hover:text-orange-800">Laptops</Link></li>
                            <li className="border-b pb-2 px-6 "><Link className="hover:text-orange-800">Headphones</Link></li>
                            <li className="px-6 hover:text-orange-800"><Link className="hover:text-orange-800">Accessories</Link></li>
                        </ul>
                </div> 

        </>
    )
}

export default ProductsCategory