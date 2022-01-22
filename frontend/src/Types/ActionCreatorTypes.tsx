import {getEmployeeActions,
        deleteEmployeeActions,
        updateEmployeeActions,
        addEmployeeActions,
        getTopThreePaidEmployeeActions, 
        setErrorsNullActions,
        setUserStateActions,
        getUsersByNameActions,
        paySalaryActions,
} from './ActionTypeConstants'
import { Datum,filterTypes, salType } from './StoreTypes';

export type paySalaryActionCreator=(payload: Datum,id:string,salary:salType)=>paySalaryActions;

export type setUserStateCreator=(employeesState?:filterTypes,topThreeState?:filterTypes)=>setUserStateActions;

export type getUsersByNameActionCreator=(name:string)=>getUsersByNameActions

export type getEmployeeActionCreator = () => getEmployeeActions;

export type getTopThreePaidEmployeeActionCreator = (queryString:string,ascOrDesc:Number,filterBy?:string) => getTopThreePaidEmployeeActions;

export type deleteEmployeeActionCreator = (id: string) => deleteEmployeeActions;
        
export type updateEmployeeActionCreator = (id: string,payload:Datum) => updateEmployeeActions;
        
export type addEmployeeActionCreator = (payload: Datum) => addEmployeeActions;

export type setErrorsNull = () => setErrorsNullActions;
