import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { getProductsById } from '../data/products';
import { useCart } from '../context/CartContext';
import '../App.css';

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [quantityInput, setQuantityInput] = useState(1);
    // 🌟 New state variable to control the temporary inline message banner
    const [successMessage, setSuccessMessage] = useState("");
    
    const product = getProductsById(Number(id));

    if (!product) {
        return (
            <div className="container product-details-fallback">
                <h2>Product Not Found</h2>
                <p>The catalog item you are looking for does not exist or has been removed.</p>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
        );
    }

    const handleIncrement = () => setQuantityInput(prev => prev + 1);
    const handleDecrement = () => setQuantityInput(prev => (prev > 1 ? prev - 1 : 1));

    const isOverStockLimit = quantityInput > product.stockCount;

    const handleBulkAddToCart = () => {
        if (isOverStockLimit) return;
        
        for (let i = 0; i < quantityInput; i++) {
            addToCart(product.id);
        }
        
        // 🌟 Set the message text directly instead of utilizing window.alert()
        setSuccessMessage(`🎉 Added ${quantityInput} of ${product.name} to your cart successfully!`);
        
        // ⏱️ Dissolves/clears the text string notification box automatically after 4 seconds
        setTimeout(() => {
            setSuccessMessage("");
        }, 4000);
    };

    return (
        <div className="page product-details-viewport viewport-locked-frame">
            <div className="container details-fullscreen-inner">
                
                {/* 🌟 Header Flex Container Row: Aligns your back link and messages level */}
                <div className="details-top-navigation-row">
                    <Link to="/" className="back-catalog-link">← Back to Catalog</Link>
                    
                    {successMessage && (
                        <p className="details-inline-success-banner fade-slide-in">
                            {successMessage}
                        </p>
                    )}
                </div>

                <div className="product-details-grid-wrapper locked-height-grid">
                    <div className="product-details-image-frame locked-frame-image">
                        <img src={product.image} alt={product.name} />
                        {product.rating && (
                            <div className="details-floating-rating">
                                ⭐ {product.rating} Rating
                            </div>
                        )}
                    </div>

                    <div className="product-details-info-pane locked-pane-scroll">
                        <span className="details-category-tag">{product.category}</span>
                        <h1 className="details-product-title">{product.name}</h1>
                        
                        <div className="details-price-row">
                            <span className="details-current-price">${product.price.toFixed(2)}</span>
                            <span className={`details-stock-status ${product.stockCount > 0 ? 'in-stock' : 'out-of-stock'}`}>
                                {product.stockCount > 0 ? `🟢 ${product.stockCount} Available` : '🔴 Out of Stock'}
                            </span>
                        </div>

                        <hr className="details-divider" />

                        <div className="details-description-block">
                            <h4>Product Description</h4>
                            <p>{product.description}</p>
                        </div>

                        <hr className="details-divider" />

                        <div className="details-actions-control-block">
                            <div className="details-quantity-selector">
                                <span className="selector-label">Quantity:</span>
                                <div className="quantity-controls text-dark-controls">
                                    <button type="button" className="quantity-btn" onClick={handleDecrement}>-</button>
                                    <span className="quantity-value">{quantityInput}</span>
                                    <button type="button" className="quantity-btn" onClick={handleIncrement}>+</button>
                                </div>
                            </div>

                            {isOverStockLimit ? (
                                <div className="checkmate-warning-box">
                                    ⛔ Checkmate: Selected quantity exceeds available store stock count!
                                </div>
                            ) : (
                                <button 
                                    type="button" 
                                    className="btn btn-primary btn-large details-submit-cart-btn"
                                    onClick={handleBulkAddToCart}
                                    disabled={product.stockCount <= 0}
                                >
                                    🛍️ Add {quantityInput > 1 ? `(${quantityInput}) Items` : 'To Cart'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
