const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const { nombre, telefono, email, mensaje } = JSON.parse(event.body || '{}');

  if (!nombre || !telefono || !email || !mensaje) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ramosdavu2006@gmail.com', // <- variable de entorno
      pass: 'hcjjcugjfzbsolpi', // <- variable de entorno
    },
  });

  const mailOptions = {
  from: '"Malaga Transfer" <malagatransfercouk.com>',  // tu correo real
  to: 'malagatransfercouk@gmail.com',
  replyTo: email,  // email del usuario que rellenó el formulario
  subject: 'Nuevo mensaje desde el formulario',
  text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`,
};


  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
