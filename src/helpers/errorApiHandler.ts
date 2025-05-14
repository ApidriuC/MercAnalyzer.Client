import { showUserMessage } from "../helpers";

export const errorApiHandler = (status: number, message: string = '') => {
    switch (status) {
        case 400:
            showUserMessage({
                icon: "error",
                title: "Oops!",
                message: message
            });
            break;
        case 401:
            showUserMessage({
                icon: "info",
                title: "Información",
                message: "Su sesión ha sido cerrada por inactividad."
            });
            break;
        case 500:
            showUserMessage({
                icon: "error",
                title: "Error interno del servidor",
                message: "Ha ocurrido un error interno, por favor comuniquese con soporte."
            });
            break;
        default:
            showUserMessage({
                icon: "error",
                title: `Error ${status}`,
                message: message
            });
            break;
    }
};