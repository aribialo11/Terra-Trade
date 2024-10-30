'use client';

import React from 'react';

const Perfil = () => {
  return (
    <div style={{ backgroundColor: '#20493C', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {/* Botones de perfil */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '50px' }}>
        <button style={{
          backgroundColor: 'white',
          color: 'black',
          fontFamily: 'Arial',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          padding: '20px 40px',
          borderRadius: '20px',
          cursor: 'pointer',
          border: 'none',
          width: '200px',
          height: '100px',
        }}>
          Datos
        </button>

        <button style={{
          backgroundColor: 'white',
          color: 'black',
          fontFamily: 'Arial',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          padding: '20px 40px',
          borderRadius: '20px',
          cursor: 'pointer',
          border: 'none',
          width: '200px',
          height: '100px',
        }}>
          Propiedades
        </button>

        <button style={{
          backgroundColor: 'white',
          color: 'black',
          fontFamily: 'Arial',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          padding: '20px 40px',
          borderRadius: '20px',
          cursor: 'pointer',
          border: 'none',
          width: '200px',
          height: '100px',
        }}>
          Subir terreno
        </button>
      </div>
    </div>
  );
};

export default Perfil;
