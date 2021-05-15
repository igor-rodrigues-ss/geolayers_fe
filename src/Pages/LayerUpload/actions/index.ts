import axios from 'axios';
import { Dispatch } from 'redux';


const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
const UPLOAD_FILE_ERROR = 'UPLOAD_FILE_ERROR';

const URL = 'http://localhost:8000/layer/upload';


function uploadFileAction(formData: FormData) {
    return (dispatch: Dispatch) => {
        axios.post(URL, formData).then(
            (data: any) => {
                dispatch({type: UPLOAD_FILE_SUCCESS, data: data})
            }
        ).catch(
            (err) => {
                dispatch({type: UPLOAD_FILE_ERROR, data: err})
            }
        )
    }
}


export {
    uploadFileAction, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR
};
