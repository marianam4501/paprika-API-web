const Joi = require('joi');

exports.createUserSchema = Joi.object({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required().error(() => new Error("El correo debe estar en formato de correo electrónico (ej. user@correo.com).")),
    password: Joi.string().min(8).required().error(() => new Error("La contraseña debe contener al menos 8 caracteres (ej. Patito.20).")),
    profile_picture: Joi.string()
});

exports.loginSchema = Joi.object({
    email: Joi.string().email().required().error(() => new Error("El correo debe estar en formato de correo electrónico (ej. user@correo.com).")),
    password: Joi.string().min(8).required().error(() => new Error("La contraseña debe contener al menos 8 caracteres (ej. Patito.20)."))
});

exports.recoverPasswordSchema = Joi.object({
    email: Joi.string().email().required().error(() => new Error("El correo debe estar en formato de correo electrónico (ej. user@correo.com).")),
});

exports.resetPasswordSchema = Joi.object({
    email: Joi.string().email().required().error(() => new Error("El correo debe estar en formato de correo electrónico (ej. user@correo.com).")),
    code: Joi.number().min(6).required().error(() => new Error("El código de confirmación debe contener números y 6 caracteres.")),
    password: Joi.string().min(8).required().error(() => new Error("La contraseña debe contener al menos 8 caracteres (ej. Patito.20)."))
});