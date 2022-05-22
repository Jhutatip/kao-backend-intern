import { connect } from "mongoose";

import dotenv from "dotenv";
dotenv.config();
export default () => {
    try {
        const uri= process.env.MONGO_URI || "";
        console.log(uri);
        connect (uri);
    }catch(error){
        console.log(error);
    }
};
