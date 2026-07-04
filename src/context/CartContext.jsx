import { createContext, useContext, useState } from "react";
import { getProductsById } from "../data/products";

const CartContext = createContext(null);
export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(productId) {
        setCartItems((prevItems) => {
            const existingCartItems = prevItems.find((item) => item.id === productId)
            console.log(existingCartItems)
            if(existingCartItems) {
                return (
                    prevItems.map((item) => (
                        item.id === productId
                            ? {...item, quantity: item.quantity +1}
                            : item
                    ))
                )
            }
            return [...prevItems, {id: productId, quantity: 1}]
        })
    }

    function removeFromCart(productId) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    }

    function updateQuantity(productId, quantity) {
        if(quantity <= 0){
            removeFromCart(productId)
            return;
        }
        setCartItems((prevItems) => prevItems.map((item) => (
            item.id === productId
                ? {...item, quantity}
                : item
        )))
    }

    function getCartItemsWithProducts() {
        return (
            cartItems.map((item) => (
                {...item, product: getProductsById(item.id)}
            ))
            .filter((item) => item.product)
        )
    }

    function getCartTotal() {
        const total = cartItems.reduce((total, item) => {
            const product = getProductsById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
        return total;
    }

    function clearCart() {
        setCartItems([]);
    }

    function placeOrder() {
        alert('Order placed successfully!')
        clearCart();
    }

    function getCartItemsTotal(){
        return cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }

    return (
        <CartContext.Provider 
            value={{
                cartItems, 
                addToCart, 
                getCartItemsWithProducts, 
                removeFromCart, updateQuantity,
                getCartTotal, 
                placeOrder, 
                clearCart,
                getCartItemsTotal
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    return context;
}