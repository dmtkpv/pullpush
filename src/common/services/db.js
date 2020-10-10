/*

    const db = await DB.open(database);

    db.add(store);
    db.add(store, item);
    db.add(store, [item, item, item]);

    db.delete(store);
    db.delete(store, id);
    db.delete(store, [id, id, id]);

    db.get(store);
    db.get(store, id);
    db.get(store, [id, id, id]);

    db.get(store, {
        start: 0,
        limit: 1000,
        sort: 'date',
        order: -1,
        filter: {
            'date[=]': 10,
            'date[>=]': 10,
            'date[<=]': 10,
            'date[>]': 10,
            'date[<]': 10,
        }

    });

    filed between|

*/

async function test () {

    const db = await PlainDB.open('test');

}


let db = null;

const error = message => ({
    title: 'Database error',
    message
})


function toArray (items) {
    if (!items) return [];
    if (Array.isArray(items)) return items;
    return [items];
}


export default {

    init (version, upgrade) {
        if (db) db.close();
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(CMS.options.repo, version);
            request.onupgradeneeded = _ => upgrade && upgrade(request.result);
            request.onerror = _ => reject(error(request.error));
            request.onsuccess = _ => {
                db = request.result;
                resolve(db);
            }
        })
    },

    has (store) {
        return db.objectStoreNames.contains(store);
    },

    list (store, {start, limit, sort}) {



    },

    async add (store, items) {

        items = toArray(items);

        if (!this.has(store)) {
            await this.init(db.version + 1, db => {
                db.createObjectStore(store, {keyPath: 'id'})
            })
        }

        const transaction = db.transaction(store, 'readwrite');

        // const request = transaction.objectStore(store);
        // items.forEach(item => request.add(item));
        // // return await request;



    }

}
