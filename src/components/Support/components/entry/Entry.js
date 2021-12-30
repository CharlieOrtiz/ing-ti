import React from 'react'
import { LoginForm } from '../login/LoginForm';
import './entry.style.css';

export const Entry = () => {
    return (
        <div className='entry-page'>
            <div className='login-container'>
                <LoginForm/>
            </div>
        </div>
    )
}
