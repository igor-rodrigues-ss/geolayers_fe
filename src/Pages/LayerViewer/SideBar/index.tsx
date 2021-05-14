import { useState, useEffect } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import LayerItem from './LayerItem';
import { setAllLayers } from '../actions';
import { Div } from './styled';
import { ILayers } from '../interfaces';
// import AlertError from 'material-ui/svg-icons/alert/error';

const URL = 'http://localhost:8000/layer'


const SideBar = (): JSX.Element => {
    
    let [layers, setLayers] = useState<ILayers>({} as ILayers);
    let dispatch = useDispatch()

    useEffect(() => {
        axios.get<ILayers>(URL).then(
            (response) => {
                setLayers(response.data)
                dispatch(
                    setAllLayers(response.data)
                )
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
                	(id: string, index: number) => <LayerItem
                        id={id}
                        nome={layers[id].nome}
                        show={layers[id].show}
                        color={layers[id].color}
                        fill={layers[id].fill}
					/>
              	)
            }
        </Div>
    );
  }


export default SideBar;