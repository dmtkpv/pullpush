
import API from '@/common/services/api'



export default {

    async refresh () {
        // const db = await DB.init();
        // // const cached = db.objectStoreNames.length;
        // const cached = false;
        // if (cached) {
        //
        // }
        // else {
        //     const {fields, _collections} = await API.table('fields', 'collections');
        //     console.log(fields)
        //     DB.add('_fields', fields).catch(error => {
        //         console.log(error)
        //     })
        //
        //     // if ()
        //     // console.log(fields);
        //
        // }

        // const stores = DB.getStores();
    },

    async list (table, options = {}) {
        const data = await DB.list(table, options);
    }

}
