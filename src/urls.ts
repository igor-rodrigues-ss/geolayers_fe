



const API_URL = process.env.REACT_APP_API_URL;
const URL_LAYER = `${API_URL}/layer`
const URL_LAYER_UPLOAD = `${URL_LAYER}/upload`;
const URL_TASKS = `${API_URL}/tasks`;

function urlMVT(id: string){
    return `${URL_LAYER}/${id}/mvt/{z}/{x}/{y}.pbf`;
}

export {
    URL_LAYER,  URL_LAYER_UPLOAD, URL_TASKS, urlMVT
}