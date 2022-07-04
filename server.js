// Packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");

const swaggerFile = require("./swagger.json");
const usersRoutes = require("./routes/users");
const recipesRoutes = require("./routes/recipes");
const uploadRoutes = require("./routes/upload");

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

//Mount routes
server.use("/users", usersRoutes);
server.use("/recipes", recipesRoutes);
server.use("/upload", uploadRoutes);

// Documentation setup
server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

server.listen(process.env.PORT || 4545);
console.log(`The server is listening on port http://localhost:${process.env.PORT || 4545}`);
console.log(`You can navigate the documentation at http://localhost:${process.env.PORT || 4545}/docs`);
