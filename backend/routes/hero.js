const { Router } = require("express");
const HeroSection = require("../models/hero");

const router = Router()

router.get("/",async(req,res)=>{
    const hero = await HeroSection.find({})
    const Json = {hero}
    return res.json(Json)
})

router.post('/addhero',async(req,res)=>{
    try{
        const {herotitle,herodescription}=req.body;
        console.log(req.body)
        const newHero = await HeroSection.create({
            herotitle,
            herodescription,
        })
        return res.json({hero: newHero})
    }catch(error){
        console.error("error found",error)
        return res.status(500).json({error:"internal error "})
    }
})

module.exports = router