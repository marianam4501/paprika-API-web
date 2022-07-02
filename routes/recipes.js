const express = require('express');
const { createRecipe, getFeed, getRecipeById } = require('../controllers/recipes');
const router = express.Router();

router.route('/').post(createRecipe);

router.route('/feed').get(getFeed);

router.route('/:id').get(getRecipeById);

module.exports = router;