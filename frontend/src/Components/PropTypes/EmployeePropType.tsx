import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface EmployeePropType{
    emp:ForEmployee
    getEmployees:getEmployeeActionCreator;
    deleteEmployees:deleteEmployeeActionCreator;
    updateEmployees?:updateEmployeeActionCreator;
    addEmployees?:addEmployeeActionCreator;
}

export default EmployeePropType;