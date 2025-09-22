import mongoose from "mongoose";

let DiseaseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    description:{
        type:String,
        required:[true,"Description is required"],
    },
    image:{
        type:String,
        default:"https://png.pngtree.com/png-vector/20240122/ourmid/pngtree-doctor-symbol-color-png-image_11455718.png"
    },
    opretingDoctor:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    }]
});

export default mongoose.model("Disease", DiseaseSchema);