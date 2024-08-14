"use client";


import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SUPABASE_URL = 'https://ncnjbkwnzmbroxedwour.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ';

type Propiedades = {
  id_propiedades: Number;
  nombre: String;
  telefono: Number;
}
const Page = () => {
  const [Propiedades, setPropiedades] = useState<Propiedades[]>([]);


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
      {Propiedades.map((agencia) => (
        <div key={Propiedades.id_propiedades.toString()}>
          <h2>{Propiedades.nombre}</h2>
          <p>{Propiedades.telefono.toString}</p>
        </div>
      ))}
    </div>
  );};


export default Page;






