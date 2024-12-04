"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { NextRequest } from 'next/server';

export default function VisualizarPropiedadesPage() {
  const [propiedades, setPropiedades] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
    <div style={{ marginTop: "100px", padding: "20px", backgroundColor: "#20493C" }}>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "30px", font:"-moz-initial" , fontSize:"40px" }}>
        Propiedades disponibles
      </h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {propiedades.length > 0 ? (
          propiedades.map((propiedad) => (
            <div
              key={propiedad.id}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                width: "30%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              {propiedad.url_de_la_imagen && (
                <img
                  src={propiedad.url_de_la_imagen}
                  alt={`Imagen de ${propiedad.nombre}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
              )}
              <div style={{ textAlign: "left" }}>
                <h2 style={{ color: "#20493C", margin: "10px 0" }}>
                  <strong>Nombre de la propiedad:</strong> {propiedad.nombre}
                </h2>
                <p style={{ color: "#333", margin: "5px 0" }}>
                  <strong>Dirección:</strong> {propiedad.direccion}
                </p>
                <p style={{ color: "#333", margin: "5px 0" }}>
                  <strong>Barrio:</strong> {propiedad.barrio}
                </p>
                <p style={{ color: "#333", margin: "5px 0" }}>
                  <strong>Precio:</strong> ${propiedad.precio}
                </p>
              </div>
              <button
                onClick={() => router.push("/juli")}
                style={{
                  marginTop: "auto",
                  padding: "10px 20px",
                  backgroundColor: "#20493C",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                Comprar
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>No se encontraron propiedades</p>
        )}
      </div>
    </div>
  );
}
