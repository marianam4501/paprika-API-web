const nodemailer = require("nodemailer");
const getTransporter = function () {
  let transporter;
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  return transporter;
};

exports.sendRecoveryCodeEmail = async (userEmail, randomToken) => {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: "paprika@primarix.com",
    to: userEmail,
    subject: "Código de recuperación",
    text: `Estimad@ usuario: Utilice este código para recuperar su contraseña: ${randomToken}`,
    html: `Estimad@ usuario: </br>Utilice este código para recuperar su contraseña: <strong>${randomToken}</strong>`,
  });
};
