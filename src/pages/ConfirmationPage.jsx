import { Link } from "react-router-dom";

function ConfirmationPage () {
    return (

        /* OVERLAY */
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">

            {/* MODAL BOX */}
            <div className="
                bg-white
                text-green-700
                p-6
                rounded-lg
                text-center
                shadow-2xl
                transform
                scale-100
                animate-fadeIn
                md:w-1/3
            ">

                <p className="text-lg font-semibold">
                    🎉 Order placed successfully!
                </p>

                <p className="text-sm mt-2 text-gray-600">
                    Thank you for shopping with us.
                </p>

                <Link to="/products">
                    <button className="
                        bg-orange-700
                        text-white
                        py-2
                        px-4
                        mt-4
                        rounded
                        hover:bg-gray-800
                        transition
                        cursor-pointer
                    ">
                        Continue Shopping
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default ConfirmationPage;