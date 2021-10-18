
let initialState={
    employees:[],
    

}
type Action={
    type:string;
    id?:string;
    payload?:any
}

const empReducer=(state:any=initialState,action:Action)=> {
    switch(action.type)
    {
        case 'ADD_EMPLOYEES':
            return {
                ...state,
                employees:action.payload.data
            }
        case 'GET_EMPLOYEES':
            console.log('hi miki i am here',action.payload)
            return {
                ...state,
                employees:action.payload
                
            }
        case 'DELETE_EMPLOYEES':
            return state
        case 'UPDATE_EMPLOYEES':
            return {
                ...state,
                employees:action.payload.data
            }
        default:
            return state;
    }
}

export default empReducer
