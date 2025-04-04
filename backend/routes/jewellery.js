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

router.put("/update/:id", async (req, res) => {
    try {
        const jewelleryid = req.params.id;
        const { jewelleryname, description, price, quantity } = req.body;

        if (!jewelleryid) {
            return res.status(400).json({ error: "Jewellery ID is required" });
        }

        const updateJewellery = await Jewellery.findByIdAndUpdate(
            jewelleryid,
            { jewelleryname, description, price, quantity },
            { new: true }
        );

        if (!updateJewellery) {
            return res.status(404).json({ error: "Jewellery not found" });
        }

        return res.json({ message: "Jewellery updated", jewellery: updateJewellery });
    } catch (error) {
        console.error("Error updating jewellery:", error);
        return res.status(500).json({ error: "Failed to update jewellery" });
    }
});


module.exports = router;