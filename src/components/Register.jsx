import React, {useState} from 'react'
import styles from "../App.module.css";
import {Link} from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
    })

    return (
        <div>
        <div className={styles.btns}>
                <Link to='/welcome_page'
                      style={{backgroundColor: 'navy', width: '70px', paddingLeft: '25px', color: 'white', borderRadius: '10px', fontSize: '17px'}}>
                    Home</Link>

                <Link to='/login'
                      style={{backgroundColor: 'green', width: '65px', paddingLeft: '20px', color: 'white', borderRadius: '10px', fontSize: '17px', fontFamily: 'sans-serif'}}>
                    Login</Link>
            </div>
        <div className={styles.signUpPage}
            style={{backdropFilter: 'blur(18px)'}}>
            <h3>Provide your details</h3>
            <form>
                <input type="text" placeholder="Firstname" required />
                <input type="text" placeholder="Lastname" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />

                <button type="submit" className={styles.submit}
                disabled={
                    !formData.firstname.trim() ||
                    !formData.lastname.trim() ||
                    !formData.email.trim() ||
                    !formData.username.trim() ||
                    !formData.password.trim()
              }
                >
                    Submit
                </button>
            </form>
            <p>
                Already have an account?{' '}
                <Link to="/login"
                    style={{ cursor: 'pointer', color: 'cyan', fontWeight: 'bold' }}
                >Login</Link>
            </p>
        </div>
            <footer style={{bottom: 0, position: 'absolute', marginLeft: '-13.5%'}}>
                <p className="mt-10 text-white/70 text-sm">
                    © 2025 ExpenseFlow. Manage smarter, live better.
                </p>
            </footer>
        </div>
    )
}

export default Register;