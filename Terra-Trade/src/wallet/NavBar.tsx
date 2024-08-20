"use client";

import Link from "next/link";
import Image from 'next/image';
import { formatAddress } from "../../lib/utils";
import { useSDK } from "@metamask/sdk-react";
import { ReactNode, FC } from 'react';

// Definición del componente Button con tipos
const Button: FC<{ children: ReactNode; onClick?: () => void; disabled?: boolean; className?: string }> = ({ children, ...props }) => {
  return (
    <button {...props} className={`p-2 bg-blue-500 text-white rounded-md ${props.className}`}>
      {children}
    </button>
  );
};

// Definición de los componentes Popover, PopoverTrigger y PopoverContent con tipos
const Popover: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative inline-block">{children}</div>
  );
};

const PopoverTrigger: FC<{ children: ReactNode; onClick?: () => void; className?: string }> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

const PopoverContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="absolute mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
      {children}
    </div>
  );
};

export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();
 kj
  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <Popover>
          <PopoverTrigger>
            <Button>{formatAddress(account)}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <button
              onClick={disconnect}
              className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button disabled={connecting} onClick={connect}>
          <img src="/icons/WalletIcon.jpg" className="mr-2 h-4 w-4" alt="Wallet" /> Connect Wallet
        </Button>
      )}
      <button>
        Hola soy boton
      </button>
    </div>
  );
};

export default ConnectWalletButton;
