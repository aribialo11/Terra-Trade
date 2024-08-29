'use client';

import React, { useEffect, useState } from 'react';

const SUPABASE_URL = 'https://ncnjbkwnzmbroxedwour.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ';

type Propiedades = {
  id: number;
  nombre: string;
  telefono: number;
};

const Page = () => {
  const [propiedades, setPropiedades] = useState<Propiedades[]>([]);
  
  const fetchProperties = async () => {
    const response = await fetch('/api/properties');
    const data = await response.json();
    console.log(data); // Verifica la estructura aquí
    setPropiedades(data); // Asegúrate de que `data` tiene el formato esperado
  };
  

  useEffect(() => {
    fetch(`${SUPABASE_URL}/rest/v1/agencias`, {
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPropiedades(data);
      });
  }, []);

  return (
    <div>
      {propiedades.map((propiedades) => (
        <div key={propiedades.id.toString()}>
          <h2>{propiedades.nombre}</h2>
          <p>{propiedades.telefono.toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
