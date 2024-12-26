import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../index.css';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="text-center py-12 bg-black shadow-md">
        <h1 className="text-6xl font-bold text-white tracking-wide">
          Bienvenido a Tu Agenda Personal
        </h1>
        <p className="text-lg mt-4 text-gray-400">
          Organiza tu vida como nunca antes.
        </p>
        <a
          href="#features"
          className="mt-6 inline-block bg-white text-black font-medium py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
        >
          Comenzar
        </a>
      </header>

      <main className="flex-grow px-8">
        {/* Carousel Section */}
        <section id="features" className="mb-16">
          <h2 className="text-4xl font-semibold text-center text-white mb-6">
            Explora nuestras funcionalidades
          </h2>
          <Carousel
            showArrows
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="my-8 max-w-4xl mx-auto"
          >
            <div>
              <img
                src="https://i.pinimg.com/736x/c2/d0/8a/c2d08aa7f464eb551392222a767487fc.jpg"
                alt="Vista Mensual"
                className="rounded-lg shadow-md"
              />
              <p className="legend bg-black bg-opacity-75 text-white p-3">
                Calendario Mensual
              </p>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/736x/96/33/c5/9633c52981081f5513c4cd6a6b1378f4.jpg"
                alt="Organización de Tareas"
                className="rounded-lg shadow-md"
              />
              <p className="legend bg-black bg-opacity-75 text-white p-3">
                Organización de Tareas
              </p>
            </div>
            <div>
              <img
                src="https://i.pinimg.com/736x/d7/ed/1d/d7ed1d447d3f4fff99099572434babe5.jpg"
                alt="Notas y Recordatorios"
                className="rounded-lg shadow-md"
              />
              <p className="legend bg-black bg-opacity-75 text-white p-3">
                Notas y Recordatorios
              </p>
            </div>
          </Carousel>
        </section>
</main>
        {/* Daily Agenda Section */}
        <section id="agenda" className="mb-16 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">
            Tu Agenda Diaria
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Visualiza y organiza tus tareas diarias de manera simple y eficiente. 
            Personaliza tus horarios y asegúrate de no olvidar ningún detalle importante.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-white text-black font-medium py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
          >
            Crear nueva tarea
          </a>
        </section>

       {/* Testimonials Section */}
<section id="testimonials" className="mb-16 text-center">
  <h2 className="text-4xl font-semibold mb-6 text-white">
    Testimonios
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="bg-black border border-white p-6 rounded-lg shadow-md">
      <p className="text-gray-400 italic">
        "Gracias a esta agenda, he podido organizar mi tiempo de manera efectiva y dedicar más tiempo a lo que realmente importa."
      </p>
      <span className="block mt-4 text-white font-medium">
        - Laura Méndez
      </span>
    </div>
    <div className="bg-black border border-white p-6 rounded-lg shadow-md">
      <p className="text-gray-400 italic">
        "Antes solía olvidar mis reuniones importantes, ahora todo está bajo control con esta herramienta."
      </p>
      <span className="block mt-4 text-white font-medium">
        - Pedro Sánchez
      </span>
    </div>
    <div className="bg-black border border-white p-6 rounded-lg shadow-md">
      <p className="text-gray-400 italic">
        "Es tan intuitiva y fácil de usar. ¡Recomiendo esta agenda a todos mis amigos!"
      </p>
      <span className="block mt-4 text-white font-medium">
        - Sofía Rodríguez
      </span>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-black text-center py-6">
        <p className="text-gray-400">
          &copy; 2024 Tu Agenda Personal. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;
