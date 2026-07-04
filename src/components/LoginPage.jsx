import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router'; // Import navigation tools
import './LoginPage.css';
import { AuthContext } from '../AuthContext';

export default function LoginPage() {

    const [rememberMe, setRememberMe] = useState(false);
    const { user, login, logout } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

     // Check if a redirection URL was passed along. Default to home page '/' if not.
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
         // 1. Authenticate user
        login(email); 
        
        // 2. Clear inputs
        setEmail('');
        setPassword('');

        // 3. Send them directly back to where they were headed, replacing login history
        navigate(from, { replace: true });
    };

    return (
        <div className= 'wrapper'>
            <div className='loginContainer'>
                <h2>Welcome Back</h2>
                <p className='subtitle'>Please enter your details to sign in</p>
                
                <form className='loginForm' onSubmit={handleSubmit}>
                    <div className='inputGroup'>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div className='inputGroup'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    
                    <div className='formActions'>
                        <label className='rememberMe'>
                            <input 
                                type="checkbox" 
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            /> 
                            Remember me
                        </label>
                        <a href="#forgot" className='forgotPassword'>Forgot Password?</a>
                    </div>
                    
                    <button type="submit" className='submitBtn'>Sign In</button>
                </form>
                {user?.isAuth && (
                    <p>User Logged in</p>
                )}
                <p className='signupLink'>
                    Don't have an account? <a href="#signup">Sign up</a>
                </p>
            </div>
        </div>
    );
}
