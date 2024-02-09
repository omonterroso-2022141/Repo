// Configuracion de Express

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from "dotenv"
import userRoutes from '../src/user/user.routes.js'
import animalRoutes from '../src/animal/animal.routes.js'

//Configuraciones
const app = express() //Crear el servidor
config()
const port = process.env.PORT || 3200


//Configurar el servidor de express
app.use(express.urlencoded({extended: false}))
app.use(express.json()) //Aceptar o negar solicitudes diferentes
app.use(cors()) //Aplica capa de seguridad
app.use(helmet())
app.use(morgan('dev')) //Crea logs de solicitudes al servidor HTTP

//Declaracion de rutas
app.use(userRoutes)
app.use(animalRoutes)

//Levantar el servidor
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP runnig in port ${port}`)
}