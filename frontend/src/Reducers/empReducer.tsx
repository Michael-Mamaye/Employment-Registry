import {gotEmployeeActions,
    addedEmployeeActions,
    updatedEmployeeActions,
    deletedEmployeeActions,
} from '../Types/ActionTypeConstants'
import {ForEmployee} from '../Types/StoreTypes'


type actions=
        |gotEmployeeActions
        |addedEmployeeActions
        |updatedEmployeeActions
        |deletedEmployeeActions

let intialState:ForEmployee={
    status:0,
    data:[]
}

const empReducer=(state=intialState,action:actions)=> {
    console.log('hi miki i am here',action)
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
