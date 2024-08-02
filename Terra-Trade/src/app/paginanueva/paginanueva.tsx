'use client';

import React, { useEffect, useState } from 'react';
import web3 from '../utils/web3';

const PaginaPrincipal = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error loading account: ", error);
      }
    };

    loadAccount();
  }, []);

  return (
    <div style={{ backgroundColor: '#20493C', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div className="navbar" style={{ position: 'absolute', top: '0', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#20493C' }}>
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }}>
          TerraTrade
        </div>
        <div style={{ display: 'flex', gap: '20px', color: 'white', cursor: 'pointer' }}>
          <span>Home</span>
          <span>Servicios</span>
          <span>Acerca de nosotros</span>
          <span>Perfil</span>
          <span>Preguntas frecuentes</span>
          <button style={{ backgroundColor: '#9DBFA4', border: 'none', padding: '10px 20px', borderRadius: '5px', color: 'white' }}>Log-in</button>
        </div>
      </div>
      <div style={{ color: 'white', marginTop: '100px' }}>
        {account ? <p>Cuenta: {account}</p> : <p>Cargando cuenta...</p>}
      </div>
    </div>
  );
};

export default PaginaPrincipal;
