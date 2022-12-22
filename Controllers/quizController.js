const Questions = require("../Models/quizModel")


const getQuestion = async (req, res) => {
    let {page=1,limit=1,
    category,difficulty,questions
    } = req.query;
   try {
     if (category && difficulty) {
       let question = await Questions.find({
         category: category,
         difficulty: difficulty,
       })
         .skip((page - 1) * limit)
         .limit(limit);
  return res.send({ data: question, totalPages: questions});
     }
   } catch (error) {
    res.send(error.message)
   }
 };

module.exports = {getQuestion}