<template>
  <Navbar />

  <!-- Botón flotante para abrir el panel -->
  <button @click="mostrarPanel = !mostrarPanel"
    class="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-blue-700 transition md:hidden">
    ☰
  </button>

  <!-- Panel lateral -->
  <transition name="slide">
    <div v-if="mostrarPanel" class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col items-center z-50 md:hidden">
      <button @click="mostrarPanel = false" class="self-end text-gray-600 text-2xl">✖</button>

      <div class="mt-6 space-y-4">
        <div class="flex items-center space-x-2">
          <img width="20px" src="/phone.svg" alt="Teléfono">
          <p class="text-gray-700">+34 639 622 226</p>
        </div>

        <div class="flex items-center space-x-2">
          <img width="20px" src="/email.svg" alt="Correo">
          <p class="text-gray-700">juanramos648@gmail.com</p>
        </div>

        <div class="flex justify-center space-x-4 mt-4">
          <a href="#" target="_blank"><img width="40px" src="/facebook.png" alt="Facebook"></a>
          <a href="https://www.instagram.com/davurg_06/" target="_blank"><img width="35px" src="/instagram.png" alt="Instagram"></a>
          <a href="https://wa.me/679219416" target="_blank"><img width="40px" src="/whatsapjpg.png" alt="WhatsApp"></a>
        </div>
      </div>
    </div>
  </transition>

  
  <main class="bg-gray-200 py-40 px-6">
    <div class="colorsubGlobal">
    
      <div class="description2 mb-12 flex flex-col md:flex-row justify-between items-center">
       
        <div class="text2 mb-6 md:mb-0 md:w-2/3">
          <h2 class="text-3xl font-semibold mb-4">Especialistas en Transfer Málaga</h2>
          <p class="text-lg text-gray-700">
            Somos una empresa especializada en la realización de servicios exclusivos de transporte.
            Contamos con una amplia gama de servicios todos realizados por profesionales altamente cualificados
            para garantizar la satisfacción y la máxima calidad.
            <br><br>
            Disponemos de una flota de vehículos compuesta por <strong>vehículos de alta gama</strong> y de último modelo.
            Para la realización de todos nuestros servicios nos apoyamos en una filosofía firme basada en tres
            aspectos principales: <strong>calidad, puntualidad y profesionalidad</strong>. Todo esto nos permite seguir creciendo
            día a día, mejorar y aumentar nuestra cartera de clientes.
          </p>
        </div>

        
        <div class="boxImg flex flex-col md:flex-row justify-center space-x-4">
          <img src="/public/mercedesCasa.jpg" class="w-full md:w-1/2 rounded-lg mb-4 md:mb-0" />
          <img src="/public/mercedesDentro.jpg" class="w-full md:w-1/2 rounded-lg" />
        </div>
      </div>
    </div>
  </main>

  
  <div class="flex flex-col justify-center items-center py-8 bg-gray-200">
    <h1 class="titulito text-2xl font-bold mb-6">Tabla de precios</h1>
    <p>Estamos en construccion de la tabla de precios, mientras tanto contactar con nosotros, por los medios proporcionados por la web para daros un precio final</p>
    <img src="/public/obra.gif" alt="Descripción del gif" class="w-48 h-auto rounded-lg" />
    
  </div>

  <Footer />
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Footer from '~/components/footer.vue';

export default {
  name: 'forNosotrosLayout',
  data() {
    return {
      mostrarPanel: false,
    };
  }
}
</script>
