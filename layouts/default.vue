<template>
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '~/components/navbar.vue'
  import Hero from '~/components/hero.vue'
  import Description from '~/components/description.vue'
  import Footer from '~/components/footer.vue';
  
  export default {
    name: 'defaultLayout',
    components: {
      Navbar,
      Hero,
      Description,
      Footer
    }
  }
  </script>