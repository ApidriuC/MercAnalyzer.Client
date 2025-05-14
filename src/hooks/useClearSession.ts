import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATES } from "../constants/constans";
import { useAuth } from "../contexts";

export const useClearSession = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const onClearSession = () => {
        setLoading(true);
        logout();
        navigate(NAVIGATES.LOGIN);
        setLoading(false);
    }

    return { onClearSession, loading };
};