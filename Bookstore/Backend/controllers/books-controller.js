//jshint esversion:8
//controllers contain the controlling function contained within the routes

const Book = require("../model/book.js");

//function to get all the books
async function getAllBooks(req,res,next){

  let books;

  try {
    books = await Book.find();
  } catch (err) {
    console.log(err); 
  }

  if(!books){
    return res.status(404).json({message:"No products found!"});
  }

  return res.status(200).json({books:books});
}

//function to add a new book to the Database
async function addBook(req,res,next){

  const {name,author,description,price,available,image} = req.body;

  let book;

  try {
    book = new Book({
      name:name,
      author:author,
      description:description,
      price:price,
      available:available,
      image:image
    });

    await book.save();

  } catch(err){
    console.log(err);
  }

  if(!book){
    return res.status(500).json({message:"Unable to add :("});
  }else{
    return res.status(201).json({book});
  }

}

//function to get a specific book
async function getById(req,res,next){

  const id = req.params.id;
  let book;

  try {
    book = await Book.findById(id);
  }catch(err){
    console.log(err);
  }

  if(!book){
    return res.status(404).json({message:"No such book found :("});
  }else{
    return res.status(200).json({book:book});
  }
}

//function to update book
async function updateBook(req,res,next){

  const id = req.params.id;
  const {name,author,description,price,available,image} = req.body;

  let book;

  try {
    book = await Book.findByIdAndUpdate(id,{
      name:name,
      author:author,
      description:description,
      price:price,
      available:available,
      image:image
    });

    book = await book.save();

  }catch(err){
    console.log(err);
  }

  if(!book){
    return res.status(404).json({message:"Updating failed :("});
  }else{
    return res.status(200).json({book:book});
  }

}

//function to delete a particular book
async function deleteBook(req,res,next){

  const id = req.params.id;
  let book;

  try {
    book = await Book.findByIdAndRemove(id);
  }catch(err){
    console.log(err);
  }

  if(!book){
    return res.status(404).json({message:"Unable to delete the book :("});
  }else{
    return res.status(200).json({message:"Product successfully deleted :)"});
  }
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
