import React from 'react';
import Map from './Maps/Map';
import { fromLonLat } from 'ol/proj';
import TileLayer from "./Maps/Layers/TileLayer";
import VTLayer from "./Maps/Layers/VectorTileLayer";
import { osm } from "./Maps/Source";

import { ZoomIn, ZoomOut } from './Maps/ZoomButtons';
import TopBar from '../../components/TopBar';
import SideBar from './SideBar';

import { useSelector } from 'react-redux';


const Layers = () => {

  let data = useSelector( (store: any) => store.allLayers)
  
  data = data['data']

  return (
    <div>
	{
        Object.keys(data).map(
			(id: any, index: any) => <VTLayer id={id} nome={data[id].nome} show={data[id].show}/>
        )
	}
    </div>
  )
}



const MapContainer: React.FC = () => {

  return (
    <Map center={fromLonLat([-94.9065, 38.9884])} zoom={2}>
      <ZoomIn/>
      <ZoomOut />
      <TileLayer  source={osm()} />
      <Layers />
    </Map>
  );
}


function LayerViewerPage() {
  return (
    <div>
      <TopBar />
        <div style={{display: 'flex'}}>  
          <SideBar/>

          

          <div style={{width: '100vw'}}>
            <MapContainer/>
          </div>
      </div>
    </div>
    
  );
}

export default LayerViewerPage;
