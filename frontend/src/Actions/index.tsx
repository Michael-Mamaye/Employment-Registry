import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator
} from '../Types/ActionCreatorTypes'

export const getEmployees:getEmployeeActionCreator=(queryString,ascOrDesc)=>{
    return{
        type:'GET_EMPLOYEES',
        queryString:queryString,
        ascOrDesc:ascOrDesc
    }
}
export const getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator=(queryString,ascOrDesc)=>{
    return{
        type:'GET_TOP_PAID_EMPLOYEES',
        queryString:queryString,
        ascOrDesc:ascOrDesc
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