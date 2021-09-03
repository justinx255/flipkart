require("dotenv").config({})

import express from 'express';
import mongoose from 'mongoose'


const app=express();
const PORT = process.env.PORT || 7000;


mongoose.connect(<string>process.env.MONGO_URI, {
    socketTimeoutMS: 45000,
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});


const connection = mongoose.connection;
connection.once('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('MongoDB connected!');
});


app.listen(PORT,()=>{console.log(`Server is successfully running on Port ${PORT}`)})