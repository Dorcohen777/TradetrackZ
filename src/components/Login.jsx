import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // check if username and password are empty
        if (!username || !password) {
            setErrorMessage('Please enter both username and password');
            return;
        }

        // get the users array from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // search for the user with the given username and password
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            setErrorMessage(''); // clear any existing error messages
            // redirect to dashboard
            navigate('/dashboard');
        } else {
            setErrorMessage('Invalid username or password');
        }

    };


    return (
        <div className="login-container">
            <h1 className="login-title">Log In</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-input-2">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        className="input-user"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-input-2">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="input-pass"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errorMessage && <div className="err-msg">{errorMessage}</div>}
                <button className="login-btn">Log In</button>
            </form>
            <div className="back-link-container">
                <Link to="/" className="login-home">
                    Back to Home Page
                </Link>
            </div>
        </div>
    );
}

export default Login;
