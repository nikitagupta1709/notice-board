import userModel from "../models/user.model.js";

export const login = async(req, res) => {
    try {
        const user = req.body;
        let { username } = user;
        
        let newUser = await userModel.create({username});
        newUser = newUser.toJSON();
        return res.status(200).send({
            status: true,
            message: "User logged in successfully",
            data: newUser
        })
        
        
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }   
}