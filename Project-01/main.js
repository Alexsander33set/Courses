import express, { query } from "express";
import bodyParser from "body-parser";
import { Sequelize, where } from "sequelize";
import 'dotenv/config';

import connection from './db/database.js';
import Question from "./db/Question.js";
import Answers from "./db/Answers.js";

connection
  .authenticate()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) =>{
    console.error(err)
  })


const app = express()
const PORT = 80
const ROUTE = "http://127.0.0.1:" + PORT

//* EJS Config
app.set('view engine', 'ejs')
app.use(express.static('public'));
//* bodyParser Config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//* ROUTES ------------------------
app.get("/", (req, res) => {
  Question.findAll({raw: true, order:[["updatedAt", "DESC"]]})
  .then((response)=>{
    res.render("index", {
      questions: response
    })
  })

})

app.get("/question/:id?", (req, res) => {
  let questionID = req.params.id
  Question.findOne({where:{id: questionID}})
  .then((response)=>{
    !response ? res.redirect("/error?error=Error! Question not founded!"):
    
    Answers.findAll({
      where: {questionID: questionID},
      raw: true,
      order:[["updatedAt", "DESC"]]
    }).then((answers)=>{
      res.render("questionSelected", {
        question: response,
        answers : answers
      })
    })
  })

})

app.get("/new-question", (req, res) => {
  res.render("newQuestion")
})

app.get("/get-questions", (req, res) => {
  console.log("───────────── get-questions called ─────────────")
  Question.findAll({raw: true})
  .then((response)=>{
    console.log(response);
    res.json(response)
  })
})

app.post("/post-question", (req, res) => {
  console.log("───────────── post-question called ─────────────")
  let data = req.body
  Question.create({
    title: data.nqTitle,
    question: data.nqQuestion,
  }).then(()=>{
    res.redirect("/")
  })
})

app.post("/post-answer", (req, res) => {
  console.log("───────────── post-answer called ─────────────")
  let data = req.body
  Answers.create({
    questionID: data.questionID,
    answer: data.answer,
  }).then(()=>{
    res.redirect("/question/"+data.questionID)
  })
})

app.get("/error", (req, res) => {
  req.query.error ? 
  res.render("error", {error: req.query.error})
  :res.render("error", {error: "Sounds that the application is working well 😉"})
})

app.listen(PORT, (err) =>{
  if (err) {
    return console.error(err);
  }
  console.log("running at " + ROUTE);
})