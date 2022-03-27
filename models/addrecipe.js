const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    dessertname:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    ingredient:{
        type:String,
        required: true
    },
    howto:{
        type:String,
        required: true
    },
    imgurl:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;