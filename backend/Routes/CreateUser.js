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
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location
        })
        .then(res.json({sucess:true}));
    }
    catch(error){
        console.log(error);
        res.json({sucess:false});
    }
    });


    router.post("/loginuser",[
      body('email').isEmail(),
 body('password','incorrect password').isLength({ min: 5 })],
    async(req,res)=>{
      let email = req.body.email ;
      try {
           let userData = await User.findOne({email});
           if(!userData){
            return res.status(400).json({errors: "try login with correct creditential"})
           } 
           if(req.body.password !== userData.password){
            return res.status(400).json({errors: "try login with correct creditential"})
           }
           return res.json({sucess:true})
          }catch(error){
            console.log(error)
            res.json({sucess:false});
           }
          
           })
          
  module.exports = router;

