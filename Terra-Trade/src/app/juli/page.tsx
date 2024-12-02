"use client";

import { useEffect, useState } from "react";
import { initWeb3, getContract } from "../utils/contract";

export default function TransferPage() {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

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
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setTransferData((prev) => ({ ...prev, from: accounts[0] }));
        } else {
          throw new Error("No se encontraron cuentas.");
        }
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Ocurrió un error desconocido.");
      }
    };

    connectWeb3();
  }, []);

  const handleTransfer = async () => {
    try {
      const web3Instance = await initWeb3();
      const { from, to, amount } = transferData;
      const normalizedToAddress = web3Instance.utils.toChecksumAddress(to);

      if (!web3Instance.utils.isAddress(normalizedToAddress)) {
        throw new Error("La dirección de destino no es válida.");
      }

      const adjustedAmount = web3Instance.utils.toWei(amount.toString(), "ether");

      const tx = await web3Instance.eth.sendTransaction({
        from,
        to: normalizedToAddress,
        value: adjustedAmount,
      });

      setTransactionHash(tx.transactionHash.toString());
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Ocurrió un error durante la transferencia.");
    }
  };

  return (
    <div
      style={{
        marginTop: "100px",
        padding: "20px",
        backgroundColor: "#20493C",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "30px", fontSize:"40px", font:"-moz-initial" }}>
        Transferencia de Tokens
      </h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <p style={{ color: "#20493C", marginBottom: "20px" }}>
          <strong>Cuenta conectada:</strong> {account || "No conectado"}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleTransfer();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <label htmlFor="toInput" style={{ color: "#20493C", fontWeight: "bold" }}>
            Dirección destino:
          </label>
          <input
            type="text"
            id="toInput"
            value={transferData.to}
            onChange={(e) => setTransferData({ ...transferData, to: e.target.value })}
            required
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <label htmlFor="idInput" style={{ color: "#20493C", fontWeight: "bold" }}>
            ID del token:
          </label>
          <input
            type="number"
            id="idInput"
            value={transferData.id}
            onChange={(e) => setTransferData({ ...transferData, id: Number(e.target.value) })}
            required
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <label htmlFor="amountInput" style={{ color: "#20493C", fontWeight: "bold" }}>
            Cantidad:
          </label>
          <input
            type="number"
            id="amountInput"
            value={transferData.amount}
            onChange={(e) => setTransferData({ ...transferData, amount: Number(e.target.value) })}
            required
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <label htmlFor="dataInput" style={{ color: "#20493C", fontWeight: "bold" }}>
            Datos (opcional):
          </label>
          <input
            type="text"
            id="dataInput"
            value={transferData.data}
            onChange={(e) => setTransferData({ ...transferData, data: e.target.value })}
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#20493C",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Transferir
          </button>
        </form>
        {transactionHash && (
          <p style={{ color: "#20493C", marginTop: "20px" }}>
            <strong>Hash de la transacción:</strong> {transactionHash}
          </p>
        )}
      </div>
    </div>
  );
}
