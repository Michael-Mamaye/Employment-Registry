import {getEmployeeActions,
        deleteEmployeeActions,
        updateEmployeeActions,
        addEmployeeActions } from './ActionTypeConstants'
import { Datum } from './StoreTypes';

export type getEmployeeActionCreator = () => getEmployeeActions;

export type deleteEmployeeActionCreator = (id: string) => deleteEmployeeActions;
        
export type updateEmployeeActionCreator = (id: string,payload:Datum) => updateEmployeeActions;
        
export type addEmployeeActionCreator = (payload: Datum) => addEmployeeActions;
   