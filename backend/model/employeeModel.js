import mongoose from "mongoose";
const Schema=mongoose.Schema
const employeeSchema=new Schema({
     name:{
         type:String,
         required:[true,'Employee Name Is Required']
     },
     email:{
        type:String,
        required:[true,'Email Is Required']
     },
     dateOfBirth:{
         type:String,
         required:[true,'Employee Birth Date Is Required']
     },
     gender:{
         type:String,
         required:[true,'Employee Gender Is Required'],
         enum:['male','female']
     },
     coreSalary:{
         type:Number,
         required:[true,'Core Salary Is Required'],
     },
    salary:[
        {
        type:Schema.Types.ObjectId, 
        ref:'SalaryModel',
        }
    ],

    startDate:{
        type:Date,
        required:[true,'Start Date Is Required'],
        default:Date.now
    },
     

})
const Employees=mongoose.model('Employees',employeeSchema)

export default Employees;