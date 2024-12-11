const User = require('../../db/models/user_model');

const Edit_User = async (req,res) => {
    console.log("edit");
    try{
        const {id} = req.params;
        
        let changingUser = await User.findById(id).exec();

        await User.findByIdAndUpdate(id,req.body);
        
        return res.json({Message: "success"});
    } catch(err){
        console.error(err);
        return res.status(500).send({ Message: "Internal server error" });
    }
}

module.exports = Edit_User;