import * as React from 'react';
import VTLayer from "./VectorTileLayer";
import { useSelector } from 'react-redux';


const Layers: React.FC = () => {

  let data = useSelector( (store: any) => store.allLayers) // TODO: tipar store corretamente
  
  data = data['data'] // TODO: Ajustar esse data

  return (
    <div>
	{
        Object.keys(data).map(
			(id: any, index: any) => <VTLayer id={id} show={data[id].show} zIndex={0}/>
        )
	}
    </div>
  )
}

export default Layers;