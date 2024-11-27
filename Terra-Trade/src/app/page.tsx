'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: '#20493C',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
      }}
    >
      <Head>
        <title>Home</title>
      </Head>

      <div
        className="imagen-y-frase"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
        }}
      >
        <div className="imagen" style={{ flex: 1 }}>
          <Image
            src="/imagenes/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="frase"
          style={{ flex: 1, color: 'white', textAlign: 'right' }}
        >
          <h1 style={{ fontSize: '3rem' }}>
            Empieza a invertir en <br /> terrenos desde la <br /> comodidad de
            tu casa
          </h1>
          <div className="comenzar-btn" style={{ marginTop: '20px' }}>
            <button
              style={{
                backgroundColor: '#9DBFA4',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={handleOpenModal}
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '20px', color: '#20493C' }}>
              ¿Qué deseas hacer?
            </h2>
            <div style={{ marginBottom: '10px' }}>
              <Link href="/login">
                <button
                  style={{
                    backgroundColor: '#9DBFA4',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Iniciar sesión
                </button>
              </Link>
            </div>
            <div>
              <Link href="/register">
                <button
                  style={{
                    backgroundColor: '#9DBFA4',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Registro
                </button>
              </Link>
            </div>
            <button
              style={{
                marginTop: '20px',
                backgroundColor: '#20493C',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
