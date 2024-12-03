'use client';

import React, { useRef, useState } from 'react';

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
        metamask_address: formData.get('propiedad-metamask') as string, // Nueva propiedad
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
        <label htmlFor="propiedad-nombre">Nombre:</label><br />
        <input type="text" id="propiedad-nombre" name="propiedad-nombre" required /><br />

        <label htmlFor="propiedad-direccion">Dirección:</label><br />
        <input type="text" id="propiedad-direccion" name="propiedad-direccion" required /><br />

        <label htmlFor="propiedad-barrio">Barrio:</label><br />
        <input type="text" id="propiedad-barrio" name="propiedad-barrio" required /><br />

        <label htmlFor="propiedad-precio">Precio:</label><br />
        <input type="number" id="propiedad-precio" name="propiedad-precio" required /><br />

        <label htmlFor="propiedad-telefono">Teléfono:</label><br />
        <input type="text" id="propiedad-telefono" name="propiedad-telefono" required /><br />

        <label htmlFor="propiedad-imagen">Imagen (URL):</label><br />
        <input type="text" id="propiedad-imagen" name="propiedad-imagen" required /><br />

        <label htmlFor="propiedad-metamask">Dirección de MetaMask:</label><br />
        <input type="text" id="propiedad-metamask" name="propiedad-metamask" required /><br />

        <input className="boton" type="submit" value="Agregar Propiedad" />
      </form>

      <style jsx>{`
        .container {
          padding: 20px;
        }
        .titulo {
          text-align: center;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-top: 10px;
        }
        input {
          padding: 8px;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};

export default Page;
