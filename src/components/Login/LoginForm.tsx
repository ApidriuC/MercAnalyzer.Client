import { useState } from "react";
import { LoginFormProps } from "types/props";
import { iconGoogle } from "../../assets";
import { useAuthenticateUser } from "../../hooks";
import { Loading } from "../common";

export const LoginForm = ({ isLoginVisible }: LoginFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const { onSubmitLogin, loading } = useAuthenticateUser();
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div className={`login-form ${isLoginVisible ? "show" : ""}`}>
            {loading && <Loading />}

            <form className="form" onSubmit={onSubmitLogin}>
                <h2 className="title-form">Iniciar sesión</h2>

                {/* FIELDS */}
                <div className="input-container">
                    <label htmlFor="email" className="label-input">Correo:</label>
                    <input
                        type="email"
                        id="emailLogin"
                        name="email"
                        className="input-field" />
                    <div className="icon-mail" />
                </div>
                <div className="input-container">
                    <label htmlFor="password" className="label-input">Contraseña:</label>
                    <input
                        id="passwordLogin"
                        name="password"
                        className="input-field"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        type="button"
                        className={`icon-eye ${showPassword ? "" : "hide"}`}
                        onClick={togglePasswordVisibility}
                    >
                    </button>
                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" className="button-submit">Iniciar sesión</button>

                {/* FORGOT PASSWORD */}
                <div className="extra-links">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>

                {/* OTHER OPTIONS */}
                <div className="others-options">
                    <div className="separator">
                        <span></span>
                        <div>o</div>
                        <span></span>
                    </div>
                    <button className="button-google" type="button">
                        <img className="icon-google" alt="google" src={iconGoogle} />
                        Iniciar sesión con Google
                    </button>
                </div>
            </form>
        </div>
    );
};