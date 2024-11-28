'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

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

      const newPropiedad = {
        id: Date.now(),
        nombre: form["propiedad-nombre"].value,
        direccion: form["propiedad-direccion"].value,
        barrio: form["propiedad-barrio"].value,
        precio: Number(form["propiedad-precio"].value),
        url_de_la_imagen: form["propiedad-imagen"].value,
      };

      setPropiedades([...propiedades, newPropiedad]);
      form.reset();
    }
  };

  const deleteProperty = async (id: number) => {
    setPropiedades(propiedades.filter((propiedad) => propiedad.id !== id));
  };

  return (
    <div className="container">
      {/* Formulario */}
      <div className="Formulario">
        <h2 className="titulo">Agregar Nueva Propiedad</h2>
        <form id="Formulario" onSubmit={addProperty} ref={formRef}>
          <label htmlFor="propiedad-nombre">Nombre:</label>
          <input type="text" id="propiedad-nombre" name="propiedad-nombre" required />
          <label htmlFor="propiedad-direccion">Dirección:</label>
          <input type="text" id="propiedad-direccion" name="propiedad-direccion" required />
          <label htmlFor="propiedad-barrio">Barrio:</label>
          <input type="text" id="propiedad-barrio" name="propiedad-barrio" required />
          <label htmlFor="propiedad-precio">Precio:</label>
          <input type="number" id="propiedad-precio" name="propiedad-precio" required />
          <label htmlFor="propiedad-imagen">URL de la imagen:</label>
          <input type="text" id="propiedad-imagen" name="propiedad-imagen" required />
          <input className="boton" type="submit" value="Agregar Propiedad" />
        </form>
      </div>

      {/* Contenedor de propiedades */}
      <div id="properties-container" className="properties-container">
        {propiedades.map((propiedad) => (
          <div key={propiedad.id} className="property">
            <button className="delete-button" onClick={() => deleteProperty(propiedad.id)}>
              Eliminar
            </button>
            <Image
              src={propiedad.url_de_la_imagen}
              alt={`Imagen de ${propiedad.nombre}`}
              width={16} // Relación de aspecto (proporcional)
              height={9}
              layout="responsive" 
            /> 
            <h2>{propiedad.nombre}</h2>
            <p>Dirección: {propiedad.direccion}</p>
            <p>Barrio: {propiedad.barrio}</p>
            <p>Precio: ${propiedad.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
