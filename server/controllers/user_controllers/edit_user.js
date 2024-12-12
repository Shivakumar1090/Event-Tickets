const User = require('../../db/models/user_model');
const deLinkFile = require('../../utility/deLinkFile');

const Edit_User = async (req,res) => {
    console.log("edit");
    console.log(req.body);
    try{
        const {id} = req.params;

        if(req.file){
            req.body.profile_pic = 'user_profile_pics/'+req.file.filename;
        }
        
        let changingUser = await User.findById(id).exec();

        if(req.file && changingUser.profile_pic)
            deLinkFile("uploads/" + changingUser.profile_pic);

        await User.findByIdAndUpdate(id,req.body);
        
        return res.json({Message: "success"});
    } catch(err){
        console.error(err);
        return res.status(500).send({ Message: "Internal server error" });
    }
}

module.exports = Edit_User;