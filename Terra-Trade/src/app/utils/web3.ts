import Web3 from 'web3';

let web3: Web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Estamos en el navegador y MetaMask está ejecutándose.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // Estamos en el servidor *O* el usuario no tiene MetaMask instalado.
  const provider = new Web3.providers.HttpProvider(
    `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`
  );
  web3 = new Web3(provider);
}

export default web3;
