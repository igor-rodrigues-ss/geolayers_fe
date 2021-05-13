import * as React from 'react';
import TopBar from '../../components/TopBar';
import SideBar from './SideBar';
import MapWithLayers from './Maps/Map';


const LayerViewerPage: React.FC = () => {
  return (
    <>
      <TopBar />
        <div style={{display: 'flex'}}>  
        	<SideBar/> 
			<MapWithLayers/>
      </div>
    </>
  );
}

export default LayerViewerPage;
