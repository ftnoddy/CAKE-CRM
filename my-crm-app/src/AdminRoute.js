// AdminRoute.js
import React, { useContext } from 'react';
import { AuthContext } from './context/authContext'; // Make sure this path is correct

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user || !user.isAdmin) {
    return <div className="text-center text-red-500 font-bold">You don't have access to see this page</div>;
  }

  return children;
};

export default AdminRoute;
