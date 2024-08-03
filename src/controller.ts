import {Request,Response}  from "express";

const person=[]

export async function getUsersController(req:Request,res:Response){
    return res.json({messege:"User list"})
}

export function getListUserController(req:Request,res:Response){
    const {id} = req.params
    return res.json({messege:`
    User with id: ${id}`})
}


export function createUserController(req:Request,res:Response){
    const {name,age}=req.body

    person.push({name,age})

    return res.json({
        messege:`Create user ${name} ${age}`
    })
}