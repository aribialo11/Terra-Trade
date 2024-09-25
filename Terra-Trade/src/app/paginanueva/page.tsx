'use client';

import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;

interface Propiedad {
  id: number;
  nombre: string;
  direccion: string;
  barrio: string;
  precio: number;
  url_de_la_imagen: string;
}

const Page: React.FC = () => {
  const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const addProperty = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const form = formRef.current;

      // Remove 'id' from newPropiedad as it is automatically generated in the database
      const newPropiedad = {
        nombre: form["propiedad-nombre"].value,
        direccion: form["propiedad-direccion"].value,
        barrio: form["propiedad-barrio"].value,
        precio: Number(form["propiedad-precio"].value),
        url_de_la_imagen: form["propiedad-imagen"].value,
      };

      try {
        const res = await fetch('/api/propiedades', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPropiedad),
        });

        if (res.ok) {
          const data: Propiedad = await res.json();
          console.log('Property added:', data);

          // Add the newly created property from the response to the state
          setPropiedades([...propiedades, data]);
          form.reset();
        } else {
          console.error('Failed to add property');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const deleteProperty = (id: number) => {
    setPropiedades(propiedades.filter((propiedad) => propiedad.id !== id));
  };

  return (
    <div className="container">
      {/* Form */}
      <div className="Formulario">
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
          <label htmlFor="propiedad-imagen">URL de la imagen:</label><br />
          <input type="text" id="propiedad-imagen" name="propiedad-imagen" required /><br />
          <input className="boton" type="submit" value="Agregar Propiedad" />
        </form>
      </div>
      {/* Fin del formulario */}

      {/* Contenedor de propiedades */}
      <div id="properties-container" className="properties-container">
        {propiedades.map((propiedades) => (
          <div key={propiedades.id} className="property">
            <button className="delete-button" onClick={() => deleteProperty(propiedades.id)}>
              Eliminar
            </button>
            <Image src={propiedades.url_de_la_imagen} alt={propiedades.nombre} />
            <h2>{propiedades.nombre}</h2>
            <p>Dirección: {propiedades.direccion}</p>
            <p>Barrio: {propiedades.barrio}</p>
            <p>Precio: ${propiedades.precio}</p>
          </div>
        ))}
      </div>
      {/* Fin del contenedor de propiedades */}

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #20493C;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .Formulario {
          background-color: #20493C;
          border: 1px solid #ccc;
          padding: 20px;
          box-sizing: border-box;
          margin-top: 100px;
          margin-bottom: 20px;
        }
        .titulo {
          font-size: 2em;
          color: #E0E0E0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          margin-bottom: 10px;
          text-align: center;
          margin-top: 0;
        }
        .Formulario label {
          margin-bottom: 5px;
          display: block;
          color: white;
        }
        .Formulario input[type="text"],
        .Formulario input[type="number"],
        .Formulario input[type="submit"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          box-sizing: border-box;
        }
        .boton {
          background-color: rgba(145, 195, 144, 1);
          display: inline-block;
          padding: 10px 20px;
          border: 2px solid green;
          border-radius: 20px;
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          max-width: 180px;
          margin-top: 30px;
        }
        .properties-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .property {
          width: calc(33.33% - 20px);
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 20px;
          box-sizing: border-box;
          margin-bottom: 20px;
          position: relative;
        }
        .property Image {
          max-width: 100%;
          height: auto;
          display: block;
          margin-bottom: 10px;
        }
        .property h2 {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 1.2em;
        }
        .property p {
          margin: 0;
          color: #666;
          font-size: 0.9em;
        }
        .delete-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #ff4d4d;
          color: #fff;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }
        .delete-button:hover {
          background-color: #cc0000;
        }
      `}</style>
    </div>
  );
};

export default Page;
