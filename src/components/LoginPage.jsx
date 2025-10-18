import React, { useState } from 'react';
import styles from '../App.module.css';

const LoginPage = () => {
    // State to track which form is showing
    const [showLogin, setShowLogin] = useState(true);

    const registerUser = () => {
        setShowLogin(false);// hide login, show register
    };

    const backToLogin = () => {
        setShowLogin(true); // go back to login
    };

    return (
        <div className={styles.firstLayer}>
            {showLogin && (
                <div className={styles.loginContainer}>
                    <h2>Welcome back</h2>
                    <form>
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                required />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required />
                        </div>
                        <p>
                            Don’t have an account yet?{' '}
                            <span
                                style={{ cursor: 'pointer', color: 'blueviolet', fontWeight: 'bold' }}
                                onClick={registerUser}
                            >Register </span>
                        </p>
                        <button className={styles.login} type="submit">
                            Login
                        </button>
                    </form>
                </div>
            )}

            {/* REGISTRATION FORM */}
            {!showLogin && (
                <div className={styles.signUpPage}>
                    <h3>Provide your details</h3>
                    <form>
                        <input type="text" placeholder="Firstname" required />
                        <input type="text" placeholder="Lastname" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className={styles.submit}>
                            Submit
                        </button>
                    </form>
                    <p>
                        Already have an account?{' '}
                        <span
                            style={{ cursor: 'pointer', color: 'blue', fontWeight: 'bold' }}
                            onClick={backToLogin}
                        >Login</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
