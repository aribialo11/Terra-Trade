'use client';

import React, { useState } from 'react';

const Perfil = () => {
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [mostrarPropiedades, setMostrarPropiedades] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para el modal

  const handleDatosClick = () => {
    setMostrarDatos(!mostrarDatos);
    setMostrarPropiedades(false); // Cerrar "Propiedades" si se abre "Datos"
  };

  const handlePropiedadesClick = () => {
    setMostrarPropiedades(!mostrarPropiedades);
    setMostrarDatos(false); // Cerrar "Datos" si se abre "Propiedades"
  };

  const handleCloseAll = () => {
    setMostrarDatos(false);
    setMostrarPropiedades(false);
  };

  const handleSubirTerrenoClick = () => {
    setMostrarModal(true); // Mostrar el modal cuando se presiona "Subir terreno"
    handleCloseAll(); // Cerrar "Datos" y "Propiedades" cuando se abre el modal
  };

  const handleCerrarModal = () => {
    setMostrarModal(false); // Cerrar el modal
  };

  const handleSubir = () => {
    console.log("Terreno subido"); // Lógica de subida
    setMostrarModal(false); // Cerrar el modal al subir el terreno
  };

  return (
    <div style={{
      backgroundColor: '#20493C', // Fondo uniforme
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // Alinear elementos al inicio
      paddingTop: '150px', // Espacio entre el menú superior y el contenido
      overflowY: 'auto', // Habilitar desplazamiento si es necesario
      height: '100vh',
    }}>
      {/* Botones de perfil (solo visibles si no está abierto el modal) */}
      {!mostrarModal && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px' }}>
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
      )}

      {/* Modal para subir terreno */}
      {mostrarModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#20493C' ,
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '1000px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            position: 'relative',
            overflowY: 'auto', // Desplazamiento dentro de la caja

          }}>
            <button
              onClick={handleCerrarModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '2rem',
                color: 'black',
                cursor: 'pointer',
              }}
            >
              X
            </button>

            <h2 style={{
              color: 'black',
              textAlign: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '20px',
            }}>
              Subir terreno
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div>
                <label>Subir foto:</label>
                <input type="file" accept="image/*" style={{ padding: '10px', marginBottom: '15px', width: '100%', backgroundColor: '#A7C99F' }} />
              </div>

              <div>
                <label>Nombre de la propiedad:</label>
                <input type="text" placeholder="Nombre de la propiedad" style={{ padding: '10px', marginBottom: '15px', width: '100%', backgroundColor: '#A7C99F' }} />
              </div>

              <div>
                <label>Ubicación:</label>
                <input type="text" placeholder="Ubicación" style={{ padding: '10px', marginBottom: '15px', width: '100%', backgroundColor: '#A7C99F' }} />
              </div>

              <div>
                <label>Metros:</label>
                <input type="number" placeholder="Metros cuadrados" style={{ padding: '10px', marginBottom: '15px', width: '100%', backgroundColor: '#A7C99F' }} />
              </div>

              <div>
                <label>Barrio:</label>
                <input type="text" placeholder="Barrio" style={{ padding: '10px', marginBottom: '15px', width: '100%', backgroundColor: '#A7C99F' }} />
              </div>

              <div>
                <label>Valor:</label>
                <input type="number" placeholder="Valor" style={{ padding: '10px', marginBottom: '15px', width: '100%', backgroundColor: '#A7C99F' }} />
              </div>

              <div>
                <label>Calle:</label>
                <input type="text" placeholder="Calle" style={{ padding: '10px', marginBottom: '15px', width: '100%', backgroundColor: '#A7C99F' }} />
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label>Descripción:</label>
                <textarea placeholder="Descripción" style={{ padding: '10px', marginBottom: '15px', width: '100%', height: '100px', backgroundColor: '#A7C99F' }} />
              </div>
            </div>

            <button
              onClick={handleSubir}
              style={{
                backgroundColor: '#20493C',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: 'none',
                alignSelf: 'center',
                marginTop: '20px',
              }}
            >
              Subir
            </button>
          </div>
        </div>
      )}

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
