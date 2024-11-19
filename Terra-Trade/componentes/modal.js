import React, { useState } from 'react';

const Modal = ({ onClose, onOpenLoginModal, onOpenRegisterModal }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>
          x
        </button>
        <br></br>
        <button onClick={onOpenLoginModal} style={styles.button}>
          Iniciar sesión
        </button>
        <button onClick={onOpenRegisterModal} style={styles.button}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

const LoginModal = ({ onClose, onOpenRegisterModal }) => {
  const handleRegisterClick = () => {
    onClose(); // Cierra el modal de inicio de sesión
    setTimeout(() => {
      onOpenRegisterModal(); // Abre el modal de registro después de un breve delay
    }, 200); // Delay corto para evitar problemas visuales
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>
          x
        </button>
        <h2>INICIO DE SESIÓN</h2>
        <label>
          Nombre
          <input type="text" style={styles.input} />
        </label>
        <label>
          Apellido
          <input type="text" style={styles.input} />
        </label>
        <label>
          Contraseña
          <input type="password" style={styles.input} />
        </label>
        <p style={{ margin: '10px 0' }}>
          ¿No tenés un perfil hecho?{' '}
          <span
            onClick={handleRegisterClick}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            Registrate acá
          </span>
        </p>
        <button style={styles.button}>Entrar</button>
      </div>
    </div>
  );
};

const RegisterModal = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>
          x
        </button>
        <h2>REGISTRO</h2>
        <label>
          Nombre
          <input type="text" style={styles.input} />
        </label>
        <label>
          Apellido
          <input type="text" style={styles.input} />
        </label>
        <label>
          Contraseña
          <input type="password" style={styles.input} />
        </label>
        <button style={styles.button}>Registrarse</button>
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
    padding: '4px',
    cursor: 'pointer',
    width: '35px',
    height: '35px',
    marginBottom: '5px',
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
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export { Modal, LoginModal, RegisterModal };
