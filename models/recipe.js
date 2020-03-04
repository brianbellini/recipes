var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: String,
    rating: String,
    category: String,
    image: String,
    servings: Number,
    time: {
        prep: Number,
        cook: Number,
    },
    ingredientList: [{section: String,
                    ingredients: [{ ingredient: String,
                                        quantity: Number,
                                        unit: String }]}
                        ],
    method: [String],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Recipe', recipeSchema);