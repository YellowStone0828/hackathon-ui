import axios from 'axios';




export function sendGetRequest(url, params, ok,notOk, error ){
    axios.get(url,params).then((response)=>{
        if(response.status===200){
            ok(response.data);
        }else{
            notOk(response.status,response.statusText,response.data);
        }
    }).catch(error);
}

export function sendPostRequest(url, params, ok,notOk, error){
    axios.post(url,params).then((response)=>{
        if(response.status===200){
            ok(response.data);
        }else{
            notOk(response.status,response.statusText,response.data);
        }
    }).catch(error);
}