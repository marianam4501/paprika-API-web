const express = require('express');
const { createUser, login, recoverPassword, resetPassword, listUsers, userById } = require('../controllers/users');
const { checkUserIsAuthenticated, checkRoles } = require('../middlewares/authentication');
const { validateSchema } = require('../middlewares/validation');
const router = express.Router();
const { ROLES } = require("../utils/constants");
const { createUserSchema, loginSchema, recoverPasswordSchema, resetPasswordSchema } = require('../validators/users');

router.route('/')
    .post([validateSchema(createUserSchema)], createUser)
    .get([checkUserIsAuthenticated, checkRoles([ROLES.ADMIN])],listUsers);

router.route('/login').post([validateSchema(loginSchema)], login);

router.route('/recover-password').post([validateSchema(recoverPasswordSchema)],recoverPassword);

router.route('/reset-password').patch([validateSchema(resetPasswordSchema)],resetPassword);


router.route('/:id').get([checkUserIsAuthenticated], userById);

module.exports = router;