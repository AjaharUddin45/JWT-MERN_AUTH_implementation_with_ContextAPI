const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const User = require("./models/user.js");

main().then(()=>{
    console.log("Database connection successfull!!");
}).catch((err)=> console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/UserAuth');
}

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));


app.use("/", require("./routes/userRoutes.js"));




app.listen(8000,()=>{
    console.log("app is listening on port 8000");
});