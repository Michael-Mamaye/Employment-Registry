import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator,
    setUserStateCreator
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface TopThreeTableProp{
    emp:ForEmployee;
    deleteEmployees:deleteEmployeeActionCreator;
    getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator;
    setUserStates:setUserStateCreator;
    
}

export default TopThreeTableProp;