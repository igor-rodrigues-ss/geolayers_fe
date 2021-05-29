import * as React from 'react';
import { urlDownloadFileModel } from '../../urls';
import axios from 'axios';

interface IFileItem {
    name: string;
}


const FileItem: React.FC<IFileItem> = (props: IFileItem): JSX.Element => {

    const downloadFile = (e: any) => {
        window.open(urlDownloadFileModel(props.name))
    }

    return (
        <li style={{fontSize: '16pt'}}>
            <a href={'#'}onClick={downloadFile}>{props.name}</a>
        </li>
    );
}


export default FileItem