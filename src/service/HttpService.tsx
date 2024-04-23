

// I have use npm axios package to make HTTP requests.
// also I use axios to  interoperates with tomato api.
// also axios help to convert response to JSON.

// I had used this HTTPService in a my Diploma project. 
// so I use this service in this because this is better way to make HTTP requests.


import axios from 'axios';

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

const _axios = axios.create();
const baseUrl: string | undefined = "http://localhost:8080";

const getBlob = (path = "") => {
    let url = baseUrl + path;
    return _axios.get(url, {
        method: 'GET',
        responseType: 'blob',
    });
}

const get = (path = "") => {
    let url = baseUrl + path;
    return _axios.get(url,{
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    });
}

const getGame = (path = "") => {
    return _axios.get(path);
}

const post = (path = "", payload: any) => {
    let url = baseUrl + path;
    return _axios.post(url, payload, {
        headers: {
            'content-type': 'application/json'
        }
    });
}

const getAxios = () => {
    return axios;
}

const getAxiosClient = () => _axios;

const HttpService = {
    HttpMethods,
    getAxiosClient,
    getBlob,
    get,
    post,
    getAxios,
    getGame
};


export default HttpService;