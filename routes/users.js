const express = require('express');
const { createUser, login, recoverPassword, resetPassword, listUsers, userById } = require('../controllers/users');
const { checkUserIsAuthenticated, checkRoles } = require('../middlewares/authentication');
const router = express.Router();
const { ROLES } = require("../utils/constants");

router.route('/')
    .post(createUser)
    .get([checkUserIsAuthenticated, checkRoles([ROLES.ADMIN])],listUsers);

router.route('/login').post(login);

router.route('/recover-password').post(recoverPassword);

router.route('/reset-password').patch(resetPassword);


router.route('/:id').get(userById);

module.exports = router;