import express from 'express'
import { createUserController, getListUserController, getUsersController } from './controller'

export const routes=express.Router()

routes.get("/",(request,response)=>{
    return response.json({message:"Hello Word"})
})

routes.get("/users/:id",getListUserController)
routes.get("/users",getUsersController)
routes.post("/users",createUserController)

