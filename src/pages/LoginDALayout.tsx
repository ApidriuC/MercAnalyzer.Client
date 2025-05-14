import { useEffect, useState } from "react";
import { FooterCommon } from "../components/common";
import { IntroductionLogin, LoginForm, NavBarLogin, RegisterForm } from "../components/login";
import { LOGIN_TITLE } from "../constants/constans";
import { useAuth } from "../contexts";

export const LoginDALayout = () => {
    document.title = LOGIN_TITLE;
    const { logout, isAuthenticated } = useAuth();

    // Force logout.
    useEffect(() => {
        if (isAuthenticated()) logout();
    }, []);

    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);

    return (
        <main className="container-login">
            <section className="main-content">
                <NavBarLogin
                    isLoginVisible={isLoginVisible}
                    isRegisterVisible={isRegisterVisible}
                    setIsLoginVisible={setIsLoginVisible}
                    setIsRegisterVisible={setIsRegisterVisible}
                />
                <LoginForm
                    isLoginVisible={isLoginVisible}
                />
                <RegisterForm
                    isRegisterVisible={isRegisterVisible}
                />
                <IntroductionLogin
                    setIsLoginVisible={setIsLoginVisible}
                    setIsRegisterVisible={setIsRegisterVisible}
                />
                <FooterCommon />
            </section>
        </main >
    );
}