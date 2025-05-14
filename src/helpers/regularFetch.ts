import { FetchResponse, RegularFetchProps } from "types/props";
import { URL_API, URL_API_ENDPOINTS } from "../constants/constans";
import { applicationCookies, errorApiHandler, showUserMessage } from "../helpers";

export const regularFetch = async ({ url, method, body, headers }: RegularFetchProps): Promise<FetchResponse> => {
    const { token, refreshToken } = applicationCookies();

    const defaultHeaders: Record<string, string> = {
        "Content-Type": "application/json; charset=utf-8",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...headers
    };

    try {
        const response = await internalFetch({ url, method, body, headers: defaultHeaders });

        const { ok, status } = response;
        const existsTokens = token && refreshToken;
        const tokenExpired = !ok && existsTokens && status === 401;

        if (tokenExpired) {
            const isSuccess = await executeRefreshToken();
            if (isSuccess) return await regularFetch({ url, method, body, headers });
        }

        const data = await response.json();
        if (!ok) errorApiHandler(status, data.message);

        return { ok, data };
    }
    catch (error) {
        showUserMessage({
            icon: "error",
            title: "Error de conexión",
            message: "No se pudo establecer la conexión con el servidor. Por favor, inténtelo más tarde."
        });
        console.error("Fetch error: ", error);
        throw error;
    }
};

const internalFetch = async ({ url, method, body, headers }: RegularFetchProps) => {
    return await fetch(`${URL_API}/${url}`, {
        method: method ?? 'POST',
        headers: headers,
        body: body ? JSON.stringify(body) : null,
    });
};

const executeRefreshToken = async () => {
    const { refreshToken, setToken, setRefreshToken } = applicationCookies();

    const response = await internalFetch({
        url: `${URL_API}/${URL_API_ENDPOINTS.REFRESH_TOKEN}`,
        method: "POST",
        body: { refreshToken },
        headers: { "Content-Type": "application/json" }
    });

    const { ok } = response;
    const data = await response.json();

    if (ok) {
        setToken(data.token);
        setRefreshToken(data.refreshToken);
        return true;
    }

    return false;
}