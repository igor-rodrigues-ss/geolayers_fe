import * as React from 'react';
import FileItem from './FileItem';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';


interface IFileList {
    files: string[];
}


const ULContainer = styled.div`
    margin: 12px 0 0 0;
`

const ListContainer = styled.div`
    width: 300px;
    margin: 80px auto 0 auto;
    padding: auto;
`

const FileList: React.FC<IFileList> = (props: IFileList): JSX.Element => {
    return (
        <ListContainer> 
            <h1>Arquivos Modelo</h1>
            <Divider/>
            <ULContainer>
                <ul>
                    {
                        props.files.map( (fname: string) => <FileItem name={fname} /> )
                    }
                </ul>
            </ULContainer>
        </ListContainer>
    );
}


export default FileList;