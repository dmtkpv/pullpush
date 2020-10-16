import Papa from 'papaparse'
import idb from '@karpovsystems/idb'
import API from '@/common/services/api'
import Tables from '@/configs/tables'


function toJSON (csv) {
    return Papa.parse(csv, {
        header: true,
        dynamicTyping: true
    }).data;
}


let db = null;

export default {

    db: null,

    async refresh () {
        // db = await idb(CMS.options.repo);
        // const cached = db.stores();
        // if (cached.length) {
        //     // get commits
        //     // delete if s commit exists
        // }
        // else {
        //     const {_fields, _collections} = await API.table('_fields', '_collections');
        //
        //     console.log(_fields, toJSON(_fields));
        //
        //     await db.add('_fields', _fields ? toJSON(_fields) : Default._fields);
        //
        //
        //     await db.add('_collections.csv', _collections && toJSON(_fields));
        // }
    },

    async refresh2 () {
        db = await idb(CMS.options.repo);
        if (!db.hasStore('_fields.csv')) await db.add('_fields.csv', Tables._fields);
        if (!db.hasStore('_collections.csv')) await db.add('_collections.csv', Tables._collections);
    },

    async list (table, options = {}) {
        return await db.get(table);
    }

}
