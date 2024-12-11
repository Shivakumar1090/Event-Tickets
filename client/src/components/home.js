import React from "react";
import { Box } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";
import HomeBg from "../Assets/bg.jpg";

import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();

    return ( 
        <Box>
            <Box style={container}>
            <Typography style={{color: '#fff'}} variant='h3' fontWeight='semi-bold'>Hey Come On, Book your Tickets</Typography>
            <Typography style={{color: '#fff'}} variant="h6">Join with us e booking platform</Typography>
            <Stack direction='row' gap={2}>
                <Button 
                    variant="contained" 
                    onClick={() => Navigate(`/login`)}
                >
                    Book tickets
                </Button>
                <Button variant="outlined">Login</Button>
            </Stack>
        </Box>
        </Box>
     );
}

const container = {
    position: 'relative',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${HomeBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}


export default Home;