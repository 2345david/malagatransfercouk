<template>
  <nav class="bg-gray-800 p-4 text-white fixed w-full top-0 left-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <img src="/public/logo.jpeg" class="w-20 h-20 rounded-full object-cover" alt="Logo">

      <!-- Menú para dispositivos grandes -->
      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/" class="hover:text-gray-400">Inicio</NuxtLink>
        <NuxtLink to="/sobreNosotros" class="hover:text-gray-400">Sobre Nosotros</NuxtLink>
        <NuxtLink to="/Galeria" class="hover:text-gray-400">Galeria</NuxtLink>
        <NuxtLink to="/formulario" class="hover:text-gray-400">Formulario</NuxtLink>
      </div>

      <!-- Menú móvil -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú desplegable móvil -->
    <div v-if="menuOpen" class="md:hidden bg-gray-800 text-white space-y-4 px-4 py-2">
      <NuxtLink to="/" class="block hover:text-gray-400">Inicio</NuxtLink>
      <NuxtLink to="/sobreNosotros" class="block hover:text-gray-400">Sobre Nosotros</NuxtLink>
      <NuxtLink to="/Galeria" class="block hover:text-gray-400">Galeria</NuxtLink>
      <NuxtLink to="/formulario" class="block hover:text-gray-400">Formulario</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false, // Estado para controlar el menú desplegable
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
nav {
  transition: all 0.3s;
}
</style>
