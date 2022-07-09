const { testRecipes } = require("../data/recipes");
const { testUsers } = require("../data/users");

exports.createRecipe = async (req, res) => {
    // #swagger.tags = ['Recipes']
    // #swagger.summary = 'Creates a new recipe'
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Add an item',
            schema: { $ref: '#/definitions/CreateRecipe' }
    } */
    recipePayload = req.body;
    try {
        const last_id = testRecipes.at(testRecipes.length - 1).id;
        const recipe = {
            "id":last_id+1,
            "userId": recipePayload.userId,
            "name": recipePayload.name,
            "ingredients": recipePayload.ingredients,
            "steps": recipePayload.steps,
            "image": recipePayload.image
        }
        const user = testUsers.find(u => u.id == recipe.userId);
        if(!user){
            res.status(400).json({
                message:
                  "El id del usuario no corresponde a ningun usuario. Ingrese los datos correctamente.",
            });
            res.send();
        } else {
            testRecipes.push(recipe);
            res.status(200);
            res.json(recipe);
            return;
        }
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al crear una receta. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
};

exports.getFeed = async (req, res) => {
    // #swagger.tags = ['Recipes']
    // #swagger.summary = 'Gets all recipes'
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
};

exports.getRecipeById = async (req, res) => {
    // #swagger.tags = ['Recipes']
    // #swagger.summary = 'Gets a recipe by its id'
    try {
        const recipe = testRecipes.find(r => r.id == req.params.id);
        if(!recipe){
            res.status(404).send("La receta no existe.");
            return;
        }
        res.status(200);
        res.json(recipe);
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al buscar una receta. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
}