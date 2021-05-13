import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
// import OLVectorLayer from "ol/layer/Vector";
import VectorTileLayer from 'ol/layer/VectorTile.js';
import VectorTileSource from 'ol/source/VectorTile.js';
import MVT from 'ol/format/MVT.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { useSelector } from 'react-redux';


const VTLayer = ({ id = '', nome = '', show = false, zIndex = 0 }) => {
	
	const { map } = useContext(MapContext);
	// alert(show)
	// console.log(id, show, '<<<<')

	// const data = useSelector(
	// 	(store: any) => {
	// 		if (store.showMVT.id == id && store.showMVT.show) {
	// 			return store.showMVT;
	// 		}
	// 		return {id: '', show: false};
	// 	}
	// )

	// alert(data.show)
	
	// console.log(data)
	let url = `http://localhost:8000/layer/${id}/mvt/{z}/{x}/{y}.pbf`;

	// if (data.id == id && data.show){
	// 	show = true
	// }

	// if (data.id == id && !data.show) {
	// 	show = false;
	// }
		

	let style = new Style({
		stroke: new Stroke({
		  color: 'red',
		  width: 1
		})
	});

	let source = new VectorTileSource({
		format: new MVT(),
		url: url
		// url: 'http://sisfogogeo-api.dev.odt.ibama.gov.br/camadas/mvt/{z}/{x}/{y}.pbf'

		
	})

	useEffect(() => {
		if (!map || !show) return;

		let vectorLayer = new VectorTileLayer({
			declutter: false,
			source: source,
			style: style
		});

		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);

		return () => {
			if (map || !show) {
				map.removeLayer(vectorLayer);
			}
		};	
	}, [map, show]);

	return null;
};

// interface MyState {
// 	map: any;
// 	show: any;
// 	id: number;
// }

// class VTLayer extends React.Component {

// 	state: MyState = {
// 		map: undefined,
// 		show: false,
// 		id: 0
// 	};
		
// 	constructor(props: any){
// 		super(props);
// 		const { map } = useContext(MapContext);
// 		this.setState({map, id: props.id})
// 	}

// 	componentDidMount(){
		
// 	}

// 	shouldComponentUpdate() {
// 		const data = useSelector( (store: any) => store.showMVT);
// 		console.log(data)

// 		if (data.id != this.state.id) {
// 			return false;
// 		}

// 		this.state.show = data.show;
// 		return true;
// 	}

// 	render() : any{
// 		let url = `http://localhost:8000/layer/${id}/mvt/{z}/{x}/{y}.pbf`;

// 		let style = new Style({
// 			stroke: new Stroke({
// 			  color: 'red',
// 			  width: 1
// 			})
// 		});
	
// 		let source = new VectorTileSource({
// 			format: new MVT(),
// 			url: url
// 			// url: 'http://sisfogogeo-api.dev.odt.ibama.gov.br/camadas/mvt/{z}/{x}/{y}.pbf'
			
// 		})

// 		if (!this.state.map || !this.state.show) return;

// 		let vectorLayer = new VectorTileLayer({
// 			declutter: false,
// 			source: source,
// 			style: style
// 		});

// 		this.state.map.addLayer(vectorLayer);
// 		vectorLayer.setZIndex(this.props.zIndex);

		
// 		if (this.state.map || this.state.show == false) {
// 			this.state.map.removeLayer(vectorLayer);
// 		}

// 		return ;
// 	}
// }

// const VTLayer = ({ id = 0, nome = '', zIndex = 0 }) => {
	
	
// };

export default VTLayer;