
const bcrypt = require("bcryptjs");
const UserModel = require("../../db/models/user_model");

const Register = async (req, res) => {
    try {
        let toAddUser = req.body;

        const hasUserEmail = await UserModel.findOne({
            email: toAddUser.email.trim(),
        });

        if (hasUserEmail) {
            return res.status(404).send({ Message: "User with this email already existed" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password , 12);

        const User = {
            ...toAddUser,
            password: hashedPassword,
        };

        const newUser = await new UserModel(User);

        await newUser.save();

        return res.status(200).send({ Message: "User registered successfully",  newUser});
    } catch (e) {
        return res.status(500).send({ Message: "Internal server error" });
    }
};

module.exports = Register;