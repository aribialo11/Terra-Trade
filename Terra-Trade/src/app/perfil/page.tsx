'use client';

import React, { useState } from 'react';

const Perfil = () => {
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [mostrarPropiedades, setMostrarPropiedades] = useState(false);

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

  return (
    <div style={{ backgroundColor: '#20493C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , marginTop:'100px' }}>
      {/* Botones de perfil */}
      {(!mostrarDatos && !mostrarPropiedades) ? (
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
                width: '250px',
                height: '120px',
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
                width: '300px',
                height: '120px',
              }}
            >
            Propiedades
            </button>
          </div>

          <button
            onClick={handleCloseAll}
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
              width: '250px',
              height: '150px',
            }}
          >
            Subir terreno
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '20px', marginTop: '50px' }}>
          <button
            onClick={handleDatosClick}
            style={{
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
              fontSize: '1.5rem',
              fontWeight: 'bold',
              padding: '20px 40px',
              borderRadius: '20px',
              cursor: 'pointer',
              border: 'none',
              width: '200px',
              height: '100px',
            }}
          >
            Propiedades
          </button>

          <button
            onClick={handleCloseAll}
            style={{
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
            }}
          >
            Subir terreno
          </button>
        </div>
      )}

      {/* Sección de datos del usuario */}
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
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p><strong>Nombre:</strong> [Nombre del usuario]</p>
            <p><strong>Apellido:</strong> [Apellido del usuario]</p>
            <p><strong>Correo electrónico:</strong> [Correo del usuario]</p>
            <p><strong>Edad:</strong> [Edad del usuario]</p>
          </div>
          <div>
            <p><strong>Oficio:</strong> [Oficio del usuario]</p>
            <p><strong>Se unió el:</strong> [Fecha de unión]</p>
          </div>
        </div>
      )}

      {/* Sección de propiedades del usuario */}
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
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '20px',
            width: '100%',
          }}>
            {/* Propiedad 1 */}
            <div style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '15px',
              width: '45%',
              textAlign: 'center',
            }}>
              <div style={{ backgroundColor: 'black', width: '100%', height: '100px', borderRadius: '10px', marginBottom: '10px' }}></div>
              <p><strong>Nombre de la propiedad:</strong> Propiedad 1</p>
              <p><strong>Metros:</strong> 200 m²</p>
              <p><strong>Valor:</strong> $100,000</p>
              <p><strong>Ubicación:</strong> Ciudad XYZ</p>
              <p><strong>Descripción:</strong> Una descripción breve de la propiedad.</p>
              <button style={{
                backgroundColor: '#20493C',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: 'none',
                marginTop: '10px',
              }}>
                Ir al perfil del vendedor
              </button>
            </div>

            {/* Propiedad 2 */}
            <div style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '15px',
              width: '45%',
              textAlign: 'center',
            }}>
              <div style={{ backgroundColor: 'black', width: '100%', height: '100px', borderRadius: '10px', marginBottom: '10px' }}></div>
              <p><strong>Nombre de la propiedad:</strong> Propiedad 2</p>
              <p><strong>Metros:</strong> 300 m²</p>
              <p><strong>Valor:</strong> $150,000</p>
              <p><strong>Ubicación:</strong> Ciudad ABC</p>
              <p><strong>Descripción:</strong> Otra descripción breve de la propiedad.</p>
              <button style={{
                backgroundColor: '#20493C',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: 'none',
                marginTop: '10px',
              }}>
                Ir al perfil del vendedor
              </button>
            </div>
          </div>

          <button style={{
            backgroundColor: '#20493C',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '10px',
            cursor: 'pointer',
            border: 'none',
            marginTop: '20px',
          }}>
            Más
          </button>
        </div>
      )}
    </div>
  );
};

export default Perfil;
