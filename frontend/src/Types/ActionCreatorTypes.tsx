import {getEmployeeActions,
        deleteEmployeeActions,
        updateEmployeeActions,
        addEmployeeActions,
        getTopThreePaidEmployeeActions, 
        setErrorsNullActions,
        setUserStateActions
} from './ActionTypeConstants'
import { Datum,filterTypes } from './StoreTypes';

export type setUserStateCreator=(employeesState?:filterTypes,topThreeState?:filterTypes)=>setUserStateActions;

export type getEmployeeActionCreator = () => getEmployeeActions;

export type getTopThreePaidEmployeeActionCreator = (queryString:string,ascOrDesc:Number,filterBy?:string) => getTopThreePaidEmployeeActions;

export type deleteEmployeeActionCreator = (id: string) => deleteEmployeeActions;
        
export type updateEmployeeActionCreator = (id: string,payload:Datum) => updateEmployeeActions;
        
export type addEmployeeActionCreator = (payload: Datum) => addEmployeeActions;

export type setErrorsNull = () => setErrorsNullActions;
