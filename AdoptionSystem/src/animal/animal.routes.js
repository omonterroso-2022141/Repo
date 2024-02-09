'use strict'

import express from "express"
import { deletePet, registerPet, serchPet, testPet, updatePet } from "./animal.controller.js"

const api = express.Router()

api.get('/testPet', testPet)
api.post('/registerPet', registerPet )
api.put('/updatePet/:id', updatePet)
api.delete('/deletePet/:id', deletePet)
api.get('/serchPet/:namePet', serchPet)

export default api
