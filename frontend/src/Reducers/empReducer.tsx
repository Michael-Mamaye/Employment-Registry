import {gotEmployeeActions,
    addedEmployeeActions,
    updatedEmployeeActions,
    deletedEmployeeActions,
    gotTopThreePaidEmployeeActions,
} from '../Types/ActionTypeConstants'
import {ForEmployee} from '../Types/StoreTypes'


type actions=
        |gotEmployeeActions
        |addedEmployeeActions
        |updatedEmployeeActions
        |deletedEmployeeActions
        |gotTopThreePaidEmployeeActions
        
let intialState:ForEmployee={
    status:0,
    data:[]
}

const empReducer=(state=intialState,action:actions)=> {
    switch(action.type)
    {
        case 'ADDED_EMPLOYEES':
            return {
                ...state,
                status:200,
                data:action.payload
            }
        case 'GOT_EMPLOYEES':
            return {
                ...state,
                status:200,
                data:action.payload               
            }
        case 'GOT_TOP_PAID_EMPLOYEES':
            return {
                ...state,
                status:200,
                data:action.payload               
            }
        case 'DELETED_EMPLOYEES':
            return {
                ...state,
                data:state.data.filter((item)=>item._id!==action.id)
            }
        case 'UPDATED_EMPLOYEES':
            return {
                ...state,
                status:200,
                data:action.payload
            }
        default:
            return state;
    }
}

export default empReducer
