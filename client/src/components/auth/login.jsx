import React, { useState } from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const { container, container1, input, heading, form } = require("./styles");

const { LOGIN } = require('../../apis/user');

const Login = () => {
    const navigate = useNavigate();
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginHandler = () => {
        const checkuser = {
            email: email,
            password: password,
        }

        axios.post(LOGIN, checkuser)
            .then(async (resp) => {
                console.log(resp.data);
                // resp.status === 200 ? toast.success("Successfully Logged in") : toast.warn(resp.data.Message);
                if(resp.data.isAdmin === true)navigate('/admin');
                else navigate('/users_list');
            })
            .catch(async (err) => {
                console.log(err);
                // toast.error(err.response.data.Message);
            })
    }

    return (
        <Box style={container}>
            <Box sx={container1}>
                <Typography variant="h4" style={heading}>Login</Typography>
                <Box  width={{xs: '300px',md: '400px'}} style={form}>
                    <InputBase
                        style={input}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputBase
                        style={input}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button  
                        marginTop="15px"
                        onClick={LoginHandler}
                        variant="contained"
                        fullWidth
                    >Login</Button>
                    <Typography style={{ fontSize: "17px", marginTop: '15px' }} >
                        Don't have an account yet?{" "}
                        <span> <Link to="/register" style={{ color: '#000' }}> Signup </Link> </span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}


export default Login;