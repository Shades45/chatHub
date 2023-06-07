const User = require('../users/user')

const registerNewUser=  async (req,res)=>{
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
      })
    }
  }

 const loginUser=  async (req,res)=>{
 console.log(req.body)
  const data = await User.findOne({phoneNumber: req.body.phoneNumber})
  if(data){
    res.json({
    isLoggedIn: true,
    msg:  "success"
    })
  }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
  }

}
  module.exports = {registerNewUser,loginUser}