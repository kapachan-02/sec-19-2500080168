
import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setMessage('Welcome Admin');
    } else {
      setMessage('Invalid Credentials');
    }
  };

  return (
    <div className="container">
      <div className="login-box">

        <h1>Welcome</h1>
        <h2>Login Form</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={handleLogin}>Login</button>

        <h3>{message}</h3>

      </div>
    </div>
  );
}

export default App;
