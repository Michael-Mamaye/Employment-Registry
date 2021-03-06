import {Datum,filterTypes, ForEmployee, salType} from './StoreTypes'

//For Action Creator
export interface setUserStateActions{
    type:'USER_STATE';
    employeesState?:filterTypes;
    topThreeState?:filterTypes;
}
export interface paySalaryActions{
    type:'PAY_EMPLOYEES';
    payload:Datum;
    id:string;
    salary:salType;
}

export interface getUsersByNameActions{
    type:'GET_DATA_BY_NAME';
    name:string
}
export interface getEmployeeActions{
    type:'GET_EMPLOYEES';
}
export interface getTopThreePaidEmployeeActions{
    type:'GET_TOP_PAID_EMPLOYEES';
    queryString:string;
    ascOrDesc:Number;
    filterBy?:string;
}
export interface addEmployeeActions{
    type:'ADD_EMPLOYEES';
    payload:Datum;
}
export interface deleteEmployeeActions{
    type:'DELETE_EMPLOYEES';
    id:string;
}
export interface updateEmployeeActions{
    type:'UPDATE_EMPLOYEES';
    id:string;
    payload:Datum;
}
export interface setErrorsNullActions{
    type:'ERROR_EMPLOYEES';
}


//For Reducer
export interface gotEmployeeActions{
    type:'GOT_EMPLOYEES';
    payload:ForEmployee;
}
export interface gotUsersByNameActions{
    type:'GOT_DATA_BY_NAME';
    payload:ForEmployee;
}
export interface gotTopThreePaidEmployeeActions{
    type:'GOT_TOP_PAID_EMPLOYEES';
    payload:ForEmployee;
}
export interface addedEmployeeActions{
    type:'ADDED_EMPLOYEES';
    payload:ForEmployee;
}
export interface deletedEmployeeActions{
    type:'DELETED_EMPLOYEES';
    id:string;
    payload:ForEmployee;
}
export interface updatedEmployeeActions{
    type:'UPDATED_EMPLOYEES';
    id:string;
    payload:ForEmployee;
}
export interface errorEmployeeActions{
    type:'ERROR_EMPLOYEES';
    payload:ForEmployee;
}


export const ActionTypeConstants={
    ADD_NEW_EMPLOYEE:'ADD_EMPLOYEES',
    DELETE_EMPLOYEE:'DELETE_EMPLOYEES',
    GET_ALL_EMPLOYEE:'GET_EMPLOYEES',
    UPDATE_EMPLOYEE:'UPDATE_EMPLOYEES',
    GET_TOP_THREE_PAID_EMPLOYEE:'GET_TOP_PAID_EMPLOYEES',
    ERROR_OF_EMPLOYEES:'ERROR_EMPLOYEES',
    SET_USER_STATE:'SET_USER_STATE',
    GET_DATA_BY_NAME:'GET_DATA_BY_NAME',
    PAY_EMPLOYEES:'PAY_EMPLOYEES',
}
