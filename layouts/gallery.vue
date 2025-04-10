<template>
  <Navbar />

  <div class="flex flex-col items-center pt-[100px] justify-center p-5 bg-gray-200">
    <h1 class="flex justify-center pt-[150px] pb-8 text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg animate-fade-in p-4 text-center">
      Carrusel de Imágenes
    </h1>

    <div class="relative w-full max-w-full md:max-w-4xl h-[350px] sm:h-[500px] md:h-[500px] lg:h-[700px] xl:h-[600px] overflow-hidden rounded-lg border-2 border-gray-600 shadow-xl bg-white">
      <!-- Contenedor de las imágenes -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="carouselStyle"
        style="width: 800%" <!-- Este sigue siendo el 100% por cada imagen, ajustaremos los valores de la pantalla -->
      
        <!-- Cada imagen ocupa 1/8 del total (12.5%), pero se ajusta a la pantalla de manera responsiva -->
        <img src="/public/mercedes1.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
        <img src="/public/mercedes2.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
        <img src="/public/mercedes3.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
        <img src="/public/mercedes4.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
        <img src="/public/mercedes5.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
        <img src="/public/mercedes6.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
        <img src="/public/mercedes7.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
        <img src="/public/mercedes8.jpg" class="flex-shrink-0 w-[13.5%] sm:w-[12.5%] md:w-[12.5%] h-full object-cover" />
      </div>

      <!-- Botón izquierdo -->
      <button
        @click="moveLeft"
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-70 focus:outline-none md:left-6"
      >
        &#10094;
      </button>

      <!-- Botón derecho -->
      <button
        @click="moveRight"
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-70 focus:outline-none md:right-6"
      >
        &#10095;
      </button>
    </div>
  </div>

  <Footer />
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      imageCount: 8,
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * (100 / this.imageCount)}%)`,
      };
    },
  },
  methods: {
    moveRight() {
      this.currentIndex = (this.currentIndex + 1) % this.imageCount;
    },
    moveLeft() {
      this.currentIndex =
        (this.currentIndex - 1 + this.imageCount) % this.imageCount;
    },
  },
};
</script>

