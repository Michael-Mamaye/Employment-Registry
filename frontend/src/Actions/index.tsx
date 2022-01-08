import {
    getEmployeeActionCreator,
    deleteEmployeeActionCreator,
    updateEmployeeActionCreator,
    addEmployeeActionCreator,
    getTopThreePaidEmployeeActionCreator
} from '../Types/ActionCreatorTypes'

export const getEmployees:getEmployeeActionCreator=()=>{
    return{
        type:'GET_EMPLOYEES'
    }
}
export const getTopThreePaidEmployees:getTopThreePaidEmployeeActionCreator=()=>{
    return{
        type:'GET_TOP_PAID_EMPLOYEES'
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