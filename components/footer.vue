<template>
  <footer class="piePagina py-6 bg-gray-900 text-white">
    <!-- Contenedor principal con flexbox para alinear los elementos en fila -->
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      
      <!-- Texto del pie de página -->
      <p class="text-center md:text-left">© 2025 Prestige Malaga transfer</p>

      <!-- Imágenes de pago alineadas horizontalmente con tamaño uniforme -->
      <div class="imagenesPie flex space-x-6 mt-4 md:mt-0">
        <img class="w-16 h-16 object-contain" src="/visa.png" alt="Visa" />
        <img class="w-16 h-16 object-contain" src="/mastercad.png" alt="Mastercard" />
        <img class="w-16 h-16 object-contain" src="/googlePay.png" alt="Google Pay" />
        <img class="w-16 h-16 object-contain" src="/sepa.png" alt="SEPA" />
      </div>

      <!-- Créditos -->
      <p class="text-center mt-4 md:mt-0">Hecho por David Ramos Garcia</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.piePagina {
  background-color: #1a202c; /* Fondo oscuro */
}

.imagenesPie img {
  transition: transform 0.3s ease-in-out;
}

.imagenesPie img:hover {
  transform: translateY(-5px); /* Efecto hover para imágenes */
}
</style>
