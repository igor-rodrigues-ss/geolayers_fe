import { useState, useEffect } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import LayerItem from './LayerItem';
import styled from 'styled-components';


const Div = styled.div`
  width: 400px;
  background: #343a40;
  padding: 8px;
`

const URL = 'http://localhost:8000/layer'

const SideBar = () => {
    
    let [layers, setLayers] = useState<any>({});
    let dispatch = useDispatch()

    useEffect(() => {
        axios.get(URL).then(
            (data: any) => {
                setLayers(data['data'])
                dispatch({type: 'ALL_LAYER', data: data['data']})
            }
        ).catch(
            (err) => {
                alert(JSON.stringify(err))
                alert('ERRO busca')
            }
        )
      }, []);

    return (
        <Div>
            {
              	Object.keys(layers).map(
                	(id: any, index: any) => <LayerItem
						nome={layers[id].nome} id={id} show={layers[id].show}
					/>
              	)
            }
        </Div>
    );
  }


export default SideBar;