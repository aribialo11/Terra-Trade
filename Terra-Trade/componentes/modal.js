import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>x</button>
        <button style={styles.button}>Registrarme</button>
        <button style={styles.buttonBlack}>Iniciar sesión</button>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'lightgray',
    borderRadius: '50%',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: 'lightgray',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
    width: '100%',
  },
  buttonBlack: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Modal;
