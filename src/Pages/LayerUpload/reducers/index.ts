import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR } from '../actions';


const INITIAL_STATE = {}


function uploadFile(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case UPLOAD_FILE_SUCCESS:
            alert('SUCESSO')
            return {...state};

        case UPLOAD_FILE_ERROR:
            alert('Err')
            return {...state};
        
        default:
            return {...state};
    }
}

export default uploadFile;