import OrderSummary from "../components/OrderSummary.jsx"
import ConfirmationPage from "./ConfirmationPage.jsx"
import {useState , useContext, useEffect} from 'react'
import { ProductsContext } from "../App.jsx";

function CheckOutPage () {
    const [showConfirmation , setShowConfirmation] = useState (false);
    const { setCartProducts, cartProducts,setFilteredProducts} = useContext(ProductsContext);


    function handleSubmit (e) {
        e.preventDefault();    

            setFilteredProducts(prevProducts =>
                prevProducts.map(product => {
                const cartItem = cartProducts.find(item => item.id === product.id);

                if (cartItem) {
                    return {
                    ...product,
                    stock: product.stock - cartItem.quantity
                    };
                }

                return product;
                })
            );
        
    const order = {
        id: Date.now(),
        items: cartProducts,
        status: "Pending",
        date: new Date().toLocaleString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

        setShowConfirmation(true);
        setCartProducts([]);
        localStorage.removeItem('cartProducts');
    }

    return(
        <div className="bg-gray-200 lg:w-1/2 md:w-3/4 md:m-auto md:mt-10 md:mb-10 m-4 rounded sm:px-18 px-5 py-5 relative">
              {!showConfirmation ? 
                <div>
                <h1 className="border-b border-white pb-2 text-lg text-orange-700">Check Out</h1>
             <form action=""  onSubmit={handleSubmit}>
                  <div className="flex flex-col mb-5 mt-5 border-b border-white pb-2">
                      <h2 className="text-lg text-gray-800">Customer Information</h2>

                      <div className="grid grid-cols-2 py-2 ">
                            <label htmlFor="fullName " className="text-gray-600">Full name</label>
                            <input type="text"  id="fullName" placeholder=" Enter your fullname" required className="bg-gray-400  rounded text-sm px-4"/>
                      </div>

                      <div className="grid grid-cols-2 py-2">
                             <label htmlFor="email" className="text-gray-600">Email Address</label>
                             <input type="email"  id="email" placeholder=" Enter your email" required className="bg-gray-400 rounded text-sm px-4"/>
                      </div>

                      <div className="grid grid-cols-2  py-2 mb-2">
                            <label htmlFor="phone" className="text-gray-600">Phone Number</label>
                            <input type="number" id="phone" placeholder=" Enter your phone number" required className="bg-gray-400  rounded text-sm px-4"/>
                      </div>

                  </div>

                  <div className="flex flex-col mb-5 mt-5 border-b border-white pb-2">
                     <h2 className="text-lg text-gray-800">Shipping Address</h2>

                     <div className="grid grid-cols-2 py-2 ">
                            <label htmlFor="address"  className="text-gray-600">Address Line</label>
                            <input type="text" id="address" placeholder=" Enter delivery address" required className="bg-gray-400 rounded text-sm px-4"/>
                     </div>

                     <div className="grid grid-cols-2 py-2 ">   
                            <label htmlFor="city"  className="text-gray-600">City/Town</label>
                            <input type="text" id="city" placeholder=" Enter delivery city" required className="bg-gray-400 rounded text-sm px-4"/>
                     </div>

                  </div>

                  <div className="flex flex-col mb-5 mt-5 border-b border-white pb-2">
                        <h2  className="text-lg text-gray-800">Payment Method</h2>

                            <div className="flex gap-5 py-2">
                                    <input type="radio" name="paymentMethod" id="payOnDelivery" required/>
                                    <label htmlFor="payOnDelivery"  className="text-gray-600">Pay on Delivery</label>
                            </div>

                            <div className="flex gap-5 py-2">
                                    <input type="radio" name="paymentMethod" id="mpesa" required/>
                                    <label htmlFor="mpesa"  className="text-gray-600 ">Pay with Mpesa</label>
                            </div>

                  </div>

                 <OrderSummary />
                   <button type="submit" className="bg-orange-600 text-gray-200 w-1/2 md:w-1/3 p-1 rounded hover:bg-gray-800 cursor-pointer">Place order</button>

             </form>
              </div>
             :
                <ConfirmationPage />
              }
             
        </div>
    )
}

export default CheckOutPage