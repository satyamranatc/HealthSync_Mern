import Disease from "../Models/DiseaseModel.js";

export async function diseaseList(req,res)
{

    let diseaseList = await Disease.find().populate("opretingDoctor");
    res.json(diseaseList);

}
export async function diseaseDetials(req,res)
{
    let id = req.params.id;
    let diseaseData = await Disease.findById(id).populate("opretingDoctor");
    res.json(diseaseData);

}

export async function addDisease(req,res)
{
    let newDisease = new Disease(req.body);
    await newDisease.save();
    res.json({message:"Disease added successfully"});
}

export async function updateDisease(req,res)
{
    let {id} = req.params;
    let updatedDisease = await Disease.findByIdAndUpdate(id,req.body);
    if(!updatedDisease)
    {
        return res.json({message:"Disease not found"});
    }
    await updatedDisease.save();
    res.json({message:"Disease updated successfully"});
}


export async function deleteDisease(req,res)
{
    let {id} = req.params;
    let deletedDisease = await Disease.findByIdAndDelete(id);
    if(!deletedDisease)
    {
        return res.json({message:"Disease not found"});
    }
    res.json({message:"Disease deleted successfully"});
}