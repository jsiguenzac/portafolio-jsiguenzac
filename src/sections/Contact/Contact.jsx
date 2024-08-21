import { useState } from "react";
import styles from './ContactStyles.module.css';
import { sendEmail } from "../../services/emailService";
import Modal from "../../common/Modal/Modal";
import SendingPod from "../../common/Pod/SendingPod"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isOk, setIsOK] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Mostrar pod de "Enviando correo..."
    const response = await sendEmail(name, email, message);
    // Manejar la respuesta del servicio
    if (response.status === "ok") {
      setIsOK(true);
      setResponseMessage("Mensaje enviado correctamente.");
    } else {
      setIsOK(false);
      setResponseMessage(`${response.error}`);
    }
    setIsSending(false);
    setShowModal(true); // Mostrar el modal
  };

  const handleCloseModal = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsOK(false);
    setShowModal(false);
    setResponseMessage(null); // Limpiar el mensaje cuando se cierre el modal
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contáctame</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Correo electrónico
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
      {/* Modal que muestra el responseMessage */}
      <Modal
        show={showModal}
        message={responseMessage}
        onClose={handleCloseModal}
        icon={isOk ? 
          <CheckCircleIcon style={{ fontSize: 60, color: 'green' }} /> :
          <WhatsAppIcon style={{ fontSize: 60, color: '#25D366' }} />
        }
        iconClickUrl={isOk ? null : "https://wa.link/imgjmg" }
      />
      {/* Pod reutilizable que muestra "Enviando correo..." */}
      <SendingPod show={isSending} />
    </section>
  );
}

export default Contact;
