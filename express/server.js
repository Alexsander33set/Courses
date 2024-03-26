
import express from "express";
const APP = express();
const PORT = 8080
/* ---------- EXEMPLE PARAMETRO ---------- */
// APP.get("/:name?", (req, res) =>{
//   let name = (req.params.name)
  
//   res.send(`EAE ${name} SEU FDPutinha`);
// })

APP.listen(PORT, (err)=>{
  if (err) {
    return console.error(err);
  }
  console.log("running");
})