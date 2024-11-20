// Transferencia page.tsx
import Image from 'next/image';
import Link from 'next/link'; // Importamos Link

export default function Transferencia() {
  return (
    <div style={{ backgroundColor: '#20493C', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "10px" }}>
      {/* Título de la página */}
      <h1 style={{ color: 'white', fontFamily: 'Arial', fontSize: '28px', marginBottom: '20px' }}>Transferencia</h1>

      {/* Contenedor principal blanco */}
      <div style={{
        backgroundColor: 'white',  // Fondo blanco alrededor de toda la sección de transferencia
        borderRadius: '20px',
        padding: '20px',
        width: '90%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Contenedor de información de transferencia */}
        <div style={{
          backgroundColor: '#D9D9D9',
          borderRadius: '20px',
          padding: '20px',
          width: '100%',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Texto de "Disponible" y monto */}
          <p style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>Dinero disponible</p>
          <h2 style={{ fontFamily: 'Arial', fontSize: '32px', fontWeight: 'bold', margin: '10px 0' }}>$ XXXXXXX</h2>

          {/* Iconos de enviar y plata */}
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', cursor: "pointer" }}>
            <div>
              <Image
                src="/imagenes/enviar.png"
                alt="Enviar"
                height={60}
                width={60}
              />
            </div>
            <div>
              <Image
                src="/imagenes/plata.png"
                alt="Plata"
                height={60}
                width={60}
              />
            </div>
          </div>
        </div>

        {/* Círculo verde con el icono QR */}
        <div style={{
          backgroundColor: '#91C390',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
          cursor: "pointer"
        }}>
          <Image
            src="/imagenes/qr.png"
            alt="QR"
            height={50}
            width={50}
          />
        </div>


      </div>
    </div>
  );
}
