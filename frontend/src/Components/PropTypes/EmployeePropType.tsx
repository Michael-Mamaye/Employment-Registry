import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator,
    setUserStateCreator
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface EmployeePropType{
    emp:ForEmployee
    getEmployees:getEmployeeActionCreator;
    setUserStates:setUserStateCreator;
    deleteEmployees:deleteEmployeeActionCreator;
    getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator;
    isTopThree:boolean;
}

export default EmployeePropType;