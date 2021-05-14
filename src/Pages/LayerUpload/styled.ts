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
        margin: 8px 8px 30px 8px;
    }
`;

const DivUpload = styled.div`
    margin: 5% 0 0 0;
    background: white;
    box-shadow: 5px 5px 10px lightgray;
    border-radius: 5px;
    border: 1px solid lightgray;
    width: 500px;
    padding: 32px;
    z-index: 2000;
`;

const DivBody = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-around;
`;

const SubTitle = styled.h4`
    color: gray;
    margin: 0 0 5% 0;
`;

export {
    DivUpload, InputUpload, DivBody, SubTitle
}