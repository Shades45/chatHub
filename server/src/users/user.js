const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  email: {type: String}, 
  password:  {type: String}, 
  phoneNumber: {type: String}, 
  cartCount: {type: Number, default:0},
  favList: [{type: String}]
  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User