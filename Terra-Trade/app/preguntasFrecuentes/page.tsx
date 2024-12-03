'use client';

import React, { useState } from 'react';
import Head from 'next/head';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleToggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: '¿Cómo podría empezar a invertir en un terreno?',
      answer: 'Puedes comenzar registrándote en nuestra plataforma, seleccionando la opción de inversión, y eligiendo el terreno que más te interese.',
    },
    {
      question: '¿Cuáles son los requisitos para invertir?',
      answer: 'Los requisitos son ser mayor de edad, contar con un documento de identidad válido, y un método de pago aceptado.',
    },
    {
      question: '¿Qué beneficios ofrece invertir en terrenos?',
      answer: 'Invertir en terrenos permite diversificar tu portafolio, acceder a un activo de bajo riesgo, y obtener retornos a largo plazo.',
    },
    {
      question: '¿Cómo puedo vender mi terreno?',
      answer: 'Puedes vender tu terreno a través de nuestra plataforma usando la opción de venta, donde podrás listar tu terreno para que otros inversores lo compren.',
    },
    {
      question: '¿Qué soporte ofrecen en caso de problemas?',
      answer: 'Ofrecemos soporte 24/7 a través de correo electrónico y chat en vivo, para ayudarte con cualquier inconveniente que enfrentes.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#20493C', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <Head>
        <title>Preguntas Frecuentes</title>
      </Head>

      <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '30px' , marginTop:"100px" }}>Preguntas Frecuentes</h1>

      <div style={{ width: '80%', maxWidth: '800px' }}>
        {questions.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <button 
              onClick={() => handleToggleQuestion(index)} 
              style={{ 
                backgroundColor: '#9DBFA4', 
                color: 'white', 
                padding: '15px 20px', 
                width: '100%', 
                textAlign: 'left', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                fontSize: '1.2rem' 
              }}>
              {item.question}
            </button>
            {activeQuestion === index && (
              <div style={{ backgroundColor: '#9DBFA4', padding: '15px', marginTop: '10px', borderRadius: '5px', color: 'white' }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
