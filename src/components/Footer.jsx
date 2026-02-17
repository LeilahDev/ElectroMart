import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer () {
  return (

    <>
    <div className="bg-gray-800 text-gray-200/80  py-8 px-6 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-5 lg:gap-10"> 
        <div className="mb-4">
            <h2 className="text-base  mb-2 text-orange-800">About ElectroMart</h2>
             <p>ElectroMart – Your one-stop shop for smartphones, laptops, headphones, and accessories.
               Providing the latest tech products with fast delivery and great prices.
             </p>
        </div> 

        <div className="mb-4">
            <h2 className="text-base mb-2 text-orange-800">Quick Links</h2>
            <p>Home</p>
            <p>Products</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQ</p>
        </div>

        <div className="mb-4">
           <h2 className="text-base  mb-2 text-orange-800">Customer Service</h2>
             <p>Shipping & Delivery</p>
             <p>Returns & Exchanges</p>
             <p>Payment Options</p>
             <p>Terms & Conditions</p>
             <p>Privacy Policy</p>
        </div>

        <div className="mb-4">
          <h2 className="text-base  mb-2 text-orange-800">Contact Us</h2>
              <p>Email: support@electromart.com</p>
              <p>Phone: +254 712 345 678</p>
              <p>Address: 123 Tech Avenue, Nairobi, Kenya</p>
        </div>

        <div className="mb-4">
           <h2 className="text-base  mb-2 text-orange-800">Follow Us</h2>

           <div className="flex gap-5">
                 <a href="https://facebook.com/electromart" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a href="https://twitter.com/electromart" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a href="https://instagram.com/electromart" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://linkedin.com/company/electromart" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
           </div>

        </div>
    </div>

    <div className="px-9 md:px-16 text-center bg-gray-800 text-gray-200/80 ">
       <p className="border-t py-5 md:py-8">© 2026 ElectroMart. All rights reserved.</p>
    </div>
    </>
    
  )
}

export default Footer