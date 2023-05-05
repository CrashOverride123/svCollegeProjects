// import { uModel } from '../../database/db.js';
// //==================================================================================
// // next we check if the user information matches the one in the db
// //==================================================================================
// const isReg = () => async () => {
//   const result = await uModel.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   if (result == null) {
//     res.json('user not found');
//   } else {
//     res.json(result);
//   }
// };
// findIfUserExist();
// //================================================================================
// window.addEventListener('inspection', isReg);
// document.getElementById('exec').addEventListener('click', isReg);
