import {
    getEmployeeActionCreator, getUsersByNameActionCreator,
} from '../../Types/ActionCreatorTypes'
import { ForEmployee } from '../../Types/StoreTypes';

interface PaySalariesProp{
    emp:ForEmployee;
    getUsersByName:getUsersByNameActionCreator;
}

export default PaySalariesProp;