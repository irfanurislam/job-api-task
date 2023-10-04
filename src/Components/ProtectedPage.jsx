import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';


const ProtectedPage = () => {
  const { authenticated, setAuthenticated } = useAuth();

  // Logout function
  const handleLogout = () => {
    // Clear the authentication state and redirect to the landing page
    setAuthenticated(false);
  };

  return (
    <div>
      <h1>Protected Page</h1>
      {authenticated ? (
        <>
          <p>This page can only be accessed by authenticated users.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not authenticated. Please log in or sign up.</p>
          <Link to="/login">Login</Link>
          <span> | </span>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
};

export default ProtectedPage;
