//==========================================================================
// this will be the app main entry point for the web to start
//==========================================================================
const express = require('express');

const app = express();
const bodyParse = require('body-parser');
const path = require('path');
const router = require('./routes/router');
//==========================================================================
//
//==========================================================================
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
//==========================================================================
// definition of the public app folder
//==========================================================================
app.use(express.static(path.join(__dirname, 'public')));
//==========================================================================
// tells the web app that it has 3 pages to run from router
//==========================================================================
app.use('/', router);
// app.use('/signUp', router);
app.use('/product', router);
//==========================================================================
// exporting the public app to the server
//==========================================================================
module.exports = app;
