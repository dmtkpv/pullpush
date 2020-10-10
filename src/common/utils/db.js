// ------------------
// Imports
// ------------------
import Vue from 'vue'
import Papa from 'papaparse'
import API from '@/common/utils/api'
import Modal from '@/common/utils/modal'




let DB;


function test (error) {
    Modal.show('error', {
        title: 'IndexedDB error',
        message: error.message
    })
}

const alert = error => Modal.open('alert', {
    title: 'Database error',
    message: error.message
});

const init = () => new Promise((resolve, reject) => {
    resolve()
    // const request = indexedDB.open(CMS.options.repo);
    // request.onerror = _ => reject(request.error);
    // request.onsuccess = _ => resolve(request.result);
})




// ------------------
// Exports
// ------------------

export default {

    async init () {
        DB = await init().catch(error => {
            alert(error).then(_ => location.reload())
        })
        console.log(DB)

    },

    refresh () {
        connect().then(() => {
            console.log('connected')
        }).catch(error => {
            console.log(error)
        });


        return Promise.reject();
    },

    async list (table, filter) {
        db.get(table, filter).then(response => {

        })
    },

    item () {

    }

}
