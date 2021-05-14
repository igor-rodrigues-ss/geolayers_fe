

interface ILayerValue {
    id: string;
    nome?: string;
    show: boolean;
    color: string;
    fill: boolean;
}


interface ILayers {
    [id: string]: ILayerValue
}


export type { ILayerValue, ILayers}