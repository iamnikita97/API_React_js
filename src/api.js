import axios from 'axios';

const baseURL = 'http://139.59.84.117/cesanobike/api';

const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', }
})


function setDataInLocalStorage(dataKey, value) {

    const { localStorage } = window;
    try {
        if (typeof value === "object") {
            value = JSON.stringify(value);
        }
        localStorage.setItem(dataKey, value);
    }
    catch (error) {
        console.error(error.message);
    }
}

function getDataInLocalStorageByKey(dataKey) {

    const { localStorage } = window;
    var value = localStorage.getItem(dataKey)
    // assume it is an object that has been stringified
    if (value[0] === "{") {
        value = JSON.parse(value);
    }
    return value;
}

function getAccessTokenFromLocalStorage() {
    const { localStorage } = window;
    return localStorage.getItem('cesan_obike_token');
}

function setAccessTokenFromLocalStorage(token) {
    const { localStorage } = window;
    try {
        localStorage.setItem('cesan_obike_token', token);
    }
    catch (error) {
        console.error(error.message);
    }
}

function get(url) {
    instance.defaults.headers.common['Authorization'] = "Bearer " + getAccessTokenFromLocalStorage();
    return instance.get(url)
        .then(response => {
            if (response.status === 200) {
                return response.data
            }
        })
        .catch(error => {
            const { message } = error;
            return ({
                status: false,
                message
            })
        })
}

function post(url, params) {
    instance.defaults.headers.common['Authorization'] = "Bearer " + getAccessTokenFromLocalStorage();
    return instance.post(url, params)
        .then(response => {
            if (response.status === 200) {
                return response.data
            }
        })
        .catch(error => {
            const { message } = error;
            return ({
                status: false,
                message
            })
        })
}

export {
    get,
    post,
    getAccessTokenFromLocalStorage,
    setAccessTokenFromLocalStorage,
    getDataInLocalStorageByKey,
    setDataInLocalStorage
}