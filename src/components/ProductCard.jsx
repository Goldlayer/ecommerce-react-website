import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            {/* Strict locked-height frame */}
            <div className="product-card-image-wrapper">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy" /* Performance optimization */
                />
                {product.rating && (
                    <div className="product-card-rating">
                        ⭐ <span>{product.rating}</span>
                    </div>
                )}
            </div>

            {/* Content box that dynamically fills card heights perfectly */}
            <div className="product-card-content">
                <div className="product-card-text-block">
                    <p className="product-card-category">{product.category}</p>
                    <h3 className="product-card-name" title={product.name}>
                        {product.name}
                    </h3>
                </div>
                
                <div className="product-card-footer">
                    <p className="product-card-price">₦{product.price.toFixed(2)}</p>
                    <button 
                        className="btn btn-primary btn-sm product-card-btn"
                        onClick={() => addToCart(product.id)}
                    >
                        + Add
                    </button>
                </div>
            </div>
        </div>
    );
}
