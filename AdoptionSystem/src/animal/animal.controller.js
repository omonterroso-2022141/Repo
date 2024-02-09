'use strict'

import { checkUpdate } from '../../utils/validator.js'
import Animal from './animal.model.js'

export const testPet = (req, res) => {
    return res.send('Testing Animals')
}

export const registerPet = async (req, res) => {
    try {
        let data = req.body;
        console.log(data)
        let animal = new Animal(data)
        await animal.save()
        return res.send({ message: 'Registered successfully' })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering pet', err })
    }
}

export const updatePet = async (req, res) => {
    try {

        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Have sumbitted  some data that cannot be updated or missing data' })

        let updatePet = await Animal.findOneAndUpdate(
            { _id: id }, 
            data, 
            { new: true }
        )

        if (!updatePet) return res.status(401).send({ message: 'Pet not found and not updated' })
        //Responder con el dato actualizado
        return res.send({ message: 'Update animal', updatePet })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating account' })
    }
}

export const deletePet = async (req, res)=>{
    try {

        let { id } = req.params
        let deletedAnimal = await Animal.findOneAndDelete({_id: id})

        if(!deletedAnimal) return res.status(404).send({message: 'Animal not found and not deleted'})
        return res.send({message: `Account with pet ${deletedAnimal.name} deleted successfully`})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting animal'})
    }
}

export const serchPet = async (req, res)=>{
    try {
        let { namePet } = req.params
        let serchPetAnimal = await Animal.findOne({_namePet: namePet})
        if(!serchPetAnimal) return res.status(404).send({message: 'Animal not found '})
        return res.send({message: `Has been found ${serchPetAnimal.namePet} the pet`})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error serch animal'})
    }
}