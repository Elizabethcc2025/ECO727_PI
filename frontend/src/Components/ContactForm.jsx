export default function ContactForm() {
  return (
    <section id="contacto">
      <h2>Formulario de Contacto</h2>
      <form action="mailto:INSERTAR_CORREO" method="post" encType="text/plain">
        <label>Nombre:</label>
        <input type="text" placeholder="Tu nombre" required />


        <label>Correo:</label>
        <input type="email" placeholder="Tu correo" required />


        <label>Mensaje:</label>
        <textarea placeholder="Escribe tu mensaje"></textarea>


        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
