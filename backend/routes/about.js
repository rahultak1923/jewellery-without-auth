const { Router } = require("express");
const AboutSection = require('../models/about')

const router = Router()

router.get("/", async(req,res)=>{
    const about = await AboutSection.find()
    const Json = {about}
    return res.json(Json)
})

router.post("/addabout",async(req,res)=>{
    try{
        const {abouttitle, aboutdescription}=req.body;
        console.log(req.body)
        const newAbout = await AboutSection.create({
            abouttitle,
            aboutdescription
        })
        return res.json({about: newAbout})
    }catch(error){
        console.error("error found",error)
        return res.status(500).json({error:"internal error "})
    }
})

module.exports = router