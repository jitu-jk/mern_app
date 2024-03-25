 const express=require('express');
 const router =express.Router();
 const User = require('../models/User');
 const { body, validationResult } = require('express-validator');
 const jwt=require("jsonwebtoken");
 const bcrypt = require("bcryptjs");
 const jwtSecret ="MyNameisEndToEndNarutovuygvuyg$#"

 router.post("/CreateUser",[
  body('email').isEmail(),
 body('name').isLength({ min: 5 }),
 body('password','incorrect password').isLength({ min: 5 })],
 async(req,res)=>{ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)

        

     try{
        await User.create({
            name:req.body.name,
            password:secPassword,
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
           
            const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
           if(!pwdCompare){
            return res.status(400).json({errors: "try login with correct creditential"})
           }

           const data={
            user:{
              id:userData.id
            }
           }

           const authToken = jwt.sign(data,jwtSecret)

           return res.json({sucess:true,authToken:authToken})
          }catch(error){
            console.log(error)
            res.json({sucess:false});
           }
          
           })
          
  module.exports = router;

