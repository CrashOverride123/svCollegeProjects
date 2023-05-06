//==========================================================================
// definitions of the dependencies in order to run the pages
//==========================================================================
const express = require('express');

const router = express.Router();
const path = require('path');
// const dataBase = require('../database/db');

const schema = require('../database/db.js');

//==========================================================================
// asking the server to retrieve the specified files from our application
//==========================================================================

//==========================================================================

router.post('/addUser', async (req, res) => {

  console.log(req.body)

  let result = {};

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  try
  {
    const user = new schema.uModel({name: name, email: email, password: password});
    result = await user.save();
  }
  catch (err) 
  { 
    result.error = err.message;
  } 
  finally 
  {
    res.send({status:200, message: 'success', result: result});
  }

})
// router.post('/addUser', async (req, res) => {

//   let temp = {
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   }
//     let result = await schemas.uModel.findOne({email: req.body.email});

//     if (result == null) {

//       await schemas.uModel.insertMany(temp)
//         res.redirect('/');
//         console.log(temp);
        
//       } else {
//         res.send({inUse:'Email is already taken'});
//     }
// })

// router.get('/', async (req, res) => {

//     res.sendFile(path.join(__dirname, '../public/index.html'));
    
// })

//==========================================================================
//==========================================================================
// posting the response from the server
//==========================================================================
//==========================================================================
// router.post('/signUp', (req, res) => {});

//==========================================================================
// exporting the router, so we could tell the app from where it gets the
// location of the needed pages to run them correctly
//==========================================================================
module.exports = router;

