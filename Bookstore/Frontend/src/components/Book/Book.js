import { Button } from '@mui/material';
import React from 'react';
import './Book.css'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Book = (props) => {
    const {_id,name,author,description,price,image} = props.book;
    
    const navigate = useNavigate();

    console.log(_id);

    async function deleteHandler(){
      console.log("I was called!");
      return (await axios.delete(`http://localhost:5000/books/${_id}`)  //a way too much importance of the return statement!
      .then(function(res){
        return(res.data);
      })
      .then(function(){
        navigate("/");
      }).then(function(){
        navigate("/books");
      }))
      
    }

  return (
    <div className = 'card'>
    
        <img src = {image} alt = {name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>$ {price}</h2>
        <Button LinkComponent={Link} to = {`book/${_id}`} sx = {{mt:"auto"}}>Update</Button>
        <Button onClick={deleteHandler} sx = {{mt:"auto"}}>Delete</Button>
    </div>
  )
}

export default Book