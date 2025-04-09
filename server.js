import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

// Configurar el servidor Express
const app = express();
app.use(express.json());  // Para leer datos JSON
app.use(cors());  // Permite solicitudes desde el frontend

// Configuración de nodemailer para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ramosdavu2006@gmail.com',  // Tu email de Gmail
    pass: 'hcjjcugjfzbsolpi'  // Tu contraseña de aplicación (App Password de Gmail)
  }
});

// Ruta para enviar el correo
app.post('/enviarmail', async (req, res) => {
  const { nombre, telefono, email, mensaje } = req.body;

  // Configuración del correo
  const mailOptions = {
    from: 'ramosdavu2006@gmail.com',  // Tu email
    to: 'ramosgarciad62@gmail.com',  // Email destino
    subject: 'Nueva Reserva',
    text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${email}\nMensaje: ${mensaje}`
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));