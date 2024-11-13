import React, { useState } from 'react';

const Modal = ({ onClose, onOpenLoginModal }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>x</button>
        <button onClick={onOpenLoginModal} style={styles.button}>Iniciar sesión con Google</button>
      </div>
    </div>
  );
};

const LoginModal = ({ onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>x</button>
        <h2>Inicio de sesión</h2>
        <label>
          Usuario
          <input type="text" style={styles.input} />
        </label>
        <label>
          Contraseña
          <input type="password" style={styles.input} />
        </label>
        <button style={styles.button}>Entrar</button>
      </div>
    </div>
  );
};

const UploadModal = ({ onClose }) => {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la subida del terreno
    console.log("Terreno Subido:", { nombre, ubicacion, precio });
    onClose();
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>x</button>
        <h2>Subir Terreno</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre del Terreno
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              style={styles.input}
            />
          </label>
          <label>
            Ubicación
            <input
              type="text"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              style={styles.input}
            />
          </label>
          <label>
            Precio
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              style={styles.input}
            />
          </label>
          <button type="submit" style={styles.button}>Subir Terreno</button>
        </form>
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

export { Modal, LoginModal, UploadModal };
