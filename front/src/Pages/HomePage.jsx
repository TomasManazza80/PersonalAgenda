import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow p-8">
        <section id="home" className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">Bienvenido a Tu Página Profesional</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">Diseño elegante y minimalista para tu negocio. Descubre cómo podemos ayudarte a destacar en el mercado con soluciones personalizadas y efectivas.</p>
          <a href="#contact" className="mt-8 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">Contáctanos</a>
        </section>
        <section id="about" className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Sobre Nosotros</h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">Somos una empresa comprometida con la excelencia y la innovación. Nuestro equipo está dedicado a ofrecer servicios de alta calidad que cumplen con las expectativas de nuestros clientes.</p>
          <Carousel 
            showArrows={true} 
            autoPlay={true} 
            infiniteLoop={true} 
            showThumbs={false} 
            className="my-8"
          >
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Imagen 1" />
              <p className="legend">Descripción de la imagen 1</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Imagen 2" />
              <p className="legend">Descripción de la imagen 2</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Imagen 3" />
              <p className="legend">Descripción de la imagen 3</p>
            </div>
          </Carousel>
        </section>
        <section id="services" className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Servicios</h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">Ofrecemos una amplia gama de servicios diseñados para satisfacer todas tus necesidades. Desde diseño web hasta marketing digital, estamos aquí para ayudarte a alcanzar tus objetivos.</p>
        </section>
        <section id="contact" className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Contacto</h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">¿Tienes alguna pregunta o necesitas más información? No dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en todo lo que necesites.</p>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white text-center py-6 mt-auto">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
