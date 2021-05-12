import React from 'react';
import Map from './Maps/Map';
import { fromLonLat } from 'ol/proj';
import TileLayer from "./Maps/Layers/TileLayer";
import VTLayer from "./Maps/Layers/VectorTileLayer";
import { osm } from "./Maps/Source";
import Switch from '@material-ui/core/Switch';
import PublicIcon from '@material-ui/icons/Public';
import { ZoomIn, ZoomOut } from './Maps/ZoomButtons';
import TopBar from '../../components/TopBar';


const MapContainer: React.FC = () => {
  return (
    <Map center={fromLonLat([-94.9065, 38.9884])} zoom={2}>
      <ZoomIn/>
      <ZoomOut />
      <TileLayer source={osm()} />
      <VTLayer />
    </Map>
  );
}


const LabelLyr: React.FC = () => {
  return (
    <div style={{display: 'flex', background: '#727272', margin: '8px 0', padding: '8px', borderRadius: '5px', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', margin: '6px'}}>
        <PublicIcon style={{color: 'white'}} />
        <div>&nbsp;</div><div>&nbsp;</div>
        <h6 style={{color: '#f9f9f9'}}>Municípios</h6>
      </div>

      <div>
        <Switch
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
    </div>
  );
}


function LayerViewerPage() {
  return (
    <div>
      <TopBar />
        <div style={{display: 'flex'}}>  
          <div style={{width: '400px', background: '#343a40', padding: '8px'}}>
            
              <LabelLyr />
              <LabelLyr />
              <LabelLyr />
            
          </div>

          <div style={{width: '100vw'}}>
            <MapContainer/>
          </div>
      </div>
    </div>
    
  );
}

export default LayerViewerPage;
