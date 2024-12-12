import React from "react";
import { Box } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";
import HomeBg from "../Assets/bg1.jpg";

import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const Navigate = useNavigate();

    return ( 
        <Box>
            <Box style={container}>
                <Typography sx={{color: '#fff', mb: 2}} variant='h2' fontWeight='bold'>Grab your tickets, Enjoy your day!</Typography>
                <Typography sx={{color: '#fff', textAlign: 'center', mb: 1}} variant="h5">Join us at evening party and enjoy the new year party at 
                    <br/> Mellodian Community Park </Typography>
                <Stack direction='row' gap={2}>
                    <Button 
                        variant="contained" 
                        onClick={() => Navigate(`/login`)}
                        sx={{background: '#fff', color: '#000'}}
                    >
                        Book your tickets
                    </Button>
                    <Button sx={{background: '#fff', color: '#000'}} variant="outlined" onClick={() => Navigate(`/login`)}>Login</Button>
                </Stack>
            </Box>
        </Box>
     );
}

const container = {
    position: 'relative',
    display: 'flex',
    minHeight: '91vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${HomeBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
}


export default Home;