const { Router } = require("express");
const Jewellery = require('../models/jewellery')

const router = Router();

router.get('/', async(req,res)=>{
    const jewellery = await Jewellery.find({})
    const Json ={jewellery}
    return res.json(Json)
})

router.post('/addjewellery', async (req,res)=>{
    try{
        const {jewelleryname, description, price, quantity}= req.body;
        console.log(req.body)
        const newJewellery = await Jewellery.create({
            jewelleryname,
            description,
            price,
            quantity,
            // createdBy: req.jewellery_id,
        });

        return res.json({jewellery: newJewellery})
    }catch(error){
        console.error("error found",error)
        return res.status(500).json({error:"internal error "})
    }

})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const jewelleryid = req.params.id;
        const deletedjewellery = await Jewellery.findByIdAndDelete(jewelleryid);

        return res.json({message: "jewellery delete",jewellery:deletedjewellery});
    }catch (error){
        return res.status(500).json({error:"failed to delete jewellery"})
    }
})

module.exports = router;