import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects'
import { 
        gotEmployeeActions,
        deletedEmployeeActions,
        updatedEmployeeActions,
        addedEmployeeActions,
    
    ActionTypeConstants,
    deleteEmployeeActions,
    updateEmployeeActions,
    addEmployeeActions } from '../Types/ActionTypeConstants'
import axiosApi from '../Api/axiosAPi'
import { AxiosResponse } from 'axios';
//Watchers
function* EmployeeSaga():Generator<StrictEffect>{
    yield takeEvery(ActionTypeConstants.GET_ALL_EMPLOYEE,getAllEmployees);
    yield takeEvery(ActionTypeConstants.DELETE_EMPLOYEE,deleteEmployees);
    yield takeEvery(ActionTypeConstants.UPDATE_EMPLOYEE,updateEmployees);
    yield takeEvery(ActionTypeConstants.ADD_NEW_EMPLOYEE,addEmployees);
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
                    payload: res.data.data
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
                    payload:resp.data.data
                }
                yield put(data);
        }
    }
    catch(error)
    {
        console.log(error)
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
        console.log(error)
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
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}

export default EmployeeSaga