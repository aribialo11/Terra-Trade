// utils/web3.ts
import Web3 from 'web3';

let web3: Web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Estamos en el navegador y Metamask está disponible.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // Estamos en el servidor o el usuario no tiene Metamask
  const provider = new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'
  );
  web3 = new Web3(provider);
}

export default web3;
