import React, { useState } from 'react';

function WelcomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  const handleButtonClick = () => {
    // Hacer scroll hacia abajo de la ventana, 500 píxeles
    window.scrollBy({
      top: 500, // Número de píxeles que quieres que baje al hacer clic
      left: 0,
      behavior: 'smooth', // Esto hace que el scroll sea suave
    });
  };

  const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#e8f5e9',
        backgroundImage: 'url(/fondo.jpg)', // Cambia la ruta a tu imagen
        backgroundSize: 'cover', // Cubre todo el contenedor
        backgroundPosition: 'center', // Centra la imagen
        minHeight: '100vh',
        color: 'white', // color texto
        height: '100vh',
    },
    header: {
      fontSize: '48px',
      color: '#333',
    },
    text: {
      fontSize: '20px',
      color: '#666',
      margin: '20px 0',
    },
    buttonPrincipal: {
      padding: '17px 40px',
      borderRadius: '50px',
      border: '0',
      backgroundColor: isHovered || isActive ? '#6c3c11' : '#2e7d32',
      boxShadow: isHovered
        ? '#c7612e 0px 7px 29px 0px'
        : 'black 0px 0px 8px',
      letterSpacing: isHovered || isActive ? '3px' : '1.5px',
      textTransform: 'uppercase',
      fontSize: '15px',
      transition: isActive ? '100ms' : 'all 0.5s ease',
      color: isHovered || isActive ? '#fff' : '#000',
      transform: isActive ? 'translateY(10px)' : 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Bienvenido a HarvestMate</h1>
      <p style={styles.text}>
        HarvestMate es una herramienta diseñada para ayudarte a evaluar las condiciones de tu terreno. Conoce si las condiciones del suelo, el clima y otros factores son ideales para sembrar. Nuestro objetivo es brindarte información útil para mejorar tus decisiones agrícolas.
      </p>
      <button
        style={styles.buttonPrincipal}
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Desplázate hacia abajo
      </button>
    </div>
  );
}

export default WelcomePage;
