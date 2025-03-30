export const JewelleryData = async()=>{
    const response = await fetch("http://localhost:8000/jewellery/",{method:"GET",

    });
    return await response.json();
}


export const CreateJewellery = async(formData)=>
{
    console.log(formData)
    const response = await fetch("http://localhost:8000/jewellery/addjewellery",{method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(formData),
    })
    return await response.json()
}