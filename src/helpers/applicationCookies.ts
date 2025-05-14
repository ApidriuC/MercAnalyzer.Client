import { CookiesApp } from "types/props";
import { COOKIE_NAMES } from "../constants/constans";

export const applicationCookies = (): CookiesApp => {
    const cookies = document.cookie;

    return {
        token: getCookieValue(cookies, COOKIE_NAMES.TOKEN),
        refreshToken: getCookieValue(cookies, COOKIE_NAMES.REFRESH_TOKEN),
        setToken: (value: string | null) => setApplicationCookie(COOKIE_NAMES.TOKEN, value),
        setRefreshToken: (value: string | null) => setApplicationCookie(COOKIE_NAMES.REFRESH_TOKEN, value)
    };
};

const getCookieValue = (cookies: string, cookieName: string): string | null => {
    const cookieMatch = cookies.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    return cookieMatch ? cookieMatch[2] : null;
};

const setApplicationCookie = (cookieName: string, value: string | null, expiresDays: number = 30) => {
    let expires: string;

    if (!value) {
        const pastDate = new Date(0).toUTCString();
        expires = `expires=${pastDate}`;
    }
    else {
        const date = new Date();
        date.setTime(date.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
        expires = `expires=${date.toUTCString()}`;
    }

    document.cookie = `${cookieName}=${value}; ${expires}; path=/`;
};
