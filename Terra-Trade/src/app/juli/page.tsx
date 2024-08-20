'use client';

import React, { useEffect } from 'react';
import web3 from '../utils/web3'; 

const PaginaPrincipal = () => {
  useEffect(() => {
    const checkInfuraConnection = async () => {
      try {
        const blockNumber = await web3.eth.getBlockNumber();
        console.log('Conexión exitosa. El número del bloque más reciente es:', blockNumber);
      } catch (error) {
        console.error('Error al conectar con Infura:', error);
      }
    };

    checkInfuraConnection();
  }, []); 

  return (
    <div style={{ marginTop: '200px' }}>
      <h1>Verificación de Conexión a Infura</h1>
      <p>Revisa la consola para ver el resultado de la conexión.</p>
    </div>
  );  
};

export default PaginaPrincipal;
