//==========================================================================
// definitions of the dependencies in order to run the pages
//==========================================================================
const express = require('express');

const router = express.Router();
const path = require('path');
// const dataBase = require('../database/db');

const uModel = require('../database/db');
const pModel = require('../database/db');
const oModel = require('../database/db');


//==========================================================================
// asking the server to retrieve the specified files from our application
//==========================================================================
// router.get('/signUp', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/product.html'));
// });
//==========================================================================
router.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/product.html'));
});


router.post('/addUser', async (req, res) => {

  let temp = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  console.log(temp);

    let result = await schemas.uModel.findOne({email: req.body.email});

    if (result == null) {

      await schemas.uModel.insertMany(temp)
        res.redirect('/');

    } else {
        res.json({inUse: 'Email is already taken'});


    }
})

router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/index.html'));
})


//==========================================================================
router.get('/', (req, res) => {});
//==========================================================================
// posting the response from the server
//==========================================================================
router.post('/products', (req, res) => {});
//==========================================================================
router.post('/signUp', (req, res) => {});

//==========================================================================
// exporting the router, so we could tell the app from where it gets the
// location of the needed pages to run them correctly
//==========================================================================
module.exports = router;

