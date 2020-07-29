import { Schema, model } from "mongoose";
import { IUser } from "../interfaces"

const userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true}
})

export default model<IUser>('user', userSchema)