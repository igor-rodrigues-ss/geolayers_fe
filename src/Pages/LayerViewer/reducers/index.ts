import { CHANGE_LAYER_VISIBILITY, SET_ALL_LAYERS } from '../actions';
import { ILayers } from '../interfaces';

// import { IChangeLayerVisibilityAction, ISetAllLayersAction } from '../actions';


function manageLayers(
    // state: ILayers = {} as ILayers, action: IChangeLayerVisibilityAction | ISetAllLayersAction
    state: ILayers = {} as ILayers, action: any
) {
    switch (action.type) {
        case SET_ALL_LAYERS:
            return {...state, ...action.data};
        
        case CHANGE_LAYER_VISIBILITY:
            let key = action.data.id;
            state[key] = action.data;
            return {...state};
        default:
            return {...state};
    }
}

export default manageLayers;