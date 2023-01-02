import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            validate: {
                validator: /^[a-zA-Z0-9]+$/, 
                message: "Usernames must be aplanumeric"
            },
        }
    },
    {timestamps : true, versionKey: false}
)

const userModel = mongoose.model("users", UserSchema);
export default userModel;