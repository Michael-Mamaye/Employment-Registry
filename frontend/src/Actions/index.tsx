import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator,
    setUserStateCreator,
    getUsersByNameActionCreator,
    paySalaryActionCreator
} from '../Types/ActionCreatorTypes'

export const setUserStates:setUserStateCreator=(employeesState,topThreeState)=>{
    return{
        type:'USER_STATE',
        employeesState:employeesState,
        topThreeState:topThreeState
    }
}
export const getUsersByName:getUsersByNameActionCreator=(name)=>{
    
    return{
        type:'GET_DATA_BY_NAME',
        name:name,
    }
}

export const getEmployees:getEmployeeActionCreator=()=>{
    
    return{
        type:'GET_EMPLOYEES',
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
export const paySalary:paySalaryActionCreator=(payload,id,salary)=>{
    return{
        type:'PAY_EMPLOYEES',
        payload:payload,
        id:id,
        salary:salary
    }
}