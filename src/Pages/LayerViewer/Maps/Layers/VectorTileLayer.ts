import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
// import OLVectorLayer from "ol/layer/Vector";
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import MVT from 'ol/format/MVT.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';


const VTLayer = ({ zIndex = 0 }) => {
	const { map } = useContext(MapContext);

	let style = new Style({
		stroke: new Stroke({
		  color: 'red',
		  width: 1
		})
	});

	let source = new VectorTileSource({
		format: new MVT(),
		url: 'http://localhost:8000/mvt/{z}/{x}/{y}.pbf'
		// url: 'http://sisfogogeo-api.dev.odt.ibama.gov.br/camadas/mvt/{z}/{x}/{y}.pbf'

		
	})

	useEffect(() => {
		if (!map) return;

		let vectorLayer = new VectorTileLayer({
			declutter: false,
			source: source,
			style: style
		});

		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(vectorLayer);
			}
		};	
	}, [map]);

	return null;
};

export default VTLayer;