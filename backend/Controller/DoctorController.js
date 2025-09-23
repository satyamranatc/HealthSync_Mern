import Doctor from "../Models/DoctorModel.js";

export async function doctorList(req,res)
{

    let DoctorList = await Doctor.find();
    res.json(DoctorList);

}
export async function doctorDetails(req,res)
{

    let {id} = req.params;
    let DoctorData = await Doctor.findById(id);
    res.json(DoctorData);

}

export async function addDoctor(req,res)
{
    let newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.json({message:"Doctor added successfully"});
}

export async function updateDoctor(req,res)
{
    let {id} = req.params;
    let updatedDoctor = await Doctor.findByIdAndUpdate(id,req.body);
    if(!updatedDoctor)
    {
        return res.json({message:"Doctor not found"});
    }
    await updatedDoctor.save();
    res.json({message:"Doctor updated successfully"});
}


export async function deleteDoctor(req,res)
{
    let {id} = req.params;
    let deletedDoctor = await Doctor.findByIdAndDelete(id);
    if(!deletedDoctor)
    {
        return res.json({message:"Doctor not found"});
    }
    res.json({message:"Doctor deleted successfully"});
}