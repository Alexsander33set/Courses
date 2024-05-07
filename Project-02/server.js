import express from "express";
import { Sequelize } from "sequelize";
import bodyParser from "body-parser";
import 'dotenv/config';
import { default as articleRoutes } from "./routes/articles.js";
import Articles from "./db/articles";
import { default as categoryRoutes } from "./routes/categories.js";
import Categories from "./db/categories.js";

import conn from "./db/conn.js";
conn.authenticate()
.then(() => {
  console.log("| ──────── DB CONNECTED ──────── |");
})
.catch((err) =>{
  console.error(err)
})

const app = express()
const route = process.env.route
const port = process.env.port

//* EJS Config
app.set('view engine', 'ejs')
app.use(express.static('public'));
//* bodyParser Config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", (req,res)=>{
  res.render("homepage")
})

app.use("/", articleRoutes)
app.use("/", categoryRoutes)


app.listen(port, ()=>{
  console.clear()
  console.log(`application running at http://${route}\n`)
})