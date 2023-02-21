import * as actiontypes from "../actions/type"

const todoReducers=(state =[], action)=>{


    switch(action.type){
        case actiontypes.ADDNEW_TODO:
            return [action.payload , ...state]

            default :
             return state
    }


}
export default todoReducers