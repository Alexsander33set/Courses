import { express } from "express";
const router = express.router();


router.get("/", (req,res)=>{
  res.render("homepage")
})