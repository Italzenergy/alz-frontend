// src/Contacto.jsx
import React from 'react';
import './Contacto.css';


const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto por Área</h2>
      <div className="tarjetas-contacto">
        {/* Tarjeta Educación */}
        <div className="tarjeta">
          <img 
            src={process.env.PUBLIC_URL + "/Imagenes/Andrea.png"}
            alt="Responsable Educación" 
          />
          <h3>Educación</h3>
          <p>¿Tienes dudas sobre diplomados o certificados? Habla directamente con nuestro equipo académico.</p>
          <a 
            href="https://wa.me/573232211614?text=Hola%2C%20quisiera%20más%20información%20sobre%20el%20Programas%20de%20Educación" 
            target="_blank" 
            rel="noopener noreferrer"
            className="boton-contacto"
          >
            Contactar Educación
          </a>
        </div>

        {/* Tarjeta Distribución */}
        <div className="tarjeta">
          <img src={process.env.PUBLIC_URL + "/Imagenes/Victor.png"} alt="Responsable Distribución" />
          <h3>Distribución</h3>
          <p>¿Interesado en nuestros productos o distribución solar? Estamos listos para ayudarte.</p>
          <a 
            href="https://wa.me/573218260480?text=Hola%2C%20quiero%20información%20sobre%20los%20productos%20que%20distrubuyen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="boton-contacto"
          >
            Contactar Distribución
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
