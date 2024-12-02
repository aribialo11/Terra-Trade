'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importar el hook useRouter

const Perfil = () => {
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [mostrarPropiedades, setMostrarPropiedades] = useState(false);

  const router = useRouter(); // Instancia del router

  const handleDatosClick = () => {
    setMostrarDatos(!mostrarDatos);
    setMostrarPropiedades(false); // Cerrar "Propiedades" si se abre "Datos"
  };

  const handlePropiedadesClick = () => {
    setMostrarPropiedades(!mostrarPropiedades);
    setMostrarDatos(false); // Cerrar "Datos" si se abre "Propiedades"
  };

  const handleSubirTerrenoClick = () => {
    router.push('/paginanueva'); // Redirigir a la página de propiedades
  };

  return (
    <div
      style={{
        backgroundColor: '#20493C', // Fondo uniforme
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinear elementos al inicio
        paddingTop: '150px', // Espacio entre el menú superior y el contenido
        overflowY: 'auto', // Habilitar desplazamiento si es necesario
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
          onClick={handleSubirTerrenoClick} // Cambiar acción a redirección
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

      {mostrarDatos && (
        <div
          style={{
            backgroundColor: '#b7c9a6',
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '1rem',
            padding: '20px',
            borderRadius: '20px',
            marginTop: '30px',
            width: '60%',
          }}
        >
          <h3>Datos personales</h3>
          <p>Aquí van los datos personales del usuario...</p>
        </div>
      )}

      {mostrarPropiedades && (
        <div
          style={{
            backgroundColor: '#b7c9a6',
            color: 'black',
            fontFamily: 'Arial',
            fontSize: '1rem',
            padding: '20px',
            borderRadius: '20px',
            marginTop: '30px',
            width: '60%',
          }}
        >
          <h3>Mis Propiedades</h3>
          <p>Aquí se enlistarán las propiedades del usuario...</p>
        </div>
      )}
    </div>
  );
};

export default Perfil;
