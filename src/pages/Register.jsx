import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đăng ký với:', { name, email, password });
  };

  return (
    <div>
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <p>
        Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
};

export default Register;