'use client';


import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';


const token = localStorage.getItem("user");
 

if (!token) {
  alert('No estás autenticado. Inicia sesión para continuar.');
 
}


const PersonalInfoPage: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [formData, setFormData] = useState({
    nombre_completo: '',
    telefono: '',
    edad: '',
  });


  const supabase = useSupabaseClient();


  useEffect(() => {
    const savedUser = localStorage.getItem('user'); // Recuperar datos del usuario desde localStorage
    console.log(savedUser)
    if (!savedUser) {
      alert('No estás autenticado. Inicia sesión para continuar.');
      return;
    }
 
    const user = JSON.parse(savedUser);
    console.log('User Token:', user.token);  // Verifica el token
    setUserData(user);
 
    const fetchUserData = async () => {
      const res = await fetch('/api/user-info', {
        headers: {
            credentials: 'same-origin', // Usar el token de autenticación
        },
      });
     
      if (res.ok) {
        const data = await res.json();
        setFormData({
          nombre_completo: data.nombre_completo || '',
          telefono: data.telefono || '',
          edad: data.edad || '',
        });
      } else {
        alert('Error al obtener los datos del usuario.');
      }
    };
    fetchUserData();
  }, []);
 
 


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();




    const res = await fetch('/api/user-info', {
      method: 'POST',
      body: JSON.stringify({
        ...formData,
        user_id: userData.id, // Enviar el ID del usuario autenticado
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });


    if (res.ok) {
      const data = await res.json();
      alert('Datos guardados exitosamente');
      setUserData(data);
    } else {
      alert('Error al guardar los datos');
    }
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input
            type="text"
            value={formData.nombre_completo}
            onChange={(e) => setFormData({ ...formData, nombre_completo: e.target.value })}
          />
        </label>
        <label>
          Teléfono:
          <input
            type="text"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            value={formData.edad}
            onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
          />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};


export default PersonalInfoPage;



