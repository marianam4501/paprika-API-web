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
    const user = {
        "id":1,
        "name": userPayload.name,
        "lastname": userPayload.lastname,
        "email": userPayload.email,
        "password": await bcrypt.hash(userPayload.password, saltRounds)
    };
    try {
        const existingUser = testUsers.find(u => u.email === user.email);
        if(!existingUser){
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
});

const testUsers = [
    {
        "id":1,
        "name": "Test",
        "lastname": "User",
        "email": "test@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe" //t3stp4ssw0rd
    },
    {
        "id":2,
        "name": "Nathan",
        "lastname": "Miranda",
        "email": "nathan.miranda@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe" //t3stp4ssw0rd
    },
    {
        "id":3,
        "name": "Mariana",
        "lastname": "Murillo",
        "email": "mariana.murilloquintana@ucr.ac.cr",
        "password": "$2b$10$bu8RfIcSCUYBcjDuyNePYevVcvpHTIK8tlyogugjWGU/tC8VLNtWe" //t3stp4ssw0rd
    },
];
server.post('/users/login', async (req, res) => {
    const userPayload = req.body;
    try {
        const user = testUsers.find(u => u.email === userPayload.email);
        if (!user || !(await bcrypt.compare(userPayload.password, user.password))) {
            res.status(401).send("Invalid credentials");
            return;
        } else {
            delete user.password;
            res.status(200);
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al iniciar sesión. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
});

const testRecipes = [
    {
        "id":1,
        "userId": 2,
        "name": "Pie de limón",
        "ingredients": [
            {
                "id": 1,
                "name": "Galleta María",
                "quantity": 3
            },
            {
                "id": 2,
                "name": "Mantequilla",
                "quantity": 2
            },
            {
                "id": 3,
                "name": "Leche condensada",
                "quantity": 1
            },
            {
                "id": 4,
                "name": "Limón",
                "quantity": 3
            }
        ],
        "steps": "Duración: 1 hora. Dificultad: Intermedia.",
        "image": "https://ibb.co/X5dPNp5"
    },
    {
        "id":2,
        "userId": 2,
        "name": "Queque de banano",
        "ingredients": [
            {
                "id": 1,
                "name": "Banano",
                "quantity": 4
            },
            {
                "id": 2,
                "name": "Harina",
                "quantity": 3
            },
            {
                "id": 3,
                "name": "Leche",
                "quantity": 2
            }
        ],
        "steps": "Duración: 1 hora. Dificultad: Fácil.",
        "image": "https://ibb.co/JzS1rm8"
    },
    {
        "id":3,
        "userId": 3,
        "name": "Spaghetti a la boloñesa",
        "ingredients": [
            {
                "id": 1,
                "name": "Spaghetti",
                "quantity": 1
            },
            {
                "id": 2,
                "name": "Tomates",
                "quantity": 3
            },
            {
                "id": 3,
                "name": "Carne molida",
                "quantity": 1
            }
        ],
        "steps": "Duración: 45 minutos. Dificultad: Fácil.",
        "image": "https://ibb.co/51zJBVg"
    },
];
server.get('/recipes', async (req, res) => {
    try {
        res.status(200);
        res.json(testRecipes);
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al iniciar sesión. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
});

