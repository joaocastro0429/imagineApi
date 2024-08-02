import express from 'express'

export const routes=express.Router()

routes.get("/",(request,response)=>{
    return response.json({message:"Hello Word"})
})

routes.get("/users",(request,response)=>{
    return response.json({message:"users list"})
})

routes.post("/users",(request,response)=>{
    return response.status(201).json({message:"create user"})
})
