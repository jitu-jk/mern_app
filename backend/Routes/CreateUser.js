 const express=require('express');
 const router =express.Router();
 const User = require('../models/User');
 const { body, validationResult } = require('express-validator');

 router.post("/CreateUser",[
 
 body('name').isLength({ min: 5 }),
 body('password','incorrect password').isLength({ min: 5 }),
 body('email').isEmail(),],
 async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

        

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

