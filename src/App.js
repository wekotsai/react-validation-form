import './App.css';
import React, { useState, useCallback } from 'react';

export default function App() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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

  // Password visibility toggle
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // Terms and conditions checkbox
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="form">
      <h1>Join us today!</h1>
      <form>
        <label for="email">Email:</label>
        <input
          type="email"
          class="input"
          required
          name="email"
          onChange={validateEmail}
        />
        <label for="password">Password:</label>

      <div class="password">
        <input
          type={passwordShown ? "text" : "password"}
          class="input"
          required
          name="password"
          onChange={validatePassword}
        />
        <button class="toggle" onClick={togglePassword}>🙈</button>
      </div>

        <div class="tnc">
          <input
            type="checkbox"
            required
            name="tnc"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <p>Please read these <a href="">terms and conditions</a> carefully before proceeding any further.</p>
        </div>
        <button class="submit" type="submit">Submit</button>
        <div className={`message ${isValid ? "success" : "error"}`}>
          {message}
        </div>
      </form>
    </div>
  );
}
