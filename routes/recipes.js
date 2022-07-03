const express = require('express');
const { createRecipe, getFeed, getRecipeById } = require('../controllers/recipes');
const { validateSchema } = require('../middlewares/validation');
const { createRecipeSchema } = require('../validators/recipes');
const router = express.Router();

router.route('/').post(/*[validateSchema(createRecipeSchema)], */createRecipe);

router.route('/feed').get(getFeed);

router.route('/:id').get(getRecipeById);

module.exports = router;