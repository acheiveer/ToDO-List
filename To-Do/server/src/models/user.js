import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:string,
        min:6,
        max:32,
        required:true,
    },
    password:{
        type:string,
        min:6,
        max:32,
        required:true,
    },
    email:{
        type:string,
        min:6,
        max:32,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.model("User",userSchema)
