import React from 'react';
import { Link } from 'react-router'; // 💡 Imported Link for navigation
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-card-image-wrapper">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.rating && (
                    <div className="product-card-rating">
                        ⭐ <span>{product.rating}</span>
                    </div>
                )}
            </div>

            <div className="product-card-content">
                <div className="product-card-text-block">
                    <p className="product-card-category">{product.category}</p>
                    <h3 className="product-card-name" title={product.name}>
                        {product.name}
                    </h3>
                </div>
                
                {/* 🌟 Buttons wrapper modified to place both actions side-by-side */}
                <div className="product-card-footer product-card-action-split">
                    <p className="product-card-price">₦{product.price.toFixed(2)}</p>
                    
                    <div className="product-card-btn-group">
                        <Link 
                            to={`/products/${product.id}`} 
                            className="btn btn-details-link"
                        >
                            👁️ View
                        </Link>
                        <button 
                            className="btn btn-primary product-card-btn"
                            onClick={() => addToCart(product.id)}
                        >
                            + Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
