"use client"

import { FormEvent, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://ncnjbkwnzmbroxedwour.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ");


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e:FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    try {
      const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

      if (existingUser) {
        setMessage('El correo electrónico ya está registrado.');
        return;
      }

      if (fetchError && fetchError.code !== 'PGRST116') {
        setMessage('Error al verificar el correo.');
        return;
      }

      const { data, error } = await supabase
        .from('users')
        .insert([{ email, password }]);

      if (error) {
        setMessage('Error al registrar al usuario.');
        console.error(error);
      } else {
        setMessage('Registro exitoso. ¡Bienvenido!');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error al conectar con el servidor.');
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
