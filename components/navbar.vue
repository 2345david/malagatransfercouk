<template>
  <nav class="bg-gray-800 p-4 text-white fixed w-full top-0 left-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
        <img src="/public/logo.jpeg" class="w-20 h-20 rounded-full object-cover" alt="Logo">

      <div class="space-x-4">
        <NuxtLink to="/" class="hover:text-gray-400">Inicio</NuxtLink>
        <NuxtLink to="/sobreNosotros" class="hover:text-gray-400">Sobre Nosotros</NuxtLink>
        <a href="#contact" class="hover:text-gray-400">Galeria</a>
        <NuxtLink to ="/formulario" class="hover:text-gray-400">Formulario</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  transition: all 0.3s;
}
</style>