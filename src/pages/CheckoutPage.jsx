import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useForm } from 'react-hook-form'; // 💡 Imported useForm for clean tracking
import '../App.css';
import ConfirmModal from '../components/ConfirmModal';

export default function CheckoutPage() {
    const { cartItems, getCartItemsWithProducts, removeFromCart, updateQuantity, getCartTotal, placeOrder, getCartItemsTotal, clearCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const selectedItems = getCartItemsWithProducts();
    const total = getCartTotal();
    const cartItemsTotal = getCartItemsTotal();

    // Set up form tracking for the shipping details box
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange" // 💡 Validates on every keystroke for instant feedback
    });

    const onPaySubmit = (data) => {
        // Handles taking the shipping data along with your payment logic execution
        console.log("Shipping Payload Data Object:", data);
        placeOrder(clearCart);
    };

    return (
        <div className="page">
            <div className="container">
                <h1 className="page-title">Checkout</h1>
                {cartItems.length > 0 && (
                    <p className='checkout-items-count'>
                        You have <strong>{cartItemsTotal}</strong>{cartItemsTotal === 1 ? ' item' : ' items'} in your cart.
                    </p>
                )}
                
                {/* We wrap the entire lower layout section inside a form to collect shipping fields safely */}
                <form onSubmit={handleSubmit(onPaySubmit)} className="checkout-two-column-layout">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-view">
                            <h2>Your cart is empty.</h2>
                            <p>Explore our products page to pick up something amazing!</p>
                        </div>
                    ) : (
                        <>
                            {/* Left Side: Items list pane */}
                            <div className="checkout-items-list-pane">
                                <div className="checkout-header-row">
                                    <h2 className='checkout-section-title'>Order Summary</h2>
                                    {/* type="button" is crucial so clicking this doesn't accidentally trigger the form submit */}
                                    <button 
                                        type="button"
                                        className="btn clear-cart-btn"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        🗑️ Clear Cart
                                    </button>
                                </div>
                                
                                {selectedItems.map((item) => (
                                    <div className='checkout-item' key={item.product.id}>
                                        <img src={item.product.image} alt={item.product.name} className='checkout-item-image' />
                                        <div className="checkout-item-details">
                                            <h3 className='checkout-item-name'>{item.product.name}</h3>
                                            <p className='checkout-item-category'>{item.product.category}</p>
                                            <p className='checkout-item-price'>₦{item.product.price.toFixed(2)} each</p>
                                        </div>
                                        <div className="checkout-item-controls">
                                            <div className="quantity-controls">
                                                <button type="button" className='quantity-btn' onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</button>
                                                <span className='quantity-value'>{item.quantity}</span>
                                                <button type="button" className='quantity-btn' onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                                            </div>
                                            <p className='checkout-item-total'>₦{(item.product.price * item.quantity).toFixed(2)}</p>
                                            <button type="button" className='remove-item-link-btn' onClick={() => removeFromCart(item.product.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Side: Shipping Details + Calculated Totals */}
                            <div className="checkout-summary-receipt-card">
                                <h2 className='checkout-section-title summary-card-title'>Shipping Information</h2>
                                
                                {/* 🌟 NEW STYLIZED FORM FIELDS: Scaled up and perfectly left-aligned */}
                                <div className="checkout-shipping-form">
                                    <div className="form-group">
                                        <label htmlFor="fullName" className="form-label">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="fullName" 
                                            className={`form-input ${errors.fullName ? 'input-error-border' : ''}`}
                                            placeholder="John Doe"
                                            {...register('fullName', { required: 'Name is required' })}
                                        />
                                        {errors.fullName && <p className="form-error">{errors.fullName.message}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address" className="form-label">Delivery Address</label>
                                        <input 
                                            type="text" 
                                            id="address" 
                                            className={`form-input ${errors.address ? 'input-error-border' : ''}`}
                                            placeholder="123 Luxury Lane, Lagos"
                                            {...register('address', { required: 'Delivery address is required' })}
                                        />
                                        {errors.address && <p className="form-error">{errors.address.message}</p>}
                                    </div>
                                </div>

                                <h2 className='checkout-section-title summary-card-title' style={{ marginTop: '2rem' }}>Order Total</h2>
                                <div className='checkout-total-row'>
                                    <p className='checkout-total-label'>Subtotal</p>
                                    <p className='checkout-total-value'>₦{total.toFixed(2)}</p>
                                </div>
                                <div className='checkout-total-row'>
                                    <p className='checkout-total-label'>Shipping</p>
                                    <p className='checkout-total-value free-shipping-tag'>FREE</p>
                                </div>
                                <hr className="summary-divider" />
                                <div className='checkout-total-row final-total-row'>
                                    <p className='checkout-total-label font-bold'>Total</p>
                                    <p className='checkout-total-value checkout-total-final'>₦{total.toFixed(2)}</p>
                                </div>
                                
                                <button type="submit" className='btn btn-primary btn-large btn-block checkout-pay-btn'>
                                    Proceed to Payment →
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>

            <ConfirmModal 
                isOpen={isModalOpen}
                title="Clear Shopping Cart"
                message="Are you sure you want to empty your cart? This cannot be undone."
                onConfirm={() => {
                    clearCart();
                    setIsModalOpen(false);
                }}
                onCancel={() => setIsModalOpen(false)}
            />
        </div>
    );
}
