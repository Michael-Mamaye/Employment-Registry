import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator,
    setUserStateCreator
} from '../Types/ActionCreatorTypes'

export const setUserStates:setUserStateCreator=(employeesState,topThreeState)=>{
    return{
        type:'USER_STATE',
        employeesState:employeesState,
        topThreeState:topThreeState
    }
}

export const getEmployees:getEmployeeActionCreator=(queryString,ascOrDesc,filterBy)=>{
    
    return{
        type:'GET_EMPLOYEES',
        queryString:queryString,
        ascOrDesc:ascOrDesc,
        filterBy:filterBy,
    }
}
export const getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator=(queryString,ascOrDesc,filterBy)=>{
    return{
        type:'GET_TOP_PAID_EMPLOYEES',
        queryString:queryString,
        ascOrDesc:ascOrDesc,
        filterBy:filterBy
    }
}
export const deleteEmployees:deleteEmployeeActionCreator=(id)=>{
    return{
        type:'DELETE_EMPLOYEES',
        id:id
    }
}
export const updateEmployees:updateEmployeeActionCreator=(id,payload)=>{
    return{
        type:'UPDATE_EMPLOYEES',
        id:id,
        payload:payload
    }
}
export const addEmployees:addEmployeeActionCreator=(payload)=>{
    return{
        type:'ADD_EMPLOYEES',
        payload:payload
    }
}