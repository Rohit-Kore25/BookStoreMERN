import Book from './Book';
import axios from 'axios';
import './Book.css'
import React,{useEffect, useState} from 'react'

const URL = "http://localhost:5000/books";

async function fetchHandler(){
   return await axios.get(URL)
    .then(function(res){
        console.log(res.data);
        return res.data;
        
    })
}

const Books = () => {

    const [books, setbooks] = useState([]);

    useEffect(() => {

        fetchHandler().then( function(data){
            return setbooks(data.books)
        });
     
    }, []);

    console.log(books);
    
  return (
    <div>
        <ul>
           {books.map(function(book,i){
            return(<li  key = {i}>
                <Book book = {book}/>
            </li>
               
            );
           })}
        </ul>
    </div>
  )
}

export default Books