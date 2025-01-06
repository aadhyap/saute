// components/AdminRoute.jsx or AdminRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";

interface ProtectedRouteProps {
    children: any;
}

const AdminRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { user, isUserLoading } = useAuth();
    const location = useLocation();

    if (isUserLoading) {
        // Replace this with a spinner or any loading indicator if desired
        return "";
    }

    if (!user || (user && user.roles && !user.roles.includes("admin"))) {
        // Redirect to the landing page or login page
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminRoute;
