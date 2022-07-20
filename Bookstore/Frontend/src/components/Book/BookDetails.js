import React, {useEffect, useState} from 'react'
import {Button, FormLabel, TextField} from '@mui/material'
import {Box} from '@mui/system'
import FormControlLabel from '@mui/material/FormControlLabel';
import {useParams,useNavigate} from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'

const BookDetails = () => {

    const navigate = useNavigate()

    const [inputs, setinputs] = useState({})
    const [checked, setchecked] = useState(false)

    const id = useParams().id;

    useEffect(() => {
        async function fetchHandler() {
            return (
                await axios.get(`http://localhost:5000/books/${id}`) //too much importance of return!
                    .then(function (res) {
                    return (res.data);
                })
            )
        }

        fetchHandler().then(function (data) {
            setinputs(data.book);
        });
    }, [id])

    function handleChange(event) {
        setinputs(function (prevdata) {
            return ({
                ...prevdata,
                [event.target.name]: event.target.value
            })
        })
    }

    async function sendRequest() {
        await axios.put(`http://localhost:5000/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(function(res){
            return(res.data);
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        sendRequest()
        .then(function(){
            navigate("/books");
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box
                display="flex"
                flexDirection='column'
                justifyContent={'center'}
                maxWidth={700}
                alignContent='center'
                alignSelf='center'
                marginLeft={'auto'}
                marginRight={'auto'}
                marginTop='50px'>
                <FormLabel>Name</FormLabel>
                <TextField
                    value={inputs.name}
                    onChange={handleChange}
                    margin='normal'
                    fullWidth="fullWidth"
                    variant='outlined'
                    name='name'/>

                <FormLabel>Author</FormLabel>
                <TextField
                    value={inputs.author}
                    onChange={handleChange}
                    margin='normal'
                    fullWidth="fullWidth"
                    variant='outlined'
                    name='author'/>

                <FormLabel>Description</FormLabel>
                <TextField
                    value={inputs.description}
                    onChange={handleChange}
                    margin='normal'
                    fullWidth="fullWidth"
                    variant='outlined'
                    name='description'/>

                <FormLabel>Price</FormLabel>
                <TextField
                    value={inputs.price}
                    onChange={handleChange}
                    type="number"
                    margin='normal'
                    fullWidth="fullWidth"
                    variant='outlined'
                    name='price'/>

                <FormLabel>Image</FormLabel>
                <TextField
                    value={inputs.image}
                    onChange={handleChange}
                    margin='normal'
                    fullWidth="fullWidth"
                    variant='outlined'
                    name='image'/>

                <FormControlLabel
                    control={<Checkbox checked = {
                        checked
                    }
                    onChange = {
                        () => setchecked(!checked)
                    } />}
                    label="Available"/>

                <Button variant="contained" type="submit">Update book</Button>
            </Box>
        </form>
    )
}

export default BookDetails