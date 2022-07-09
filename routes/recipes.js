const express = require('express');
const { createRecipe, getFeed, getRecipeById } = require('../controllers/recipes');
const { checkUserIsAuthenticated } = require('../middlewares/authentication');
const { validateSchema } = require('../middlewares/validation');
const { createRecipeSchema } = require('../validators/recipes');
const router = express.Router();

router.route('/').post([checkUserIsAuthenticated, validateSchema(createRecipeSchema)], createRecipe);

router.route('/feed').get([checkUserIsAuthenticated], getFeed);

router.route('/:id').get([checkUserIsAuthenticated], getRecipeById);

module.exports = router;