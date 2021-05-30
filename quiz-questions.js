const knex = require('./knex');
const knex2 = require('./knex');

function getAQuiz(id){
    return knex("quizes").where("id",id).select("*");
};

function createQuiz(data){
    return knex("quizes").insert(data).then(row=>{return row[0]})
};

function getAQuestion(id){
    return knex("questions").where("id",id).select("*");
};

function createQuestion(data){
    return knex("questions").insert(data).then(row=>{return row[0]})
};

function getAQuestionByQuiz(id){
    try{
        // return knex2("questions").where("quiz",name).select("*").then((questionObj)=>{
        //     console.log(questionObj) 
        //     questionObj;
        // })
        return knex2("questions").where("quiz",id).select("*").then((questionObj)=>JSON.stringify(questionObj))
    }
    catch(e){
        console.log(e)
    }
}




module.exports={
    getAQuiz,
    createQuiz,
    getAQuestion,
    createQuestion,
    getAQuestionByQuiz
}