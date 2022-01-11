import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface EmployeePropType{
    emp:ForEmployee
    getEmployees:getEmployeeActionCreator;
    deleteEmployees:deleteEmployeeActionCreator;
    getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator;
    isTopThree:boolean;
}

export default EmployeePropType;