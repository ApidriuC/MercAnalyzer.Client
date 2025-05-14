import { IntroductionLoginProps } from "types/props";
import { LOGIN_DESCRIPTION, LOGIN_SUBTITLE } from "../../constants/constans";

export const IntroductionLogin = ({ setIsRegisterVisible, setIsLoginVisible }: IntroductionLoginProps) => {
    const handleClick = () => {
        setIsLoginVisible(false);
        setIsRegisterVisible(true);
    };

    return (
        <article className="content">
            <h2>{LOGIN_SUBTITLE}</h2>
            <p>{LOGIN_DESCRIPTION}</p>
            <button
                className="button-try"
                onClick={handleClick}
            >
                Pruébalo gratis
            </button>
        </article>
    )
};