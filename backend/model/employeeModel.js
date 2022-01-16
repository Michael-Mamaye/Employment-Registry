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
    salary:{
        type:Schema.Types.ObjectId, 
        ref:'SalaryModel',
        required:[true,'salary information is required']
    },

    startDate:{
            type:Date,
            required:[true,'Start Date Is Required'],
            default:Date.now
        },
     

})
const Employees=mongoose.model('Employees',employeeSchema)

export default Employees;