<template>
    <Navbar />
        <div class="pt-40 flex justify-center flex-col bg-gray-300">
            <h1 class="text-4xl flex justify-center">Formulario</h1>
            <p class="flex justify-center">Este es formulario el cual, puedes contactar con nosotros para cualquier consulta o duda,<br>
                                            teneis otras alternativas, pero esta es otra.
            </p>
        </div>
    <contactForm />
    <Footer />



</template>

<script>
    import Navbar from '~/components/navbar.vue'
    import Footer from '~/components/footer.vue';


    export default {
        name:'formFormularioLayout'
    }
</script>