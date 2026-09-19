const express = require("express");
const router = express.Router();
const cors = require("cors");
const  {test,registerUser,loginUser,getProfile} = require("../controllers/userControllers.js");


//middleware
router.use(
    cors({
        credentials:true,
        origin:"http://localhost:5173",
}));

router.get("/",test);//test is a function which we will define in our controllers files
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/profile",getProfile);

module.exports = router;