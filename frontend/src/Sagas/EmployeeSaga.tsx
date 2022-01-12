import { takeLatest, put, call, StrictEffect, select } from 'redux-saga/effects'
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
    errorEmployeeActions,
    setErrorsNullActions,
    getTopThreePaidEmployeeActions,
    setUserStateActions} from '../Types/ActionTypeConstants'
import axiosApi from '../Api/axiosAPi'
import { AxiosResponse } from 'axios';
import { ForEmployee } from '../Types/StoreTypes';

//Watchers
function* EmployeeSaga():Generator<StrictEffect>{
    yield takeLatest(ActionTypeConstants.GET_ALL_EMPLOYEE,getAllEmployees);
    yield takeLatest(ActionTypeConstants.GET_TOP_THREE_PAID_EMPLOYEE,getTopThreePaidEmployees);
    yield takeLatest(ActionTypeConstants.DELETE_EMPLOYEE,deleteEmployees);
    yield takeLatest(ActionTypeConstants.UPDATE_EMPLOYEE,updateEmployees);
    yield takeLatest(ActionTypeConstants.ADD_NEW_EMPLOYEE,addEmployees);
    yield takeLatest(ActionTypeConstants.ERROR_OF_EMPLOYEES,setErrorsNull);
    yield takeLatest(ActionTypeConstants.SET_USER_STATE,setUserState);
}

//Workers
function* getAllEmployees(){
   
    const filter:ForEmployee = yield select((state: any) => state.emp)
    console.log(filter.employeesState)
    console.log(filter)

    const filt=filter.employeesState;
    console.log(filt.filterBy)
    try{
        const res:AxiosResponse<any> =yield call(axiosApi.get,`/?sortBy=${filt.sortBy}&ascOrDesc=${filt.ascOrDesc}&filterBy=${filt.filterBy}`)
                
        
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
function* getTopThreePaidEmployees({queryString,ascOrDesc,filterBy}:getTopThreePaidEmployeeActions){
    try{
        const res:AxiosResponse<any> = filterBy? yield call(axiosApi.get,`/topThreePaid?sortBy=${queryString}&ascOrDesc=${ascOrDesc}&filterBy=${filterBy}`):
                        yield call(axiosApi.get,`/topThreePaid?sortBy=${queryString}&ascOrDesc=${ascOrDesc}`)
        
        
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
        console.log('this is the error',error)
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

function* setErrorsNull(){
    const data:setErrorsNullActions={
        type:'ERROR_EMPLOYEES',
    }

    yield put(data);
}
function* setUserState({employeesState,topThreeState}:setUserStateActions){
    const data:setUserStateActions={
        type:'USER_STATE',
        employeesState:employeesState,
        topThreeState:topThreeState

    }

    yield put(data);
}
export default EmployeeSaga