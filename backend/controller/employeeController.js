import Employees from "../model/employeeModel.js";
import salaryModel from "../model/SalaryModel.js";

export const paySalaryOfEmployee= async (req,res)=>{
    try{
        const {salary}=req.body
        
        const newSalary=await salaryModel.create(salary)

        const emps=await Employees.find({_id:req.params.id})


        const Listofemps=emps[0].salary;

        Listofemps.push(newSalary._id)

        const newEmployee=await Employees.findByIdAndUpdate(req.params.id,
            {
                salary:Listofemps,
            },
        )
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
    catch(error)
    {
        res.status(400).json({error})
    }

}

//used to fetch employees by their name
export const getUsersByName=async(req,res)=>{
    try{
        const {name}=req.query
        const employe=await Employees.find({'name':{'$regex':`${name}`}}).populate('salary').limit(10);
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
        
        const query={ 
            [sortBy]:ascOrDesc
        }
        const employe=filterBy!=='both' ?  await Employees.find().where('gender').equals(filterBy).populate('salary').sort(query):
                            await Employees.find().sort(query).populate('salary');

        const totalSalary=()=>{
            let total=0;
            employe.filter((miki)=> total+=miki.coreSalary)
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
        const employe=await Employees.find().populate('salary').limit(3);
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
        const {name,dateOfBirth,gender,coreSalary,email}= req.body

        const exists=await Employees.findOne({email:req.body.email})
        
        if(exists!=null)
        {
            res.status(400).json({
                message:'This Employee is already registered'
            })
        }
        else
        {      
            await Employees.create({
                name,
                dateOfBirth,
                gender,
                coreSalary,
                email
            });
            const employe = await Employees.find().populate('salary');

            const totalSalary=()=>{
                let total=0;
                employe.filter((miki)=> total+=miki.coreSalary)
                return total;
            }
            
            res.status(200).json({
                totalEmployees:employe.length,
                totalSalary:totalSalary(),
                data:employe
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
        const {name,email,gender,dateOfBirth,coreSalary}=req.body
        
        const newEmployee = await Employees.findByIdAndUpdate(req.params.id,{name,email,gender,dateOfBirth,coreSalary},{new:true,runValidators:true})
        
        const employe=await Employees.find().populate('salary');

        if(!newEmployee){
            res.status(404).json({
                message:"this user does not exist"
            })
        }
        res.status(200).json({
            data:employe
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
        for(let i=0;i<emps[0].salary.length;i++)
        {
            await salaryModel.findByIdAndDelete(emps[0].salary[i]._id)
        }
        
        await Employees.findByIdAndDelete(req.params.id)
        
         
        const employe=await Employees.find().populate('salary');

        const totalSalary=()=>{
            let total=0;
            employe.filter((miki)=> total+=miki.coreSalary)
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