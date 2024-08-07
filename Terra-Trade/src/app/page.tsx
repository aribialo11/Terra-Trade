'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import RootLayout from './layout';
import Modal from '../../componentes/modal'; 

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [account, setAccount] = useState('');
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={{ backgroundColor: '#20493C', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Head>
        <title>Home</title>
      </Head>
      <div className="navbar" style={{ position: 'absolute', top: '0', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#20493C' }}>
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          TerraTrade
        </div>
        <div style={{ display: 'flex', gap: '50px', color: 'white' }}>
          <span>Home</span>
          <span>Servicios</span>
          <span>Acerca de nosotros</span>
          <span>Perfil</span>
          <span>Preguntas frecuentes</span>
          
        </div>
      </div>
      <div className="imagen-y-frase" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '80%' }}>
        <div className="imagen" style={{ flex: 1 }}>
          <Image
            src="/imagenes/logo.png"
            alt="Logo"
            width={700}
            height={600}
          />
        </div>
        <div className="frase" style={{ flex: 1, color: 'white', textAlign: 'right' }}>
          <h1 style={{ fontSize: '3rem' }}>Empieza a invertir en <br /> terrenos desde la <br /> comodidad de tu casa</h1>
          <div className="comenzar-btn" style={{ marginTop: '20px' }}>
          <button onClick={handleOpenModal}>Comenzar</button>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;