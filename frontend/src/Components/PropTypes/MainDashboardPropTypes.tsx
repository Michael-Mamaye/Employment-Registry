import {
    getEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface MainDashboardPropTypes{
    emp:ForEmployee;
    getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator;
    getEmployees:getEmployeeActionCreator;
}

export default MainDashboardPropTypes;