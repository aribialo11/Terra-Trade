'use client';

import React, { useEffect, useState } from 'react';
import web3 from '../utils/web3';

const PaginaPrincipal = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const loadAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    };

    loadAccount();
  }, []);

  return (
    <div style={styles.container}>
        <h1 style={styles.title}>Bienvenido a TerraTrade</h1>
        <p style={styles.accountText}>
          {account ? `Cuenta conectada: ${account}` : 'Conectando a Metamask...'}
        </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20493C',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '80%',
    maxWidth: '400px',
  },
  title: {
    fontSize: '1.8rem',
    color: '#20493C',
    marginBottom: '20px',
  },
  accountText: {
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default PaginaPrincipal;
