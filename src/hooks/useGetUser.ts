import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRecord } from "types/props";
import { NAVIGATES, URL_API_ENDPOINTS } from "../constants/constans";
import { regularFetch, showUserMessage } from "../helpers";

export const useGetUser = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getUser = async (): Promise<UserRecord | null> => {
        setLoading(true);
        const { ok, data } = await regularFetch(
            {
                url: URL_API_ENDPOINTS.GET_USER
            }
        ).finally(() => setLoading(false));

        if (ok) {
            const response: UserRecord = data;
            return response;
        }

        showUserMessage({
            icon: "error",
            title: "Oops!",
            message: "Ha ocurrido un error inesperado, por favor comuniquese con soporte."
        });
        navigate(NAVIGATES.LOGIN);
        return null;
    };

    return { getUser, loading };
};