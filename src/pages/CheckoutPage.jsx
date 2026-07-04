import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import  '../App.css';
import ConfirmModal from '../components/ConfirmModal';

export default function CheckoutPage() {
    const { cartItems, getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, placeOrder, getCartItemsTotal, clearCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const selectedItems = getCartItemsWithProducts()
    const total = getCartTotal()
    const cartItemsTotal = getCartItemsTotal();

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Checkout</h1>
                {cartItems.length > 0 && (
                    <p className='checkout-items-count'>
                        You have <strong>{cartItemsTotal}</strong>{cartItemsTotal === 1 ? ' item' : ' items'} in your cart.
                    </p>
                )}
                <div className="checkout-container">
                    {cartItems.length === 0 ? (
                        <h2>Your cart is empty.</h2>
                    ) : (
                        <div className="checkout-items">
                            <div className="checkout-header-row">
                                <h2 className='checkout-section-title'>Order Summary</h2>
                                <button 
                                    className="btn btn-secondary btn-small clear-cart-btn"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    🗑️ Clear Cart
                                </button>
                            </div>
                            {selectedItems.map((item) => (
                                <div className='checkout-item' key={item.product.id}>
                                    <img 
                                        src={item.product.image} 
                                        alt=""
                                        className='checkout-item-image'
                                    />
                                    <div className="checkout-item-details">
                                        <h3 className='checkout-item-name'>
                                            {item.product.name}
                                        </h3>
                                        <p className='checkout-item-price'>
                                            ${item.product.price} each
                                        </p>
                                    </div>
                                    <div className="checkout-item-controls">
                                        <div className="quantity-controls">
                                            <button 
                                                className='quantity-btn'
                                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <span className='quantity-value'>{item.quantity}</span>
                                            <button 
                                                className='quantity-btn'
                                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className='checkout-item-total'>
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </p>
                                        <button className='btn btn-secondary btn-small' onClick={() => removeFromCart(item.product.id)}>
                                            Remove
                                        </button>
                                    </div>
                                    
                                </div>
                            ))}
                            <div className="checkout-summary">
                                <h2 className='checkout-section-title'>Total</h2>
                                <div className='checkout-total'>
                                    <p className='checkout-total-label'>Subtotal</p>
                                    <p className='checkout-total-value'>
                                        ${total.toFixed(2)}
                                    </p>
                                </div>
                                <div className='checkout-total'>
                                    <p className='checkout-total-label'>Total</p>
                                    <p className='checkout-total-value checkout-total-final'>
                                        ${total.toFixed(2)}
                                    </p>
                                </div>
                                <button className='btn btn-primary btn-large btn-block' onClick={() => placeOrder()}>
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
            {/* 3. Mount the Custom Confirm Modal component at the bottom layer of the page */}
            <ConfirmModal 
                isOpen={isModalOpen}
                title="Clear Shopping Cart"
                message="Are you sure you want to remove all items from your cart? This action cannot be undone."
                onConfirm={() => {
                    clearCart();
                    setIsModalOpen(false); // Close modal on success completion action
                }}
                onCancel={() => setIsModalOpen(false)} // Safely dismiss without adjustments
            />
        </div>
    );
}