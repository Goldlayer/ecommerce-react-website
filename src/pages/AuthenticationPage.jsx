import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export default function AuthenticationPage() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { signup, login, mode, handleSwitch } = useAuth();
    
    // Added 'watch' to track real-time value changes for border highlights
    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onChange" // 💡 Validates on every keystroke for instant feedback
    });

    const emailValue = watch("email");
    const passwordValue = watch("password");

    const onSubmit = (data) => {
        setError(null);
        let result;
        if (mode === 'signup') {
            result = signup(data.email, data.password);
        } else {
            result = login(data.email, data.password);
        }
        
        if (result && result.success) {
            navigate('/');
        } else if (result) {
            setError(result.error);
        }
        reset();
    };

    // Helper functions to determine real-time validation styling classes
    const getEmailClass = () => {
        if (errors.email) return 'input-error-border';
        if (emailValue && emailValue.includes('@') && emailValue.includes('.')) return 'input-success-border';
        return '';
    };

    const getPasswordClass = () => {
        if (errors.password) return 'input-error-border';
        if (passwordValue && passwordValue.length >= 7 && passwordValue.length <= 15) return 'input-success-border';
        return '';
    };

    return (
        <div className='page auth-page-wrapper'>
            {/* 💡 key={mode} triggers the CSS fade-in animation automatically on switch */}
            <div className="auth-card-container fade-in-animation" key={mode}>
                <div className="auth-logo-badge">🛍️</div>
                
                <h1 className='auth-main-title'>
                   {mode === 'signup' ? 'Create Account' : 'Welcome Back'} 
                </h1>
                <p className="auth-main-subtitle">
                    {mode === 'signup' ? 'Join JoyShop to start shopping amazing deals' : 'Please enter your account details below'}
                </p>

                <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
                    {error && <div className='error-message-banner'>{error}</div>}
                    
                    <div className="form-group">
                        <label htmlFor='email' className='form-label'>Email Address</label>
                        <input 
                            className={`form-input ${getEmailClass()}`} 
                            type='email' 
                            id='email'
                            placeholder="name@example.com"
                            {...register('email', { 
                                required: 'Email address is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address format"
                                }
                            })} 
                        />
                        {errors.email && <p className='form-error'>{errors.email.message}</p>}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input 
                            className={`form-input ${getPasswordClass()}`}  
                            type='password' 
                            id='password' 
                            placeholder="••••••••"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 7, message: 'Minimum password length is 7 characters' },
                                maxLength: { value: 15, message: 'Maximum password length is 15 characters' }
                            })}
                        />
                        {errors.password && <p className='form-error'>{errors.password.message}</p>}
                    </div>
                    
                    <button type='submit' className='btn btn-primary auth-submit-btn'>
                       {mode === 'signup' ? 'Get Started' : 'Sign In'} 
                    </button>
                </form>
                
                <div className='auth-switch'>
                    {mode === 'signup' ? (
                       <p>Already have an account? <button type="button" className='btn-link-toggle' onClick={handleSwitch}>Login</button></p>
                    ) : (
                       <p>Don't have an account? <button type="button" className='btn-link-toggle' onClick={handleSwitch}>Create one</button></p>
                    )}
                </div> 
            </div>
        </div>
    );
}
