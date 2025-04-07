import react from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    return token && name ? <Outlet /> : <Navigate to="/login" />;
    }

    export default PrivateRoute;