import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            validate: {
                validator: /^[a-zA-Z0-9_]/, 
                message: "Usernames must be 3 to 16 characters long and contain only alphanumeric characters and underscores (_)."
            },
        }
    },
    {timestamps : true, versionKey: false}
)

const userModel = mongoose.model("users", UserSchema);
export default userModel;