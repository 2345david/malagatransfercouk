<template>
    <!-- Sección nueva: Transporte desde/hasta el Aeropuerto -->
    <section class="bg-gray-100 py-16 px-6">
      <div class="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-8">
        
        <!-- Texto -->
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Transporte desde/hasta el Aeropuerto de Málaga
          </h2>
          <p class="text-gray-700 mb-4">
            Bienvenidos a <strong>Prestigue Málaga Transfer</strong>. Somos una empresa de transporte especializada en 
            <strong>Transfer</strong> y transporte de personas. Tenemos amplia experiencia en el sector turístico, lo que 
            nos permite mejorar nuestro servicio día a día para satisfacer a nuestros clientes.
          </p>
          <NuxtLink to="/sobreNosotros">
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Más sobre nosotros
            </button>
          </NuxtLink>
        </div>
  
        <!-- Imágenes -->
        <div class="md:w-1/2 flex gap-4">
          <img class="w-72 h-48 rounded-lg shadow-lg" src="/public/fotoCoche.jpg" alt="Coche de lujo" />
          <img class="w-72 h-48 rounded-lg shadow-lg" src="/public/mercedesFoto.jpg" alt="Mercedes Benz" />
        </div>
  
      </div>
    </section>
  
    <!-- Sección adicional: Precio Todo Incluido y Servicios -->
  <section class="py-16 px-6 bg-gray-200">
    <div class="container mx-auto text-center mb-12">
      <div class="infoPrecio mb-8">
        <div class="todoIncluido">
          <h1 class="text-3xl font-bold mb-4">Precio Todo Incluido</h1>
          <span>Ofrecemos un <strong>amplio servicio</strong>, como por ejemplo los lugares más famosos de Andalucía: Málaga, Marbella, Puerto Banús, Ronda, Jerez, Córdoba, Granada, Sevilla ...</span>
          <br />
          <span>Todos nuestros servicios cuentan con un <strong>precio todo incluido</strong>: Peajes, agua, wifi, etc...</span>
        </div>
      </div>

      <!-- Servicios -->
      <div class="cajas grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <img class="w-full h-48 object-cover rounded-md mb-4" src="/public/coche1.jpg" />
          <h3 class="text-xl font-bold mb-2">Transfer desde/hasta el Aeropuerto de Málaga</h3>
          <p>Realizamos Transfers desde el Aeropuerto de Málaga hasta cualquier destino y viceversa.</p>
        </div>
        <div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <img class="w-full h-48 object-cover rounded-md mb-4" src="/public/coche2.jpg" />
          <h3 class="text-xl font-bold mb-2">Transfer desde la Estación de Tren</h3>
          <p>Ponemos a tu disposición servicios de transfers desde la Estación de Tren de Málaga hasta cualquier destino y viceversa.</p>
        </div>
        <div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <img class="w-full h-48 object-cover rounded-md mb-4" src="/public/coche3.jpg" />
          <h3 class="text-xl font-bold mb-2">Alquiler de Coche con Conductor</h3>
          <p>Ofrecemos nuestros vehículos con conductor a disposición por horas para fiestas, cenas, bodas o cualquier ocasión.</p>
        </div>
        <div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <img class="w-full h-48 object-cover rounded-md mb-4" src="/public/coche4.jpg" />
          <h3 class="text-xl font-bold mb-2">Visitas Turísticas</h3>
          <p>Contamos con visitas a los puntos de mayor interés turístico de Andalucía como Marbella, Granada, Córdoba o Sevilla.</p>
        </div>
        <div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <img class="w-full h-48 object-cover rounded-md mb-4" src="/public/coche5.jpeg" />
          <h3 class="text-xl font-bold mb-2">Bodas</h3>
          <p>Realizamos servicios de transporte para Bodas. Para que puedas disfrutar de la celebración sin preocuparte por el coche.</p>
        </div>
        <div class="subcaja bg-white p-6 rounded-lg shadow-lg hover:transform hover:translate-y-4 hover:shadow-2xl transition-all duration-300 ease-in-out">
          <img class="w-full h-48 object-cover rounded-md mb-4" src="/public/coche6.jpg" />
          <h3 class="text-xl font-bold mb-2">Negocios</h3>
          <p>Ofrecemos servicios de conductor para Negocios con vehículos de alta gama para que llegues a tiempo a reuniones, citas y eventos.</p>
        </div>
      </div>
    </div>
  </section>
  
   <!-- Sección: ¿Por qué elegirnos? -->
  <section class="bg-gray-400 py-16 px-6">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-semibold mb-4">¿Por qué elegirnos?</h2>
      <p class="text-lg text-white mb-8">Te ofrecemos las mejores ventajas</p>

      <!-- Servicios/Preferencias -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
          <img class="w-16 h-16 mx-auto mb-4" src="/public/money.png" alt="Precios todo incluido" />
          <h3 class="text-xl font-bold mb-3">Precios todo incluido</h3>
          <p class="text-gray-700">Sin sorpresas, todo lo que necesitas está incluido en el precio.</p>
        </div>
        <div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
          <img class="w-16 h-16 mx-auto mb-4" src="/public/driver.png" alt="Conductores con idiomas" />
          <h3 class="text-xl font-bold mb-3">Conductores con idiomas</h3>
          <p class="text-gray-700">Nuestros conductores hablan varios idiomas para tu comodidad.</p>
        </div>
        <div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
          <img class="w-16 h-16 mx-auto mb-4" src="/public/wifi.png" alt="Wifi" />
          <h3 class="text-xl font-bold mb-3">Wifi</h3>
          <p class="text-gray-700">Disfruta de Wifi gratis durante el trayecto.</p>
        </div>
        <div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
          <img class="w-16 h-16 mx-auto mb-4" src="/public/suit.png" alt="Servicios VIP" />
          <h3 class="text-xl font-bold mb-3">Servicios VIP</h3>
          <p class="text-gray-700">Te ofrecemos un servicio de alta gama y atención personalizada.</p>
        </div>
        <div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
          <img class="w-16 h-16 mx-auto mb-4" src="/public/caricon.png" alt="Limpieza de coche" />
          <h3 class="text-xl font-bold mb-3">Limpieza de coche</h3>
          <p class="text-gray-700">Cada servicio incluye la limpieza del vehículo.</p>
        </div>
        <div class="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
          <img class="w-16 h-16 mx-auto mb-4" src="/public/water.png" alt="Botella de agua" />
          <h3 class="text-xl font-bold mb-3">Botella de agua</h3>
          <p class="text-gray-700">Te ofrecemos una botella de agua durante el viaje.</p>
        </div>
      </div>
    </div>
  </section>

   <!-- Sección de dudas -->
   <section class="py-16 px-6 bg-gray-100">
    <div class="container mx-auto text-center mb-12">
      <div class="textInformation mb-8">
        <h1 class="text-3xl font-bold text-gray-900">¿Tienes dudas?</h1>
      </div>

      <div class="explicacion">
        <p class="text-lg text-gray-700 mb-6">
          Si te has quedado con alguna duda sobre nosotros puedes contactarnos pinchando<br> el siguiente botón donde te redirigirá al correo
          electrónico,<br> o si no, visita el apartado de formularios y desde ahí haz tu reserva o contáctanos con tus datos <br> y hablaremos
          con usted lo antes posible, muchas gracias.
        </p>
        <a href="mailto:ramosgarciad62@gmail.com" class="email-button">
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Enviar Correo
          </button>
        </a>
      </div>
    </div>
  </section>

  </template>
  
  <script>
  export default {
    name: 'Description'
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para esta sección */
  .subcaja img {
    height: 200px; /* Ajusta el tamaño de las imágenes */
    object-fit: cover;
  }
  .subcaja {
  transition: all 0.3s ease-in-out; /* Asegura la animación suave */
}

.subcaja:hover {
  transform: translateY(-10px); /* Desplazamiento hacia arriba */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Sombra más prominente */
}

.email-button button {
  transition: background-color 0.3s ease;
}

.email-button button:hover {
  background-color: #2563eb; /* Cambia el color de fondo cuando el botón es hover */
}
  </style>
  
  