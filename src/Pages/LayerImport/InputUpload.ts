import styled from 'styled-components';


const InputUpload = styled.input`
    ::-webkit-file-upload-button {
        cursor: pointer;
        height: 40px;
        width: 200px;
        background: aliceblue;
        border: 1px solid darkgray;
        font-size: 14pt;
        border-radius: 5px;
        color: #0069D9;
        box-shadow: 5px 5px 5px darkgray;
        margin: 8px;
    }
`;


export default InputUpload;