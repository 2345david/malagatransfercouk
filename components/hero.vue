<template>
  <div class="relative h-screen w-full">
    <!-- Contenedor del video de fondo -->
    <div class="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <video v-if="videoCargado" autoplay loop muted playsinline class="w-full h-full object-cover">
        <source src="/public/coche2.jpg" type="img" />
      </video>
      <div v-else class="w-full h-full bg-gray-800"></div>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>

    <!-- Contenido principal -->
    <div class="relative flex flex-col justify-center items-center h-full text-white px-6">
      <div class="text-center">
        <h1 class="text-4xl sm:text-5xl font-bold">Transfer Desde/Hasta el aeropuerto de Málaga</h1>
        <p class="mt-4 text-lg sm:text-xl">Último modelo de Vehículos de alta gama - ¡Reserva ahora!</p>

        <!-- Formulario -->
        <form @submit.prevent="reservar" class="bg-white p-4 rounded-lg shadow-lg mt-6 max-w-4xl w-full mx-auto text-black">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            <div class="flex items-center bg-gray-100 p-2 rounded">
              <img width="20" src="/miniplace.png" alt="Desde" class="mr-2">
              <select v-model="origen" class="w-full bg-transparent focus:outline-none">
                <option value="0">Desde</option>
                <option v-for="(lugar, index) in lugares" :key="index" :value="lugar.value">
                  {{ lugar.label }}
                </option>
              </select>
            </div>

            <div class="flex items-center bg-gray-100 p-2 rounded">
              <img width="20" src="/place.png" alt="Hasta" class="mr-2">
              <select v-model="destino" class="w-full bg-transparent focus:outline-none">
                <option value="0">Hasta</option>
                <option v-for="(lugar, index) in lugares" :key="index" :value="lugar.value">
                  {{ lugar.label }}
                </option>
              </select>
            </div>

            <div class="flex items-center bg-gray-100 p-2 rounded">
              <img width="20" src="/people.png" alt="Pasajeros" class="mr-2">
              <input v-model="pasajeros" type="number" min="1" class="w-full bg-transparent focus:outline-none" placeholder="Nº Pasajeros">
            </div>

            <div class="flex items-center bg-gray-100 p-2 rounded">
              <img width="20" src="/car.png" alt="Tipo de Viaje" class="mr-2">
              <select v-model="tipoViaje" class="w-full bg-transparent focus:outline-none">
                <option value="0">Viaje de Ida</option>
                <option value="1">Ida y Vuelta</option>
              </select>
            </div>

            <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition w-full sm:w-auto">
              Reservar
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Botón flotante para abrir el panel -->
    <button @click="mostrarPanel = !mostrarPanel"
      class="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-blue-700 transition">
      ☰
    </button>

    <!-- Panel lateral -->
    <transition name="slide">
      <div v-if="mostrarPanel" class="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col items-center z-50">
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
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mostrarPanel = ref(false);
const videoCargado = ref(false);

const origen = ref("0");
const destino = ref("0");
const pasajeros = ref(1);
const tipoViaje = ref("0");

const lugares = ref([
  { value: "8", label: "Malaga Aeropuerto" },
  { value: "44", label: "Malaga Center / Estación de Tren" },
  { value: "47", label: "Alhaurin el Grande" },
  { value: "10", label: "Alicante" },
  { value: "11", label: "Almería" },
  { value: "12", label: "Almuñécar" },
  { value: "14", label: "Benalmádena" },
  { value: "20", label: "Estepona" },
  { value: "22", label: "Fuengirola" },
  { value: "24", label: "Granada" },
  { value: "35", label: "Sevilla" },
]);

const reservar = () => {
  console.log({
    origen: origen.value,
    destino: destino.value,
    pasajeros: pasajeros.value,
    tipoViaje: tipoViaje.value,
  });
};

// Detectar si el video carga correctamente
onMounted(() => {
  const video = document.createElement("video");
  video.src = "/coches.mp4";
  video.oncanplaythrough = () => (videoCargado.value = true);
  video.onerror = () => console.error("Error cargando el video");
});
</script>

<style>
/* Animación para el panel lateral */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
