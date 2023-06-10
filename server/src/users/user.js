const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  firstName: {type: String}, 
  lastName:  {type: String}, 
  phoneNumber: {type: Number}, 
  password: {type: String},
  Status: {type: String, default: 'pending'}
  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User