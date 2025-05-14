import { Navigate } from "react-router-dom";
import { RequireAuthProps } from "types/props";
import { useAuth } from "../../contexts";
import { showUserMessage } from "../../helpers";

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const { isAuthenticated } = useAuth();
    const isAuth = isAuthenticated();

    if (!isAuth) {
        showUserMessage({
            icon: "info",
            title: "Informacion",
            message: "Su sesión ha sido cerrada por inactividad."
        });
    }

    return isAuth ? children : <Navigate to="/login" />;
}