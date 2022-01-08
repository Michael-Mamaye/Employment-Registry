import Employees from "../model/employeeModel.js";

//used to fetch employees
export const getAllEmployees= async (req,res)=>{
    try{
        const employe=await Employees.find();
        res.status(200).json({
            status:200,
            data:employe
        })
    }
    catch(error)
    {
        console.log(error)
    }
}

//used to return top three salary paid

export const getTopThreePaid=async()=>{
    try{
        const employe=await Employees.find().sort({salary:-1}).limit(3);
        
        res.status(200).json({
            status:200,
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
        const {name,dateOfBirth,gender,salary,email}= req.body

        const exists=await Employees.findOne(req.body.email)

        if(exists!=null)
        {
            res.status(400).json({
                message:'This Employee is already registered'
            })
        }
        else
        {   const newEmployee=await Employees.create({name,dateOfBirth,gender,salary,email});

            res.status(200).json({
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
        const newEmployee = await Employees.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        res.status(200).json({
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
        await Employees.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:200,
            
        })
    }
    catch(error)
    {
       res.status(400).json({
           status:"this user doesn't exist"
       })
    }
}