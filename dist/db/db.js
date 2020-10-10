window.DB = (() => {

    let db;

    return {

        refresh () {
            let request = indexedDB.open('test-repo');
            request.onsuccess

            request.onerror = () => {
                console.log(request.error)
            }
        },

        list (table, filter) {



        }

    }

})();
