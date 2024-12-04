'use client';

import React, { useRef } from 'react';

const Page: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const addProperty = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const form = formRef.current;
      const formData = new FormData(form);

      const newPropiedad = {
        nombre: formData.get('propiedad-nombre') as string,
        direccion: formData.get('propiedad-direccion') as string,
        barrio: formData.get('propiedad-barrio') as string,
        precio: Number(formData.get('propiedad-precio')),
        telefono: formData.get('propiedad-telefono') as string,
        url_de_la_imagen: formData.get('propiedad-imagen') as string,
        metamask_address: formData.get('propiedad-metamask') as string,
      };

      try {
        const res = await fetch('/api/propiedades', {
          method: 'POST',
          body: JSON.stringify(newPropiedad),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          console.log('Property added successfully');
          form.reset();
        } else {
          console.error('Failed to add property');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="titulo">Agregar Nueva Propiedad</h2>
      <form id="Formulario" onSubmit={addProperty} ref={formRef}>
        <div className="form-container">
          <div className="form-left">
            <label htmlFor="propiedad-nombre">Nombre:</label>
            <input type="text" id="propiedad-nombre" name="propiedad-nombre" required />

            <label htmlFor="propiedad-direccion">Dirección:</label>
            <input type="text" id="propiedad-direccion" name="propiedad-direccion" required />

            <label htmlFor="propiedad-barrio">Barrio:</label>
            <input type="text" id="propiedad-barrio" name="propiedad-barrio" required />

            <label htmlFor="propiedad-precio">Precio:</label>
            <input type="number" id="propiedad-precio" name="propiedad-precio" required />
          </div>

          <div className="form-right">
            <label htmlFor="propiedad-telefono">Teléfono:</label>
            <input type="text" id="propiedad-telefono" name="propiedad-telefono" required />

            <label htmlFor="propiedad-imagen">Imagen (URL):</label>
            <input type="text" id="propiedad-imagen" name="propiedad-imagen" required />

            <label htmlFor="propiedad-metamask">Dirección de MetaMask:</label>
            <input type="text" id="propiedad-metamask" name="propiedad-metamask" required />
          </div>
        </div>

        <input className="boton" type="submit" value="Agregar Propiedad" />
      </form>

      <style jsx>{`
        .container {
          padding: 20px;
          background-color: #20493C; /* Fondo verde de la página */
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 120px; /* Espacio superior para evitar que el menú tape el contenido */
        }

        .titulo {
          text-align: center;
          color: white;
          margin-bottom: 20px; /* Espacio entre el título y el formulario */
        }

        form {
          background-color: #b7c9a6; /* Fondo gris para el formulario */
          padding: 30px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          width: 80%; /* Establecer un ancho para que no ocupe toda la pantalla */
          max-width: 1000px; /* Limitar el ancho máximo */
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
        }

        .form-container {
          display: flex;
          gap: 30px;
        }

        .form-left, .form-right {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        label {
          margin-top: 15px;
          color: black;
        }

        input {
          padding: 8px;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
          background-color: white; /* Cajas de texto blancas */
        }

        .boton {
          margin-top: 20px;
          padding: 10px;
          background-color: #20493C;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .boton:hover {
          background-color: #1a3d2f;
        }
      `}</style>
    </div>
  );
};

export default Page;
