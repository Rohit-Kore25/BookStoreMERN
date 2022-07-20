import React, {useState} from 'react'
import {AppBar, Toolbar, Typography,Tab,Tabs} from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    const [value, setValue] = useState(0);

    function handleChange(event,val){
        console.log(value);
        setValue(val);
    }

    return (
        <div>
            <AppBar sx = {{backgroundColor:'black'}} position='sticky'>
                <Toolbar>

                    <Typography>
                        <AutoStoriesIcon/>
                    </Typography>
                    <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value = {value} onChange = {handleChange}>
                    <Tab LinkComponent={NavLink} to = '/' label = 'Home'/>
                    <Tab LinkComponent={NavLink} to = '/add' label = 'Add Book'/>
                    <Tab LinkComponent={NavLink} to = '/books' label = 'All books'/>
                    <Tab LinkComponent={NavLink} to = '/about' label = 'About Us' />
                    </Tabs>

                </Toolbar>

            </AppBar>
        </div>
    )
} 

export default Header