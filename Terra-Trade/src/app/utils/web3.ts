import Web3 from 'web3';

<<<<<<< HEAD

let web3: Web3;


if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Estamos en el navegador y MetaMask está ejecutándose.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // Estamos en el servidor *O* el usuario no tiene MetaMask instalado.
  const provider = new Web3.providers.HttpProvider(
    'http://localhost:8545' // Si estás usando Hardhat, este es el endpoint predeterminado
  );
  web3 = new Web3(provider);
}


export default web3;



=======
let web3;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' }); // Solicita acceso a MetaMask
} else {
  console.log("MetaMask no está instalado.");
  web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"));
}

export default web3;
>>>>>>> 98797d1dc338fb65b5e3fed32453bbf4b2d33afc
