import { Button, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

  const navigate = useNavigate();

  const [inputs, setinputs] = useState({
    name:"",
    description:"",
    price:"",
    author:"",
    image:""
  })

  const [checked, setchecked] = useState(false);



  function handleChange(event){
    setinputs(function(prevState){
      return({
        ...prevState,
        [event.target.name] : event.target.value
      });
    })
  }

  async function sendRequest(){
    await axios.post("http://localhost:5000/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked),

    }).then(function(res){
      return(res.data);
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    //console.log(inputs);
    sendRequest().then(function(){
      navigate("/books")
    })
  }

  return (
    <form onSubmit = {handleSubmit}>
    <Box display="flex" flexDirection='column' justifyContent={'center'} maxWidth={700} alignContent = 'center' alignSelf='center' marginLeft={'auto'} marginRight = {'auto'} marginTop='50px'>
      <FormLabel>Book Name</FormLabel>
      <TextField style={{marginTop:'0', marginBottom:'20px'}} placeholder='Enter book name' value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'/>

      <FormLabel>Author</FormLabel>
      <TextField style={{marginTop:'0', marginBottom:'20px'}} placeholder='Enter book author' value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'/>

      <FormLabel>Description</FormLabel>
      <TextField style={{marginTop:'0', marginBottom:'20px'}} placeholder='Enter book description' value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'/>

      <FormLabel>Price</FormLabel>
      <TextField style={{marginTop:'0', marginBottom:'20px'}} placeholder='Enter price' value={inputs.price} onChange={handleChange} type = "number" margin='normal' fullWidth variant='outlined' name='price'/>

      <FormLabel>Image(URL)</FormLabel>
      <TextField style={{marginTop:'0', marginBottom:'20px'}} placeholder='Paste image URL '  value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'/>

      
      <FormControlLabel control={<Checkbox checked = {checked} onChange = {() => setchecked(!checked)} />} label="Available" />
      
  

      <Button variant = "contained" type = "submit">Add book</Button>
      </Box>
      <br></br>
    </form>
  )
}

export default AddBook