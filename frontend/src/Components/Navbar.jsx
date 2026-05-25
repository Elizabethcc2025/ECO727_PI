import React from 'react';
import logo from '../assets/Logoprincipal.jpg'; 

export default function Navbar() {
  return (
    <header>
      <nav
        className="navbar"
        style={{ display: "flex", alignItems: "center", gap: "15px" }}
      >
        {/* REVISA QUE ESTA ETIQUETA IMG ESTÉ AQUÍ ADENTRO */}
        <img
          src={logo}
          alt="Logotipo Cafetería"
          style={{ height: "40px", width: "auto", marginRight: "10px" }}
        />

        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Sobre Nosotros</a>
        <a href="#mision-vision">Misión y Visión</a>
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Galería</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#tema">Tema</a>
      </nav>
    </header>
  );
}




// Componente: Inicio
export function Inicio() {
  return (
    <section id="inicio">
      <h1>Cafetería Cecytem La Paz</h1>
      <p>El sabor que despierta tus mañanas ☕</p>
      <p>Disfruta de un ambiente acogedor y productos artesanales.</p>
    </section>
  );
}

// Componente: Sobre Nosotros
export function Nosotros() {
  return (
    <section id="nosotros">
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una cafetería local que combina tradición y calidad. Nuestro
        objetivo es ofrecer café preparado con granos seleccionados y un
        espacio ideal para convivir, estudiar o trabajar.
      </p>
    </section>
  );
}

// Componente: Misión y Visión
export function MisionVision() {
  return (
    <section id="mision-vision">
      <h2>Misión y Visión</h2>
      <p>
        <strong>Misión:</strong> Brindar experiencias únicas a través de café de
        calidad y un servicio cálido.
      </p>
      <p>
        <strong>Visión:</strong> Convertirnos en la cafetería preferida de la
        comunidad, reconocida por su ambiente y productos artesanales.
      </p>
    </section>
  );
}

// Componente: Servicios
export function Servicios() {
  return (
    <section id="servicios">
      <h2>Servicios</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Café Americano</td>
            <td>Café negro preparado con granos seleccionados</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Capuchino</td>
            <td>Espresso con leche vaporizada y espuma cremosa</td>
            <td>$40</td>
          </tr>
          <tr>
            <td>Pan dulce</td>
            <td>Variedad de piezas tradicionales mexicanas</td>
            <td>$15</td>
          </tr>
          <tr>
            <td>Sándwich</td>
            <td>Pan integral con jamón, queso y vegetales frescos</td>
            <td>$45</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

// Componente: Galería
export function Galeria() {
  return (
    <section id="galeria">
      <h2>Galería</h2>
      <p>Explora algunos de nuestros productos y momentos especiales:</p>
      <div>
        <p>📸 Café Americano</p>
        <p>📸 Capuchino</p>
        <p>📸 Pan dulce</p>
        <p>📸 Ambiente de la cafetería</p>
      </div>
    </section>
  );
}

// Componente: Testimonios
export function Testimonios() {
  return (
    <section id="testimonios">
      <h2>Testimonios</h2>
      <div>
        <p>“El mejor café de la zona, siempre fresco.” ⭐⭐⭐⭐⭐</p>
        <p>“Ambiente ideal para estudiar o reunirse.”  ⭐⭐⭐⭐</p>
        <p>“Los postres son deliciosos y caseros.”     ⭐⭐⭐⭐⭐</p>
      </div>
    </section>
  );
}

// Componente: Tema
export function Tema() {
  return (
    <section id="tema">
      <h2>Tema</h2>
      <p>
        Nuestra cafetería está inspirada en la cultura mexicana, con decoración
        artesanal, música tradicional y un ambiente que te hará sentir en casa.
      </p>
    </section>
  );
}