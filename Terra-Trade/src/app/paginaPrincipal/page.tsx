'use client';

import React, { useEffect, useState } from 'react';
import Web3 from '../utils/web3';
import styles from '../styles/PaginaPrincipalStyles';

const PaginaPrincipal = () => {
  const [account, setAccount] = useState<string>('');

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const accounts = await Web3.eth.getAccounts();
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
    <div className='' style={{ padding: '50px' }}>
      <h1 style={styles.title}>Bienvenido a TerraTrade</h1>
      <p style={styles.accountText}>Cuenta conectada: {account || 'No hay cuenta conectada'}</p>
    </div>
  );
};

export default PaginaPrincipal;
