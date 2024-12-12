import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { Button, Checkbox, FormControlLabel, Grid, Modal, Paper, TextField, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const { GET_USERS, DELETE_USER, EDIT_USER, ADD_USER } = require("../apis/user");

const UsersList = () => {
    const navigate = useNavigate();
    
    const [Data, setData] = useState([]);
    const [selectedHover, setSelectedHovered] = useState(null);

    const [openEdit, setOpenEdit] = useState(false);

    const [editName, setEditName] = useState("");
    const [editIsAdmin, setEditIsAdmin] = useState("");
    const [pickedId, setPickedId] = useState("");

    useEffect(() => {
        axios.get(GET_USERS)
            .then(async (res) => {
                console.log(res);
                await setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteHandler = (id) => {
        axios.delete(DELETE_USER + id)
            .then(() => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const editHandler = (id) => {
        const editData = {
            "name": editName,
            "isAdmin": editIsAdmin
        }
        console.log(editData);

        axios.put(EDIT_USER + id, editData)
            .then(() => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const editBox = (
        <Box style={ModalStyle}>
            <Typography style={heading}>Edit this User</Typography>
            <TextField
                style={input}
                variant="standard"
                defaultValue={editName}
                label='Name'
                onChange={(e) => setEditName(e.target.value)}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={editIsAdmin}
                        onChange={(e) => setEditIsAdmin(e.target.checked)}
                        color="primary"
                    />
                }
                label="Is Admin"
            />
            <Button
                onClick={() => editHandler(pickedId)}
                style={{ width: '200px', background: '#222', color: '#fff', marginTop: '10px' }}
            >Edit</Button>
        </Box>
    )


    return (<>{true ?
        <Box padding='30px'>
            <Box display='flex' justifyContent='space-between'>
                <Typography style={heading}>All Users</Typography>
                <Button style={addBtn} onClick={() => Navigate("/register")}>Add a User</Button>
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    Data.map((user, hoverkey) => {
                        return (
                            <Grid item xs={6} key={user._id}>
                                <Paper style={row}
                                    key={user._id}
                                    hoverkey={user._id}
                                    elevation={hoverkey === selectedHover ? 3 : 0}
                                    onMouseOut={() => setSelectedHovered(null)}
                                    onMouseOver={() => setSelectedHovered(hoverkey)}
                                >
                                    <Box display='flex'>
                                        {/* <img src={`${DOMAIN}/${user.img}`} alt='..' style={img}></img> */}
                                        <Typography style={name} >{user.name}</Typography>
                                        <Box style={{ marginTop: 'auto', marginBottom: 'auto', }}>
                                            <Typography style={word}>{user.email} email</Typography>
                                            {/* <Typography style={word} fontWeight='bold'> {user.price}</Typography> */}
                                        </Box>
                                    </Box>
                                    <Box style={{ marginTop: 'auto', marginBottom: 'auto', }}>
                                        <Button onClick={() => {
                                            setEditName(user.name);
                                            setEditIsAdmin(user.isAdmin);
                                            setPickedId(user._id);
                                            setOpenEdit(true);
                                        }}
                                            style={{ padding: '5px', background: '#550300', color: '#fff', textTransform: "capitalize", marginRight: '12px' }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            style={{ padding: '5px', background: '#13181E', color: '#fff', textTransform: "capitalize", }}
                                            onClick={() => deleteHandler(user._id)}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Modal open={openEdit} onClose={() => setOpenEdit(false)}>{editBox}</Modal>
        </Box> : <Navigate to="/" />}</>
    );
}

const row = {
    display: 'flex',
    padding: '10px',
    justifyContent: 'space-between',
    marginBottom: '15px',
    borderBottom: '1px solid #aaa',
    // borderRight: '1px solid #eee',
}

const addBtn = {
    fontSize: '17px',
    color: '#000',
    textDecoration: 'underline',
    textTransform: "capitalize",
}

const name = {
    fontSize: '25px',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '10px',
    fontWeight: 500,
    textTransform: 'capitalize'
}

const word = {
    fontSize: '15px',
    marginLeft: '15px',
}

const img = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
}

const heading = {
    fontWeight: "bold",
    fontSize: "30px",
    marginBottom: "15px",
};

const input = {
    margin: "7px",
    width: "400px",
    color: "#791314",
    // border: "1px solid #791314",
    // borderRadius: "5px",
    padding: "2px",
    background: '#fff',
};

const ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: '#fff',
    border: "none",
    borderRadius: "3px",
    textAlign: 'center',
    color: "black",
    width: 400,
    p: 4,
    paddingLeft: "3rem",
    paddingRight: "3rem",
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default UsersList;