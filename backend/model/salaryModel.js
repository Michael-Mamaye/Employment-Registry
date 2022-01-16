import mongoose from 'mongoose'

const salarySchema=new mongoose.Schema({
    salary:{
        type:Number,
        required:[true,'Amount Is Required']
    },
    salaryDate:{
        type:Date,
        required:[true,'Salary Date Is Required'],
        default:Date.now
    },
})


const salaryModel= mongoose.model('SalaryModel',salarySchema)

export default salaryModel;