import express from "express";
import cors from "cors"
import "dotenv/config"

import ConnectDB from "./Config/DbConfig.js";

import DoctorRoute from "./Routes/DoctorRoute.js"
import DiseaseRoute from "./Routes/DiseaseRoute.js"


const app = express();
ConnectDB();

app.use(cors());
app.use(express.json());




app.get("/",(req,res)=>{
    res.send("API is running...");
})

app.use("/api/doctor", DoctorRoute);
app.use("/api/disease", DiseaseRoute);



let PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
})



