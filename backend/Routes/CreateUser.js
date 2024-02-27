 const express=require('express');
 const router =express.Router();
 const User = require('../models/User');
 router.post("/CreateUser",async(req,res)=>{
    try{
        await User.create({
            name:"jitesh",
            password:"123456",
            email:"jitesj123@gmail.com",
            location:"punjab"
        });
        res.json({sucess:true});
    }
    catch(error){
        console.log(error);
        res.json({sucess:false});
    }
    });
  module.exports = router;

