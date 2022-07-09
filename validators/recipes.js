const Joi = require('joi');

exports.createRecipeSchema = Joi.object({
    id: Joi.number().integer().required().error(() => new Error("El id debe ser un número.")),
    userId: Joi.number().integer().required().error(() => new Error("El id del usuario debe ser un número.")),
    name: Joi.string().required(),
    ingredients: Joi.array().items(Joi.object({
        id: Joi.number().integer().required().error(() => new Error("El id del ingrediente debe ser un número.")),
        name: Joi.string().required(),
        measurement: Joi.string().required(),
        quantity: Joi.number().integer().required().error(() => new Error("La cantidad debe ser un número."))
    })).required(),
    steps: Joi.string().required(),
    image: Joi.string()
});