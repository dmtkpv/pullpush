import DB from './db'
import API from './api'

export default {

    refresh () {

    },

    async list (table, filter) {
        const result = await DB.get('tables', table);
    },

    async item (table, id) {
        const item = await DB.get('tables', table);
        const fields = await this.list('fields', { table });
    }

}
