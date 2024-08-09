'use client';

import React, { useEffect, useState } from 'react';
import web3 from '../utils/web3';

const PaginaPrincipal = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Aquí puedes agregar la lógica para cargar datos o cualquier otro efecto secundario
  }, []);

  return (
    <div>
      <h1>Página Principal</h1>
      {/* Aquí puedes agregar el contenido de la página */}
    </div>
  );
};

export default PaginaPrincipal;
