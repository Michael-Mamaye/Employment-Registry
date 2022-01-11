import {
    getEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface MainDashboardPropTypes{
    emp:ForEmployee;
    getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator;
    getEmployees:getEmployeeActionCreator;
    isTopThree:boolean;
}

export default MainDashboardPropTypes;