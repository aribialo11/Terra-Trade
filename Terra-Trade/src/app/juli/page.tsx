"use client";

import { useEffect, useState } from "react";
import Web3 from 'web3'; // Importa Web3 directamente
import { initWeb3, getContract } from "../utils/contract";

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);
  const [contractData, setContractData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initWeb3();

        const web3 = getContract()._provider;
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
          throw new Error("No hay cuentas conectadas a MetaMask.");
        }
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        if (networkId !== 11155111) {
          throw new Error("Por favor, conecta MetaMask a la red de prueba Sepolia.");
        }

        const contract = getContract();
        const data = await contract.methods.getData().call();
        setContractData(data);
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Ocurrió un error desconocido.";
        console.error("Error durante la inicialización:", errorMessage);
        setError(errorMessage);
      }
    };

    initialize();
  }, []);

  useEffect(() => {
    const handleNetworkChange = () => {
      window.location.reload();
    };

    window.ethereum.on("chainChanged", handleNetworkChange);

    return () => {
      window.ethereum.removeListener("chainChanged", handleNetworkChange);
    };
  }, []);

  return (
    <div>
      <h1>Conexión con MetaMask y Sepolia</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <p>
        <strong>Cuenta conectada:</strong> {account || "No conectado"}
      </p>
      <p>
        <strong>Datos del contrato:</strong> {contractData || "Cargando..."}
      </p>
    </div>
  );
}
