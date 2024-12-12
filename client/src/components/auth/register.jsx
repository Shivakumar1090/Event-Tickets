import React, { useState } from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const { container,container2, input, heading, form } = require("./styles");

const { REGISTER } = require('../../apis/user');

const Register = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profile_pic,setProfilePic] = useState(null);

    const registerHandler = (e) => {
        e.preventDefault()
        const newuser = {
            name: name,
            email: email,
            password: password,
        }

        // const newUser = new FormData();
        // newUser.append("name", name);
        // if (profile_pic) {
        //     newUser.append("profile_pic", profile_pic); // Only append if profile_pic is not null
        // }
        // newUser.append("email", email);
        // newUser.append("password", password);

        // console.log([...newUser.entries()]);

        // console.log(newUser);

        axios.post(REGISTER, newuser)
            .then(async (res) => {
                console.log(res);
                // await res.status === 200 ? toast.success(res.data.Message) : toast.warn(res.data.Message);
                await Navigate('/login')
            })
            .catch(async (err) => {
                console.log(err);
                // await toast.error(err.response.data.Message);
            })
    }

    return (
        <div>
            <Box style={container}>
                <Box sx={container2}>
                    <Typography style={heading}>
                        Create account
                    </Typography>
                    <Box  width={{xs: '300px',md: '400px'}} style={form}>
                        <InputBase
                            style={input}
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                        {/* <Box textAlign='left' padding='5px'>
                            <input
                                type='file'
                                size='medium'
                                // onChange={(e) => setProfilePic(e.target.files[0])}
                                onChange={(e) => {
                                    console.log(e.target.files[0]);  // Check if the file is being selected
                                    setProfilePic(e.target.files[0]);
                                }}
                            />
                        </Box> */}
                        <Button  
                            marginTop="15px"
                            onClick={(e) => registerHandler(e)}
                            variant="contained"
                            fullWidth
                        
                        >Register</Button>
                    
                        <Typography style={{ fontSize: "17px", marginTop: '15px' }} >
                            if you have account already then{" "}
                            <span><Link to="/login" style={{ color: '#791314' }}>Login Here</Link></span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Register;