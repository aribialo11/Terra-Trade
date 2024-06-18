import { useState, useEffect } from 'react';

const SUPABASE_URL = 'https://ncnjbkwnzmbroxedwour.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbmpia3duem1icm94ZWR3b3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MDU0NTUsImV4cCI6MjAzMjQ4MTQ1NX0.jGuUnZmvbpltBbLfgQzRLFK216C4ff_37aGDJ3V4bvQ';

const Fetch = () => {
  const [agencias, setAgencias] = useState([]);

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
        setAgencias(data);
      });
  }, []);

  return (
    <div>
      {agencias.map((agencia) => (
        <div key={agencia.id_agencias}>
          <h2>{agencia.nombre}</h2>
          <p>{agencia.direccion}</p>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
