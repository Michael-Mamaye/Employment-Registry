
export interface getEmployeeActions{
    type:'GET_EMPLOYEES';
    payload?:any
}
export interface addEmployeeActions{
    type:'ADD_EMPLOYEES';
    payload:any;
}
export interface deleteEmployeeActions{
    type:'DELETE_EMPLOYEES';
    id:string;
}
export interface updateEmployeeActions{
    type:'UPDATE_EMPLOYEES';
    id:string;
    payload:any;
}


export const ActionTypeConstants={
    ADD_NEW_EMPLOYEE:'ADD_EMPLOYEES',
    DELETE_EMPLOYEE:'DELETE_EMPLOYEES',
    GET_ALL_EMPLOYEE:'GET_EMPLOYEES',
    UPDATE_EMPLOYEE:'UPDATE_EMPLOYEES'
}
