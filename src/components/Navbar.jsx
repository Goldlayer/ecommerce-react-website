import { Link, NavLink, useNavigate } from "react-router"; // 💡 Imported NavLink instead of generic Link for active tracking
import { useAuth } from "../context/AuthContext";
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const navigate = useNavigate();
    const { user, logout, mode, handleSwitch } = useAuth();
    const { getCartItemsTotal } = useCart();
    const cartItemsTotal = getCartItemsTotal();

    const handleNavigationMode = (targetMode) => {
        if (mode !== targetMode) {
            handleSwitch(); 
        }
        navigate('/auth');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Brand Logo Zone */}
                <div className="navbar-brand-zone">
                    <Link to='/' className="navbar-brand">
                        <span className="brand-icon">✨</span>JoyShop
                    </Link>
                </div>
                
                {/* Nav Links & Functional Controls Menu */}
                <div className="navbar-interactive-menu">
                    <div className="navbar-links">
                        {/* 🌟 Use NavLink for automated conditional .active tracking */}
                        <NavLink to='/' className="btn btn-nav-link">
                            Home
                        </NavLink>
                        
                        <NavLink to='/checkout' className="btn btn-nav-link cart-link-container">
                            <span className="cart-text">Cart</span>
                            {cartItemsTotal > 0 && (
                                <span className="cart-badge">
                                    {cartItemsTotal > 9 ? '9+' : cartItemsTotal}
                                </span>
                            )}
                        </NavLink>
                    </div>
                    
                    {/* Authentication Link Group Buttons */}
                    <div className="navbar-auth">
                        {user ? (
                            <div className="navbar-auth-links">
                                <Link to='auth' className="btn btn-profile">
                                    👤 Profile
                                </Link>
                                <button type="button" className="btn btn-logout" onClick={() => logout()}>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="navbar-auth-links">
                                <button 
                                    type="button" 
                                    className="btn btn-login-nav" 
                                    onClick={() => handleNavigationMode('login')}
                                >
                                    Login
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-signup-nav" 
                                    onClick={() => handleNavigationMode('signup')}
                                >
                                    SignUp
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
