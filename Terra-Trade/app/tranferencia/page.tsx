import { useEffect, useState } from "react";
import { initWeb3, getContract } from "../utils/contract";

export default function Home() {
  const [account, setAccount] = useState(null);
  const [contractData, setContractData] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        // Inicializa Web3
        await initWeb3();

        // Obtén la cuenta actual
        const web3 = getContract()._provider;
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        // Interactúa con el contrato (ejemplo: llamar a una función `getData`)
        const contract = getContract();
        const data = await contract.methods.getData().call();
        setContractData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    initialize();
  }, []);

  return (
    <div>
      <h1>Conexión con Blockchain</h1>
      <p><strong>Cuenta conectada:</strong> {account || "No conectado"}</p>
      <p><strong>Datos del contrato:</strong> {contractData || "Cargando..."}</p>
    </div>
  );
}
