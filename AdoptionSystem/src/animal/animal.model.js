import mongoose from "mongoose";

const animalSchema = mongoose.Schema({

    namePet : {
        type: String,
        require: true
    },

    gender : {
        type: String,
        require: true
    },

    age : {
        type: String,
        require: true
    },

    breedDog : {
        type: String,
        require: true
    },

    descriptionPet:{
        type: String,
        require: true 
    }



})

export default mongoose.model ('animal', animalSchema)