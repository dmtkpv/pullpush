const DB = {};


// nav

export const a = {

    async mounted () {
        this.collections = await DB.list('collections');
        this.collections.sort();
    }

}


// collection

export const b = {

    computed: {

        sorted () {
            return this.collection.sort(this.sort, this.order);
        }

    },

    async mounted () {
        this.collection = await Store.list('projects');
        this.error = this.collection.error;
    }

}

// collection.item

export const c = {

    async mounted () {
        this.item = await DB.item('projects', id);
        this.error = this.item.error;
    }

}


// collection.item.create

export const d = {

    async mounted () {
        this.collection = await DB.item('collections', id);
        this.fields = await DB.list('fields', { table: 'projects' });
        this.error = this.collection.error || this.fields.error;
    }

}


// settings.collections
// settings.collections.item

DB.get('projects');
DB.get('projects', { id: 1 });
DB.get('projects', { table: 'collections' });

DB.get('projects');

