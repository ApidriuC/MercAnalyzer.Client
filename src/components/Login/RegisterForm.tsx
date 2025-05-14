import { useRef, useState } from "react";
import { RegisterFormProps } from "types/props";
import { iconGoogle } from "../../assets";
import { useRegisterUser } from "../../hooks";
import { Loading } from "../common";

export const RegisterForm = ({ isRegisterVisible }: RegisterFormProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [showPassword, setShowPassword] = useState(false);

    const { onSubmitRegister, loading } = useRegisterUser();
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isSuccess = await onSubmitRegister(e);
        if (isSuccess) formRef.current?.reset();
    }

    return (
        <div
            className={`register-form ${isRegisterVisible ? "show" : ""}`}>
            {loading && <Loading />}

            <form ref={formRef} className="form" onSubmit={handleSubmit}>
                <h2 className="title-form">Regístrese</h2>

                {/* FIELDS */}
                <div className="input-container">
                    <label htmlFor="email">Correo:</label>
                    <input
                        type="email"
                        id="emailRegister"
                        name="email"
                    />
                    <div className="icon-mail"></div>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        id="passwordRegister"
                        name="password"
                        className="input-field"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        type="button"
                        className={`icon-eye ${showPassword ? "" : "hide"}`}
                        onClick={togglePasswordVisibility}
                    ></button>
                </div>
                <div className="input-container">
                    <label htmlFor="passwordConfirm">Confirmar contraseña:</label>
                    <input
                        id="passwordConfirm"
                        name="passwordConfirm"
                        className="input-field"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        type="button"
                        className={`icon-eye ${showPassword ? "" : "hide"}`}
                        onClick={togglePasswordVisibility}
                    ></button>
                </div>

                {/* SUBMITE BUTTON */}
                <button type="submit" className="button-submit">
                    Registrarse
                </button>

                {/* OTHER OPTIONS */}
                <div className="others-options">
                    <div className="separator">
                        <span></span>
                        <div>o</div>
                        <span></span>
                    </div>
                    <button className="button-google" type="button">
                        <img className="icon-google" alt="google" src={iconGoogle} />
                        Registrarse con Google
                    </button>
                </div>
            </form>
        </div >
    );
};