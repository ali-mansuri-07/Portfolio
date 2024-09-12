import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token); // Save the token
      onLogin(); // Optional callback to handle any additional logic on login
      navigate('/admin-dashboard'); // Navigate to admin dashboard after successful login
    } catch (err) {
      setError('Invalid credentials'); // Display error message on failure
    }
  };

  return (
    <div className="container"> {/* Added container for centering */}
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="text_input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="text_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"
          />
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
