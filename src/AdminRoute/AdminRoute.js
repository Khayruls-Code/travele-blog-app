import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth()
  const location = useLocation()
  if (isLoading || !admin) {
    return <div style={{ width: "100%", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}><CircularProgress /></div>
  } else {
    return user.email && admin ? children : <Navigate to="/login" replace state={{ from: location }} />;
  }
};

export default AdminRoute;