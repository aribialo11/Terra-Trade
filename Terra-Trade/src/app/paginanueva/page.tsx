'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenLoginModal = () => {
    setModalOpen(false);
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div style={{ backgroundColor: '#20493C', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Head>
        <title>pagina nueva</title>
      </Head>
      
      
      
    </div>
  );
};

export default Home;
