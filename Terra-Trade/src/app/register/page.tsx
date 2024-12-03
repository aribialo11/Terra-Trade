"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ncnjbkwnzmbroxedwour.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ"
);

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [telefono, setTelefono] = useState("");
  const [edad, setEdad] = useState<number | "">("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password || !nombreCompleto || !telefono || !edad) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    try {
      const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .single();

      if (existingUser) {
        setMessage("El correo electrónico ya está registrado.");
        return;
      }

      if (fetchError && fetchError.code !== "PGRST116") {
        setMessage("Error al verificar el correo.");
        return;
      }

      const { data, error } = await supabase.from("users").insert([
        { email, password, nombre_completo: nombreCompleto, telefono, edad },
      ]);

      if (error) {
        setMessage("Error al registrar al usuario.");
        console.error(error);
      } else {
        setMessage("Registro exitoso. ¡Bienvenido!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error al conectar con el servidor.");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#20493C",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#20493C" }}>
          Registro
        </h1>
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Nombre completo"
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="tel"
              placeholder="Teléfono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="number"
              placeholder="Edad"
              value={edad}
              onChange={(e) => setEdad(Number(e.target.value) || "")}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px 0",
              backgroundColor: "#20493C",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Registrar
          </button>
        </form>
        {message && (
          <p
            style={{
              marginTop: "15px",
              color: message.includes("exitoso") ? "green" : "red",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}