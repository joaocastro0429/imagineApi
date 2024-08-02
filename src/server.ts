import express from 'express'
import {authMiddleware} from './middleware'
import {routes} from './routes'

express()

.use(authMiddleware)

.use(routes)

.listen(3333,()=>console.log("sever running port http://localhost:3333"))