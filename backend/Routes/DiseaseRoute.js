import { Router } from "express";
import { addDisease, deleteDisease, diseaseList, updateDisease } from "../Controller/DiseaseController.js";

const router = Router();


router.get("/list",diseaseList);
router.post("/add",addDisease);
router.put("/update/:id",updateDisease);
router.delete("/delete/:id",deleteDisease);



export default router;