'use client';

import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface Property {
  id: number;
  name: string;
  address: string;
  neighborhood: string;
  price: number;
  image: string;
}

const Page: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  const formRef = useRef<HTMLFormElement>(null);

  const addProperty = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const form = formRef.current;

      const newProperty: Property = {
        id: Date.now(),
        name: form["property-name"].value,
        address: form["property-address"].value,
        neighborhood: form["property-neighborhood"].value,
        price: Number(form["property-price"].value),
        image: form["property-image"].value,
      };

      setProperties([...properties, newProperty]);
      form.reset();
    }
  };

  const deleteProperty = (id: number) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (

    <div className="container">
      {/* Formulario para agregar una nueva propiedad */}
      <div className="Formulario">
        <h2 className="titulo">Agregar Nueva Propiedad</h2>
        <form id="Formulario" onSubmit={addProperty} ref={formRef}>
          <label htmlFor="property-name">Nombre:</label><br />
          <input type="text" id="property-name" name="property-name" required /><br />
          <label htmlFor="property-address">Dirección:</label><br />
          <input type="text" id="property-address" name="property-address" required /><br />
          <label htmlFor="property-neighborhood">Barrio:</label><br />
          <input type="text" id="property-neighborhood" name="property-neighborhood" required /><br />
          <label htmlFor="property-price">Precio:</label><br />
          <input type="number" id="property-price" name="property-price" required /><br />
          <label htmlFor="property-image">URL de la imagen:</label><br />
          <input type="text" id="property-image" name="property-image" required /><br />
          <input className="boton" type="submit" value="Agregar Propiedad" />
        </form>
      </div>
      {/* Fin del formulario */}

      {/* Contenedor de propiedades */}
      <div id="properties-container" className="properties-container">
        {properties.map((property) => (
          <div key={property.id} className="property">
            <button className="delete-button" onClick={() => deleteProperty(property.id)}>
              Eliminar
            </button>
            <img src={property.image} alt={property.name} />
            <h2>{property.name}</h2>
            <p>Dirección: {property.address}</p>
            <p>Barrio: {property.neighborhood}</p>
            <p>Precio: ${property.price}</p>
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
          font-size: 2em; /* Aumenta el tamaño de la fuente */
          color: #E0E0E0; /* Cambia el color del texto */
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Agrega una sombra al texto */
          margin-bottom: 10px; /* Añade un margen inferior para separación */
          text-align: center; /* Centra el texto */
          margin-top: 0;
          color: white;
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
        .property img {
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
