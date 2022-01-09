import { takeLatest, put, call, StrictEffect } from 'redux-saga/effects'
import { 
        gotEmployeeActions,
        deletedEmployeeActions,
        updatedEmployeeActions,
        addedEmployeeActions,
        gotTopThreePaidEmployeeActions,
    
    ActionTypeConstants,
    deleteEmployeeActions,
    updateEmployeeActions,
    addEmployeeActions, 
    errorEmployeeActions} from '../Types/ActionTypeConstants'
import axiosApi from '../Api/axiosAPi'
import { AxiosResponse } from 'axios';
//Watchers
function* EmployeeSaga():Generator<StrictEffect>{
    yield takeLatest(ActionTypeConstants.GET_ALL_EMPLOYEE,getAllEmployees);
    yield takeLatest(ActionTypeConstants.GET_TOP_THREE_PAID_EMPLOYEE,getTopThreePaidEmployees);
    yield takeLatest(ActionTypeConstants.DELETE_EMPLOYEE,deleteEmployees);
    yield takeLatest(ActionTypeConstants.UPDATE_EMPLOYEE,updateEmployees);
    yield takeLatest(ActionTypeConstants.ADD_NEW_EMPLOYEE,addEmployees);
}

//Workers
function* getAllEmployees(){
    try{
       
        const res:AxiosResponse<any> = yield call(axiosApi.get,'/')
        
        switch(res.status)
        {
            case 200:
                const data:gotEmployeeActions={
                    type:'GOT_EMPLOYEES',
                    payload: res.data
                }
                yield put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* getTopThreePaidEmployees(){
    try{

        const res:AxiosResponse<any> = yield call(axiosApi.get,'/topThreePaid')
        
        switch(res.status)
        {
            case 200:
                const data:gotTopThreePaidEmployeeActions={
                    type:'GOT_TOP_PAID_EMPLOYEES',
                    payload: res.data
                }
                yield put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* addEmployees({payload}:addEmployeeActions){
    try{
        const res:AxiosResponse = yield call(axiosApi.post,'/',payload)
        const resp:AxiosResponse<any> = yield call(axiosApi.get,'/')
        
        switch(res.status)
        {
            case 200:
                const data:addedEmployeeActions={
                    type:'ADDED_EMPLOYEES',
                    payload:resp.data
                }
                yield put(data);
        }
    }
    catch(error)
    {   
        
    }
    
}
function* deleteEmployees({id}:deleteEmployeeActions){
    try{
        const res:AxiosResponse<any> = yield call(axiosApi.delete,`/${id}`)
        switch(res.status)
        {
            case 200:
                const data:deletedEmployeeActions={
                    type:'DELETED_EMPLOYEES',
                    id,
                    payload:res.data
                }
                yield put(data);
        }
    }
    catch(error)
    {
        console.log('this is the error',error)
    }
    
}
function* updateEmployees({id,payload}:updateEmployeeActions){
    try{
        const res:AxiosResponse<any> = yield call(axiosApi.patch,`/${id}`,payload)
        
        const resp:AxiosResponse<any> = yield call(axiosApi.get,'/')
        
        switch(res.status)
        {
            case 200:
                const data:updatedEmployeeActions={
                    type:'UPDATED_EMPLOYEES',
                    id,
                    payload:resp.data.data
                }

                yield put(data);
                break;
            default:
                
                const Item:errorEmployeeActions={
                    type:'ERROR_EMPLOYEES',
                    id,
                    payload:resp.data
                }

                yield put(Item);
                break;
        }
    }
    catch(error)
    {
        console.log('this is the error',error)
        
    }
    
}

export default EmployeeSaga