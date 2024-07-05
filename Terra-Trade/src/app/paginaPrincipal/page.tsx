import React from 'react';

export const PaginaInicio = () => {
    return (
        <>
            <div className="imagen-y-frase">
                <div className="imagen">
                    <img src="/imagenes/logo.png" alt="Logo" />
                </div>
                <div className="frase">
                    <h1>Empieza a invertir <br /> en terrenos <br /> desde la comodidad <br /> de tu casa</h1>
                    <div className="comenzar-btn">
                        <button>Comenzar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

