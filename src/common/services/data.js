import idb from '@karpovsystems/idb'
import API from '@/common/services/api'
import Default from '@/configs/tables'


let db = null;

export default {

    db: null,

    async refresh () {
        db = await idb(CMS.options.repo);
        const cached = db.stores();
        if (cached.length) {
            // get commits
            // delete if s commit exists
        }
        else {
            const {_fields, _collections} = await API.table('_fields', '_collections');
            await db.add('_collections', _collections);
            await db.add('_fields', _fields || Default._fields);
        }
    },

    async list (table, options = {}) {
        const data = await db.get(table);
        return data;
    }

}
