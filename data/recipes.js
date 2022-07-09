exports.testRecipes = [
    {
        "id":1,
        "userId": 2,
        "name": "Pie de limón",
        "ingredients": [
            {
                "id": 1,
                "name": "Galleta María",
                "measurement": "unidad(es)",
                "quantity": 3
            },
            {
                "id": 2,
                "name": "Mantequilla",
                "measurement": "unidad(es)",
                "quantity": 2
            },
            {
                "id": 3,
                "name": "Leche condensada",
                "measurement": "taza(s)",
                "quantity": 1
            },
            {
                "id": 4,
                "name": "Limón",
                "measurement": "mililitro(s)",
                "quantity": 250
            }
        ],
        "steps": "Duración: 1 hora. Dificultad: Intermedia.",
        "image": "https://ci0137.s3.amazonaws.com/paprika/pie_de_limon.png"
    },
    {
        "id":2,
        "userId": 2,
        "name": "Queque de banano",
        "ingredients": [
            {
                "id": 1,
                "name": "Banano",
                "measurement": "unidad(es)",
                "quantity": 4
            },
            {
                "id": 2,
                "name": "Harina",
                "measurement": "taza(s)",
                "quantity": 3
            },
            {
                "id": 3,
                "name": "Leche",
                "measurement": "taza(s)",
                "quantity": 2
            }
        ],
        "steps": "Duración: 1 hora. Dificultad: Fácil.",
        "image": "https://ci0137.s3.amazonaws.com/paprika/queque-de-banano.jpg"
    },
    {
        "id":3,
        "userId": 3,
        "name": "Spaghetti a la boloñesa",
        "ingredients": [
            {
                "id": 1,
                "name": "Spaghetti",
                "measurement": "unidad(es)",
                "quantity": 1
            },
            {
                "id": 2,
                "name": "Tomates",
                "measurement": "unidad(es)",
                "quantity": 3
            },
            {
                "id": 3,
                "name": "Carne molida",
                "measurement": "kilogramo(s)",
                "quantity": 1
            }
        ],
        "steps": "Duración: 45 minutos. Dificultad: Fácil.",
        "image": "https://ci0137.s3.amazonaws.com/paprika/spaguetti.jpg"
    },
    {
        id: 4,
        userId: 4,
        name: "Filet de pargo rojo al pesto",
        ingredients: [
        {
            id: 1,
            name: "Filet de pargo",
            measurement: "unidad(es)",
            quantity: 1,
        },
        {
            id: 2,
            name: "Pesto",
            measurement: "gramo(s)",
            quantity: 3,
        },
        ],
        steps: "Duración: 45 minutos. Dificultad: Fácil.",
        image:"https://ci0137.s3.amazonaws.com/paprika/pargo.jpg",
    },
    {
        id: 4,
        userId: 2,
        name: "Salchipapas",
        ingredients: [
        {
            id: 1,
            name: "Papas",
            measurement: "unidad(es)",
            quantity: 4,
        },
        {
            id: 2,
            name: "Salchichas",
            measurement: "unidad(es)",
            quantity: 7,
        },
        ],
        steps: "Core las papas en tiras. Puede quitarles la cáscara, o no. Cocínelas. Ponga aceite en un sartén y fría las papas. Corte las salchichas. Duración: 45 minutos. Dificultad: Fácil.",
        image:"https://ci0137.s3.amazonaws.com/paprika/stock1.jpg",
    },
];