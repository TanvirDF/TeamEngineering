import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import '../CSS/login.css';
import { useNavigate, Navigate } from 'react-router-dom';


const LogIn = ({ setId }) => {

    const url = `http://localhost:4000/login`;
    // const [message, setMessage] = useState(<div></div>)
    // const [responseMsg, setResponseMsg] = useState();
    const [user, setUser] = useState({ email: '', password: '' });
    const [loggedIn, setLoggedIn] = useState(false);
    let navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    // const handleSubmit = async event => {
    //     event.preventDefault();
    //     const res = await axios.post(url, user)
    //         .then(response => {
    //             if (response?.data?.payload) {
    //                 localStorage.setItem(`user`, JSON.stringify(response.data.payload));
    //                 navigate("../", { replace: true });
    //                 setMessage(<div className="confirm-msg"></div>);
    //                 setId(res.data.user);
    //                 setUser({ email: '', password: '' });
    //             } else {
    //                 throw new Error("Data is in invalid format.");
    //             }
    //         })
    //         .catch(err => {
    //             setMessage(<div className="confirm-msg"></div>)
    //             setResponseMsg(<div className='error-msg'>Wrong email or password</div>)
    //         })
    // }

    const handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = user;
        if (email && password) {
            const res = await axios.post(url, user);
            console.log(res.data.user.userId);
            setId(res.data.user.userId);
            if (res.data.user !== undefined) {
                setLoggedIn(true);
            }
            console.log(res.data.message);
            setUser({ email: '', password: '' });
            // console.log('hello from async method for login')

        }
    }

    return (
        <>
            {loggedIn && <Navigate to='/profile' />}
            <div div className='body' >
                <div className='loginHolder'>
                    <h2>Digital Futures</h2>
                    <p>Login</p>
                    <form onSubmit={handleSubmit} className="Form" action="">
                        <div className='eachBox'>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id='email' name='email' onChange={handleChange} value={user.email} required />
                            <label htmlFor="password" > Password </label>
                            <input type="password" id='password' name='password' onChange={handleChange} value={user.password} required />
                        </div>
                        {/* {responseMsg} */}
                        <div className='loginBtn'>
                            <button type='submit' name='loginBtn'>Login</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}



export default LogIn;