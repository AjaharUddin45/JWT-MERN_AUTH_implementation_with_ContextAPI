
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth.js");

 const test = (req,res)=>{
    res.json("test is working!!!");
}


//Register endpoints
const registerUser = async (req,res)=>{
        try {
            const {name,email,password} = req.body;
            //check if name was entered
            if(!name){
               return res.json({
                error: "name is required!!"
               });
            }
           
            //check email
            const exist = await User.findOne({email});
            if(exist){
                return res.json({
                    error:"Email is already taken"
                })
            }
             //check if password is good
            if(!password || password.length < 6){
                return res.json({
                    error:"password is required and atleast it should we 6 character long"
                })
            }
       
        const hasedPassword = await hashPassword(password);//for password hashing
         // saving user to the dataBase
         const user = await User.create({
                    name,
                    email,
                    password:hasedPassword,
        });
         return res.json(user);    

        } catch (err) {
            console.log(err);
        }
    
}

//Login endpoints
const loginUser = async (req,res) => {
        try{
            const {email,password} = req.body;
            // console.log(email);
            // console.log(password);
            
            //check if user exist
            const user = await User.findOne({email});
            // console.log(user);
            if(!user){
                return res.json({
                    error:"No user found!!!"
                });
            }
            //check if password match
            const match = await comparePassword(password, user.password);
            if(match){
                jwt.sign({email:user.email,name:user.name,id:user._id},process.env.JWT_SECRET,{},(err,token)=>{
                    if(err) throw err;
                    res.cookie("token",token).json(user);
                });
            }
            if(!match){
                return res.json({
                    error:"Password do not match!!!"
                });
            }

        }catch(err){
            console.log(err);
        }
}

const getProfile = (req,res)=>{
        const {token} = req.cookies;
        if(token){
            jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
                if(err) throw err;
                res.json(user);
            });
        }else{
            res.json(null);
        }

}


module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
}