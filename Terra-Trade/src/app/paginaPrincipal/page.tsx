'use client';

import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import styles from '../styles/PaginaPrincipalStyles'; // Suponiendo que los estilos estén en un archivo separado

// Configurar la conexión a Infura utilizando Web3.js
const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`));

// Obtener el balance de una dirección
const getBalance = async (address: string) => { // Especificar el tipo string
  try {
    const balance = await web3.eth.getBalance(address);
    console.log(web3.utils.fromWei(balance, 'ether'));
  } catch (error) {
    console.error('Error al obtener el balance:', error);
  }
};

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
