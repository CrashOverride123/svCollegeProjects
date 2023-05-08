//==========================================================================
// here we define the dependencies of the db itself and in the end of the
// file we export it so we can access it from anywhere needed
//==========================================================================
const dataBase = require('mongoose');

const host = 'mongodb+srv://toni97:Nz7eqh6b@svshop.7rozj8r.mongodb.net/svShop';
//==========================================================================
// Here we create the database connectivity interface
//==========================================================================
dataBase
  .connect(host)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error connecting to DB', err);
  });
// =========================================================================
// This will be the main start point for the database schema creation
//==========================================================================
const userSchema = dataBase.Schema({
  name: String,
  email: {type: String, unique:true},
  password: String,
});
//==========================================================================
const productList = dataBase.Schema({
  name: String,
  price: Number,
});
//==========================================================================
const schemaOfOrders = dataBase.Schema({
  userName: String,
  ordersArr: Array,
});
//==========================================================================
const uModel = dataBase.model('User', userSchema);
const pModel = dataBase.model('Product', productList);
const oModel = dataBase.model('Orders', schemaOfOrders);
//==========================================================================
// This is the section of the db models for the website
//==========================================================================
// module.exports = dataBase;
module.exports = { 
    uModel,
    pModel,
    oModel,
}
