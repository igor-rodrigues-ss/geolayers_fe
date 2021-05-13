import { createStore, applyMiddleware, combineReducers} from 'redux';
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

const STATE_LAYER = {
    id: '',
    show: false
}

function showLayer(state = STATE_LAYER, action: any) {
    switch (action.type) {
        case 'SHOW_LAYER':
            return {...state, ...action.data};
        default:
            return {...state};
    }
}

interface Teste {
    type: any;
    data: any;
}

interface A {
    data: any
}

function allLayers(state: A = {data: {}}, action: Teste) {
    switch (action.type) {
        case 'ALL_LAYER':
            let k = action.data.id
            state.data[k] = action.data
            return {...state};
        default:
            return {...state};
    }
}

function showMVT(state = STATE_LAYER, action: any) {
    switch (action.type) {
        case 'SHOW_MVT':
            // alert(action.data.id)
            // state[action.data.id].show = action.data.show;
            return {...state, ...action.data};
        default:
            return {...state};
    }
}



const RootReducers = combineReducers({reducer, showLayer, allLayers, showMVT});
const store = createStore(RootReducers,  applyMiddleware(thunk));

export default store;