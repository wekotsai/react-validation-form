import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Your email looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid email!');
    }
  };

  const validatePassword = (event) => {
    const password = event.target.value;
    if (passwordRegex.test(password)) {
      setIsValid(true);
      setMessage('Your password looks good!');
    } else {
      setIsValid(false);
      setMessage('Please enter a valid password!');
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
        <br />
        <br />
        <label>Password:</label>
        <input
          type="text"
          required
          name="password"
          onChange={validatePassword}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <div className={`message ${isValid ? 'success' : 'error'}`}>
          {message}
        </div>
      </form>
    </div>
  );
}
