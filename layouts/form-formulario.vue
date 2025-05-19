<template>
    <Navbar />
  
    <!-- Contenedor responsive -->
    <div class="pt-32 px-4 md:px-10 lg:px-32 bg-gray-300 text-center space-y-6">
      <h1 class="text-3xl md:text-4xl font-bold">Formulario</h1>
  
      <p class="text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        Estimado cliente rellene todos los campos y nos pondremos en contacto <br> con usted para darle el mejor precio del 
        mercado en su próximo traslado.
      </p>
    </div>
  
    <contactForm />
  
    <Footer />
  </template>
  
  <script>
  import Navbar from '~/components/navbar.vue'
  import Footer from '~/components/footer.vue'
  
  export default {
    name: 'formFormularioLayout',
  }
  </script>
  