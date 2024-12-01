"use client";

import { useEffect, useState } from "react";
import { initWeb3, getContract } from "../utils/contract";

export default function TransferPage() {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  // Estado para manejar el formulario de transferencia
  const [transferData, setTransferData] = useState({
    from: "",
    to: "",
    id: 1,
    amount: 1,
    data: "0x",
  });

  useEffect(() => {
    const connectWeb3 = async () => {
      try {
        const web3Instance = await initWeb3();
        console.log("Web3 inicializado:", web3Instance);

        const contractInstance = getContract(web3Instance);
        console.log("Contrato inicializado:", contractInstance);

        const accounts = await web3Instance.eth.getAccounts();
        console.log("Cuentas disponibles:", accounts);

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setTransferData((prev) => ({ ...prev, from: accounts[0] }));
        } else {
          throw new Error("No se encontraron cuentas.");
        }
      } catch (err) {
        console.error("Error en la conexión a Web3:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido.");
        }
      }
    };

    connectWeb3();
  }, []);

  const handleTransfer = async () => {
    try {
      const web3Instance = await initWeb3();

      const { from, to, amount } = transferData;

      // Asegurarse de que la dirección está normalizada
      const normalizedToAddress = web3Instance.utils.toChecksumAddress(to);
      console.log("Dirección normalizada:", normalizedToAddress);

      // Verificar que la dirección sea válida
      if (!web3Instance.utils.isAddress(normalizedToAddress)) {
        throw new Error("La dirección de destino no es válida.");
      }

      // Convertir la cantidad a la representación correcta (ether)
      const adjustedAmount = web3Instance.utils.toWei(amount.toString(), "ether");

      // Enviar la transacción con web3.eth.sendTransaction() para hacer una prueba directa
      const tx = await web3Instance.eth.sendTransaction({
        from,
        to: normalizedToAddress,
        value: adjustedAmount, // Si estás enviando ETH directamente
      });

      console.log("Transacción exitosa:", tx);

      // Asegurarse de que transactionHash sea un string
      setTransactionHash(tx.transactionHash.toString());
    } catch (err) {
      console.error("Error en la transferencia:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error durante la transferencia.");
      }
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Transferencia de Tokens</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <p>
        <strong>Cuenta conectada:</strong> {account || "No conectado"}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTransfer();
        }}
      >
        <label htmlFor="toInput">Dirección destino:</label>
        <input
          type="text"
          id="toInput"
          value={transferData.to}
          onChange={(e) => setTransferData({ ...transferData, to: e.target.value })}
          required
        />

        <label htmlFor="idInput">ID del token:</label>
        <input
          type="number"
          id="idInput"
          value={transferData.id}
          onChange={(e) => setTransferData({ ...transferData, id: Number(e.target.value) })}
          required
        />

        <label htmlFor="amountInput">Cantidad:</label>
        <input
          type="number"
          id="amountInput"
          value={transferData.amount}
          onChange={(e) => setTransferData({ ...transferData, amount: Number(e.target.value) })}
          required
        />

        <label htmlFor="dataInput">Datos (opcional):</label>
        <input
          type="text"
          id="dataInput"
          value={transferData.data}
          onChange={(e) => setTransferData({ ...transferData, data: e.target.value })}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Transferir
        </button>
      </form>
      {transactionHash && (
        <p>
          <strong>Hash de la transacción:</strong> {transactionHash}
        </p>
      )}
    </div>
  );
}
