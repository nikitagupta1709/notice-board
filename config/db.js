import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

mongoose.set('strictQuery', false);

let mongo_url = process.env.MONGO_URL;

export const connection = async() => {
    try {
        await mongoose.connect(mongo_url,{
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });
        console.log("Connection established");
    } catch (error) {
        console.log(error)
    }
}