
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="nosotros">
        <h2>Sobre Nosotros</h2>
        <p> Somos una cafetería local que combina tradición y calidad. Nuestro objetivo
    es ofrecer café preparado con granos seleccionados y un espacio ideal para
    convivir, estudiar o trabajar. Creemos en el trato cercano y en crear
    experiencias que hagan sentir a cada visitante como en casa. </p>
        <img className='Logo' src="/assets/INSERTE_AQUI_CARPETA_YARCHIVo" alt="TEXTO" />
      </section>


      <section id="mision-vision">
        <h2>Misión y Visión </h2>
        <p><strong>Misión:</strong> <br /> Brindar experiencias únicas a través de un café de
    calidad y un servicio cálido.</p>
        <p><strong>Visión:</strong> <br /> Convertirnos en la cafetería preferida de la
    comunidad, reconocida por su ambiente y productos artesanales. </p>
      </section>


      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}


export default App;
