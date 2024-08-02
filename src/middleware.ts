import express from "express";

 const authMiddleware=express()
   .use((req,res ,next)=>{
    const auth=req.headers.authorization

   if(auth==='123456') return next()
   

   return res.status(401).json({mesagege:'not Authorized'})

})

export {authMiddleware}
