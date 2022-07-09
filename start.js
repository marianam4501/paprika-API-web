const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Paprika - API",
    description: "Este es el API del backend del proyecto PAPRIKA del curso CI0137",
  },
  host: "localhost:4545",
  schemes: ["http", "https"],
  definitions: {
    CreateUser: {
      name: "José",
      lastname: "Rodríguez",
      email: "jose@correo.com",
      password: "patito",
      profile_picture: "https://ejemplo.com/foto.jpg"
    },
    LoginUser: {
      email: "jose@correo.com",
      password: "patito",
    },
    RecoverPassword: {
      email: "jose@correo.com",
    },
    ResetPassword: {
      email: "jose@correo.com",
      password: "patito",
      code: 123456,
    },
    CreateRecipe: {
      userId: 2,
      name: "Pie de manzana",
      ingredients: " { id: 1, name: Galleta Maria, measurement: unidad(es), quantity: 3 }",
      steps: "Paso 1. Moler las galletas. Paso 2...",
      image: "https://ejemplo.com/foto.jpg",
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
