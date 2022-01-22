import {getAllEmployees,getUsersByName,addNewEmployee,updateEmployee,deleteEmployee, getTopThreePaid, paySalaryOfEmployee} from "../controller/employeeController.js";
import express from 'express'
import {addEmployeeValidation,updateEmployeeValidation} from "../validation/employeeValidation.js";
import employeeValidationResult from "../validation/employeeValidationResult.js";

const router=express.Router();

router.route('/')
      .get(getAllEmployees)
      .post(addEmployeeValidation,employeeValidationResult, addNewEmployee)

router.route('/topThreePaid')
      .get(getTopThreePaid)

router.route('/byname')
      .get(getUsersByName)

router.route('/paySalary/:id')
      .post(paySalaryOfEmployee)
      
router.route('/:id')
      .patch(updateEmployeeValidation,employeeValidationResult,updateEmployee)
      .delete(deleteEmployee)

export default router;