import * as React from 'react';
import Map from './Map';
import { fromLonLat } from 'ol/proj';
import TileLayer from "../Layers/TileLayer";
import { osm } from "../Source";
import { ZoomIn, ZoomOut } from '../ZoomButtons';
import Layers from '../Layers/Layers';


const MapWithLayers: React.FC = (): JSX.Element => {
  return (
	<div style={{width: '100vw'}}>
		<Map center={fromLonLat([-94.9065, 38.9884])} zoom={2}>
			<ZoomIn/>
			<ZoomOut />
			<TileLayer  source={osm()} />
			<Layers />
		</Map>
	</div>
  );
}

export default MapWithLayers;