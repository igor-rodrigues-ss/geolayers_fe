import React, { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import MVT from 'ol/format/MVT.js';
import {Fill, Stroke, Style } from 'ol/style';
import { urlMVT } from '../../../../urls';


interface IProps {
	id: string;
	show: boolean;
	zIndex: number;
	color: string;
	fill: boolean;
}


const VTLayer: React.FC<IProps> = (props: IProps) => {
	
	const { map } = useContext(MapContext);
	let url = urlMVT(props.id)

	let fill;

	if (props.fill){
		fill = new Fill({
			color: props.color, 
		})
	}

	let style = new Style({
		stroke: new Stroke({
		  color: props.color, width: 1
		}),
		fill: fill
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