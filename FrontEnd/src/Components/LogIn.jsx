import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import '../CSS/login.css';


const LogIn = () => {

    const [userIn, setUserIn] = useState({
        email: '',
        firstName: '',
        lastName: '',
        company: ''
    });

    const postUserData = async (e) => {
        e.preventDefault();
        const { email, firstName, lastName, company } = userIn;
        const res = await axios.post('http://localhost:', userIn);
        setUserIn({
            email: '',
            firstName: '',
            lastName: '',
            company: ''
        });

    }



    return (
        <div className='body'>
            <div className='loginHolder'>
                <h2>Digital Futures</h2>
                <p>Create your account</p>
                <form action="">
                    <div className='eachBox'><label htmlFor="email">Email: </label>
                        <input type="email" id='email' name='email' />
                    </div>
                    <div className='eachBox'><label htmlFor="firstNAme">First Name: </label>
                        <input type="text" id='firstName' name='firstName' />
                    </div>
                    <div className='eachBox'><label htmlFor="lastName">Last Name: </label>
                        <input type="text" id='lastName' name='lastName' />
                    </div>
                    <div className='eachBox'><label htmlFor="company">Company: </label>
                        <input type="text" id='company' name='company' />
                    </div>
                    <div className='loginBtn'>
                        <button type='submit' name='loginBtn'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



export default LogIn;