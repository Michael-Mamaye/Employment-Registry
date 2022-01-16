import Employees from "../model/employeeModel.js";
import salaryModel from "../model/SalaryModel.js";
//used to fetch employees by their name
export const getUsersByName=async(req,res)=>{
    try{
        const {name}=req.query
        const employe=await Employees.find({'name':{'$regex':`${name}`}}).populate('salary');
        res.status(200).json({
            data:employe
        })
    }
    catch(error)
    {
        res.status(400).json({error})
    }
}
//used to fetch employees
export const getAllEmployees= async (req,res)=>{
    try{
        const {sortBy, ascOrDesc,filterBy}= req.query
        console.log(req.query)
        const query={ 
            [sortBy]:ascOrDesc
        }
        const employe=filterBy!=='both' ?  await Employees.find().populate('salary').sort(query).where('gender').equals(filterBy):
                                        await Employees.find().populate('salary');
        

        
        const totalSalary=()=>{
            let total=0;
            employe.filter((miki)=> total+=miki.salary.salary)
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
        const employe=await Employees.find().populate({
            path:'salary',
            options:{sort:{salary:-1}}
        }).limit(3);
        const employeesNumber=await  Employees.find().populate('salary');
        const totalSalary=()=>{
            let total=0;
            employeesNumber.filter((miki)=> total+=miki.salary.salary)
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
        
        if(exists!=null)
        {
            res.status(400).json({
                message:'This Employee is already registered'
            })
        }
        else
        {   
            const newSalary=await salaryModel.create(salary)
            
            const newEmployee=await Employees.create({
                name,
                dateOfBirth,
                gender,
                salary:newSalary._id,
                email
            });
            const employe=await Employees.find().populate('salary');

            const totalSalary=()=>{
                let total=0;
                employe.filter((miki)=> total+=miki.salary.salary)
                return total;
            }
            
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
        const {name,email,gender,dateOfBirth,salary}=req.body
        
        if(salary) 
            {
                const emps=await Employees.find({_id:req.params.id}).populate('salary')
                await salaryModel.findByIdAndUpdate(emps[0].salary._id,salary,{new:true,runValidators:true})
        
            }
        const newEmployee = await Employees.findByIdAndUpdate(req.params.id,{name,email,gender,dateOfBirth,salary},{new:true,runValidators:true})
        
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
        const emps=await Employees.find({_id:req.params.id}).populate('salary')

        await Employees.findByIdAndDelete(req.params.id)

        await salaryModel.findByIdAndDelete(emps[0].salary._id)

        const employe=await Employees.find().populate('salary');
        const totalSalary=()=>{
            let total=0;
            employe.filter((miki)=> total+=miki.salary.salary)
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
            message:"user doesn't exist"    
            
        })
    }
}