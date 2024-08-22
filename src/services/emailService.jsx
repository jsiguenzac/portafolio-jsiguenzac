import { API_URL } from "../config/deployMode"

export const sendEmail = async (subject, email, message) => {
    const data = {
      subject,
      email,
      message,
    };
    
    try {
        const response = await fetch(`${API_URL}/Email/Me`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status === 200){
            // Si la solicitud fue exitosa
            // Acceder al campo "exito" en "data"
            const result = await response.json();
            if (result.data?.exito) {
                return { status: "ok", data: result.data };
            } else {
                return { status: "error", error: result.data?.mensaje || "Error desconocido." };
            }
        }else {
            // Si la solicitud falló
            const errorResult = await response.json();
            return { status: "error", error: errorResult.message || "Algo salió mal." };
        }
    } catch (error) {
        console.error("Error enviando el email:", error);
        return { status: "error", error: "Ocurrió un error en el servidor. También podrías contactar a Joel tocando el icono de WhatsApp." };
    }
  };