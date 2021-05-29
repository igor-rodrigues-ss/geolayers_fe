import * as React from 'react';
import { useState, useEffect } from 'react';
import TopBar from '../../components/TopBar';
import { URL_FILE_MODELS } from '../../urls';
import FileList from './FileList'
import axios from 'axios';


const FileModelsPage: React.FC = (): JSX.Element => {

    let [files, setFiles] = useState([])

    useEffect(
        () => {
            axios.get(
                URL_FILE_MODELS
            ).then(
                (response: any) => {
                    setFiles(response.data)
                }
            ).catch(
                (resp: any) => {
                    alert('Erro ao obter a lista de arquivos para download.')
                }
            )
        },
        []
    )

    return (
        <div>
            <TopBar />
            <FileList files={files} />
        </div>
    );
}


export default FileModelsPage;
