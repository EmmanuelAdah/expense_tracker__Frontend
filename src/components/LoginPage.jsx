import React, { useState } from "react";
import styles from "../App.module.css";
import {Link, useNavigate} from "react-router-dom";
import { useUserLoginMutation } from "../api/authApi.jsx";

const LoginPage = () => {

    const navigate = useNavigate();

  // Creating a local state for form inputs
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // RTK Query login mutation hook
  const [login, { isLoading, isError }] = useUserLoginMutation();
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value, // dynamically update username/password
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await login(formData).unwrap();
            localStorage.setItem("token", result.token);
            localStorage.setItem("username", result.username);
            localStorage.setItem("email", result.email);
            navigate("/dashboard");
      // 👉 you can redirect or store token here
    } catch (err) {
        const message = err?.data?.message;
      setError(message);
    }
  };

  return (
    <div>
      <div className={styles.btns}>
        <Link
          to="/welcome_page"
          style={{
            backgroundColor: "navy",
            width: "70px",
            paddingLeft: "25px",
            color: "white",
            borderRadius: "10px",
            fontSize: "17px",
          }}
        >
            Home
        </Link>

        <Link
          to="/register"
          style={{
            backgroundColor: "green",
            width: "80px",
            paddingLeft: "25px",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Register
        </Link>
      </div>

      <div
        className={styles.loginContainer}
        style={{ backdropFilter: "blur(18px)" }}
      >
        <h2>Welcome back</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {isError && (
            <p style={{ color: "orange", marginTop: "10px", position: "relative" }}>
                {error}
            </p>
          )}

          <p>
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              style={{ cursor: "pointer", color: "lightgreen", fontWeight: "bold" }}
            >
              Register
            </Link>
          </p>

          <button
            className={styles.login}
            type="submit"
            disabled={
              isLoading ||
                !formData.username.trim() ||
                !formData.password.trim() }
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <footer style={{ bottom: 0, position: "absolute" }}>
        <p className="mt-10 text-white/70 text-sm">
          © 2025 ExpenseFlow. Manage smarter, live better.
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
