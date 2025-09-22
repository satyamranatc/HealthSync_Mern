import mongoose from "mongoose";
import { type } from "os";

let DoctorSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Name is required"],
    },
    avatar:{
        type:String,
        default:"https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png"
    },
    education:{
        type:String,
        required:[true,"Education is required"],
    },
    fee:{
        type:Number,
        required:[true,"Fee is required"],
    },
    
});

export default mongoose.model("Doctor", DoctorSchema);