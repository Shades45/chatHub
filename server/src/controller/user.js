const User = require('../users/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerNewUser=  async (req,res)=>{
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashPassword
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
      })
    }
  }

 const loginUser=  async (req,res)=>{
  //
  const data = await User.findOne({phoneNumber: req.body.phoneNumber})

  
  // const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
  
  if(data){
    const matchPassword = await bcrypt.compareSync(req.body.password, data.password);
    if (matchPassword) {
      const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
      res.json({
        isLoggedIn: true,
        msg:  "success",
        id: data._id,
        token: token,
        phoneNumber: data.phoneNumber
        })
      }else{
        res.json({
          isLoggedIn: false,
          msg: "invalid password"
        })
    }
  }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
  } 
}

const getAllUser =  async (req,res)=>{
  const data = await User.find()
  if(data){
    res.json({
    userList: data
    })
  }
}

module.exports = {registerNewUser, loginUser, getAllUser}