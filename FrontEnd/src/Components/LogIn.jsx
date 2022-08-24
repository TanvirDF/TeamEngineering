import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import '../CSS/login.css';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {

    const url = `http://localhost:3000/login`;
    const [message, setMessage] = useState(<div></div>)
    const [responseMsg, setResponseMsg] = useState();
    const [user, setUser] = useState({ email: '', password: '' });
    let navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(url, user)
            .then(response => {
                if (response?.data?.payload) {
                    localStorage.setItem(`user`, JSON.stringify(response.data.payload));
                    navigate("../", { replace: true });
                    setMessage(<div className="confirm-msg"></div>)
                } else {
                    throw new Error("Data is in invalid format.");
                }
            })
            .catch(err => {
                setMessage(<div className="confirm-msg"></div>)
                setResponseMsg(<div className='error-msg'>Wrong email or password</div>)
            })
    }

    return (
        <div className='body'>
            <div className='loginHolder'>
                <h2>Digital Futures</h2>
                <p>Login</p>
                <form onSubmit={ handleSubmit }>
                    <div className='eachBox'><label htmlFor="email">Email: </label>
                        <input type="email" id='email' name='email' onChange={handleChange} required/>
                    </div>
                    <div className='eachBox'><label htmlFor="password" > Password </label>
                        <input type="text" id='password' name='password' onChange= {handleChange} required/>
                    </div>
                    {responseMsg}
                    <div className='loginBtn'>
                        <button type='submit' name='loginBtn'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}



export default LogIn;