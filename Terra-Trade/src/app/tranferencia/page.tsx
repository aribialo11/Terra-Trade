import Image from 'next/image';

export default function Transferencia() {
  return (
    <div style={{ backgroundColor: '#335125', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Encabezado con el título */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white', fontSize: '24px', fontFamily: 'Arial' }}>
        TerraTrade
      </div>

      <h1 style={{ color: 'white', fontFamily: 'Arial' }}>Transferencia</h1>

      {/* Contenedor principal */}
      <div style={{ backgroundColor: '#D9D9D9', borderRadius: '15px', padding: '20px', width: '80%', maxWidth: '600px', textAlign: 'center', position: 'relative' }}>
        {/* Texto de "Disponible" y monto */}
        <p style={{ fontFamily: 'Arial', fontSize: '18px', margin: '10px 0' }}>Disponible</p>
        <h2 style={{ fontFamily: 'Arial', fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>$ XXXXXXX</h2>

        {/* Imágenes: Enviar y Plata */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div>
            <Image src="/public/imagenes/enviar.png" alt="Enviar" width={60} height={60} />
          </div>
          <div>
            <Image src="/public/imagenes/plata.png" alt="Plata" width={60} height={60} />
          </div>
        </div>
      </div>

      {/* Círculo verde con la imagen QR */}
      <div style={{ backgroundColor: '#91C390', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
        <Image src="/public/imagenes/qr.png" alt="QR" width={60} height={60} />
      </div>
    </div>
  );
}
