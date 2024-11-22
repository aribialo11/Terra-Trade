import Image from 'next/image';
import { useEffect, useState } from 'react';
import Web3 from '../utils/web3';

export default function Transferencia() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState('0');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const accounts = await Web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          const balanceInWei = await Web3.eth.getBalance(accounts[0]);
          setBalance(Web3.utils.fromWei(balanceInWei, 'ether'));
        } else {
          console.warn('No hay cuentas conectadas.');
        }
      } catch (error) {
        console.error('Error al cargar la cuenta:', error);
      }
    };

    loadAccount();
  }, []);

  const sendTransaction = async () => {
    if (!account) {
      alert('Conecta tu billetera primero');
      return;
    }
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Ingresa un monto válido');
      return;
    }

    const valueInWei = Web3.utils.toWei(amount, 'ether');
    try {
      await Web3.eth.sendTransaction({
        from: account,
        to: 'DIRECCION_DESTINO', // Reemplaza con la dirección destino
        value: valueInWei,
      });
      alert('Transacción enviada');
    } catch (error) {
      console.error('Error en la transacción', error);
      alert('Error en la transacción');
    }
  };

  return (
    <div style={{ backgroundColor: '#20493C', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
      <h1 style={{ color: 'white', fontFamily: 'Arial', fontSize: '28px', marginBottom: '20px' }}>Transferencia</h1>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '20px',
        width: '90%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: '#D9D9D9',
          borderRadius: '20px',
          padding: '20px',
          width: '100%',
          textAlign: 'center',
          position: 'relative'
        }}>
          <p style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>Dinero disponible</p>
          <h2 style={{ fontFamily: 'Arial', fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>{balance} ETH</h2>
          <p style={{ fontFamily: 'Arial', fontSize: '16px', fontWeight: 'bold', margin: '10px 0' }}>Cuenta conectada: {account || 'No hay cuenta conectada'}</p>

          <input
            type="text"
            placeholder="Monto en ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '80%', padding: '10px', margin: '10px 0', borderRadius: '10px', textAlign: 'center' }}
          />
          <button onClick={sendTransaction} style={{ padding: '10px 20px', borderRadius: '10px', backgroundColor: '#20493C', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Enviar</button>

<<<<<<< HEAD
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', cursor: 'pointer' }}>
            <div>
              <Image src="/imagenes/enviar.png" alt="Enviar" height={60} width={60} />
            </div>
            <div>
              <Image src
=======

      </div>
    </div>
  );
}
>>>>>>> 8365a5b06a3cdd4a7d3b4a03d19ca06b0507b913
