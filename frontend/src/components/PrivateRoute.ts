import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return null;
    }

    return children;
};

export default PrivateRoute;
