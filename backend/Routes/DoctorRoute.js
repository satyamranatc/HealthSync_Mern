import { Router } from "express";
import { addDoctor, deleteDoctor, doctorList, updateDoctor } from "../Controller/DoctorController.js";

const router = Router();


router.get("/list",doctorList);
router.post("/add",addDoctor);
router.put("/update/:id",updateDoctor);
router.delete("/delete/:id",deleteDoctor);



export default router;