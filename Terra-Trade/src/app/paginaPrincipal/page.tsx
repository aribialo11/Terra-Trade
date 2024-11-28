"use client";

import { useEffect, useState } from "react";
import Web3 from "web3"; // Asegúrate de que usas Web3 correctamente
import { initWeb3, getContract } from "../utils/contract";

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);
  const [contractData, setContractData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null); // Guarda la instancia de Web3

  useEffect(() => {
    const initialize = async () => {
      try {
        // Verifica si MetaMask está disponible
        if (typeof window.ethereum === "undefined") {
          throw new Error("MetaMask no está instalado. Por favor, instálalo.");
        }

        // Inicializa Web3 y el proveedor
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        // Solicita acceso a MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Obtén la cuenta activa
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length === 0) {
          throw new Error("No hay cuentas conectadas a MetaMask.");
        }
        setAccount(accounts[0]);

        // Verifica si estás en la red correcta
        const networkId = await web3Instance.eth.net.getId();
        if (networkId !== 11155111) {
          throw new Error("Por favor, conecta MetaMask a la red de prueba Sepolia.");
        }

        // Obtén e interactúa con el contrato
        const contract = getContract(web3Instance); // Pasa `web3Instance` a tu función
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

  // Manejo de cambios de red
  useEffect(() => {
    const handleNetworkChange = () => {
      window.location.reload();
    };

    window.ethereum?.on("chainChanged", handleNetworkChange);

    return () => {
      window.ethereum?.removeListener("chainChanged", handleNetworkChange);
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
