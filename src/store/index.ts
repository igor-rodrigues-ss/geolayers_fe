import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

function reducer(state = {}, action: any) {
    switch (action.type) {
        case 'IMPORT_SUCCESS':
            alert('SUCESSO')
            return {...state};
        
        case 'IMPORT_ERROR':
            alert('Err')
            return {...state};
        
        default:
            return {...state};
    }
}

const store = createStore(reducer,  applyMiddleware(thunk))

export default store;