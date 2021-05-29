
const API_URL = process.env.REACT_APP_API_URL;
const URL_LAYER = `${API_URL}/layer`
const URL_LAYER_UPLOAD = `${URL_LAYER}/upload`;
const URL_TASKS = `${API_URL}/tasks`;
const URL_FILE_MODELS = `${API_URL}/file-models`;


function urlMVT(id: string){
    return `${URL_LAYER}/${id}/mvt/{z}/{x}/{y}.pbf`;
}


function urlDownloadFileModel(fname: string) {
    return `${URL_FILE_MODELS}/${fname}`;
}


export {
    URL_LAYER,  URL_LAYER_UPLOAD, URL_TASKS, URL_FILE_MODELS,
    urlMVT, urlDownloadFileModel
}