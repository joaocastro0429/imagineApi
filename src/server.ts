import express from 'express'

const server=express()

server.get("/",(req,res)=>{
   return res.json({message:"imageshop"})
})

server.listen(3333,()=>console.log("sever running port http://localhost:3333"))