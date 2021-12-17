import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const emailRules = /\S+@\S+\.\S+/;
  const passwordRules = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRules.test(email)) {
      setIsValid(true);
      setMessage('✅ Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('❗Please enter a valid email!');
    }
  };

  const validatePassword = (event) => {
    const password = event.target.value;
      if (passwordRules.test(password)) {
        setIsValid(true);
        setMessage('✅ Your password looks good!');
      }

      if (password.length < 8) { {
        setIsValid(false);
        setMessage('❗At least 8 characters');
      }

      if (password.search(/[a-z]/) < 0) {
        setIsValid(false);
        setMessage('❗At least one lowercase letter');
      }

      if (password.search(/[A-Z]/) < 0) {
        setIsValid(false);
        setMessage('❗At least one uppercase letter');
      }

      if (password.search(/[0-9]/) < 0) {
        setIsValid(false);
        setMessage('❗At least one number');
      }

      if (password.search(/[$@#&!]/) < 0) {
        setIsValid(false);
        setMessage('❗At least one special character');
      }

      if (password.length === 0) {
        setMessage('');
      }
    }
  };


  return (
    <div className="form">
      <h1>Join us today!</h1>
      <form>
        <label>Email:</label>
        <input
          type="email"
          required
          name="email"
          onChange={validateEmail}
        />
        <label>Password:</label>
        <input
          type="text"
          required
          name="password"
          onChange={validatePassword}
        />
        <button type="submit">Submit</button>
        <div className={`message ${isValid ? 'success' : 'error'}`}>
          {message}
        </div>
      </form>
    </div>
  );
}
