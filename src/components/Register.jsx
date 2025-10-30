import React, {useState} from 'react'
import styles from "../App.module.css";
import { Link } from "react-router-dom";
import { useUserRegisterMutation } from "../api/authApi.jsx";

function Register() {
    const [register, { isLoading, isError }] = useUserRegisterMutation();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        console.log(event.target.value);
        console.log(formData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value, // dynamically update fields/attributes
    });
  }

  const handleSubmit = async (event) => {
        event.preventDefault();

        try{
        const result = await register(formData).unwrap();

            localStorage.setItem("token", result.token);
            localStorage.setItem("username", result.username);
            localStorage.setItem("email", result.email);
            window.location.href = "/dashboard";

        } catch (err) {
            alert(err?.data?.message || "Something went wrong");
        }
  }

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

            <form onSubmit={handleSubmit}>
                <input type="text"
                       name="firstname"
                       placeholder="Firstname"
                       value={formData.firstname}
                onChange={handleChange}
                required />

                <input type="text"
                       name="lastname"
                       placeholder="Lastname"
                       value={formData.lastname}
                onChange={handleChange}
                required />

                <input type="email"
                       name="email"
                       placeholder="Email"
                       value={formData.email}
                onChange={handleChange}
                required />

                <input type="text"
                       name="username"
                       placeholder="Username"
                       value={formData.username}
                onChange={handleChange}
                       required />

                <input type="password"
                       name="password"
                       placeholder="Password"
                       value={formData.password}
                onChange={handleChange}
                       required />

                <button
                      type="submit"
                      className={styles.submit}
                      disabled={
                        isLoading ||
                        !formData.firstname.trim() ||
                        !formData.lastname.trim() ||
                        !formData.email.trim() ||
                        !formData.username.trim() ||
                        !formData.password.trim()
                      }
                    >
                      {isLoading ? "Submitting..." : "Submit"}
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