
import express from "express";
const APP = express();
const PORT = 8080

/* ---------- EXAMPLE PARAMETER ---------- */
APP.get("/:name?", (req, res) =>{
  let name = (req.params.name)
  
  res.send(`<h3>aopa ${name}</h3>`);
})

APP.listen(PORT, (err)=>{
  if (err) {
    return console.error(err);
  }
  console.log("running");
})