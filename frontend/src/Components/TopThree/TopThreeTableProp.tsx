import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface TopThreeTableProp{
    emp:ForEmployee;
    deleteEmployees:deleteEmployeeActionCreator;
    getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator;
}

export default TopThreeTableProp;