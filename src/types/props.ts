import { ReactNode } from "react";
import { HttpMethod, MessageIcon } from "./types";

export interface AuthContextProps {
    isAuthenticated: () => boolean;
    login: (token: string, tokenRefresh: string) => void;
    logout: () => void;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface RequireAuthProps {
    children: ReactNode;
}

export interface IntroductionLoginProps {
    setIsLoginVisible: (isLoginVisible: boolean) => void;
    setIsRegisterVisible: (isRegisterVisible: boolean) => void;
}

export interface LoginFormProps {
    isLoginVisible: boolean;
}

export interface RegisterFormProps {
    isRegisterVisible: boolean;
}

export interface NavBarLoginProps {
    isLoginVisible: boolean;
    isRegisterVisible: boolean;
    setIsLoginVisible: (isLoginVisible: boolean) => void;
    setIsRegisterVisible: (isRegisterVisible: boolean) => void;
}

export interface ShowUserMessageProps {
    title?: string;
    message: string;
    icon: MessageIcon;
    confirmButtonText?: string;
}

export interface ProductRecord {
    nombre: string,
    precio: string,
    imagen: string,
    descripcion: string,
    link: string
}

export interface CardHomeProps {
    name: string,
    price: string,
    sourceImage: string,
    description: string,
    link: string,
    isLowerPrice?: boolean
}

export interface ProductCardsHomeProps {
    products: CardHomeProps[];
}

export interface RegularFetchProps {
    url: string;
    method?: HttpMethod;
    body?: object;
    headers?: Record<string, string>;
}

export interface CookiesApp {
    token: string | null;
    refreshToken: string | null;
    setToken: (value: string | null) => void;
    setRefreshToken: (value: string | null) => void;
}

export interface LoginRecord {
    token: string;
    refreshToken: string;
}

export interface FetchResponse {
    ok: boolean;
    data: any;
}

export interface UserRecord {
    email: string
}