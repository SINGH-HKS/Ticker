import {createStore} from 'redux'
import rootReducer from './reducer/index'
import reducer from './reducer/save'

export default()=>{
    return createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
         
}