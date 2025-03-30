import express from 'express';
import mongoose from 'mongoose';  // because mongoose in a schema less by default

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        required:true
    },

    
})

const authModel = mongoose.model ('user', authSchema);
export default authModel;