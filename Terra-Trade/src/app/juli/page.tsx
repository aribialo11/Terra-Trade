'use client';

import { useEffect, useState } from "react";
import { initWeb3, getContract } from "../utils/contract";

export default function Home() {
  const [account, setAccount] = useState(null);
  const [contractData, setContractData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        // Inicializar Web3 y el contrato
        await initWeb3();

        // Obtener la cuenta activa de MetaMask
        const web3 = getContract()._provider;
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
          throw new Error("No hay cuentas conectadas a MetaMask.");
        }
        setAccount(accounts[0]);

        // Interactuar con el contrato (ejemplo: llamar a la función `getData`)
        const contract = getContract();
        const data = await contract.methods.getData().call();
        setContractData(data);
      } catch (error) {
        console.error("Error durante la inicialización:", error);
        setError(error.message);
      }
    };

    initialize();
  }, []);

  return (
    <div>
      <h1>Conexión con MetaMask y Sepolia</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <p><strong>Cuenta conectada:</strong> {account || "No conectado"}</p>
      <p><strong>Datos del contrato:</strong> {contractData || "Cargando..."}</p>
    </div>
  );
}
