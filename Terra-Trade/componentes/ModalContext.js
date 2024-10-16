// componentes/ModalContext.js
'use client'; // Agrega esta línea al principio del archivo

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const value = {
    isModalOpen,
    setModalOpen,
    isLoginModalOpen,
    setLoginModalOpen,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
