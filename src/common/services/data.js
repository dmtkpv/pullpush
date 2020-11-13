import fields from '@/configs/fields'

const store = {
    fields,
    widgets: [],
    collections: []
}




const Commit = {

    delete: [],
    update: [],

    add () {

    }
}



const origin = 1;

function get (key) {
    return fetch(`${origin}/${key}.json`).then(response => {
        if (response.ok) return response.json();
        throw response;
    }).then(data => store[key] = data);
}




export default {

    init () {
        return Promise.all([
            get('collections'),
            get('forms')
        ])
    },

    addItem (key, item, commit = true) {
        return this.getFile(key).then(table => {
            table.push(item);
            commit && Commit.add(key);
        })
    },

    getFile (key) {
        if (store[key]) return Promise.resolve(store[key]);
        return get(key);
    },

    getItem (table, id) {
        return store[table].find(item => item.id === id);
    },

    getFields (key) {
        return store.fields.filter(view => view.table === key);
    },

    getBlank (fields) {
        return fields.reduce((item, field) => {
            item[field.key] = field.default;
            return item;
        }, {})
    }

}
