// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 



export default function NavBar() {
return (
    <Box sx={{ flexGrow: 1,}}>
        <AppBar sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "700" }}>
            Sepan Mustafa
            </Typography>
            <Box sx={{ display: "flex", maxWidth: "300px", }}>
            <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500",}}>
            <Link to='/'>Home</Link>
            </Button>

            <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500" }}>
            <Link to='/About'>About</Link> 
            </Button>

            <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500" }}>
            <Link to='/Project'>Project</Link>
            </Button>

            <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500" }}>
            <Link to='/Contact'>Contact</Link>
            </Button>
            </Box>

        </Toolbar>
        </AppBar>
    </Box>
);
}