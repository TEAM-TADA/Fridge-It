const unirest = require('unirest');
require('dotenv').config();

const temp = require('../../db/recipeDummy.json');

const search = {
  getRecipes: (req, res) => {
    let ingredients = req.body.data.ingredients;

    console.log(temp.data);

    res.send(temp.data);

    // unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
    //               + "?ingredients=" + ingredients.join(',') + '&fillIngredients=false'
    //               + "&limitLicense=false" + "&number=9" + "&ranking=1")
    //         .header("X-Mashape-Key", process.env.API_FOOD_KEY)
    //         .header("Accept", "application/json")
    //         .end((result) => {
    //           console.log('Headers: ', result.headers);
    //           res.send(result.body);
    //         });
  },
};

module.exports = search;