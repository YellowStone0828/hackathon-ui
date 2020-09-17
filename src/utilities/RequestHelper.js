import axios from 'axios';




export function sendGetRequest(url, params, success, error ){
    axios.get(url,params).then(success).catch(error);
}

export function sendPostRequest(url, params, success, error ){
    axios.post(url,params).then(success).catch(error);
}