'use client';

import React from 'react';

const AcercaDeNosotros = () => {
  return (
    <div
      style={{
        backgroundColor: '#20493C',
        color: 'white',
        fontFamily: 'Arial',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '50px',
        overflowY: 'auto',
      }}
    >
      {/* Título de la página */}
      <h1
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        Acerca de nosotros
      </h1>

      {/* Texto descriptivo */}
      <p
        style={{
          fontSize: '2rem',
          textAlign: 'center',
          maxWidth: '800px',
          lineHeight: '1.5',
        }}
      >
        Somos un grupo de alumnos que creamos TerraTrade, una pagina web segura y accesible que conecta a dueños de terrenos con 
        personas dispuestas a invertir en las propiedades que publiquen. 
        
      </p>
    </div>
  );
};

export default AcercaDeNosotros;
