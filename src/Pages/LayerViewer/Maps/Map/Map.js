import React, { useRef, useState, useEffect } from "react"
import "./Map.css";
import MapContext from "./MapContext";
import * as ol from "ol";


// interface IProps {
// 	children: React.ReactNode;
// 	zoom: any; 
// 	center: any;
// }

const Map = ({ children, zoom, center }) => {
	const mapRef = useRef();
	const [map, setMap] = useState(null);

	// on component mount
	useEffect(() => {
		let options = {
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [
				// new control.Zoom({
				// 	zoomInId: "bplus",
				// 	zoomOutId: "bminus"
				// })
			],
			overlays: []
		};

		let mapObject = new ol.Map(options);
		mapObject.setTarget(mapRef.current);
		setMap(mapObject);

		return () => mapObject.setTarget(undefined);
	}, []);

	// zoom change handler
	useEffect(() => {
		if (!map) return;

		map.getView().setZoom(zoom);
	}, [zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return;

		map.getView().setCenter(center)
	}, [center])

	return (
		<MapContext.Provider value={{ map }}>
			{/* <div ref={mapRef} className="ol-map" style={{height: '91vh', width: '85vw', margin: '0'}}> */}
			<div ref={mapRef} className="ol-map" style={{height: '92vh', width: '100%', margin: '0'}}>
				{children}
			</div>
		</MapContext.Provider>
	)
}

export default Map;