//jshint esversion:8

const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  available:{
    type:Boolean,
    required:true
  },
  image:{
    type:String,
    required:true
  }

});

module.exports = mongoose.model("book",bookSchema);
