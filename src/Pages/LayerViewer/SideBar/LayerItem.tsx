import Switch from '@material-ui/core/Switch';
import PublicIcon from '@material-ui/icons/Public';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeLayerVisibility } from '../actions';


interface IPropsLbl {
    nome?: string | null;
    show: boolean;
    id: string;

    color: string;
    fill: boolean;
}

const Div = styled.div`
    display: flex;
    background: #727272;
    margin: 8px 0;
    padding: 8px;
    border-radius: 5px;
    justify-content: space-between;
`

const LayerItem: React.FC<IPropsLbl> = (props: IPropsLbl): JSX.Element => {
    let dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			changeLayerVisibility(
                {id: props.id, show: false, color: props.color, fill: props.fill} // TODO: customizar este objeto para enviar somente o id e SHOW
            )
		)
	}, [])
    
    const onChangeChecked = (e:  React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(
			changeLayerVisibility(
                {id: props.id, show: e.target.checked, color: props.color, fill: props.fill} // TODO: customizar este objeto para enviar somente o id e SHOW
            )
		)
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