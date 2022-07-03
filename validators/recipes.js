const Joi = require('joi');

exports.createRecipeSchema = Joi.object({
    userId: Joi.number().integer().required().error(() => new Error("El id del usuario debe ser un número.")),
    name: Joi.string().required(),/*
    ingredients: [{
        id: Joi.number().integer().required().error(() => new Error("El id del ingrediente debe ser un número.")),
        name: Joi.string().required(),
        measurement: Joi.string().required(),
        quantity: Joi.number().integer().required().error(() => new Error("La cantidad debe ser un número."))
    }].required(),*/
    steps: Joi.string().required(),
    image: Joi.string()
});