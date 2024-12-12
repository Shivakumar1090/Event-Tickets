const Users = require('../../db/models/user_model');
const deLinkFile = require('../../utility/deLinkFile');

const Delete_User = async(req,res) => {
    try{
        const {id} = req.params;
        let deletingUser = await Users.findById(id).exec();

        await Users.findByIdAndDelete(id);

        if(deletingUser.profile_pic)
            deLinkFile("uploads/"+deletingUser.profile_pic);

        return res.json({Message: "success"});
    } catch(err){
        console.error(err);
        return res.status(500).send({ Message: "Internal server error" });
    }
}   

module.exports = Delete_User;