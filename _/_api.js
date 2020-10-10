// ------------------
// Imports
// ------------------

import axios from 'axios'
import Config from '@/configs/api'


export default {

}



// ------------------
// Interceptors
// ------------------

axios.interceptors.response.use(

    response => {
        const transform = response.config.success || (data => data);
        return transform(response.data);
    },

    error => {
        if (axios.isCancel(error)) return Promise.race([]);
        return Promise.reject(error.message);
    }
)



// ------------------
// Abort request
// ------------------

let cancellers = [];

function abort (canceller) {
    const index = cancellers.indexOf(canceller);
    if (index === -1) return;
    cancellers[index].cancel();
    cancellers.splice(index, 1);
}



// ------------------
// API call
// ------------------

function API (...args) {

    const key = args.shift();

    if (!Config[key]) {
        return Promise.reject(new Error(`API('${key}') is not configured`));
    }

    let config = Config[key].apply(null, args);
    let canceller;

    if (!config.continues) {
        canceller = axios.CancelToken.source();
        config.cancelToken = canceller.token;
        cancellers.push(canceller);
    }

    let request = axios(config);
    request.canceller = canceller;

    const cb = abort.bind(null, canceller);
    request.then(cb).catch(cb);

    return request;
}



// ------------------
// Utils
// ------------------

API.abort = request => {
    if (request) abort(request.canceller);
    else cancellers.forEach(abort);
};

API.auth = value => {
    axios.defaults.headers.common['Authorization'] = value;
}

API.base = value => {
    axios.defaults.baseURL = value;
}

API.axios = axios;



// ------------------
// Exports
// ------------------

export default API;
