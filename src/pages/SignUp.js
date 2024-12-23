import React from 'react';
import './SignUp.css';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
    <GoToTop />
    <div className="sign-up">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form action="signup_process.php" method="POST">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Return back to homepage.{" "}
          <Link to='/'>Homepage</Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default SignUp