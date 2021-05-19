import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERROR } from '../actions';


const INITIAL_STATE = {}


function uploadFile(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case UPLOAD_FILE_SUCCESS:
            alert('Camada inserida na file de upload!')
            return {...state};

        case UPLOAD_FILE_ERROR:
            alert(action.data.response.data.detail.msg)
            return {...state};
        
        default:
            return {...state};
    }
}

export default uploadFile;