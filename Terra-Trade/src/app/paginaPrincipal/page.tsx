'use client';

import React, { useEffect, useState } from 'react';
import Web3 from '../utils/web3';

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
    <div className='conteiner'>
     <p style={styles.accountText}>Cuenta conectada: {account || 'No hay cuenta conectada'}</p>
    </div>
  );
};

export default PaginaPrincipal;
