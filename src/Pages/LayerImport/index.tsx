import TopBar from '../../components/TopBar';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { useState } from 'react';


function asyncAction(formData: any) {
    return (dispatch: any) => {
        axios.post('http://localhost:8000/import', formData).then(
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
        <div>
            <TopBar />
            <h1>Import</h1>
            <input type="file" onChange={onFileChange}></input>
            <p></p>
            <button onClick={importLayer}>Enviar</button>
        </div>
    );
}


export default LayerImportPage;