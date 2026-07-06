import React from 'react';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import '../App.css';

export default function Footer() {
    // Independent form handler for the email capture block
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
        mode: "onSubmit"
    });

    const onNewsletterSubmit = (data) => {
        console.log("Newsletter Subscribed Email Target:", data.subscriberEmail);
        // Reset inputs on success completion
        reset();
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Core Brand Identity */}
                <div className="footer-brand-column">
                    <Link to='/' className="footer-logo">
                        <span>✨</span>JoyShop
                    </Link>
                    <p className="footer-tagline">
                        Your premium destination for luxury hair, professional skincare, and vibrant makeup essentials.
                    </p>
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} JoyShop. All rights reserved.
                    </p>
                </div>

                {/* Column 2: Quick Links Directory Map */}
                <div className="footer-links-column">
                    <h4 className="footer-header">Shop Catalog</h4>
                    <ul className="footer-list">
                        <li><Link to="/" className="footer-link">All Products</Link></li>
                        <li><Link to="/" className="footer-link">Hair Collection</Link></li>
                        <li><Link to="/" className="footer-link">Skincare Hub</Link></li>
                        <li><Link to="/" className="footer-link">Makeup Lounge</Link></li>
                    </ul>
                </div>

                {/* Column 3: Corporate Policies and Support */}
                <div className="footer-links-column">
                    <h4 className="footer-header">Customer Support</h4>
                    <ul className="footer-list">
                        <li><Link to="/checkout" className="footer-link">View Cart</Link></li>
                        <li><Link to="auth" className="footer-link">My Profile</Link></li>
                        <li><span className="footer-link-static">Privacy Policy</span></li>
                        <li><span className="footer-link-static">Terms of Service</span></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter Subscription Input Box */}
                <div className="footer-newsletter-column">
                    <h4 className="footer-header">Join the Newsletter</h4>
                    <p className="newsletter-text">Subscribe to get special discounts and early catalog access alerts.</p>
                    
                    <form onSubmit={handleSubmit(onNewsletterSubmit)} className="footer-form">
                        <div className="footer-input-group">
                            <input 
                                type="email" 
                                className={`footer-input ${errors.subscriberEmail ? 'footer-input-error' : ''}`}
                                placeholder="Enter your email"
                                {...register('subscriberEmail', { required: 'Email is required' })}
                            />
                            <button type="submit" className="btn btn-primary footer-btn">
                                Join
                            </button>
                        </div>
                        {errors.subscriberEmail && (
                            <p className="footer-error-text">{errors.subscriberEmail.message}</p>
                        )}
                        {isSubmitSuccessful && (
                            <p className="footer-success-text">🎉 Subscribed successfully!</p>
                        )}
                    </form>
                </div>
            </div>
        </footer>
    );
}
