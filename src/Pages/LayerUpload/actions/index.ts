import axios from 'axios';
import { Dispatch } from 'redux';

import { URL_LAYER_UPLOAD } from '../../../urls';
import { handleAPIError } from '../../../utils';

const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
const UPLOAD_FILE_ERROR = 'UPLOAD_FILE_ERROR';


function uploadFileAction(formData: FormData) {
    return (dispatch: Dispatch) => {
        axios.post(URL_LAYER_UPLOAD, formData).then(
            (data: any) => {
                dispatch({type: UPLOAD_FILE_SUCCESS, data: data})
            }
        ).catch(
            (err) => {
                handleAPIError(
                    err, () => {
                        dispatch({type: UPLOAD_FILE_ERROR, data: err})
                    }
                )
                
            }
        )
    }
}


export {
    uploadFileAction, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR
};
