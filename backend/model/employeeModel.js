import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
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
         required:[true,'Employee Gender Is Required']
     },
     salary:{
            type:Number,
            required:[true,'Amount Is Required']
        },
    startDate:{
            type:Date,
            required:[true,'Start Date Is Required'],
            default:Date.now
        },
     

})

const Employees=mongoose.model('Employees',employeeSchema)

export default Employees;