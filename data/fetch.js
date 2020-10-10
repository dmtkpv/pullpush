/*

I need collections.csv & fields.csv

Checking fields.csv...

*/

    const db = {};
    const toPush = {};

    const defaults = {
        fields: [
            {
                "id": 1,
                "collection": "collections",
                "name": "id",
                "widget": "text",
                "options": ""
            },
            {
                "id": 3,
                "collection": "collections",
                "name": "single",
                "widget": "switch",
                "options": ""
            },
            {
                "id": 4,
                "collection": "collections",
                "name": "hidden",
                "widget": "switch",
                "options": ""
            },
            {
                "id": 5,
                "collection": "collections",
                "name": "fields",
                "widget": "m2m",
                "options": {
                    "collection": "fields",
                    "display": "name"
                }
            }
        ]
    }


    const lastSync = localStorage.getItem('cachedAt');
    const cached = localStorage.getItem('fields');


    function refresh () {
        if (cached) {
            fetch('commits').then(response => {
                // remove expired cache
                // fetch collection if expired

            })
        }
        else {
            const response = fetch('fields.csv');
            if (response) {
                db.fields = response;
                localStorage.setItem('fields', response);
                lastSync.fields = Date.now();
                localStorage.setItem('lastSync', lastSync);

            }
            else {
                db.fields = defaults.fields;
            }
        }
    }

    function createCollectionField (fields) {
        fields.forEach(field => db.fields.push(field));
        db.collections.push(fields);
        toPush.fileds = true;
        toPush.collections = true;
    }

    function push () {
        fetch(toPush).then(() => {
            // to push means changed collections
            lastSync.toPush = Date.now();
            localStorage.setItem('lastSync', lastSync);
            localStorage.setItem('toPush', toPush);
        })
    }






