import landingPage1 from "../assets/landingPage1.png";
import landingPage2 from "../assets/landingPage2.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductsCard from "../components/ProductsCard";
import laptop from "../assets/laptop.jpg"
import smartphone from "../assets/smartphone.jpg"
import headphone from "../assets/headphone.jpg"
import assesories from "../assets/assesories.jpg"

function LandingPage () {

  return (
    <div>
       <div>
         <div>
             <img src={landingPage1} alt="" />
         </div>
         <div>
            <p>Your Trusted Electronics Store</p>
            <h1>Smart Electronics for Everyday Life</h1>
            <h3>Shop phones, laptops, and accessories at affordable prices with fast and reliable delivery.</h3>
            <button>Start Shopping</button>
         </div>
       </div>

       <div>
           <h2>Categories</h2>
           <div>
               <div>
                <FaChevronLeft />
                <FaChevronRight />
               </div>
               <div>
                   <img src={laptop} alt="laptop" />
                   <img src={smartphone} alt="smartphone" />
                   <img src={headphone} alt="headphone" />
                   <img src={assesories} alt="assesories" />  
               </div>

           </div>
       </div>


       <div>
          <h2>Featured Products</h2>
          <div>
                 <ProductsCard />
          </div>
          
       </div>

       <div>
            <h2>Why Shop With Us</h2>
            <p>Affordable prices</p>
            <p>Quality and trusted brands</p>
            <p>Fast and Reliable delivery</p>
            <p>Easy and secure shopping</p>
       </div>

       <div>
            <h1>Ready to upgrade your tech?</h1>
            <p>Browse our collections and find the perfect device for your needs</p>
            <button>Browse All</button>
       </div>
    </div>
  )
}

export default LandingPage