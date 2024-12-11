const User = require('../../db/models/user_model');

const Get_Users = async (req,res) => {
    try{
        let data = await User.find();
        return res.send(data);
    }catch(err){
        console.error(err);
        return res.status(500).send({ Message: "Internal server error" });
    }
}

module.exports = Get_Users;