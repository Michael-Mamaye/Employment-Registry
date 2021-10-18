import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
} from '../../Constants/ActionCreatorTypes'

interface EmployeePropType{
    state?:{
        employees:any;
    }
    getEmployees:getEmployeeActionCreator;
    deleteEmployees:deleteEmployeeActionCreator;
    updateEmployees?:updateEmployeeActionCreator;
    addEmployees?:addEmployeeActionCreator;
}

export default EmployeePropType;