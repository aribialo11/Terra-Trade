"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(
  "https://ncnjbkwnzmbroxedwour.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ"
);

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("users")
        .select("id, email")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (error || !data) {
        setMessage("Credenciales inválidas.");
      } else {
        setMessage(`Login exitoso: Bienvenido`);
        router.push("/perfil");
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
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit}>
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
            Iniciar sesión
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
        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#20493C",
            fontSize: "0.9rem",
          }}
        >
          ¿No tenés cuenta?{" "}
          <a
            href="/register"
            style={{
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Registrate acá
          </a>
        </p>
      </div>
    </div>
  );
}
