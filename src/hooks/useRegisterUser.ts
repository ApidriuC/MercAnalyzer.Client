import { useState } from "react";
import { URL_API_ENDPOINTS } from "../constants/constans";
import { isEmptyStrings, regularFetch, showUserMessage } from "../helpers";

export const useRegisterUser = () => {
    const [loading, setLoading] = useState(false);

    const onSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const confirmPassword = e.currentTarget.passwordConfirm.value;

        if (isEmptyStrings([email, password, confirmPassword])) {
            showUserMessage({
                icon: "info",
                title: "Información incompleta",
                message: "Para poder continuar ingrese información en los campos."
            });
            return;
        }

        if (password !== confirmPassword) {
            showUserMessage({
                icon: "info",
                title: "Verifique su contraseña",
                message: "Las contraseñas ingresadas no coinciden."
            });
            return;
        }

        setLoading(true);
        const { ok } = await regularFetch(
            {
                url: URL_API_ENDPOINTS.REGISTER,
                body: { email, password, confirmPassword }
            }
        ).finally(() => setLoading(false));

        if (ok) {
            showUserMessage({
                icon: "success",
                title: "Registro exitoso",
                message: "Su cuenta ha sido creada con éxito. Por favor, inicie sesión."
            });
        }

        return ok;
    };

    return { onSubmitRegister, loading };
}