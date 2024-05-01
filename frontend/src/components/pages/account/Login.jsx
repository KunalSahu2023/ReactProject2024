import React, { useState } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import { FaAt, FaKey } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [hidePopup, setHidePopup] = useState(false);

    const toggleHide = () => {
        setHidePopup(!hidePopup);
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/login", { email, password })
            .then(result => {
                console.log(result.data)
                if (result.data === "Login successful")
                    navigate("/dashboard")
            })
            .catch(err => alert(err.response.data))
    };

    return (
        <>
            <div id="account-container">
                <div className="form-box">
                    <span onClick={toggleHide} className='cross'>❌</span>
                    {hidePopup && !setHidePopup}
                    <h4>
                        <p className="signupbtn">Welcome Back</p>
                    </h4>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">

                            <div className="input-field">
                                <FaAt  className='fa'/>
                                <input
                                    type="email"
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your Email" required />
                            </div>

                            <div className="input-field">
                            <FaKey className='fa' />
                                <input type="password" 
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password" required />
                            </div>
                            <p><span className="text">Don't have an account?</span> <Link to="/register">Register Here</Link></p>
                        </div>
                        <div className="btn-field">
                            <button type='submit' className="account-btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
