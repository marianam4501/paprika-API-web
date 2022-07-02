const { testRecipes } = require("../data/recipes");

exports.createRecipe = async (req, res) => {
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
        testRecipes.push(recipe);
        res.status(200);
        res.json(recipe);
        return;
    } catch (error) {
        res.status(500).json({
            message:
              "Ocurrió un error al buscar una receta. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
};

exports.getFeed = async (req, res) => {
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