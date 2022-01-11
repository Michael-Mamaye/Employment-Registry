import {getEmployeeActions,
        deleteEmployeeActions,
        updateEmployeeActions,
        addEmployeeActions,
        getTopThreePaidEmployeeActions, 
        setErrorsNullActions} from './ActionTypeConstants'
import { Datum } from './StoreTypes';

export type getEmployeeActionCreator = (queryString:string,ascOrDesc:Number,filterBy?:string) => getEmployeeActions;

export type getTopThreePaidEmployeeActionCreator = (queryString:string,ascOrDesc:Number) => getTopThreePaidEmployeeActions;

export type deleteEmployeeActionCreator = (id: string) => deleteEmployeeActions;
        
export type updateEmployeeActionCreator = (id: string,payload:Datum) => updateEmployeeActions;
        
export type addEmployeeActionCreator = (payload: Datum) => addEmployeeActions;

export type setErrorsNull = () => setErrorsNullActions;
