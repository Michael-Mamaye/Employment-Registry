import {gotEmployeeActions,
    addedEmployeeActions,
    updatedEmployeeActions,
    deletedEmployeeActions,
    gotTopThreePaidEmployeeActions,
    errorEmployeeActions,
    setUserStateActions,
    gotUsersByNameActions,
} from '../Types/ActionTypeConstants'
import {ForEmployee} from '../Types/StoreTypes'


type actions=
        |gotEmployeeActions
        |addedEmployeeActions
        |updatedEmployeeActions
        |deletedEmployeeActions
        |gotTopThreePaidEmployeeActions
        |errorEmployeeActions
        |gotUsersByNameActions
        |setUserStateActions

let intialState:ForEmployee={
    totalEmployees:0,
    totalSalary:0,
    data:[],
    topThree:[],
    employeesState:{
        filterBy:'both',
        sortBy:'startDate',
        ascOrDesc:1
    },
    topThreeState: {
        filterBy:'both',
        sortBy:'startDate',
        ascOrDesc:1,
    },
    namedData:[],
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
                data:action.payload.data,            
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
                data:action.payload.data
            }
        case 'ERROR_EMPLOYEES':
            return {
                ...state,
            }
        case 'USER_STATE':
            return{
                ...state,
                employeesState:action.employeesState,
                topThreeState:action.topThreeState
            }
        case 'GOT_DATA_BY_NAME':
            return{
                ...state,
                namedData:action.payload.data
            }
        default:
            return state;
    }
}

export default empReducer
