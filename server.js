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
            "password": userPayload.password//await bcrypt.hash(userPayload.password, saltRounds),
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