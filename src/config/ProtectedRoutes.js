import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthProvider } from "../hooks/useAuth";


export default function ProtectedRoute() {
    const { isAuthenticated } = useAuthProvider();
    const location = useLocation();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    }
    return <Outlet />;
}