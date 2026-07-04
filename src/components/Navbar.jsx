import { Link } from "react-router";
import { useAuth } from "../context/AuthContext"
import { useCart } from '../context/CartContext'

export default function Navbar() {
    const { user, login, logout, signup, mode, signupSwitch, loginSwitch } = useAuth();
    const { getCartItemsTotal } = useCart();
    const cartItemsTotal = getCartItemsTotal();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-brand">
                    JoyShop
                </Link>
                <div className="navbar-links">
                    <Link to='/' className="navbar-link">Home</Link>
                    <Link to='/checkout' className="navbar-link cart-link-container">
                        Cart
                        {cartItemsTotal > 0 && (
                            <span className="cart-badge">{cartItemsTotal > 9 ? '9+' : cartItemsTotal}</span>
                        )}
                    </Link>
                </div>
                <div className="navbar-auth">
                    {user 
                        ?   (
                                <div className="navbar-auth-links">
                                <Link to='auth' className="btn btn-success">
                                    Profile
                                </Link>
                                <Link to='auth' className="btn btn-primary" onClick={() => logout()}>
                                    Logout
                                </Link>
                                </div>
                            )
                        :   (
                            <div className="navbar-auth-links">
                            <Link to='auth' className="btn btn-primary" onClick={() => loginSwitch()} >
                            Login
                            </Link>
                            <Link to='auth' className="btn btn-primary" onClick={() => signupSwitch()}>
                            SignUp
                            </Link>
                            </div>
                            )
                    }
                </div>
            </div>
        </nav>
    )
}