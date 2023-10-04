import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const { setAuthenticated } = useAuth();
    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Check if user exists in localStorage
        const user = users.find((user) => user.email === email && user.password === password);
    
        if (user) {
          // Successful login, set user session
          localStorage.setItem('currentUser', JSON.stringify(user));
          setAuthenticated(true);
          navigate('/')
        } else {
          // Failed login
          alert('Invalid credentials');
        }
      };

    return (
        <div>



     
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required  onChange={(e) => setEmail(e.target.value)}
           value={email} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
       








        </div>
    );
};

export default Login;