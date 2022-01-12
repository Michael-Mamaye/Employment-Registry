import Employees from "../model/employeeModel.js";

//used to fetch employees
export const getAllEmployees= async (req,res)=>{
    try{
        const {sortBy, ascOrDesc,filterBy}= req.query
        const query={
            [sortBy]:ascOrDesc
        }
        const employe= filterBy!=='both' ?  await Employees.find().sort(query).where('gender').equals(filterBy):
             await Employees.find().sort(query);
        const totalSalary=()=>{
            let total=0;
            employe.filter((miki)=> total+=miki.salary)
            return total;
        }
        res.status(200).json({
            totalEmployees:employe.length,
            totalSalary:totalSalary(),
            data:employe
        })
    }
    catch(error)
    {
        res.status(400).json({error})
    }
}

//used to return top three salary paid

export const getTopThreePaid=async(req,res)=>{
    try{
        const employe=await Employees.find().sort({salary:-1}).limit(3);
        const employeesNumber=await  Employees.find();
        const totalSalary=()=>{
            let total=0;
            employeesNumber.filter((miki)=> total+=miki.salary)
            return total;
        }
        res.status(200).json({
            totalEmployees:employeesNumber.length,
            totalSalary:totalSalary(),
            data:employe
        })
    }
    catch(error)
    {
        res.status(400).json({error})
    }
}

//used to add employees
export const addNewEmployee= async (req,res)=>{
    try{
        const {name,dateOfBirth,gender,salary,email}= req.body

        const exists=await Employees.findOne({email:req.body.email})
        const employe=await Employees.find();
        const totalSalary=()=>{
            let total=0;
            employe.filter((miki)=> total+=miki.salary)
            return total;
        }
        if(exists!=null)
        {
            res.status(400).json({
                message:'This Employee is already registered'
            })
        }
        else
        {   const newEmployee=await Employees.create({name,dateOfBirth,gender,salary,email});

            res.status(200).json({
                totalEmployees:employe.length,
                totalSalary:totalSalary(),
                data:newEmployee
            })
        }
    }
    catch(error)
    {
        res.status(400).json({error})
    }

}

//used to update employees
export const updateEmployee= async (req,res)=>{
    try{
        const newEmployee = await Employees.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!newEmployee){
            res.status(404).json({
                message:"this user does not exist"
            })
        }
        res.status(200).json({
            data:newEmployee
        })
    }
    catch(error)
    {
        res.status(400).json({error})
    }
}


//used to delete employees
export const deleteEmployee=async (req,res)=>{
    try{
        await Employees.findByIdAndDelete(req.params.id)
        const employe=await Employees.find();
        const totalSalary=()=>{
            let total=0;
            employe.filter((miki)=> total+=miki.salary)
            return total;
        }
        res.status(200).json({
            totalEmployees:employe.length,
            totalSalary:totalSalary(),
            
        })
    }
    catch(error)
    {
       res.status(404).json({
           message:"this user doesn't exist"
       })
    }
}