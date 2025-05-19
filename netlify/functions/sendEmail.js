const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body || '{}');

  if (!name || !email || !message) {
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
    from: `"${name}" <${email}>`,
    to: 'malagatransfercouk@gmail.com', // <- correo donde recibirás el mensaje
    subject: 'Nuevo mensaje desde el formulario',
    text: message,
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
