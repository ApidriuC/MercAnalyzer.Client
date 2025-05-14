// useAuthenticateUser.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRecord } from "types/props";
import { NAVIGATES, URL_API_ENDPOINTS } from "../constants/constans";
import { useAuth } from "../contexts";
import { isEmptyStrings, regularFetch, showUserMessage } from "../helpers";

export const useAuthenticateUser = () => {
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        if (isEmptyStrings([email, password])) {
            showUserMessage({
                icon: "info",
                title: "Información incompleta",
                message: "Para poder continuar ingrese su correo y contraseña."
            });
            return;
        }

        setLoading(true);
        const { ok, data } = await regularFetch(
            {
                url: URL_API_ENDPOINTS.LOGIN,
                body: { email, password }
            }
        ).finally(() => setLoading(false));

        if (ok) {
            const { token, refreshToken }: LoginRecord = data;
            login(token, refreshToken);
            navigate(NAVIGATES.SEARCH);
        }
    };

    return { onSubmitLogin, loading };
};
