const nodemailer = require("nodemailer");
const getTransporter = function () {
  let transporter;
  console.log(process.env.EMAIL_HOST + ', ' + process.env.EMAIL_PORT + ', '+process.env.EMAIL_USER);
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
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
    from: "mariana@primarix.com",
    to: userEmail,
    subject: "Su código de recuperación",
    text: `Utilice este código para recuperar su contraseña: ${randomToken}`,
    html: `Utilice este código para recuperar su contraseña: <strong>${randomToken}</strong>`,
  });
};
