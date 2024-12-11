const bcrypt = require("bcryptjs");
const UserModel = require("../../db/models/user_model");

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const User = await UserModel.findOne({ email });

        if (!User) {
            return res.status(404).send({ Message: "User not Found" });
        }

        const isPasswordSame = await bcrypt.compare(password, User.password);
        
        if (!isPasswordSame) {
            return res.status(404).send({ Message: "Password is no valid" });
        }
    
        return res.status(200).send({ Message: "User logged in successfully", User});
    } catch (e) {
        return res.status(404).send({ Message: "Internal server error" });
    }
};

module.exports = Login;