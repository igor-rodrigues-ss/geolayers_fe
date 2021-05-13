import Switch from '@material-ui/core/Switch';
import PublicIcon from '@material-ui/icons/Public';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';


interface IPropsLbl {
    nome: string;
    show: boolean;
    id: string;
}

const Div = styled.div`
    display: flex;
    background: #727272;
    margin: 8px 0;
    padding: 8px;
    border-radius: 5px;
    justify-content: space-between;
`

const LayerItem: React.FC<IPropsLbl> = (props: IPropsLbl) => {
    let dispatch = useDispatch()

    useEffect(() => {
      dispatch({type: 'ALL_LAYER', data: {id: props.id, show: false}})
    }, [])
    
    function onChangeChecked(e: any){
      dispatch({type: 'ALL_LAYER', data: {id: props.id, show: e.target.checked}})
    }
  
    return (
        <Div>
            <div style={{display: 'flex', margin: '6px'}}>
                <PublicIcon style={{color: 'white'}} />
                
                <div>&nbsp;</div><div>&nbsp;</div>
                
                <h6 style={{color: '#f9f9f9'}}>{props.nome}</h6>
            </div>
  
            <Switch
                onChange={onChangeChecked}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
      </Div>
    );
  }
  

export default LayerItem;