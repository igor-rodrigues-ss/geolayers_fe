import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';


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

interface A {
    data: any
}

function allLayers(state: A = {data: {}}, action: any) { // TODO: tipar corretamente
    switch (action.type) {
        case 'ALL_LAYER':
            let k = action.data.id
            state.data[k] = action.data
            return {...state};
        default:
            return {...state};
    }
}


const RootReducers = combineReducers({reducer, allLayers});
const store = createStore(RootReducers,  applyMiddleware(thunk));

export default store;