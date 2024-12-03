'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Perfil = () => {
  const router = useRouter();

  const handleDatosClick = () => {
    router.push('/datos'); // Redirigir a la página de "datos"
  };

  const handlePropiedadesClick = () => {
    router.push('/mis-propiedades'); // Redirigir a la página de "Mis propiedades"
  };

  const handleSubirTerrenoClick = () => {
    router.push('/paginanueva'); // Redirigir a la página de subir terrenos
  };

  return (
    <div
      style={{
        backgroundColor: '#20493C', // Fondo uniforme
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '150px',
        overflowY: 'auto',
        height: '100vh',
      }}
    >
      {/* Botones de perfil */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginTop: '50px',
        }}
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          <button
            onClick={handleDatosClick}
            style={{
              backgroundColor: 'white',
              color: 'black',
              fontFamily: 'Arial',
              fontSize: '2rem',
              fontWeight: 'bold',
              padding: '30px 60px',
              borderRadius: '20px',
              cursor: 'pointer',
              border: 'none',
              width: '400px',
              height: '150px',
            }}
          >
            Datos
          </button>

          <button
            onClick={handlePropiedadesClick}
            style={{
              backgroundColor: 'white',
              color: 'black',
              fontFamily: 'Arial',
              fontSize: '2rem',
              fontWeight: 'bold',
              padding: '30px 60px',
              borderRadius: '20px',
              cursor: 'pointer',
              border: 'none',
              width: '400px',
              height: '150px',
            }}
          >
            Mis propiedades
          </button>
        </div>

        <button
          onClick={handleSubirTerrenoClick}
          style={{
            backgroundColor: 'white',
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '2rem',
            fontWeight: 'bold',
            padding: '30px 60px',
            borderRadius: '20px',
            cursor: 'pointer',
            border: 'none',
            width: '400px',
            height: '150px',
          }}
        >
          Subir terreno
        </button>
      </div>
    </div>
  );
};

export default Perfil;
