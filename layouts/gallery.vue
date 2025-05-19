<template>
  <Navbar />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
    <h2 class="text-3xl font-bold text-center mb-6 sm:mb-10">Galería de Vehículos</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      <div
        v-for="(car, index) in cars"
        :key="index"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <img
          :src="car.img"
          :alt="car.modelo"
          class="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div class="p-4 text-center">
          <h3 class="text-lg md:text-xl font-semibold text-gray-800">{{ car.modelo }}</h3>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
const cars = [
  {
    img: "/teslaNegroCarrusel.jpg",
    modelo: "Tesla Model S Negro"
  },
  {
    img: "/tesla2Carrusel.jpg",
    modelo: "Tesla Model 3 Negro"
  },
  {
    img: "/mercedesCarrusel.png",
    modelo: "Mercedes-Benz Clase E"
  },
  {
    img: "/MinbanCarrusel.jpg",
    modelo: "Minivan Familiar"
  },
  {
    img: "/cocheNegroCarrusel.jpg",
    modelo: "Coche Negro Deportivo"
  }
]
</script>
