
let initialState={
    employees:[
        {id:'1',name:'asdfsf'},
        {id:'1',name:'asdfsf'},
        {id:'1',name:'asdfsf'},
    ],
    length:1

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
            console.log('hi miki i am here',state.employees)
            return {
                ...state.employees
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
