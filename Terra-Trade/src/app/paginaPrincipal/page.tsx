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
    <div>
      <h1>Bienvenido a TerraTrade</h1>
      <p>Cuenta conectada: {account}</p>
    </div>
  );
};

export default PaginaPrincipal;
