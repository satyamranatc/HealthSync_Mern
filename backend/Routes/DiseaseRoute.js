import { Router } from "express";
import { addDisease, deleteDisease, DiseaseList, updateDisease } from "../Controller/DiseaseController.js";

const router = Router();


router.get("/list",DiseaseList);
router.post("/add",addDisease);
router.put("/update/:id",updateDisease);
router.delete("/delete/:id",deleteDisease);



export default router;