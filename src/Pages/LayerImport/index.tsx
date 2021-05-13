import TopBar from '../../components/TopBar';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { useState } from 'react';
import InputUpload from './InputUpload';
import Button from 'react-bootstrap/Button';


function asyncAction(formData: any) {
    return (dispatch: any) => {
        axios.post('http://localhost:8000/layer/upload', formData).then(
            (data: any) => {
                dispatch({type: 'IMPORT_SUCCESS', data: data})
            }
        ).catch(
            (err) => {
                dispatch({type: 'IMPORT_ERROR', data: err})
            }
        )
    }
}

const LayerImportPage = () => {
    let distpach = useDispatch();
    const [file, setFile]: any = useState(null)

    const importLayer = (e: any) => {
        const formData = new FormData();
        if (file == null) {
            alert('Por favor selecione um arquivo')
        } else {
            formData.append("file", file, file.name);
            distpach(asyncAction(formData))
        }
    }

    const onFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };

    return (
        <div style={{background: '#f9f9f9', height: '100vh'}}>
            <TopBar />
            <div style={{textAlign: 'center', display: 'flex', justifyContent: 'space-around'}}>                
                <div style={{margin: '5% 0 0 0', background: 'white', boxShadow: '5px 5px 10px lightgray', borderRadius: '5px', border: '1px solid lightgray', width: '500px',  padding: '32px', zIndex: 2000}}>
                    <h2>Upload de Arquivos</h2>
                    <h4 style={{color: 'gray'}}>(shapefile, geojson)</h4>
                    <div style={{margin: '5%'}}></div>
                    <InputUpload type="file" onChange={onFileChange} />
                    <p></p>
                    <Button variant="primary" onClick={importLayer}>Enviar Arquivo</Button>
                </div>            
            </div>
        </div>
    );
}


export default LayerImportPage;