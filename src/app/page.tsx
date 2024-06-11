import React from 'react';

const Page = () => {
  return (
    <main>
      <header>
        <div className="logo">
            <h1 id="volverpi" className="terratrade">TerraTrade</h1>
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
        <div className="login-btn">
            <button>Login</button>
        </div>
      </header>
      <div className="imagen-y-frase">
        <div className="imagen">
            <img src="../imagenes/logo1.png" alt="Logo" />
        </div>
        <div className="frase">
            <h1>Empieza a invertir <br /> en terrenos <br /> desde la comodidad <br /> de tu casa</h1>
            <div className="comenzar-btn">
                <button id="volverpp" className="volver">Comenzar</button>
            </div>
        </div>
      </div>

      {/* Modal de inicio de sesión */}
      <div id="loginModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <div className="formulario">
            <h1>Inicio de sesión</h1>
            <form action="#" method="GET">
              <div className="username">
                <input type="text" name="DNI" id="DNI" placeholder="Ingrese su nombre de usuario" required />
                <label>Usuario</label>
              </div>
              <div className="contrasena">
                <input type="password" name="Contraseña" id="Contrasenia" placeholder="Ingrese su contraseña" required />
                <label>Contraseña</label>
              </div>
              <input type="button" value="Iniciar" id="volverpp" className="boton" />
              <div className="registro">
                <p>¿No tenés cuenta? <a id="registrate" className="registrate">Registrate acá</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
