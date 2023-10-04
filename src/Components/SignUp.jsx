import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSignup = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Check if user already exists
        const existingUser = users.find((user) => user.email === email);
    
        if (existingUser) {
          alert('User already exists');
        } else {
          // Create a new user object
          const newUser = { email, password };
    
          // Add the new user to the array
          users.push(newUser);
    
          // Store the updated users array in localStorage
          localStorage.setItem('users', JSON.stringify(users));
    
          // Redirect or perform further actions
          alert('Signup successful! You can now login.');
          navigate('/login')

        }
      };
    return (
        <div>



     
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
         
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
              <button onClick={handleSignup} className="btn btn-primary">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
           
    
    
    
    
    
    
    
    
            </div>
    );
};

export default SignUp;