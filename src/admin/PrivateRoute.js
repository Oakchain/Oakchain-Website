import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    // Assuming you are storing the token in localStorage
  const token = localStorage.getItem('token');
    console.log(token)
  // Check if the token exists
  const isAuthenticated = !!token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/loginadmin" />;
};

export default PrivateRoute