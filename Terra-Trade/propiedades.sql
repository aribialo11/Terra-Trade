CREATE TABLE Propiedades (
    id_propiedad INT AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(255) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(20) NOT NULL,
    tipo VARCHAR(50) NOT NULL, 
    tamano INT NOT NULL, 
    precio DECIMAL(10, 2) NOT NULL,
    id_propietario INT,
    id_agencia INT,
    fecha_disponible DATE,
    FOREIGN KEY (id_propietario) REFERENCES Propietarios(id_propietario),
    FOREIGN KEY (id_agencia) REFERENCES Agencias(id_agencia)
);

CREATE TABLE Propietarios (
    id_propietario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Agencias (
    id_agencia INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    email VARCHAR(100) NOT NULL
);

CREATE TABLE Transacciones (
    id_transaccion INT AUTO_INCREMENT PRIMARY KEY,
    id_propiedad INT,
    id_propietario INT,
    tipo_transaccion VARCHAR(50) NOT NULL,
    fecha_transaccion DATE NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_propiedad) REFERENCES Propiedades(id_propiedad),
    FOREIGN KEY (id_propietario) REFERENCES Propietarios(id_propietario)
);
