import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config';

import connection from './db/database.js';
import "./db/Question.js";

connection
  .authenticate()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) =>{
    console.error(err)
  })






const app = express()
const PORT = 8080
const ROUTE = "http://127.0.0.1:" + PORT

//* EJS Config
app.set('view engine', 'ejs')
app.use(express.static('public'));
//* bodyParser Config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//* ROUTES ------------------------
app.get("/", (req, res) => {
  res.render("index")
})

app.get("/new-question", (req, res) => {
  res.render("newQuestion")
})

app.post("/post-question?msg=Question%20created!", (req, res) => {
let data = req.body

console.log("───────────── post-question called ─────────────")
console.log(data);

res.redirect("/")
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