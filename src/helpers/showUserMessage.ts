import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ShowUserMessageProps } from "types/props";

export const showUserMessage = ({ title, message, icon, confirmButtonText }: ShowUserMessageProps) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: confirmButtonText ?? "Aceptar",
    });
}