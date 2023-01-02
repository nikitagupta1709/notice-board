import noticeModel from "../models/notice.model.js";

// notice created
export const create = async(req, res) => {
    try {
        const notice = req.body;

        let newDesc = await noticeModel.create(notice);
        newDesc = newDesc.toJSON();

        return res.status(200).send({
            status: true,
            message: "Notice added successfully",
            data: newDesc
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

// get all notices

export const getAllNotices = async (req,res) => {
    
}