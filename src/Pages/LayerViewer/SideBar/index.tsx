import Switch from '@material-ui/core/Switch';
import PublicIcon from '@material-ui/icons/Public';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';

interface IPropsLbl {
    nome: string;
    show: boolean;
    id: string;
}

const LabelLyr: React.FC<IPropsLbl> = (props: IPropsLbl) => {
    let [checked, setChecked] = useState(false)
    let dispatch = useDispatch()

    useEffect(() => {
      dispatch({type: 'ALL_LAYER', data: {id: props.id, show: checked}})
    }, [])
    
    

    function onChangeChecked(e: any){
      dispatch({type: 'ALL_LAYER', data: {id: props.id, show: e.target.checked}})
    }
    // const onChangeChecked = null;

    return (
      <div style={{display: 'flex', background: '#727272', margin: '8px 0', padding: '8px', borderRadius: '5px', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', margin: '6px'}}>
          <PublicIcon style={{color: 'white'}} />
          <div>&nbsp;</div><div>&nbsp;</div>
          <h6 style={{color: '#f9f9f9'}}>{props.nome}</h6>
        </div>
  
        <div>
          <Switch

            onChange={onChangeChecked}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </div>
    );
  }
  

  
const SideBar = () => {
    
    let [layers, setLayers] = useState<any>({});
    let dispatch = useDispatch()

    useEffect(() => {
        
        axios.get('http://localhost:8000/layer').then(
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

      // <LabelLyr nome={layers[index].nome} id={id} show={layers[index].show} />
    return (
        <div style={{width: '400px', background: '#343a40', padding: '8px'}}>
            {/* {layers.map( (item: IPropsLbl ) => <LabelLyr nome={item.nome} id={item.id} /> )} */}
            {
              Object.keys(layers).map(
                (id: any, index: any) => <LabelLyr nome={layers[id].nome} id={id} show={layers[id].show}/>
              )
            }
        </div>
    );
  }


export default SideBar;