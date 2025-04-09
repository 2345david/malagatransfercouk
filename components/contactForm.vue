<template>
  <div class="pt-20 bg-gray-300 pb-20">
    <div class="form-container">
      <form @submit.prevent="enviarFormulario">
        <div class="input-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" placeholder="Tu nombre" />
          <span v-if="!validaciones.nombreValido && nombre.length > 0" class="error">
            * Nombre requerido
          </span>
        </div>

        <div class="input-group">
          <label for="telefono">Teléfono:</label>
          <input type="text" id="telefono" v-model="telefono" placeholder="Tu número de teléfono" />
          <span v-if="!validaciones.telefonoValido && telefono.length > 0" class="error">
            * Debe tener 9 dígitos numéricos
          </span>
        </div>

        <div class="input-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="email" placeholder="Tu correo electrónico" />
          <span v-if="!validaciones.emailValido && email.length > 0" class="error">
            * Ingresa un correo válido con "@"
          </span>
        </div>

        <div class="input-group">
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" v-model="mensaje" placeholder="Detalles de tu viaje"></textarea>
          <span v-if="!validaciones.mensajeValido && mensaje.length > 0" class="error">
            * Campo obligatorio
          </span>
        </div>

        <button type="submit" :disabled="!formularioValido" class="submit-btn">
          Reservar Ahora
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Variables reactivas
const nombre = ref('');
const telefono = ref('');
const email = ref('');
const mensaje = ref('');

// Validaciones en tiempo real
const validaciones = computed(() => ({
  nombreValido: nombre.value.trim() !== '',
  telefonoValido: /^[0-9]{9}$/.test(telefono.value),
  emailValido: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
  mensajeValido: mensaje.value.trim() !== '',
}));

// Verifica si todo el formulario es válido
const formularioValido = computed(() =>
  validaciones.value.nombreValido &&
  validaciones.value.telefonoValido &&
  validaciones.value.emailValido &&
  validaciones.value.mensajeValido
);

// Función para enviar los datos al backend
const enviarFormulario = async () => {
  if (formularioValido.value) {
    try {
      const response = await fetch('http://localhost:3001/enviarmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: nombre.value,
          telefono: telefono.value,
          email: email.value,
          mensaje: mensaje.value,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Reserva enviada con éxito 🎉');
        // Limpiar los campos después de enviar
        nombre.value = '';
        telefono.value = '';
        email.value = '';
        mensaje.value = '';
      } else {
        alert('Error al enviar el formulario ❌');
      }
    } catch (error) {
      alert('Hubo un problema al conectar con el servidor ❌');
      console.error('Error:', error);
    }
  }
};
</script>

<style scoped>
/* Contenedor principal */
.form-container {
  max-width: 450px;
  margin: auto;
  padding: 30px;
  background: linear-gradient(135deg, #1a1a1a, #292929);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
}

/* Título */
h2 {
  margin-bottom: 20px;
  font-size: 22px;
  color: #f8d210;
}

/* Grupo de inputs */
.input-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

/* Inputs y Textarea */
input, textarea {
  padding: 12px;
  border: 1px solid #444;
  background: #222;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #f8d210;
  outline: none;
  box-shadow: 0 0 8px rgba(248, 210, 16, 0.6);
}

/* Mensaje de error */
.error {
  color: #ff5757;
  font-size: 12px;
  margin-top: 5px;
}

/* Botón de enviar */
.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background: #f8d210;
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #ffcc00;
}

.submit-btn:disabled {
  background: gray;
  cursor: not-allowed;
}
</style>

