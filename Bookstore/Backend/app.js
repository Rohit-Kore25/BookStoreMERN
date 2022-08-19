//jshint esversion:8

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/book-routes.js');

const app = express();
app.use(express.json());
app.use(cors());

const url = "mongodb+srv://RohitKore1425:<password>@cluster0.qka5f.mongodb.net/bookStore?retryWrites=true&w=majority";

mongoose.connect(url,function(err){
  if(!err){
    console.log("Database connected successfully!");
  }else{
    console.log(err);
  }
});

app.use("/books",router);    //it will be like, all routes are of the form: localhost:5000/books.somethingElse

app.listen(process.env.PORT || 5000, function(){
  console.log("The server is up and running!");
});
