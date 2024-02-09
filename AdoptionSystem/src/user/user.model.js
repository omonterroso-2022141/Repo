import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },

    password: {
        type: String,
        minLenght: [8, 'Password must be 8 character'],
        required: true
    },

    phone: {
        type: String,
        minLenght: 8,
        maxLenght: 8,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    role: {
        type: String,
        uppercase: true,
        enum: ['ADMIN', 'CLIENT'],
        required: true
    }
})

//pre moongose

export default mongoose.model('user',userSchema)