//==========================================================================
// definitions of the dependencies in order to run the pages
//==========================================================================
const express = require('express');

const router = express.Router();
const path = require('path');
const dataBase = require('../database/db');

//==========================================================================
// asking the server to retrieve the specified files from our application
//==========================================================================
router.get('/signUp', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/signUp.html'));
});
//==========================================================================
router.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/product.html'));
});
//==========================================================================
// posting the response from the server
//==========================================================================
router.post('/', (req, res) => {
  
});
//==========================================================================
// exporting the router so we could tell the app from where it gets the
// location of the needed pages to run them correctly
//==========================================================================
module.exports = router;
