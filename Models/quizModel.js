const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    category:{type:String,enum:["General Knowledge","Sports","Politics"],required:true},
    type:{type:String},
    difficulty:{type:String,enum:["easy","medium","hard"],required:true},
    question:{type:String,required:true},
    correct_answer: { type: String, required: true },
    incorrect_answers: { type: Array, required:true },

});

const Questions = mongoose.model("questions",quizSchema);

module.exports = Questions