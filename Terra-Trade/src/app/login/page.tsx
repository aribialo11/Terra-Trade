"use client";

import { FormEvent, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient("https://ncnjbkwnzmbroxedwour.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ");


export default function Login() {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, email')
        .eq('email', email)
        .eq('password', password)
        .single();

      if (error || !data) {
        setMessage('Credenciales inválidas.');
      } else {
        setMessage(`Login exitoso: Bienvenido`);
        router.push("/perfil")
      }
    } catch (err) {
      console.error(err);
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}