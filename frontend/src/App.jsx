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
        <p> Texto    </p>
        <img className='Logo' src="/assets/INSERTE_AQUI_CARPETA_YARCHIVo" alt="TEXTO" />
      </section>


      <section id="mision-vision">
        <h2>Misión y Visión </h2>
        <p><strong>Misión:</strong> <br /> TEXTO</p>
        <p><strong>Visión:</strong> <br /> TEXTO </p>
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
