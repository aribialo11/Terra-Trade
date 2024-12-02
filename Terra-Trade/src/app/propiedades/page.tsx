"use client";

import { useEffect, useState } from "react";

export default function VisualizarPropiedadesPage() {
  const [propiedades, setPropiedades] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPropiedades = async () => {
      try {
        const response = await fetch("/api/visualizar", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Error al obtener las propiedades");
        }

        const data = await response.json();
        setPropiedades(data);
      } catch (err) {
        console.error("Error al obtener las propiedades:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido.");
        }
      }
    };

    fetchPropiedades();
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>Propiedades Guardadas</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <table border={1} cellPadding={10} style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Barrio</th>
            <th>Precio</th>
            <th>URL de la Imagen</th>
          </tr>
        </thead>
        <tbody>
          {propiedades.length > 0 ? (
            propiedades.map((propiedad) => (
              <tr key={propiedad.id}>
                <td>{propiedad.nombre}</td>
                <td>{propiedad.direccion}</td>
                <td>{propiedad.barrio}</td>
                <td>${propiedad.precio}</td>
                <td>
                  <a href={propiedad.url_de_la_imagen} target="_blank" rel="noopener noreferrer">
                    Ver Imagen
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No se encontraron propiedades</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
