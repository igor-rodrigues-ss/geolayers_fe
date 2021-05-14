import * as React from 'react';
import VTLayer from "./VectorTileLayer";
import { useSelector } from 'react-redux';
import { TRootState } from '../../../../store';
import { ILayers } from '../../interfaces';


const Layers: React.FC = (): JSX.Element => {

	let data: ILayers = useSelector( (store: TRootState) => store.manageLayers)

  	return (
		<div>
			{
				Object.keys(data).map(
					(id: string, index: number) => <VTLayer
						id={id} show={data[id].show}
						color={data[id].color} fill={data[id].fill} zIndex={0}
					/>
				)
			}
		</div>
	)
}

export default Layers;