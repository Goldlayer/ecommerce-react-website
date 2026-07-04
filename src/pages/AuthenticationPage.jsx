import React from 'react'
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form'
import  '../App.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export default function AuthenticationPage() {

    const navigate = useNavigate()
    const [ error, setError ] = useState(null);
    const { signup, user, logout, login, mode, handleSwitch } = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    
    const onSubmit = (data) => {
        setError(null)
        let result;
        if(mode === 'signup'){
            result = signup(data.email, data.password)
        }else{
            result = login(data.email, data.password)
        }
        if(result.success){
            navigate('/');
        }else{
            setError(result.error);
        }
        reset();
    }

    return (
        <div className='page'>
            <div className="container">
                <div className="auth-container">
                    <h1 className='page-title'>
                       {mode === 'signup' ? 'Sign Up' : 'Login'} 
                    </h1>
                    <form className='auth-form' onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className='error-message'>{error}</div>}
                        <div className="form-group">
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input className='form-input' 
                                type='email' 
                                id='email'
                                {...register('email', {required: 'Email is required'})} 
                            />
                            {errors.email && 
                                <p className='form-error'>{errors.email.message}</p>
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor='password' className='form-label'>Password</label>
                            <input className='form-input' 
                            type='password' 
                            id='password' 
                            {...register('password', {
                                required: 'Email is required',
                                minLength: {
                                    value: 7,
                                    message: 'Password is too short - Minimum character is 7'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Password is too long - Maximum character is 15'
                                }
                            })}
                            />
                            {errors.password && 
                                <p className='form-error'>{errors.password.message}</p>}
                        </div>
                        <button type='submit' className='btn btn-primary btn-large'>
                           {mode === 'signup' ? 'Sign Up' : 'Login'} 
                        </button>
                    </form>
                    <div className='auth-switch'>
                        
                        {mode === 'signup' ? (
                           <p>Already have an account? <span className='auth-link' onClick={handleSwitch}>Login</span></p>
                        ) : (
                           <p>Don't have an account? <span className='auth-link' onClick={handleSwitch}>Signup</span></p>
                        )}
                    </div> 
                </div>
            </div>
        </div>
    );
}