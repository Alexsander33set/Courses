import express from "express";
const router = express.Router();


router.get("/categories", (req,res)=>{
  res.render("homepage")
})

router.get("/categories/new", (req,res)=>{
  res.render("homepage")
})

export default router