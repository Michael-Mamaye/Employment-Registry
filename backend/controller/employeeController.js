import EmployeeModel from "../model/employeeModel.js";

//used to fetch employees
export const getAllEmployees= async (req,res)=>{
    try{
        const employe=await EmployeeModel.find();
        res.status(200).json({
            status:'successful',
            data:employe
        })
    }
    catch(error)
    {
        console.log(error)
    }
}


//used to add employees
export const addNewEmployee= async (req,res)=>{
    try{
        let check=await EmployeeModel.findOne(req.body);
        if(check!=null)
        {
            res.status(400).json({msg:'user already exist'})
        }
        else{
            const newEmployee=await EmployeeModel.create(req.body);
            res.status(200).json({
                status:'successfully added',
                data:newEmployee
            })
        }
    }
    catch(error)
    {
        console.log(error)
    }

}

//used to update employees
export const updateEmployee= async (req,res)=>{
    try{
        const newEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(200).json({
            status:'successfully updated',
            data:newEmployee
        })
    }
    catch(error)
    {
        console.log(error)
    }
}


//used to delete employees
export const deleteEmployee=async (req,res)=>{
    try{
        await EmployeeModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'successfully Deleted',
            
        })
    }
    catch(error)
    {
       res.status(200).json({
           status:"this user doesn't exist"
       })
    }
}