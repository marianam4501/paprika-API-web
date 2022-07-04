const bcrypt = require("bcrypt");
const { sendRecoveryCodeEmail } = require('../services/mailService');
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const {testUsers, testCodes, testRoles} = require("../data/users");
const {testRecipes} = require("../data/recipes");

exports.createUser = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Register a user'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add a user',
            schema: { $ref: '#/definitions/CreateUser' }
    } */
    const userPayload = req.body;
    try {
        const last_id = testUsers.at(testUsers.length - 1).id;
        const user = {
            "id":last_id+1,
            "name": userPayload.name,
            "lastname": userPayload.lastname,
            "email": userPayload.email,
            "password": await bcrypt.hash(userPayload.password, saltRounds)
        };
        const existingUser = testUsers.find(u => u.email === user.email);
        if(!existingUser){
            testUsers.push(user);
            res.status(200);
            res.json(user);
        } else {
            res.status(400).send("Ya hay un usuario registrado con ese correo electrónico.");
            return;
        }
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al crear el usuario. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
};

exports.login =  async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Login'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Login',
            schema: { $ref: '#/definitions/LoginUser' }
    } */
    const userPayload = req.body;
    try {
        const user = testUsers.find(u => u.email === userPayload.email);
        if (!user || !(await bcrypt.compare(userPayload.password, user.password))) {
            res.status(401).send("Credenciales inválidas.");
            return;
        } else {
            const rolesIds = testRoles.map((r) => r.id);
            delete user.password;
            const token = jwt.sign({ userId: user.id, roles: rolesIds }, process.env.JWT_KEY, {expiresIn: "10m"});
            res.status(200);
            res.json({
                ...user,
                token
            });
        }
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al iniciar sesión. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
};

exports.recoverPassword = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Recover password'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Recover password',
            schema: { $ref: '#/definitions/RecoverPassword' }
    } */
    try {
        const userPayload = req.body;
        const user = testUsers.find(u => u.email == userPayload.email);
        if (!user) {
            res.status(401).send("Datos no válidos");
            return;
        }
        const randomToken = Math.floor(
          Math.random() * (999999 - 100000 + 1) + 100000
        );
        var existing_code = testCodes.findIndex(u => u.userId == user.id);
        if(existing_code !== -1){
            const deleted = testCodes.splice(existing_code,1);
        }
        const code = {
            "userId": user.id,
            "code": randomToken
        }
        testCodes.push(code);
        await sendRecoveryCodeEmail(user.email, randomToken); // no sirve
        res.status(204).send();
    } catch (error) {
        res.status(500).send("Error del servidor: " + error);
    }
};

exports.resetPassword = async (req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Reset password'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Reset password',
            schema: { $ref: '#/definitions/ResetPassword' }
    } */
    try {
        const userPayload = req.body;
        const user = testUsers.find(u => u.email === userPayload.email);
        const user_index = testUsers.findIndex(u => u.email === userPayload.email);
        const code = testCodes.find(c => c.userId === user.id);
        const code_index = testCodes.findIndex(u => u.userId == user.id);
        if (!user || !code || code.code !== userPayload.code) {
          res.status(401).send("Datos no válidos");
          return;
        }
    
        user.password = await bcrypt.hash(userPayload.password, saltRounds);
        testUsers.fill(user, user_index, user_index+1);
    
        if(code_index !== -1){
            testCodes.splice(code_index,1);
        }
        res.status(204).send();
      } catch (error) {
        res.status(500).send("Error del servidor: " + error);
      }
};

exports.listUsers = async( req, res) => {// #swagger.tags = ['Users']
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Lists all the registered users (only for adminstrators)'
    try {
        res.status(200);
        res.json(testUsers);
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al cargar la lista de usuarios. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
};

exports.userById = async(req, res) => {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Gets a user by its id'
    const user_id = req.params.id;
    try {
        var user = testUsers.find(u => u.id == user_id);
        delete user.password;
        if(!user){
            res.status(404).send("No existe un usuario con ese identificador.");
            return;
        }
        var recipes = testRecipes.filter(r => r.userId == user_id);
        delete recipes.userId;
        delete recipes.ingredients;
        delete recipes.steps;
        if(!recipes){
            res.status(200);
            res.json(user);
            return;
        }
        var profile = {
            user,
            recipes
        }
        res.status(200);
        res.json(profile);
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al buscar una receta. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
};