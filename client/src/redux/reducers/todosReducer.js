import * as actiontypes from "../actions/type"

const todoReducers=(state =[], action)=>{


    switch(action.type){
        case actiontypes.ADDNEW_TODO:
            return [action.payload , ...state]

            case actiontypes.GETALL_TODO :
                return action.payload

            default :
             return state
    }


}
export default todoReducers