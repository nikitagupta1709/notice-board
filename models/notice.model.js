import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
    {
        desc:{
            type:String,
            required:true,
            minlength: 100
        },
        username : {
            type: String,
            required:true
        }
    },
    {timestamps : true, versionKey: false}
)

const noticeModel = mongoose.model("notice", noticeSchema);
export default noticeModel;