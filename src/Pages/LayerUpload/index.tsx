import TopBar from '../../components/TopBar';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { uploadFileAction } from './actions';
import { DivUpload, InputUpload, DivBody, SubTitle} from './styled';
import Switch from '@material-ui/core/Switch';
import { SliderPicker } from 'react-color';


const InputColor = (props: any) => {

    return (
        <div style={{textAlign: 'center', margin: '28px 0'}}>
            <b>Cor: </b>
            <input type="text"
                onChange={(e: any) => props.setColor(e.target.value)} value={props.color}
                disabled
            />
            <p></p>
            <div>
                <SliderPicker
                   color={props.color} onChange={(c) => props.setColor(c.hex)}
                />
            </div>
        </div>
        
        
    )
}


const LayerUploadPage = (): JSX.Element => {
    let distpach = useDispatch();
    let [file, setFile] = useState<File | null>(null);
    let [color, setColor]: any = useState('#36c');
    let [fill, setFill]: any = useState(false);


    const uploadLayer = (e: React.MouseEvent<HTMLInputElement>): void => {
        const formData = new FormData();
        
        if (file == null) {
            alert('Por favor selecione um arquivo')
        } else {
            formData.append("file", file, file.name);
            formData.append("color", color);
            formData.append("fill", fill);
            distpach(uploadFileAction(formData))
        }
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFile(e.target!.files![0]);
    };

    const onFillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFill(e.target.checked)
    }

    return (
        <div style={{background: '#f9f9f9', height: '100vh'}}>
            <TopBar />
            
            <DivBody>                
                <DivUpload>
                    <h2>Upload de Arquivos</h2>
                    <SubTitle>(shapefile, geojson)</SubTitle>
                    <InputUpload type="file" onChange={onFileChange} />

                    <InputColor color={color} setColor={setColor} />
                    
                    <b>Preenchimento:</b> <Switch
                        onChange={onFillChange}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />

                    <p></p>

                    <Button variant="primary" onClick={uploadLayer}>Enviar Arquivo</Button>
                </DivUpload>         
            </DivBody>
        </div>
    );
}


export default LayerUploadPage;