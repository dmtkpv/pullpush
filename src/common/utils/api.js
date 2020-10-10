// ------------------
// Imports
// ------------------

import axios from 'axios'



// ------------------
// API
// ------------------

const API = {

    get authorized () {
        return !!axios.defaults.headers.common['Authorization'];
    },

    auth (token) {
        axios.defaults.headers.common['Authorization'] = token ? `bearer ${token}` : undefined;
        localStorage.setItem('token', token || '');
    },

    table (...tables) {

        console.log(tables);

        // const {
        //     username,
        //     repo,
        //     branch,
        //     databaseFolder
        // } = CMS.options;
        //
        // return axios({
        //     method: 'POST',
        //     url: `https://api.github.com/graphql`,
        //     data: {
        //         query: `query {
        //             repository(owner: "${username}", name: "${repo}") {
        //                 ${tables.map(table => `${table}: object(expression: "${branch}:${databaseFolder}/${table}.csv") {... on Blob {text}}`)}
        //             }
        //         }`
        //     }
        // })
    }

}



// -----------------------
// Restore authorization
// -----------------------

const token = localStorage.getItem('token');
token && API.auth(token);



// ------------------
// Exports
// ------------------

export default API;



