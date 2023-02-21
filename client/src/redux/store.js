import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todoReducers from './reducers/todosReducer'


const reducer = combineReducers({
    todos : todoReducers
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(()=>{
    console.log("store got updated")
})
export default store;