import {gotEmployeeActions,
    addedEmployeeActions,
    updatedEmployeeActions,
    deletedEmployeeActions,
    gotTopThreePaidEmployeeActions,
    errorEmployeeActions,
} from '../Types/ActionTypeConstants'
import {ForEmployee} from '../Types/StoreTypes'


type actions=
        |gotEmployeeActions
        |addedEmployeeActions
        |updatedEmployeeActions
        |deletedEmployeeActions
        |gotTopThreePaidEmployeeActions
        |errorEmployeeActions
        
let intialState:ForEmployee={
    totalEmployees:0,
    totalSalary:0,
    data:[],
    topThree:[],
}

const empReducer=(state=intialState,action:actions)=> {
    switch(action.type)
    {
        case 'ADDED_EMPLOYEES':
            return {
                ...state,
                totalSalary:action.payload.totalSalary,
                totalEmployees:action.payload.totalEmployees,
                data:action.payload.data 
            }
        case 'GOT_EMPLOYEES':
            return {
                ...state,
                totalSalary:action.payload.totalSalary,
                totalEmployees:action.payload.totalEmployees,
                data:action.payload.data               
            }
        case 'GOT_TOP_PAID_EMPLOYEES':
            return {
                ...state,
                totalSalary:action.payload.totalSalary,
                totalEmployees:action.payload.totalEmployees,
                topThree:action.payload.data                 
            }
        case 'DELETED_EMPLOYEES':
            return {
                ...state,
                data:state.data.filter((item)=>item._id!==action.id),
                totalSalary:action.payload.totalSalary,
                totalEmployees:action.payload.totalEmployees,
            }
        case 'UPDATED_EMPLOYEES':
            return {
                ...state,
                data:action.payload
            }
        case 'ERROR_EMPLOYEES':
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default empReducer
