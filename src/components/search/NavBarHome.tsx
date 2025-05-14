import { useEffect, useState } from "react";
import { UserRecord } from "types/props";
import { iconApp } from "../../assets";
import { APP_NAME } from "../../constants/constans";
import { useClearSession, useGetUser, useTheme } from "../../hooks";
import { Loading } from "../common";

export const NavBarHome = () => {
    const [user, setUser] = useState<UserRecord | null>(null);

    const { toggleTheme } = useTheme();
    const { onClearSession, loading } = useClearSession();
    const { getUser, loading: userLoading } = useGetUser();

    // Fecth user.
    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUser();
            if (userData) setUser(userData);
        };

        fetchUser();
    }, []);

    return (
        <nav className="navbar">
            {(userLoading || loading) && <Loading />}

            <div className="app-title">
                <img className="icon-app" alt="logo" src={iconApp} />
                <h1 className="title">{APP_NAME}</h1>
            </div>
            <div className='text-user'>
                <p>{user?.email?.toUpperCase()}</p>
                <button
                    className='button-signout'
                    onClick={onClearSession}
                >
                    Cerrar sesión
                </button>
            </div>
            <button className="theme" onClick={toggleTheme}></button>
        </nav>
    );
};