const express = require('express')
const dotenv = require('dotenv')
const server = express();

dotenv.config();
server.listen(process.env.PORT || 4545);
console.log(`The server is listening on port http://0.0.0.0:${process.env.PORT || 4545}`);

server.get('/', function (req, res) {
    res.send("Welcome.");
});