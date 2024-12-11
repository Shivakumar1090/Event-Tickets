const Users = require('../../db/models/user_model');

const Delete_User = async(req,res) => {
    try{
        const {id} = req.params;
        let deletingUser = await Users.findById(id).exec();

        await Users.findByIdAndDelete(id);

        return res.json({Message: "success"});
    } catch(err){
        console.error(err);
        return res.status(500).send({ Message: "Internal server error" });
    }
}   

module.exports = Delete_User;