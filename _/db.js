// ------------------
// Imports
// ------------------
import Vue from 'vue'
import Papa from 'papaparse'
import API from '@/common/utils/api'



// ------------------
// Stores
// ------------------

let db = Vue.observable({});
let change = {};
let cache = getCache();



// ------------------
// Utils
// ------------------

function getCache () {
    const item = localStorage.getItem('cache');
    return item ? JSON.parse(item) : {};
}

function toArray (value) {
    return Array.isArray(value) ? value : [value];
}

function toJson (csv) {
    return csv && Papa.parse(csv, {header: true, dynamicTyping: true}).data;
}

function isPrimitive (value) {
    return value !== Object(value);
}



// ------------------
// Exports
// ------------------

export default {

    refresh () {
        const cached = Object.keys(cache);
        console.log(cached)
        // if (!cached.length) return this.pull(['_collections', '_fields']);
    },

    get (path, options) {
        // if ()

        // const [table, item] = path.
    },

    getTable (name) {

    },

    getItem (name) {

    },

    async pull (data) {
        const tables = toArray(data).filter(table => !db[table]);
        if (!tables.length) return Promise.resolve();
        const res = await API('pull', tables);
        Object.keys(res).forEach(table => Vue.set(db, table, toJson(res[table])));
    },

    // get (table, param) {
    //     if (!param) return db[table];
    //     if (isPrimitive(param)) return db[table].find(item => item.id === param);
    //     return db[table].filter(item => !Object.keys(param).some(key => param[key] !== item[key]));
    // },

    create (table, options) {
        toArray(options).forEach(data => {
            db[table].push(data);
        })
    },

    update (table, options) {

    },

    delete (table, ...options) {
        toArray(options).forEach(id => {
            db[table].slice(db[table].findIndex(item => item.id === id), 1);
        })
    }

}
