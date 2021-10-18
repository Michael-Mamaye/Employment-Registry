import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects'
import { ActionTypeConstants,
    getEmployeeActions,
    deleteEmployeeActions,
    updateEmployeeActions,
    addEmployeeActions } from '../Constants/ActionTypeConstants'
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
        const res:AxiosResponse = yield call(axiosApi.get,'/')
        console.log('this is the resposnse',res.data)
        switch(res.status)
        {
            case 200:
                const data:getEmployeeActions={
                    type:'GET_EMPLOYEES',
                   
                }
                put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* addEmployees({payload}:addEmployeeActions){
    try{
        const res:AxiosResponse = yield call(axiosApi.post,'/',{
            payload:payload
        })
        switch(res.status)
        {
            case 201:
                const data:addEmployeeActions={
                    type:'ADD_EMPLOYEES',
                    payload:res.data
                }
                put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* deleteEmployees({id}:deleteEmployeeActions){
    try{
        const res:AxiosResponse = yield call(axiosApi.post,'/',{
            id:id
        })
        switch(res.status)
        {
            case 200:
                const data:deleteEmployeeActions={
                    type:'DELETE_EMPLOYEES',
                    id,
                }
                put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}
function* updateEmployees({id,payload}:updateEmployeeActions){
    try{
        const res:AxiosResponse = yield call(axiosApi.post,`/${id}`,{
            payload:payload
        })
        switch(res.status)
        {
            case 200:
                const data:updateEmployeeActions={
                    type:'UPDATE_EMPLOYEES',
                    id,
                    payload:res.data
                }
                put(data);
        }
    }
    catch(error)
    {
        console.log(error)
    }
    
}

export default EmployeeSaga