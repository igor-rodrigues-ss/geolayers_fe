import React, { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import MVT from 'ol/format/MVT.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';


interface IProps {
	id: string;
	show: boolean;
	zIndex: number;

}

const VTLayer: React.FC<IProps> = (props: IProps) => {
	
	const { map } = useContext(MapContext);
	let url = `http://localhost:8000/layer/${props.id}/mvt/{z}/{x}/{y}.pbf`;

	let style = new Style({
		stroke: new Stroke({
		  color: 'red',
		  width: 1
		})
	});

	let source = new VectorTileSource({
		format: new MVT(),
		url: url		
	})

	useEffect(() => {
		if (!map || !props.show) return;

		let vectorLayer = new VectorTileLayer({
			declutter: false,
			source: source,
			style: style
		});

		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(props.zIndex);

		return () => {
			if (map || !props.show) {
				map.removeLayer(vectorLayer);
			}
		};	
	}, [map, props.show]);

	return null;
};


export default VTLayer;