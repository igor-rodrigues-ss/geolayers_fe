import { ILayers, ILayerValue} from '../interfaces';

const CHANGE_LAYER_VISIBILITY = 'CHANGE_LAYER_VISIBILITY';
const SET_ALL_LAYERS = 'SET_ALL_LAYERS';


interface IChangeLayerVisibilityAction {
    type: string;
    data: ILayerValue;
}

interface ISetAllLayersAction {
    data: ILayers;
    type: string;
}


function changeLayerVisibility(data: ILayerValue): IChangeLayerVisibilityAction {
    return {
        type: CHANGE_LAYER_VISIBILITY,
        data: data
    }
}


function setAllLayers(data: ILayers): ISetAllLayersAction {
    return {
        type: SET_ALL_LAYERS,
        data: data
    }
}


export {
    CHANGE_LAYER_VISIBILITY, changeLayerVisibility,
    SET_ALL_LAYERS, setAllLayers
}

export type {
    IChangeLayerVisibilityAction,
    ISetAllLayersAction
}