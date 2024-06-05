import { useState, useEffect } from 'react';

const Fetch = () => {
  const [agencias, setAgencias] = useState([]);
  
  useEffect(() => {
    fetch('  ')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAgencias(data);
      });
  }, []);

  return (
    <div>
      {agencias.map((agencia) => (
        <div key={agencia.id}>
          <h2>{agencia.name}</h2>
          <p>{agencia.email}</p>
        </div>
      ))}
    </div>
  );
};
};
export default Fetch;

export default Page;


  return (
    <main>
      <header>
        <div class="logo">
            <h1 id="volverpi" class="terratrade">TerraTrade</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Acerca de nosotros</a></li>
                <li><a href="#">Perfil</a></li>
                <li><a href="#">Preguntas frecuentes</a></li>
            </ul>
        </nav>
        <div class="login-btn">
            <button>Login</button>
        </div>
    </header>
    <div class="imagen-y-frase">
        <div class="imagen">
            <img src="../imagenes/logo1.png" alt="Logo">
        </div>
        <div class="frase">
            <h1>Empieza a invertir <br> en terrenos <br> desde la comodidad <br> de tu casa</h1>
            <div class="comenzar-btn">
                <button id="volverpp" class="volver">Comenzar</button>
            </div>
        </div>
    </div>

    <!-- Modal de inicio de sesión -->
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="formulario">
                <h1>Inicio de sesión</h1>
                <form action="#" method="GET">
                    <div class="username">
                        <input type="text" name="DNI" id="DNI" placeholder="Ingrese su nombre de usuario" required>
                        <label>Usuario</label>
                    </div>
                    <div class="contrasena">
                        <input type="password" name="Contraseña" id="Contrasenia" placeholder="Ingrese su contraseña" required>
                        <label>Contraseña</label>
                    </div>
                    <input type="button" value="Iniciar" id="volverpp" class="boton">
                    <div class="registro">
                        <p>¿No tenés cuenta? <a id="registrate" class="registrate">Registrate acá</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </main>
  );
}
