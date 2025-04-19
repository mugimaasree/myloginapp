import React from 'react';
import './App.css'

 function LoginPage() {
  return (
    <div className="login-page">
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Courses</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <button className="nav-login-btn">LOG IN</button>
      </nav>

      <div className="login-container">
        <div className="login-box">
          <h2>LOGIN</h2>
          <p>Welcome Back</p>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forgot">Forgot password?</a>
            <button type="submit">Log In</button>
          </form>
          <p className="signup-link">
            Don’t have an account? <a href="#">Signup</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

