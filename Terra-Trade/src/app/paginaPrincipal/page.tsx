
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
  const [account, setAccount] = useState<string>(''); // Especificar el tipo de estado


  useEffect(() => {
    const loadAccount = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          console.warn('No hay cuentas conectadas.');
        }
      } catch (error) {
        console.error('Error al cargar la cuenta:', error);
      }
    };


    loadAccount();
  }, []);


  return (
    <div className=''>
      <h1 style={styles.title}>Bienvenido a TerraTrade</h1>
      <p style={styles.accountText}>Cuenta conectada: {account || 'No hay cuenta conectada'}</p>
    </div>
  );
  
};


export default PaginaPrincipal;
