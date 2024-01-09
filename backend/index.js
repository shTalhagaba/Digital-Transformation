const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const mongoose = require('mongoose');
const {  getUserDetails, createUserProfile, deleteUserDetails } = require("./controller/user.controller");


mongoose.connect('mongodb+srv://admin:admin@cluster0.r48my.mongodb.net/Auth?retryWrites=true&w=majority',{maxPoolSize:10}).then(()=>{
    console.log('Database connected')
}) 

const app = express();

//middlewares
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));


app.get("/api/v1/userDetails",getUserDetails)
app.post("/api/v1/createUserProfile",createUserProfile)
app.delete("/api/v1/deleteUserDetails",deleteUserDetails)


app.listen(4001,()=>{
    console.log('Server started')
})