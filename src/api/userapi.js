export const UserData = async()=>{
   const response = await fetch("http://localhost:8000/user",{method:"GET",})
   return await response.json()
}

export const CreateUser = async(formData)=>{
   console.log(formData)
   const response = await fetch("http://localhost:8000/user/signin",{method:"POST",
       headers:{
           "Content-Type":"application/json"
       },
       body: JSON.stringify(formData),
   })
   return await response.json();
}

