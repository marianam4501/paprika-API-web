const express = require('express')
const dotenv = require('dotenv')
const server = express();

dotenv.config();
server.listen(process.env.PORT || 4545);
console.log(`The server is listening on port http://localhost:${process.env.PORT || 4545}`);

server.use(express.json());

server.get('/', (req, res) => {
    res.send("Welcome.");
});

const bcrypt = require("bcrypt");
const saltRounds = 10;

server.post('/users', async (req, res) => {
    const userPayload = req.body;
    try {
        const testUser = {
            "id":1,
            "name": userPayload.name,
            "lastname": userPayload.lastname,
            "email": userPayload.email,
            "password": await bcrypt.hash(userPayload.password, saltRounds),
        };
        res.json(testUser);
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al crear el usuario. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
});

server.post('/users/login', async (req, res) => {
    const userPayload = req.body;
    const testUser = {
        "id":1,
        "name": "test",
        "lastname": "",
        "email": "mariana.murilloquintana@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe" //t3stp4ssw0rd
    };
    try {
        if (userPayload.email != testUser.email || !(await bcrypt.compare(userPayload.password, testUser.password))) {
            res.status(401).send("Invalid credentials");
            return;
        } else {
            delete testUser.password;
            res.status(200);
            res.json(testUser);
        }

    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al iniciar sesión. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
});
