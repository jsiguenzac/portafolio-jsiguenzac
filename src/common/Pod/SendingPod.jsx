import styles from './pod.module.css';

// eslint-disable-next-line react/prop-types
const SendingPod = ({ show, message = "Enviando correo..." }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.sendingPod}>
      <p>{message}</p>
    </div>
  );
};

export default SendingPod;
