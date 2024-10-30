import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? 'Default Title')}</title>
        <meta name="description" content={String(metadata.description ?? 'Default description')} />
      </head>
      <body> 
        {children}
      <div className="navbar" style={{ position: 'absolute', top: '0', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#20493C' }}>
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }}>
          TerraTrade
        </div>
        
        <div style={{ display: 'flex', gap: '50px', color: 'white', cursor: 'pointer', justifyContent: 'center', flex: 1 }}>
          <span>Home</span>
          <span>Servicios</span>
          <span>Acerca de nosotros</span>
          <span>Perfil</span>
          <span>Preguntas frecuentes</span>
        </div>
        
      </div>
      
      </body>
    </html>
  );
}
