import { useState } from "react";
import ChatBot from "react-chatbotify";

export const MyChatBot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => setIsChatOpen(!isChatOpen);

    const settings = {
        isOpen: true,
        general: {
            primaryColor: '#42b0c5',
            secondaryColor: '#491d8d',
            embedded: true
        },
        audio: {
            disabled: false,
        },
        chatHistory: {
            storageKey: "concepts_settings"
        },
        chatInput: {
            disabled: false,
            allowNewline: false,
            enabledPlaceholderText: "Escribe tu mensaje relacionado al producto",
            disabledPlaceholderText: "",
            showCharacterCount: false,
            characterLimit: -1,
            botDelay: 5000,
            blockSpam: true,
            sendOptionOutput: true,
            sendCheckboxOutput: true,
        }
    }

    const themes = [
        { id: "minimal_midnight", version: "0.1.0" },
        { id: "simple_blue", version: "0.1.0" }
    ]

    const flow = {
        start: {
            message: "Hola 👋, puedes preguntarme algo sobre el producto.",
            path: "preguntaLibre"
        },

        preguntaLibre: {
            delay: 6000, 
            message: (params: any) => {
                const pregunta = params.userInput?.toLowerCase() || "";

                // Cable USB
                if (pregunta.includes("cable") && pregunta.includes("barato")) {
                    return "El más barato es el cable universal 3 en 1. Cuesta $20.126.";
                }
                if (pregunta.includes("cable") && (pregunta.includes("carga rápida") || pregunta.includes("rapida"))) {
                    return "Sí, el de la marca Ugreen tiene carga rápida de 100W.";
                }
                if (pregunta.includes("cable") && pregunta.includes("samsung")) {
                    return "Los dos sirven, pero el de Ugreen es más potente.";
                }

                // Spark GT
                if (pregunta.includes("spark") && pregunta.includes("barato")) {
                    return "El más barato es el Spark GT Full Equipo. Vale $32.800.000.";
                }
                if (pregunta.includes("spark") && (pregunta.includes("iguales") || pregunta.includes("modelo") || pregunta.includes("son iguales"))) {
                    return "Sí, los tres son Spark GT 2015. Cambian algunos detalles.";
                }
                if (pregunta.includes("spark") && pregunta.includes("nuevo")) {
                    return "Todos son del mismo modelo. No hay uno más nuevo.";
                }

                return "No tengo esa información, pero puedes preguntarme otra cosa.";
            },
            path: "preguntaLibre"
        }
    };




    return (
        <>
            <button onClick={toggleChat} className="chat-toggle-btn">
                {isChatOpen ? "Cerrar Chat" : "Abrir Chat"}
            </button>

            {!isChatOpen ? null : (
                <section className="myChatBot">
                    <ChatBot
                        flow={flow}
                        settings={settings}
                        themes={themes}
                    />
                </section>
            )}
        </>
    );
}