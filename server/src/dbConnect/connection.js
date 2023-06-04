const mongoose = require('mongoose');
const connectDb = async() => {
    const connect = await mongoose.connect('mongodb://127.0.0.1:27017/chatDb');
    if(connect){
      console.log("Successfully connected to DB")
    }else{
      console.log("Failed to connect to DB")
    }
  }

module.exports = connectDb