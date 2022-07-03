const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const server = express();
const usersRoutes = require("./routes/users");
const recipesRoutes = require("./routes/recipes");

dotenv.config();
server.listen(process.env.PORT || 4545);
console.log(`The server is listening on port http://localhost:${process.env.PORT || 4545}`);
console.log(`You can navigate the documentation at http://localhost:${process.env.PORT || 4545}/docs`);

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send("Welcome.");
});
//Mount routes
server.use("/users", usersRoutes);
server.use("/recipes", recipesRoutes);
