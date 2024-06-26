const express=require('express');
const dotenv=require('dotenv').config()
const cors=require('cors')
const {mongoose} =require('mongoose')
const cookieParser = require('cookie-parser')
const app=express();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("database connected"))
.catch((err)=>console.log('databse not connected',err))

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

app.use('/api',require('./routes/authRoutes'))

const port=8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))