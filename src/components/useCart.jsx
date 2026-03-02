import { useContext } from "react";
import { ProductsContext } from "../ProductContext.jsx";

function useCart () {

    const {setCartProducts, setOutOfStockMsg ,setCount ,setSuccessMessage, displayedProducts, count} = useContext (ProductsContext)

     function addToCart(productId) {
                            const product = displayedProducts.find(p => p.id === productId);

                            if (!product) return;

                            if (product.stock === 0) {
                                setOutOfStockMsg(true);
                                return;
                            }

                            setCartProducts(prev => {
                                const existing = prev.find(item => item.id === productId);

                                // If product already exists in cart
                                if (existing) {
                                return prev.map(item => {
                                    if (item.id === productId) {

                                    // If selected quantity exceeds stock → reset to max stock
                                    const newQuantity = item.quantity + count;

                                    return {
                                        ...item,
                                        quantity: newQuantity > product.stock
                                        ? product.stock
                                        : newQuantity
                                    };
                                    }

                                    return item;
                                });
                                }

                                // If product does not exist in cart yet
                                return [
                                ...prev,
                                {
                                    ...product,
                                    quantity: count > product.stock
                                    ? product.stock
                                    : count
                                }
                                ];
                            });

                            setSuccessMessage(true);
                            setCount(1);
                            }

            return {addToCart}

}

export default useCart;