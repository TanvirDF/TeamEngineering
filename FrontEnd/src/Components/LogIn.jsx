import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import '../CSS/login.css';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {

    const url = `${process.env.DB_URI}/auth/login`;

    const [responseMsg, setResponseMsg] = useState();
    const [user, setUser] = useState({ email: '', password: '' });
    let navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }


    // submit button handle change to do
    return (
        <div className='body'>
            <div className='loginHolder'>
                <h2>Digital Futures</h2>
                <p>Login</p>
                <form className="Form" action="">
                    <div className='eachBox'><label htmlFor="email">Email: </label>
                        <input type="email" id='email' name='email' onChange={handleChange} required />

                        <label htmlFor="password" > Password </label>
                        <input type="password" id='password' name='password' onChange={handleChange} required />
                    </div>

                    <div className='loginBtn'>
                        <button type='submit' name='loginBtn'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



export default LogIn;