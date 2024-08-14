import Web3 from 'web3';

let web3;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' }); // Solicita acceso a MetaMask
} else {
  console.log("MetaMask no está instalado.");
  web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"));
}

export default web3;
