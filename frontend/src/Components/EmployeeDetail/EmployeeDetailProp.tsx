import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface EmployeeDetailProp{
    emp:ForEmployee;
    deleteEmployees:deleteEmployeeActionCreator;
    getEmployees:getEmployeeActionCreator;
}

export default EmployeeDetailProp;