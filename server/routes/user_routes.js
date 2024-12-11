const express = require('express');
const router = express.Router();

const Register = require('../controllers/user_controllers/register');
const Login = require('../controllers/user_controllers/login');
const Get_Users = require('../controllers/user_controllers/get_all_users');
const Edit_User = require("../controllers/user_controllers/edit_user");
const Delete_User = require("../controllers/user_controllers/delete_user");

router.post('/login' , Login);
router.post('/register' , Register);
router.get("/all_users", Get_Users)
router.put("/edit_user", Edit_User);
router.delete("/delete_user", Delete_User);

module.exports = router;