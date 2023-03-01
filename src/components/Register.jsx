import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const createAccount = (e) => {
        e.preventDefault();
        if (!usernameReg || !passwordReg) {
            setError('Please enter both username and password');
            setSuccess(false);
        } else {
            // get the existing users from local storage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // check if the username already exists
            if (users.some(u => u.username === usernameReg)) {
                setError('Username already exists');
                setSuccess(false);
            } else {
                // add the new user to the users array
                users.push({ username: usernameReg, password: passwordReg });
                // save the updated users array to local storage
                localStorage.setItem('users', JSON.stringify(users));
                setSuccess(true);
                setError('');
            }

        }
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Create a New Account</h1>
            <form className="register-form" onSubmit={createAccount}>
                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        className="input-user"
                        onChange={(e) => setUsernameReg(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="input-pass"
                        onChange={(e) => setPasswordReg(e.target.value)}
                    />
                </div>
                <button className="register-btn">Create Account</button>
                <Link to="/login" className="register-btn">
                    Login page
                </Link>
                {error && <span className="err-span">{error}</span>}
                {success && <span className="success-span">Account created successfully!</span>}
            </form>
            <div className="back-link-container">
                <Link to="/" className="register-home">
                    Back to Home Page
                </Link>
            </div>
        </div>
    );
}

export default Register;